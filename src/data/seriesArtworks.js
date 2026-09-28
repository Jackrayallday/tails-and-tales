import { mediaUrl } from '../lib/media.js'

const breedVariants = [
  ['airedale', 'airedale-terrier', 'Airedale Terrier'],
  ['australianS', 'australian-shepherd', 'Australian Shepherd'],
  ['beagle', 'beagle', 'Beagle'],
  ['berneseMD', 'bernese-mountain-dog', 'Bernese Mountain Dog'],
  ['borderC', 'border-collie', 'Border Collie'],
  ['boxer', 'boxer', 'Boxer'],
  ['cavalierKCS', 'cavalier-king-charles-spaniel', 'Cavalier King Charles Spaniel'],
  ['chihuahua', 'chihuahua', 'Chihuahua'],
  ['cockapoo', 'cockapoo', 'Cockapoo'],
  ['corgi', 'pembroke-welsh-corgi', 'Pembroke Welsh Corgi'],
  ['dachhund', 'dachshund', 'Dachshund'],
  ['frenchB', 'french-bulldog', 'French Bulldog'],
  ['germanS', 'german-shepherd', 'German Shepherd'],
  ['goldendoodle', 'goldendoodle', 'Goldendoodle'],
  ['goldenR', 'golden-retriever', 'Golden Retriever'],
  ['husky', 'siberian-husky', 'Siberian Husky'],
  ['labBrown', 'labrador-retriever', 'Chocolate Labrador'],
  ['labR', 'labrador-retriever', 'Labrador Retriever'],
  ['labradorR', 'labrador-retriever', 'Labrador Retriever'],
  ['poodle', 'poodle', 'Poodle'],
  ['shihTzu', 'shih-tzu', 'Shih Tzu'],
  ['yorkie', 'yorkshire-terrier', 'Yorkshire Terrier'],
]

const series = [
  {
    path: 'bathroom/toilet',
    fileSuffix: 'toilet',
    slug: 'morning-reader',
    title: 'The Morning Reader',
    collectionSlug: 'bathroom-portraits',
    style: 'Comic Portrait',
    price: 29,
    description: 'reads the morning news in a playful bathroom portrait.',
    tags: ['bathroom', 'funny', 'newspaper'],
  },
  {
    path: 'beach/lounge',
    fileSuffix: 'lounge',
    slug: 'beach-lounger',
    title: 'The Beach Lounger',
    collectionSlug: 'beach-days',
    style: 'Coastal Portrait',
    price: 31,
    description: 'relaxes beside the waves in a sunny coastal portrait.',
    tags: ['beach', 'coastal', 'summer'],
  },
  {
    path: 'christmas/santa',
    fileSuffix: 'santa',
    fileNames: { shihTzu: 'shihTzu-christmas' },
    slug: 'holiday-santa',
    title: 'The Holiday Santa',
    collectionSlug: 'christmas-magic',
    style: 'Holiday Portrait',
    price: 32,
    description: 'brings warm Saint Nick charm to a festive holiday portrait.',
    tags: ['holiday', 'christmas', 'santa'],
  },
  {
    path: 'fantasy/hobbit',
    fileSuffix: 'hobbit',
    slug: 'storybook-villager',
    title: 'The Storybook Villager',
    collectionSlug: 'fantasy',
    style: 'Storybook Fantasy',
    price: 34,
    description: 'stands ready for adventure in a cozy storybook village.',
    tags: ['fantasy', 'village', 'adventure'],
  },
  {
    path: 'space/pilot',
    fileSuffix: 'pilot',
    slug: 'star-pilot',
    title: 'The Star Pilot',
    collectionSlug: 'space-adventures',
    style: 'Space Adventure',
    price: 36,
    description: 'takes the controls for a cinematic journey through the stars.',
    tags: ['space', 'pilot', 'adventure'],
  },
]

function indefiniteArticleFor(name) {
  return /^[aeiou]/i.test(name) ? 'An' : 'A'
}

function variantsForSeries(seriesDefinition, seriesIndex) {
  const usesLongLabradorKey = [
    'morning-reader',
    'beach-lounger',
    'holiday-santa',
  ].includes(seriesDefinition.slug)
  const availableVariants = breedVariants.filter(([fileKey]) => {
    return usesLongLabradorKey ? fileKey !== 'labR' : fileKey !== 'labradorR'
  })

  return availableVariants.map(([fileKey, breedSlug, breedName], variantIndex) => {
    const fileName =
      seriesDefinition.fileNames?.[fileKey] ??
      `${fileKey}-${seriesDefinition.fileSuffix}`

    return {
      title: `${breedName} — ${seriesDefinition.title}`,
      slug: `${seriesDefinition.slug}-${fileKey.toLowerCase()}`,
      breedSlug,
      variantLabel: breedName,
      collectionSlug: seriesDefinition.collectionSlug,
      seriesSlug: seriesDefinition.slug,
      seriesTitle: seriesDefinition.title,
      style: seriesDefinition.style,
      price: seriesDefinition.price,
      createdAt: `2026-07-${String(18 - seriesIndex).padStart(2, '0')}`,
      popularity: 90 - seriesIndex + (variantIndex % 7),
      image: mediaUrl(`artworks/${seriesDefinition.path}/${fileName}`),
      description: `${indefiniteArticleFor(breedName)} ${breedName} ${seriesDefinition.description}`,
      tags: seriesDefinition.tags,
    }
  })
}

export const seriesArtworks = series.flatMap(variantsForSeries)
