import { cp, mkdir, readdir, rm, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const projectRoot = process.cwd()
const assetsRoot = path.join(projectRoot, 'media-source')
const outputRoot = path.join(projectRoot, '.cache', 'r2-assets')
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp'])
const groups = [
  { source: path.join(assetsRoot, 'artworks'), prefix: 'artworks', recursive: true },
  { source: path.join(assetsRoot, 'breeds'), prefix: 'breeds', recursive: true },
  { source: path.join(assetsRoot, 'collections'), prefix: 'collections', recursive: true },
  { source: assetsRoot, prefix: 'site', recursive: false },
]
const variants = [
  { name: 'thumb', width: 480, quality: 76 },
  { name: 'card', width: 900, quality: 80 },
  { name: 'detail', width: 1600, quality: 84 },
]

async function findImages(directory, recursive) {
  const entries = await readdir(directory, { withFileTypes: true })
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name)
      if (entry.isDirectory()) return recursive ? findImages(fullPath, true) : []
      return supportedExtensions.has(path.extname(entry.name).toLowerCase())
        ? [fullPath]
        : []
    }),
  )

  return nested.flat()
}

await rm(outputRoot, { recursive: true, force: true })

const manifest = {}
let imageCount = 0
let sourceBytes = 0
let optimizedBytes = 0

for (const group of groups) {
  const sourceFiles = await findImages(group.source, group.recursive)
  imageCount += sourceFiles.length

  for (const sourceFile of sourceFiles) {
    const relativeFile = path.relative(group.source, sourceFile)
    const extension = path.extname(relativeFile).toLowerCase()
    const relativeId = relativeFile
      .slice(0, -extension.length)
      .split(path.sep)
      .join('/')
    const assetId = `${group.prefix}/${relativeId}`
    const variantDirectory = path.join(outputRoot, ...assetId.split('/'))
    const sourcePrefix = group.prefix === 'artworks' ? 'source' : `source/${group.prefix}`
    const originalKey = `${sourcePrefix}/${relativeFile.split(path.sep).join('/')}`
    const originalFile = path.join(outputRoot, ...originalKey.split('/'))
    const metadata = await sharp(sourceFile).metadata()

    await mkdir(variantDirectory, { recursive: true })
    await mkdir(path.dirname(originalFile), { recursive: true })
    await cp(sourceFile, originalFile)

    sourceBytes += (await stat(sourceFile)).size
    manifest[assetId] = {
      width: metadata.width,
      height: metadata.height,
      original: originalKey,
      variants: {},
    }

    for (const variant of variants) {
      const outputFile = path.join(variantDirectory, `${variant.name}.webp`)
      const result = await sharp(sourceFile)
        .rotate()
        .resize({ width: variant.width, withoutEnlargement: true })
        .webp({ quality: variant.quality, effort: 5 })
        .toFile(outputFile)

      optimizedBytes += result.size
      manifest[assetId].variants[variant.name] =
        `${assetId}/${variant.name}.webp`
    }
  }
}

await writeFile(
  path.join(outputRoot, 'manifest.json'),
  `${JSON.stringify(manifest, null, 2)}\n`,
)

const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1)
console.log(`Prepared ${imageCount} images.`)
console.log(`Originals: ${mb(sourceBytes)} MB`)
console.log(`Responsive WebP variants: ${mb(optimizedBytes)} MB`)
console.log(`Output: ${outputRoot}`)
