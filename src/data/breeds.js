import airedaleImage from '../assets/breeds/airdale.png'
import australianShepherdImage from '../assets/breeds/australianS.png'
import beagleImage from '../assets/breeds/beagle.png'
import berneseMountainDogImage from '../assets/breeds/berneseMD.png'
import borderCollieImage from '../assets/breeds/borderC.png'
import boxerImage from '../assets/breeds/boxer.png'
import cavalierKingCharlesSpanielImage from '../assets/breeds/cavalierKCS.png'
import chihuahuaImage from '../assets/breeds/chihuahua.png'
import cockapooImage from '../assets/breeds/cockapoo.png'
import corgiImage from '../assets/breeds/corgi.png'
import dachshundImage from '../assets/breeds/dachshund.png'
import frenchImage from '../assets/breeds/french.png'
import germanImage from '../assets/breeds/german.png'
import goldendoodleImage from '../assets/breeds/goldendoodle.png'
import goldenRetrieverImage from '../assets/breeds/goldenR.png'
import labradoodleImage from '../assets/breeds/labradoodle.png'
import labradorRetrieverImage from '../assets/breeds/labradorR.png'
import poodleImage from '../assets/breeds/poodle.png'
import shihTzuImage from '../assets/breeds/shihT.png'
import siberianHuskyImage from '../assets/breeds/siberianH.png'
import yorkshireTerrierImage from '../assets/breeds/yorkshireT.png'

export const breeds = [
  {
    name: 'Airedale Terrier',
    slug: 'airedale-terrier',
    rank: 49,
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
    rank: 2,
    image: goldenRetrieverImage,
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
    image: frenchImage,
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
    image: germanImage,
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
    image: poodleImage,
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
    image: corgiImage,
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
    image: labradorRetrieverImage,
  },
  {
    name: 'Goldendoodle',
    slug: 'goldendoodle',
    rank: 5,
    image: goldendoodleImage,
  },
  {
    name: 'Labradoodle',
    slug: 'labradoodle',
    rank: 6,
    image: labradoodleImage,
  },
  {
    name: 'Cockapoo',
    slug: 'cockapoo',
    rank: 7,
    image: cockapooImage,
  },
  {
    name: 'Dachshund',
    slug: 'dachshund',
    rank: 9,
    image: dachshundImage,
  },
  {
    name: 'Australian Shepherd',
    slug: 'australian-shepherd',
    rank: 10,
    image: australianShepherdImage,
  },
  {
    name: 'Siberian Husky',
    slug: 'siberian-husky',
    rank: 11,
    image: siberianHuskyImage,
  },
  {
    name: 'Border Collie',
    slug: 'border-collie',
    rank: 12,
    image: borderCollieImage,
  },
  {
    name: 'Beagle',
    slug: 'beagle',
    rank: 13,
    image: beagleImage,
  },
  {
    name: 'Bernese Mountain Dog',
    slug: 'bernese-mountain-dog',
    rank: 15,
    image: berneseMountainDogImage,
  },
  {
    name: 'Boxer',
    slug: 'boxer',
    rank: 16,
    image: boxerImage,
  },
  {
    name: 'Chihuahua',
    slug: 'chihuahua',
    rank: 17,
    image: chihuahuaImage,
  },
  {
    name: 'Cavalier King Charles Spaniel',
    slug: 'cavalier-king-charles-spaniel',
    rank: 18,
    image: cavalierKingCharlesSpanielImage,
  },
  {
    name: 'Shih Tzu',
    slug: 'shih-tzu',
    rank: 19,
    image: shihTzuImage,
  },
  {
    name: 'Yorkshire Terrier',
    slug: 'yorkshire-terrier',
    rank: 20,
    image: yorkshireTerrierImage,
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
