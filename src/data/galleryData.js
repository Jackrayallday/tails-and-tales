import airedaleImage from '../assets/breeds/airdale.png'
import corgiImage from '../assets/breeds/corgi.png'
import frenchImage from '../assets/breeds/french.png'
import germanImage from '../assets/breeds/german.png'
import goldenRetrieverImage from '../assets/breeds/goldenR.png'
import poodleImage from '../assets/breeds/poodle.png'
import bathroomImage from '../assets/collections/bathroom.png'
import beachImage from '../assets/collections/beach.png'
import christmasImage from '../assets/collections/christmas.png'
import spaceImage from '../assets/collections/space.png'
import villageImage from '../assets/collections/village.png'

export const popularBreeds = [
  { name: 'Airedale Terrier', slug: 'airedale-terrier', image: airedaleImage },
  {
    name: 'Golden Retriever',
    slug: 'golden-retriever',
    image: goldenRetrieverImage,
  },
  { name: 'French Bulldog', slug: 'french-bulldog', image: frenchImage },
  { name: 'German Shepherd', slug: 'german-shepherd', image: germanImage },
  { name: 'Poodle', slug: 'poodle', image: poodleImage },
  {
    name: 'Pembroke Welsh Corgi',
    slug: 'pembroke-welsh-corgi',
    image: corgiImage,
  },
]

export const collections = [
  {
    title: 'Cozy Fantasy Village',
    slug: 'cozy-fantasy-village',
    count: '125 artworks',
    image: villageImage,
  },
  {
    title: 'Bathroom Portraits',
    slug: 'bathroom-portraits',
    count: '98 artworks',
    image: bathroomImage,
  },
  {
    title: 'Space Adventures',
    slug: 'space-adventures',
    count: '87 artworks',
    image: spaceImage,
  },
  {
    title: 'Beach Days',
    slug: 'beach-days',
    count: '76 artworks',
    image: beachImage,
  },
  {
    title: 'Christmas Magic',
    slug: 'christmas-magic',
    count: '63 artworks',
    image: christmasImage,
  },
]

export const benefits = [
  ['Unique Artwork', 'Original AI-crafted illustrations'],
  ['Premium Quality', 'High resolution for prints and more'],
  ['Made for Dog Lovers', 'Created by people who love dogs'],
  ['Secure & Private', 'Your favorites are always safe'],
]
