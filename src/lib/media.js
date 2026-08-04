const mediaBaseUrl = (
  import.meta.env?.VITE_MEDIA_BASE_URL || 'https://images.jackray.dev'
).replace(/\/$/, '')

export function mediaUrl(assetId, variant = 'card') {
  return `${mediaBaseUrl}/${assetId}/${variant}.webp`
}

export function mediaSrcSet(assetId) {
  return [
    `${mediaUrl(assetId, 'thumb')} 480w`,
    `${mediaUrl(assetId, 'card')} 900w`,
    `${mediaUrl(assetId, 'detail')} 1600w`,
  ].join(', ')
}
