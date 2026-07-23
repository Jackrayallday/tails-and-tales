import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { artworks } from '../data/artworks.js'
import { breeds } from '../data/breeds.js'
import { collections } from '../data/collections.js'
import { PawIcon, SearchIcon } from '../components/ui/Icons.jsx'

function StartPage() {
  const [selectedBreed, setSelectedBreed] = useState('')
  const [selectedCollection, setSelectedCollection] = useState('')
  const [breedSearch, setBreedSearch] = useState('')
  const [themeSearch, setThemeSearch] = useState('')
  const collectionStepRef = useRef(null)
  const resultStepRef = useRef(null)

  const matchingArtworks = useMemo(
    () =>
      artworks.filter(
        (artwork) =>
          artwork.breedSlug === selectedBreed &&
          artwork.collectionSlug === selectedCollection,
      ),
    [selectedBreed, selectedCollection],
  )

  const breed = breeds.find((item) => item.slug === selectedBreed)
  const collection = collections.find(
    (item) => item.slug === selectedCollection,
  )
  const hasSelections = Boolean(breed && collection)
  const visibleBreeds = breeds.filter((item) =>
    item.name.toLowerCase().includes(breedSearch.trim().toLowerCase()),
  )
  const visibleCollections = collections.filter((item) => {
    const searchValue = themeSearch.trim().toLowerCase()

    return (
      item.title.toLowerCase().includes(searchValue) ||
      item.theme.toLowerCase().includes(searchValue)
    )
  })

  const selectBreed = (slug) => {
    setSelectedBreed(slug)
    window.requestAnimationFrame(() => {
      collectionStepRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }

  const selectTheme = (slug) => {
    setSelectedCollection(slug)
    window.requestAnimationFrame(() => {
      resultStepRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }

  return (
    <main className="flex-1 bg-[#fbf7ef] px-6 pb-20 pt-36 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-orange-700">
            Start your story
          </p>
          <h1 className="text-4xl font-bold leading-tight text-slate-950 sm:text-6xl">
            Find artwork that feels like your dog
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Choose a breed and a theme. We&apos;ll show you the artwork that
            brings them together.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl items-center">
          {['Choose a breed', 'Pick a theme', 'Find artwork'].map(
            (label, index) => {
              const isComplete =
                index === 0 ? Boolean(breed) : index === 1 ? hasSelections : matchingArtworks.length > 0

              return (
                <div className="flex flex-1 items-center last:flex-none" key={label}>
                  <div className="grid justify-items-center gap-2">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                        isComplete
                          ? 'bg-orange-500 text-white'
                          : 'bg-white text-slate-500 ring-1 ring-slate-200'
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="hidden whitespace-nowrap text-xs font-bold text-slate-600 sm:block">
                      {label}
                    </span>
                  </div>
                  {index < 2 ? (
                    <span
                      className={`mx-3 h-0.5 flex-1 ${
                        (index === 0 && breed) || (index === 1 && hasSelections)
                          ? 'bg-orange-400'
                          : 'bg-slate-200'
                      }`}
                    />
                  ) : null}
                </div>
              )
            },
          )}
        </div>

        <section className="mt-14" aria-labelledby="breed-step-title">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
                Step 1
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-950" id="breed-step-title">
                Who are we creating for?
              </h2>
              {breed ? (
                <p className="mt-2 text-sm font-bold text-orange-700">
                  {breed.name} selected
                </p>
              ) : null}
            </div>
            <label className="flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-md shadow-slate-950/5 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-200 md:max-w-md">
              <SearchIcon className="h-5 w-5 shrink-0 text-slate-500" />
              <span className="sr-only">Search breeds</span>
              <input
                className="w-full bg-transparent text-slate-950 outline-none placeholder:text-slate-400"
                type="search"
                placeholder="Search for a breed..."
                value={breedSearch}
                onChange={(event) => setBreedSearch(event.target.value)}
              />
            </label>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {visibleBreeds.map((item) => {
              const isSelected = item.slug === selectedBreed

              return (
                <button
                  className={`group overflow-hidden rounded-xl bg-white text-left shadow-lg shadow-slate-950/10 transition hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-4 ${
                    isSelected ? 'ring-4 ring-orange-400' : ''
                  }`}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => selectBreed(item.slug)}
                  key={item.slug}
                >
                  <img
                    className="aspect-square w-full object-cover"
                    src={item.image}
                    alt=""
                  />
                  <span className="block p-3 text-sm font-bold text-slate-950">
                    {item.name}
                  </span>
                </button>
              )
            })}
          </div>
          {visibleBreeds.length === 0 ? (
            <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-white/60 p-6 text-center">
              <p className="font-bold text-slate-950">No breeds found</p>
              <p className="mt-1 text-sm text-slate-600">
                Try another breed name or browse the current selection.
              </p>
            </div>
          ) : null}
        </section>

        <section
          className="mt-16 scroll-mt-28"
          aria-labelledby="collection-step-title"
          ref={collectionStepRef}
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
                Step 2
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-950" id="collection-step-title">
                Pick a theme
              </h2>
              <p className="mt-3 text-slate-600">
                Pick the setting that best matches their personality.
              </p>
            </div>
            <label className="flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-md shadow-slate-950/5 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-200 md:max-w-md">
              <SearchIcon className="h-5 w-5 shrink-0 text-slate-500" />
              <span className="sr-only">Search themes</span>
              <input
                className="w-full bg-transparent text-slate-950 outline-none placeholder:text-slate-400"
                type="search"
                placeholder="Search for a theme..."
                value={themeSearch}
                onChange={(event) => setThemeSearch(event.target.value)}
              />
            </label>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {visibleCollections.map((item) => {
              const isSelected = item.slug === selectedCollection

              return (
                <button
                  className={`group relative min-h-64 overflow-hidden rounded-xl bg-slate-900 text-left shadow-lg shadow-slate-950/15 transition hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-4 ${
                    isSelected ? 'ring-4 ring-orange-400' : ''
                  }`}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => selectTheme(item.slug)}
                  key={item.slug}
                >
                  <img
                    className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-105"
                    src={item.image}
                    alt=""
                  />
                  <span className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />
                  <span className="relative flex min-h-64 flex-col justify-end p-5 text-white">
                    <span className="text-xs font-bold uppercase tracking-wide text-white/70">
                      {item.theme}
                    </span>
                    <span className="mt-1 text-xl font-bold">{item.title}</span>
                  </span>
                </button>
              )
            })}
          </div>
          {visibleCollections.length === 0 ? (
            <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-white/60 p-6 text-center">
              <p className="font-bold text-slate-950">No themes found</p>
              <p className="mt-1 text-sm text-slate-600">
                Try another theme or browse the current selection.
              </p>
            </div>
          ) : null}
        </section>

        <section
          className="mt-16 scroll-mt-28 rounded-2xl bg-white p-6 shadow-xl shadow-slate-950/10 sm:p-10"
          aria-labelledby="result-step-title"
          ref={resultStepRef}
        >
          <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
            Step 3
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-950" id="result-step-title">
            Meet their story
          </h2>

          {!hasSelections ? (
            <div className="mt-6 flex items-center gap-4 rounded-xl bg-orange-50 p-5 text-slate-700">
              <PawIcon className="h-10 w-10 shrink-0 text-orange-400" />
              <p className="leading-7">
                Choose a breed and a theme above to see your matches.
              </p>
            </div>
          ) : matchingArtworks.length ? (
            <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {matchingArtworks.map((artwork) => (
                <Link
                  className="group overflow-hidden rounded-xl bg-[#fbf7ef] text-slate-950 shadow-md transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  to={`/artworks/${artwork.slug}`}
                  key={artwork.slug}
                >
                  <img
                    className="aspect-[4/3] w-full object-cover transition group-hover:scale-105"
                    src={artwork.image}
                    alt={`${artwork.title} artwork`}
                  />
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-wide text-orange-700">
                      {artwork.style}
                    </p>
                    <h3 className="mt-2 text-xl font-bold">{artwork.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {artwork.description}
                    </p>
                    <p className="mt-4 font-bold">
                      Choose this artwork <span aria-hidden="true">-&gt;</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-xl bg-orange-50 p-6">
              <h3 className="text-xl font-bold text-slate-950">
                This story is still being illustrated
              </h3>
              <p className="mt-2 max-w-2xl leading-7 text-slate-700">
                We don&apos;t have a {breed.name} piece in {collection.title}{' '}
                yet. Explore the available {breed.name} artwork or try another
                theme.
              </p>
              <Link
                className="mt-5 inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white"
                to={`/breeds/${breed.slug}`}
              >
                View {breed.name} artwork
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

export default StartPage
