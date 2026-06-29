import bathroomImage from '../assets/collections/bathroom.png'
import beachImage from '../assets/collections/beach.png'
import christmasImage from '../assets/collections/christmas.png'
import spaceImage from '../assets/collections/space.png'
import villageImage from '../assets/collections/village.png'

export const collections = [
  {
    title: 'Fantasy',
    slug: 'fantasy',
    description:
      'Mythic quests, wizard scenes, storybook villages, and legendary portraits for dogs with main-character magic.',
    theme: 'Fantasy',
    artworkCount: 5,
    count: '5 artworks',
    image: villageImage,
    featuredImages: [villageImage],
  },
  {
    title: 'Bathroom Portraits',
    slug: 'bathroom-portraits',
    description:
      'Playful bathroom scenes with bubbles, tile, towels, and expressive poses made for comic personality portraits.',
    theme: 'Humor',
    artworkCount: 98,
    count: '98 artworks',
    image: bathroomImage,
    featuredImages: [bathroomImage],
  },
  {
    title: 'Space Adventures',
    slug: 'space-adventures',
    description:
      'Planets, stars, space suits, and dramatic cosmic backdrops for pups with intergalactic main-character energy.',
    theme: 'Sci-Fi',
    artworkCount: 87,
    count: '87 artworks',
    image: spaceImage,
    featuredImages: [spaceImage],
  },
  {
    title: 'Beach Days',
    slug: 'beach-days',
    description:
      'Sunny coastlines, breezy colors, and relaxed summer scenes for dogs who belong near waves and warm sand.',
    theme: 'Coastal',
    artworkCount: 76,
    count: '76 artworks',
    image: beachImage,
    featuredImages: [beachImage],
  },
  {
    title: 'Christmas Magic',
    slug: 'christmas-magic',
    description:
      'Snow, ribbons, glowing windows, and festive portrait settings built for holiday cards and keepsakes.',
    theme: 'Holiday',
    artworkCount: 63,
    count: '63 artworks',
    image: christmasImage,
    featuredImages: [christmasImage],
  },
]
