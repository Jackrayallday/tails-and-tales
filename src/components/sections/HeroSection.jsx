import heroImage from '../../assets/hero-blend.png'
import { PawIcon, SearchIcon } from '../ui/Icons.jsx'

function HeroSection() {
  return (
    <section className="relative min-h-[590px] overflow-hidden bg-[#fbf7ef]">
      <img
        className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
        src={heroImage}
        alt="Golden retriever overlooking a fantasy village"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#fbf7ef] via-transparent via-25% to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[590px] max-w-7xl items-center px-6 pt-20 lg:px-10">
        <div className="max-w-xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-wide text-orange-700">
            Welcome to Dog Gallery
          </p>
          <h1 className="mb-7 text-5xl font-bold leading-[0.95] text-slate-950 sm:text-7xl">
            Every Breed Has a Story{' '}
            <PawIcon className="inline h-9 w-9 text-orange-400" />
          </h1>
          <p className="mb-8 max-w-md text-lg leading-8 text-slate-800">
            Discover beautiful artwork featuring your favorite dogs in magical
            worlds and timeless adventures.
          </p>
          <a
            className="inline-flex items-center gap-3 rounded-2xl bg-slate-950 px-9 py-5 text-base font-bold text-white shadow-xl shadow-slate-950/15"
            href="#breed-search"
          >
            Find Your Breed
            <SearchIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
