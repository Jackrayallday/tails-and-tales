import { mediaUrl } from '../lib/media.js'
import { seriesArtworks } from './seriesArtworks.js'
const airedaleGotImage = mediaUrl('artworks/fantasy/airdale-GOT')
const airedaleMapImage = mediaUrl('artworks/fantasy/airdale-map')
const swordClashImage = mediaUrl(
  'artworks/fantasy/airdale-german-shepard-sword-clash',
)
const corgiWizardImage = mediaUrl('artworks/fantasy/corgi-wizard')
const frenchMapImage = mediaUrl('artworks/fantasy/french-map')
const germanMapImage = mediaUrl('artworks/fantasy/german-map')
const goldenMapImage = mediaUrl('artworks/fantasy/golden-map')
const poodleBroomImage = mediaUrl('artworks/fantasy/poodle-flying-broom')
const poodleMapImage = mediaUrl('artworks/fantasy/poodle-map')

const featuredArtworks = [
  {
    title: 'Airedale Cartographer',
    slug: 'airedale-cartographer',
    breedSlug: 'airedale-terrier',
    collectionSlug: 'fantasy',
    seriesSlug: 'royal-cartographer',
    seriesTitle: 'The Royal Cartographer',
    style: 'Storybook Fantasy',
    price: 34,
    createdAt: '2026-07-23',
    popularity: 91,
    image: airedaleMapImage,
    description:
      'An Airedale cartographer charts distant kingdoms from a candlelit medieval map room.',
    tags: ['fantasy', 'cartographer', 'map'],
  },
  {
    title: 'French Bulldog Cartographer',
    slug: 'french-bulldog-cartographer',
    breedSlug: 'french-bulldog',
    collectionSlug: 'fantasy',
    seriesSlug: 'royal-cartographer',
    seriesTitle: 'The Royal Cartographer',
    style: 'Storybook Fantasy',
    price: 34,
    createdAt: '2026-07-23',
    popularity: 90,
    image: frenchMapImage,
    description:
      'A French bulldog studies ancient routes and compass bearings in a warm tower map room.',
    tags: ['fantasy', 'cartographer', 'map'],
  },
  {
    title: 'German Shepherd Cartographer',
    slug: 'german-shepherd-cartographer',
    breedSlug: 'german-shepherd',
    collectionSlug: 'fantasy',
    seriesSlug: 'royal-cartographer',
    seriesTitle: 'The Royal Cartographer',
    style: 'Storybook Fantasy',
    price: 34,
    createdAt: '2026-07-23',
    popularity: 93,
    image: germanMapImage,
    description:
      'A watchful German shepherd plans the next expedition among maps, scrolls, and brass instruments.',
    tags: ['fantasy', 'cartographer', 'map'],
  },
  {
    title: 'Golden Retriever Cartographer',
    slug: 'golden-retriever-cartographer',
    breedSlug: 'golden-retriever',
    collectionSlug: 'fantasy',
    seriesSlug: 'royal-cartographer',
    seriesTitle: 'The Royal Cartographer',
    style: 'Storybook Fantasy',
    price: 34,
    createdAt: '2026-07-23',
    popularity: 95,
    image: goldenMapImage,
    description:
      'A golden retriever prepares a cheerful journey from a map-filled castle study at sunset.',
    tags: ['fantasy', 'cartographer', 'map'],
  },
  {
    title: 'Poodle Cartographer',
    slug: 'poodle-cartographer',
    breedSlug: 'poodle',
    collectionSlug: 'fantasy',
    seriesSlug: 'royal-cartographer',
    seriesTitle: 'The Royal Cartographer',
    style: 'Storybook Fantasy',
    price: 34,
    createdAt: '2026-07-23',
    popularity: 92,
    image: poodleMapImage,
    description:
      'An elegant poodle surveys an ancient map in a richly detailed fantasy tower.',
    tags: ['fantasy', 'cartographer', 'map'],
  },
  {
    title: 'Airedale Throne Watch',
    slug: 'airedale-throne-watch',
    breedSlug: 'airedale-terrier',
    collectionSlug: 'fantasy',
    style: 'Epic Fantasy',
    price: 36,
    createdAt: '2026-06-24',
    popularity: 89,
    image: airedaleGotImage,
    description:
      'An Airedale posed in a dramatic fantasy court with noble, throne-room energy.',
    tags: ['fantasy', 'throne', 'noble'],
  },
  {
    title: 'Airedale Sword Clash',
    slug: 'airedale-sword-clash',
    breedSlug: 'airedale-terrier',
    collectionSlug: 'fantasy',
    style: 'Epic Fantasy',
    price: 38,
    createdAt: '2026-06-23',
    popularity: 87,
    image: swordClashImage,
    description:
      'An Airedale and German shepherd locked in an epic sword clash.',
    tags: ['fantasy', 'sword', 'battle'],
  },
  {
    title: 'Corgi Wizard',
    slug: 'corgi-wizard',
    breedSlug: 'pembroke-welsh-corgi',
    collectionSlug: 'fantasy',
    style: 'Wizard Fantasy',
    price: 34,
    createdAt: '2026-06-28',
    popularity: 96,
    image: corgiWizardImage,
    description:
      'A corgi wizard conjuring magic in a whimsical fantasy scene.',
    tags: ['fantasy', 'wizard', 'magic'],
  },
  {
    title: 'Poodle Flying Broom',
    slug: 'poodle-flying-broom',
    breedSlug: 'poodle',
    collectionSlug: 'fantasy',
    style: 'Wizard Fantasy',
    price: 34,
    createdAt: '2026-06-27',
    popularity: 94,
    image: poodleBroomImage,
    description:
      'A poodle soaring through a fantasy sky on a flying broom.',
    tags: ['fantasy', 'broom', 'magic'],
  },
]

export const artworks = [...featuredArtworks, ...seriesArtworks]
