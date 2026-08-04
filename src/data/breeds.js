import { mediaUrl } from '../lib/media.js'

export const breeds = [
  {
    name: 'Airedale Terrier',
    slug: 'airedale-terrier',
    rank: 49,
    image: mediaUrl('breeds/airdale'),
    description:
      'A clever, spirited terrier with a polished silhouette that fits adventurous and storybook scenes.',
    temperament: ['Clever', 'Confident', 'Playful'],
    size: 'Medium',
    collectionIds: ['fantasy', 'beach-days'],
    featuredArtwork: 'airedale-village-guardian',
  },
  {
    name: 'Golden Retriever',
    slug: 'golden-retriever',
    rank: 2,
    image: mediaUrl('breeds/goldenR'),
    description:
      'Warm, loyal, and expressive, golden retrievers bring instant heart to cozy portraits and heroic settings.',
    temperament: ['Friendly', 'Devoted', 'Gentle'],
    size: 'Large',
    collectionIds: ['fantasy', 'christmas-magic'],
    featuredArtwork: 'golden-retriever-cartographer',
  },
  {
    name: 'French Bulldog',
    slug: 'french-bulldog',
    rank: 4,
    image: mediaUrl('breeds/french'),
    description:
      'Compact, charming, and full of personality, French bulldogs shine in playful scenes with a little attitude.',
    temperament: ['Charming', 'Adaptable', 'Alert'],
    size: 'Small',
    collectionIds: ['fantasy', 'bathroom-portraits', 'space-adventures'],
    featuredArtwork: 'french-bulldog-morning-news',
  },
  {
    name: 'German Shepherd',
    slug: 'german-shepherd',
    rank: 3,
    image: mediaUrl('breeds/german'),
    description:
      'A bold, intelligent breed with a cinematic presence suited to epic adventures and loyal guardian portraits.',
    temperament: ['Loyal', 'Courageous', 'Smart'],
    size: 'Large',
    collectionIds: ['fantasy', 'christmas-magic', 'space-adventures'],
    featuredArtwork: 'saint-nick-shepherd',
  },
  {
    name: 'Poodle',
    slug: 'poodle',
    rank: 14,
    image: mediaUrl('breeds/poodle'),
    description:
      'Elegant and bright, poodles work beautifully in refined portraits, magical worlds, and colorful scenes.',
    temperament: ['Elegant', 'Active', 'Bright'],
    size: 'Small to Standard',
    collectionIds: ['fantasy', 'beach-days', 'bathroom-portraits'],
    featuredArtwork: 'poodle-beach-cocktail',
  },
  {
    name: 'Pembroke Welsh Corgi',
    slug: 'pembroke-welsh-corgi',
    rank: 8,
    image: mediaUrl('breeds/corgi'),
    description:
      'A cheerful low-rider with a heroic grin, perfect for whimsical landscapes and bright character artwork.',
    temperament: ['Affectionate', 'Bold', 'Cheerful'],
    size: 'Small',
    collectionIds: ['beach-days', 'space-adventures'],
    featuredArtwork: 'corgi-star-ranger',
  },
  {
    name: 'Labrador Retriever',
    slug: 'labrador-retriever',
    rank: 1,
    image: mediaUrl('breeds/labradorR'),
  },
  {
    name: 'Goldendoodle',
    slug: 'goldendoodle',
    rank: 5,
    image: mediaUrl('breeds/goldendoodle'),
  },
  {
    name: 'Labradoodle',
    slug: 'labradoodle',
    rank: 6,
    image: mediaUrl('breeds/labradoodle'),
  },
  {
    name: 'Cockapoo',
    slug: 'cockapoo',
    rank: 7,
    image: mediaUrl('breeds/cockapoo'),
  },
  {
    name: 'Dachshund',
    slug: 'dachshund',
    rank: 9,
    image: mediaUrl('breeds/dachshund'),
  },
  {
    name: 'Australian Shepherd',
    slug: 'australian-shepherd',
    rank: 10,
    image: mediaUrl('breeds/australianS'),
  },
  {
    name: 'Siberian Husky',
    slug: 'siberian-husky',
    rank: 11,
    image: mediaUrl('breeds/siberianH'),
  },
  {
    name: 'Border Collie',
    slug: 'border-collie',
    rank: 12,
    image: mediaUrl('breeds/borderC'),
  },
  {
    name: 'Beagle',
    slug: 'beagle',
    rank: 13,
    image: mediaUrl('breeds/beagle'),
  },
  {
    name: 'Bernese Mountain Dog',
    slug: 'bernese-mountain-dog',
    rank: 15,
    image: mediaUrl('breeds/berneseMD'),
  },
  {
    name: 'Boxer',
    slug: 'boxer',
    rank: 16,
    image: mediaUrl('breeds/boxer'),
  },
  {
    name: 'Chihuahua',
    slug: 'chihuahua',
    rank: 17,
    image: mediaUrl('breeds/chihuahua'),
  },
  {
    name: 'Cavalier King Charles Spaniel',
    slug: 'cavalier-king-charles-spaniel',
    rank: 18,
    image: mediaUrl('breeds/cavalierKCS'),
  },
  {
    name: 'Shih Tzu',
    slug: 'shih-tzu',
    rank: 19,
    image: mediaUrl('breeds/shihT'),
  },
  {
    name: 'Yorkshire Terrier',
    slug: 'yorkshire-terrier',
    rank: 20,
    image: mediaUrl('breeds/yorkshireT'),
  },
].sort((a, b) => a.rank - b.rank)

const popularBreedSlugs = [
  'golden-retriever',
  'german-shepherd',
  'french-bulldog',
  'cavalier-king-charles-spaniel',
  'siberian-husky',
  'airedale-terrier',
]

export const popularBreeds = popularBreedSlugs.map((slug) =>
  breeds.find((breed) => breed.slug === slug),
)
