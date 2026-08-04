import { GetObjectCommand } from '@aws-sdk/client-s3'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { bucket, r2 } from './r2-client.js'

const manifestResponse = await r2.send(
  new GetObjectCommand({ Bucket: bucket, Key: 'manifest.json' }),
)
const manifest = JSON.parse(await manifestResponse.Body.transformToString())
const sourceRoot = path.join(process.cwd(), 'media-source')
const entries = Object.entries(manifest)
let downloaded = 0
const concurrency = 6

async function download([assetId, asset]) {
  const extension = path.extname(asset.original)
  const destination = path.join(sourceRoot, ...assetId.split('/')) + extension
  const response = await r2.send(
    new GetObjectCommand({ Bucket: bucket, Key: asset.original }),
  )

  await mkdir(path.dirname(destination), { recursive: true })
  await writeFile(destination, await response.Body.transformToByteArray())
  downloaded += 1
  console.log(`[${downloaded}/${entries.length}] ${assetId}${extension}`)
}

for (let index = 0; index < entries.length; index += concurrency) {
  await Promise.all(entries.slice(index, index + concurrency).map(download))
}

console.log(`Downloaded ${downloaded} originals to ${sourceRoot}.`)
