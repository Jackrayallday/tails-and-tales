import lineupImage from '../../assets/lineup.png'
import { SearchIcon } from '../ui/Icons.jsx'

function BreedSearch() {
  return (
    <section
      id="breed-search"
      className="relative z-10 mx-auto -mt-4 grid max-w-7xl gap-8 px-6 pb-12 pt-8 lg:grid-cols-[1fr_1.25fr] lg:items-end lg:px-10"
    >
      <div>
        <h2 className="mb-3 text-3xl font-bold text-slate-950">
          Who are we creating for?
        </h2>
        <p className="mb-7 text-lg text-slate-700">
          Search for your dog breed to get started
        </p>

        <label className="flex max-w-lg items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-lg shadow-slate-900/10">
          <SearchIcon className="h-6 w-6 text-slate-950" />
          <input
            className="w-full bg-transparent text-base text-slate-950 outline-none placeholder:text-slate-400"
            placeholder="Search dog breeds..."
            type="search"
          />
        </label>

        <p className="mt-6 text-slate-700">
          or{' '}
          <a className="font-medium text-orange-700" href="/breeds">
            browse all breeds
          </a>
        </p>
      </div>

      <img
        className="w-full object-contain"
        src={lineupImage}
        alt="Lineup of popular dog breeds"
      />
    </section>
  )
}

export default BreedSearch
