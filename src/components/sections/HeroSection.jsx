import { useEffect, useState } from 'react'
import { mediaUrl } from '../../lib/media.js'

const heroImage = mediaUrl('site/hero', 'detail')
const heroImage2 = mediaUrl('site/hero2', 'detail')
const heroImage3 = mediaUrl('site/hero3', 'detail')
import { PawIcon, SearchIcon } from '../ui/Icons.jsx'

const heroImages = [
  {
    src: heroImage,
    alt: 'Golden retriever overlooking a fantasy village',
  },
  {
    src: heroImage2,
    alt: 'Dog artwork over a bathroom',
  },
  {
    src: heroImage3,
    alt: 'Dog artwork displayed in a fantasy home setting',
  },
]

const AUTO_ADVANCE_MS = 5500
const MANUAL_ADVANCE_MS = AUTO_ADVANCE_MS * 2

function HeroSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [advanceDelay, setAdvanceDelay] = useState(AUTO_ADVANCE_MS)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setAdvanceDelay(AUTO_ADVANCE_MS)
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % heroImages.length)
    }, advanceDelay)

    return () => window.clearTimeout(timeoutId)
  }, [advanceDelay, activeImageIndex])

  const showPreviousImage = () => {
    setAdvanceDelay(MANUAL_ADVANCE_MS)
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? heroImages.length - 1 : currentIndex - 1,
    )
  }

  const showNextImage = () => {
    setAdvanceDelay(MANUAL_ADVANCE_MS)
    setActiveImageIndex((currentIndex) => (currentIndex + 1) % heroImages.length)
  }

  const showSelectedImage = (index) => {
    if (index === activeImageIndex) {
      return
    }

    setAdvanceDelay(MANUAL_ADVANCE_MS)
    setActiveImageIndex(index)
  }

  return (
    <section
      className="relative min-h-[720px] overflow-hidden bg-[#fbf7ef] lg:min-h-[760px]"
      aria-label="Featured dog artwork carousel"
    >
      {heroImages.map((image, index) => (
        <img
          className={`absolute inset-0 h-full w-full object-cover object-[center_25%] transition-opacity duration-1000 ${
            index === activeImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          src={image.src}
          alt={image.alt}
          aria-hidden={index !== activeImageIndex}
          key={image.src}
        />
      ))}
      <div className="absolute inset-0 bg-linear-to-r from-[#fbf7ef]/70 via-[#fbf7ef]/25 via-35% to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-[#fbf7ef] via-transparent via-25% to-transparent" />

      <div className="relative z-10 flex min-h-[720px] w-full items-center px-6 pt-20 sm:px-10 lg:min-h-[760px] lg:pl-24 lg:pr-10 xl:pl-32">
        <div className="max-w-xl">
          <h1 className="mb-7 text-5xl font-bold leading-[0.95] text-slate-950 drop-shadow-[0_2px_14px_rgba(255,255,255,0.65)] sm:text-7xl">
            Every Breed Has a Story{' '}
            <PawIcon className="inline h-9 w-9 text-orange-400" />
          </h1>
          <p className="mb-8 max-w-md text-lg font-medium leading-8 text-slate-950 drop-shadow-[0_1px_10px_rgba(255,255,255,0.7)]">
            Discover beautiful artwork featuring your favorite dogs in magical
            worlds and timeless adventures.
          </p>
          <a
            className="inline-flex items-center gap-3 rounded-2xl bg-slate-950 px-9 py-5 text-base font-bold text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-700 hover:shadow-2xl hover:shadow-slate-950/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
            href="#breed-search"
          >
            Find Your Breed
            <SearchIcon />
          </a>
        </div>
      </div>

      <button
        className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-950 shadow-lg shadow-slate-950/10 ring-1 ring-slate-950/5 transition hover:bg-orange-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 md:flex"
        type="button"
        aria-label="Show previous hero image"
        onClick={showPreviousImage}
      >
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-950 shadow-lg shadow-slate-950/10 ring-1 ring-slate-950/5 transition hover:bg-orange-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 md:flex"
        type="button"
        aria-label="Show next hero image"
        onClick={showNextImage}
      >
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      <div className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {heroImages.map((image, index) => (
          <button
            className={`h-3 w-3 rounded-full ring-2 ring-white/80 transition ${
              index === activeImageIndex
                ? 'scale-110 bg-white'
                : 'bg-white/45 hover:bg-white/75'
            }`}
            type="button"
            aria-label={`Show hero image ${index + 1}`}
            aria-current={index === activeImageIndex}
            key={image.src}
            onClick={() => showSelectedImage(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
