import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.r2.local' })

const requiredVariables = [
  'R2_ACCOUNT_ID',
  'R2_ACCESS_KEY_ID',
  'R2_SECRET_ACCESS_KEY',
]
const missingVariables = requiredVariables.filter((name) => !process.env[name])
const dryRun = process.argv.includes('--dry-run')

if (!dryRun && missingVariables.length) {
  throw new Error(
    `Missing ${missingVariables.join(', ')} in .env.r2.local. Copy .env.r2.example and add your R2 credentials.`,
  )
}

const bucket = process.env.R2_BUCKET_NAME || 'tails-and-tales-assets'
const uploadRoot = path.join(process.cwd(), '.cache', 'r2-assets')
const client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
})

async function findFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name)
      return entry.isDirectory() ? findFiles(fullPath) : [fullPath]
    }),
  )
  return nested.flat()
}

function contentType(file) {
  const extension = path.extname(file).toLowerCase()
  if (extension === '.webp') return 'image/webp'
  if (extension === '.png') return 'image/png'
  if (extension === '.jpg' || extension === '.jpeg') return 'image/jpeg'
  if (extension === '.json') return 'application/json'
  return 'application/octet-stream'
}

const files = await findFiles(uploadRoot)
let uploaded = 0

async function upload(file) {
  const key = path.relative(uploadRoot, file).split(path.sep).join('/')
  if (dryRun) {
    console.log(`[dry run] ${key}`)
    return
  }

  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: await readFile(file),
      ContentType: contentType(file),
      CacheControl: key.startsWith('artworks/')
        ? 'public, max-age=31536000, immutable'
        : 'private, max-age=0, no-store',
    }),
  )
  uploaded += 1
  console.log(`[${uploaded}/${files.length}] ${key}`)
}

const concurrency = 6
for (let index = 0; index < files.length; index += concurrency) {
  await Promise.all(files.slice(index, index + concurrency).map(upload))
}

console.log(
  dryRun
    ? `Dry run complete: ${files.length} objects would be uploaded.`
    : `Uploaded ${uploaded} objects to ${bucket}.`,
)
