import bathroomImage from '../assets/collections/bathroom.png'
import beachImage from '../assets/collections/beach.png'
import christmasImage from '../assets/collections/christmas.png'
import spaceImage from '../assets/collections/space.png'
import villageImage from '../assets/collections/village.png'
import airedaleGotImage from '../assets/artworks/fantasy/airdale-GOT.png'
import swordClashImage from '../assets/artworks/fantasy/airdale-german-shepard-sword-clash.png'
import corgiWizardImage from '../assets/artworks/fantasy/corgi-wizard.png'
import poodleBroomImage from '../assets/artworks/fantasy/poodle-flying-broom.png'

export const artworks = [
  {
    title: 'Airedale Village Guardian',
    slug: 'airedale-village-guardian',
    breedSlug: 'airedale-terrier',
    collectionSlug: 'fantasy',
    style: 'Storybook Fantasy',
    price: 34,
    createdAt: '2026-06-25',
    popularity: 92,
    image: villageImage,
    description:
      'A group of Airedales tucked into a cozy Shire-inspired village scene.',
    tags: ['fantasy', 'village', 'shire'],
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
  {
    title: 'French Bulldog Morning News',
    slug: 'french-bulldog-morning-news',
    breedSlug: 'french-bulldog',
    collectionSlug: 'bathroom-portraits',
    style: 'Comic Portrait',
    price: 29,
    createdAt: '2026-06-22',
    popularity: 84,
    image: bathroomImage,
    description:
      'A French bulldog reading the news in a playful bathroom portrait.',
    tags: ['bathroom', 'funny', 'newspaper'],
  },
  {
    title: 'Corgi Star Ranger',
    slug: 'corgi-star-ranger',
    breedSlug: 'pembroke-welsh-corgi',
    collectionSlug: 'space-adventures',
    style: 'Space Adventure',
    price: 36,
    createdAt: '2026-06-29',
    popularity: 98,
    image: spaceImage,
    description:
      'A cinematic corgi explorer piloting through planets and starlight.',
    tags: ['space', 'heroic', 'adventure'],
  },
  {
    title: 'Poodle Beach Cocktail',
    slug: 'poodle-beach-cocktail',
    breedSlug: 'poodle',
    collectionSlug: 'beach-days',
    style: 'Coastal Portrait',
    price: 31,
    createdAt: '2026-06-21',
    popularity: 81,
    image: beachImage,
    description:
      'A poodle relaxing with a cocktail on a sunny beach day.',
    tags: ['beach', 'cocktail', 'summer'],
  },
  {
    title: 'Saint Nick Shepherd',
    slug: 'saint-nick-shepherd',
    breedSlug: 'german-shepherd',
    collectionSlug: 'christmas-magic',
    style: 'Holiday Portrait',
    price: 32,
    createdAt: '2026-06-20',
    popularity: 79,
    image: christmasImage,
    description:
      'A German shepherd dressed as old Saint Nick for a festive holiday portrait.',
    tags: ['holiday', 'christmas', 'saint-nick'],
  },
]
