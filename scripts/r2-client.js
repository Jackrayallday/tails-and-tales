import { S3Client } from '@aws-sdk/client-s3'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.r2.local', quiet: true })

const requiredVariables = [
  'R2_ACCOUNT_ID',
  'R2_ACCESS_KEY_ID',
  'R2_SECRET_ACCESS_KEY',
]
const missingVariables = requiredVariables.filter((name) => !process.env[name])

if (missingVariables.length) {
  throw new Error(`Missing ${missingVariables.join(', ')} in .env.r2.local.`)
}

export const bucket = process.env.R2_BUCKET_NAME || 'tails-and-tales-assets'
export const r2 = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
})
