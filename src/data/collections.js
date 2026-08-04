import { mediaUrl } from '../lib/media.js'

const bathroomImage = mediaUrl('collections/bathroom')
const beachImage = mediaUrl('collections/beach')
const christmasImage = mediaUrl('collections/christmas')
const spaceImage = mediaUrl('collections/space')
const villageImage = mediaUrl('collections/village')

export const collections = [
  {
    title: 'Fantasy',
    slug: 'fantasy',
    description:
      'Mythic quests, wizard scenes, storybook villages, and legendary portraits for dogs with main-character magic.',
    theme: 'Fantasy',
    artworkCount: 30,
    count: '30 artworks',
    image: villageImage,
    featuredImages: [villageImage],
  },
  {
    title: 'Bathroom Portraits',
    slug: 'bathroom-portraits',
    description:
      'Playful bathroom scenes with bubbles, tile, towels, and expressive poses made for comic personality portraits.',
    theme: 'Humor',
    artworkCount: 21,
    count: '21 artworks',
    image: bathroomImage,
    featuredImages: [bathroomImage],
  },
  {
    title: 'Space Adventures',
    slug: 'space-adventures',
    description:
      'Planets, stars, space suits, and dramatic cosmic backdrops for pups with intergalactic main-character energy.',
    theme: 'Sci-Fi',
    artworkCount: 21,
    count: '21 artworks',
    image: spaceImage,
    featuredImages: [spaceImage],
  },
  {
    title: 'Beach Days',
    slug: 'beach-days',
    description:
      'Sunny coastlines, breezy colors, and relaxed summer scenes for dogs who belong near waves and warm sand.',
    theme: 'Coastal',
    artworkCount: 21,
    count: '21 artworks',
    image: beachImage,
    featuredImages: [beachImage],
  },
  {
    title: 'Christmas Magic',
    slug: 'christmas-magic',
    description:
      'Snow, ribbons, glowing windows, and festive portrait settings built for holiday cards and keepsakes.',
    theme: 'Holiday',
    artworkCount: 21,
    count: '21 artworks',
    image: christmasImage,
    featuredImages: [christmasImage],
  },
]
