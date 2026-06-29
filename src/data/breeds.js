import airedaleImage from '../assets/breeds/airdale.png'
import corgiImage from '../assets/breeds/corgi.png'
import frenchImage from '../assets/breeds/french.png'
import germanImage from '../assets/breeds/german.png'
import goldenRetrieverImage from '../assets/breeds/goldenR.png'
import poodleImage from '../assets/breeds/poodle.png'

export const breeds = [
  {
    name: 'Airedale Terrier',
    slug: 'airedale-terrier',
    image: airedaleImage,
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
    image: goldenRetrieverImage,
    description:
      'Warm, loyal, and expressive, golden retrievers bring instant heart to cozy portraits and heroic settings.',
    temperament: ['Friendly', 'Devoted', 'Gentle'],
    size: 'Large',
    collectionIds: ['fantasy', 'christmas-magic'],
    featuredArtwork: null,
  },
  {
    name: 'French Bulldog',
    slug: 'french-bulldog',
    image: frenchImage,
    description:
      'Compact, charming, and full of personality, French bulldogs shine in playful scenes with a little attitude.',
    temperament: ['Charming', 'Adaptable', 'Alert'],
    size: 'Small',
    collectionIds: ['bathroom-portraits', 'space-adventures'],
    featuredArtwork: 'french-bulldog-morning-news',
  },
  {
    name: 'German Shepherd',
    slug: 'german-shepherd',
    image: germanImage,
    description:
      'A bold, intelligent breed with a cinematic presence suited to epic adventures and loyal guardian portraits.',
    temperament: ['Loyal', 'Courageous', 'Smart'],
    size: 'Large',
    collectionIds: ['christmas-magic', 'space-adventures'],
    featuredArtwork: 'saint-nick-shepherd',
  },
  {
    name: 'Poodle',
    slug: 'poodle',
    image: poodleImage,
    description:
      'Elegant and bright, poodles work beautifully in refined portraits, magical worlds, and colorful scenes.',
    temperament: ['Elegant', 'Active', 'Bright'],
    size: 'Small to Standard',
    collectionIds: ['beach-days', 'bathroom-portraits'],
    featuredArtwork: 'poodle-beach-cocktail',
  },
  {
    name: 'Pembroke Welsh Corgi',
    slug: 'pembroke-welsh-corgi',
    image: corgiImage,
    description:
      'A cheerful low-rider with a heroic grin, perfect for whimsical landscapes and bright character artwork.',
    temperament: ['Affectionate', 'Bold', 'Cheerful'],
    size: 'Small',
    collectionIds: ['beach-days', 'space-adventures'],
    featuredArtwork: 'corgi-star-ranger',
  },
]

export const popularBreeds = breeds
