import { GetObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3'
import { bucket, r2 } from './r2-client.js'

const manifestResponse = await r2.send(
  new GetObjectCommand({ Bucket: bucket, Key: 'manifest.json' }),
)
const manifest = JSON.parse(await manifestResponse.Body.transformToString())
const keys = ['manifest.json']

for (const asset of Object.values(manifest)) {
  keys.push(asset.original, ...Object.values(asset.variants))
}

const uniqueKeys = [...new Set(keys)]
const failures = []
const concurrency = 16

for (let index = 0; index < uniqueKeys.length; index += concurrency) {
  await Promise.all(
    uniqueKeys.slice(index, index + concurrency).map(async (key) => {
      try {
        const object = await r2.send(
          new HeadObjectCommand({ Bucket: bucket, Key: key }),
        )
        if (!object.ContentLength) failures.push(`${key}: empty object`)
      } catch (error) {
        failures.push(`${key}: ${error.name}`)
      }
    }),
  )
}

if (failures.length) {
  throw new Error(`R2 verification failed:\n${failures.join('\n')}`)
}

console.log(`Verified ${Object.keys(manifest).length} source images.`)
console.log(`Verified ${uniqueKeys.length} total R2 objects.`)
