import { useEffect, useMemo, useRef, useState } from 'react'
import Fuse from 'fuse.js'
import { Link, useNavigate } from 'react-router-dom'
import { breeds } from '../../data/breeds.js'
import { mediaUrl } from '../../lib/media.js'

const lineupImage = mediaUrl('site/lineup', 'detail')
import { SearchIcon } from '../ui/Icons.jsx'

const breedSearch = new Fuse(breeds, {
  keys: ['name'],
  threshold: 0.4,
  ignoreLocation: true,
  minMatchCharLength: 1,
})

function BreedSearch() {
  const [query, setQuery] = useState('')
  const [activeResult, setActiveResult] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const searchFormRef = useRef(null)
  const navigate = useNavigate()
  const normalizedQuery = query.trim().toLowerCase()
  const matchingBreeds = useMemo(() => {
    if (!normalizedQuery) {
      return []
    }

    return breedSearch
      .search(normalizedQuery)
      .slice(0, 6)
      .map((result) => result.item)
  }, [normalizedQuery])

  useEffect(() => {
    const closeSearchResults = (event) => {
      if (!searchFormRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('pointerdown', closeSearchResults)
    return () => document.removeEventListener('pointerdown', closeSearchResults)
  }, [])

  const openBreed = (breed) => {
    if (breed) {
      navigate(`/breeds/${breed.slug}`)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    openBreed(matchingBreeds[activeResult] || matchingBreeds[0])
  }

  const handleKeyDown = (event) => {
    if (!matchingBreeds.length) {
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveResult((current) => (current + 1) % matchingBreeds.length)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveResult((current) =>
        current === 0 ? matchingBreeds.length - 1 : current - 1,
      )
    } else if (event.key === 'Escape') {
      setQuery('')
      setActiveResult(0)
    }
  }

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

        <form
          ref={searchFormRef}
          className="relative max-w-lg"
          role="search"
          onSubmit={handleSubmit}
        >
          <label className="sr-only" htmlFor="breed-search-input">
            Search dog breeds
          </label>
          <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-lg shadow-slate-900/10 transition focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-300/50">
            <SearchIcon className="h-6 w-6 shrink-0 text-slate-950" />
            <input
              id="breed-search-input"
              className="w-full bg-transparent text-base text-slate-950 outline-none placeholder:text-slate-400"
              placeholder="Search dog breeds..."
              type="search"
              role="combobox"
              value={query}
              autoComplete="off"
              aria-autocomplete="list"
              aria-controls="breed-search-results"
              aria-expanded={Boolean(normalizedQuery && isOpen)}
              aria-activedescendant={
                matchingBreeds.length
                  ? `breed-result-${matchingBreeds[activeResult].slug}`
                  : undefined
              }
              onChange={(event) => {
                setQuery(event.target.value)
                setActiveResult(0)
                setIsOpen(true)
              }}
              onFocus={() => setIsOpen(true)}
              onKeyDown={handleKeyDown}
            />
          </div>

          {normalizedQuery && isOpen ? (
            <div
              id="breed-search-results"
              className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-950/15"
              role="listbox"
              aria-label="Matching dog breeds"
            >
              {matchingBreeds.length ? (
                matchingBreeds.map((breed, index) => (
                  <Link
                    id={`breed-result-${breed.slug}`}
                    className={`flex items-center gap-3 px-4 py-3 text-slate-950 transition first:pt-4 last:pb-4 ${
                      index === activeResult
                        ? 'bg-orange-100'
                        : 'hover:bg-orange-50'
                    }`}
                    to={`/breeds/${breed.slug}`}
                    role="option"
                    aria-selected={index === activeResult}
                    key={breed.slug}
                    onMouseEnter={() => setActiveResult(index)}
                  >
                    <img
                      className="h-11 w-11 rounded-lg object-cover"
                      src={breed.image}
                      alt=""
                    />
                    <span className="font-semibold">{breed.name}</span>
                  </Link>
                ))
              ) : (
                <div className="px-5 py-4">
                  <p className="font-semibold text-slate-950">
                    No matching breed found
                  </p>
                  <Link
                    className="mt-1 inline-block text-sm font-semibold text-orange-700 hover:text-orange-900"
                    to="/breeds"
                  >
                    Browse all breeds
                  </Link>
                </div>
              )}
            </div>
          ) : null}
        </form>

        <p className="mt-6 text-slate-700">
          or{' '}
          <Link className="font-medium text-orange-700" to="/breeds">
            browse all breeds
          </Link>
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
