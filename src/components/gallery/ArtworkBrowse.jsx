import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { breeds } from '../../data/breeds.js'
import { collections } from '../../data/collections.js'

const sortOptions = [
  ['newest', 'Newest'],
  ['popular', 'Popular'],
  ['price-low', 'Price low to high'],
  ['price-high', 'Price high to low'],
]

const priceOptions = [
  ['all', 'All prices'],
  ['under-30', 'Under $30'],
  ['30-34', '$30 to $34'],
  ['35-plus', '$35 and up'],
]

function byLabel(items, valueKey, labelKey) {
  return items.map((item) => [item[valueKey], item[labelKey]])
}

function getPriceMatch(price, priceRange) {
  if (priceRange === 'under-30') return price < 30
  if (priceRange === '30-34') return price >= 30 && price <= 34
  if (priceRange === '35-plus') return price >= 35
  return true
}

function getSortedArtworks(items, sort) {
  return [...items].sort((a, b) => {
    if (sort === 'popular') return b.popularity - a.popularity
    if (sort === 'price-low') return a.price - b.price
    if (sort === 'price-high') return b.price - a.price
    return new Date(b.createdAt) - new Date(a.createdAt)
  })
}

function FilterSelect({ label, value, onChange, options }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-slate-950">
      {label}
      <select
        className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map(([optionValue, optionLabel]) => (
          <option value={optionValue} key={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    </label>
  )
}

function ArtworkBrowse({
  artworks,
  title = 'Artwork',
  description,
  lockedBreed,
  lockedCollection,
  hideHeader = false,
}) {
  const [breedFilter, setBreedFilter] = useState(lockedBreed ?? 'all')
  const [collectionFilter, setCollectionFilter] = useState(
    lockedCollection ?? 'all',
  )
  const [styleFilter, setStyleFilter] = useState('all')
  const [priceFilter, setPriceFilter] = useState('all')
  const [sort, setSort] = useState('newest')

  const breedNames = useMemo(() => new Map(breeds.map((breed) => [breed.slug, breed.name])), [])
  const collectionNames = useMemo(
    () =>
      new Map(
        collections.map((collection) => [collection.slug, collection.title]),
      ),
    [],
  )

  const styleOptions = useMemo(() => {
    const styles = [...new Set(artworks.map((artwork) => artwork.style))].sort()
    return [['all', 'All styles'], ...styles.map((style) => [style, style])]
  }, [artworks])

  const filteredArtworks = useMemo(() => {
    const filtered = artworks.filter((artwork) => {
      const matchesBreed =
        breedFilter === 'all' || artwork.breedSlug === breedFilter
      const matchesCollection =
        collectionFilter === 'all' ||
        artwork.collectionSlug === collectionFilter
      const matchesStyle =
        styleFilter === 'all' || artwork.style === styleFilter
      const matchesPrice = getPriceMatch(artwork.price, priceFilter)

      return matchesBreed && matchesCollection && matchesStyle && matchesPrice
    })

    return getSortedArtworks(filtered, sort)
  }, [artworks, breedFilter, collectionFilter, priceFilter, sort, styleFilter])

  const artworkGroups = useMemo(() => {
    const groups = new Map()

    filteredArtworks.forEach((artwork) => {
      const groupKey = artwork.seriesSlug ?? artwork.slug
      const existingGroup = groups.get(groupKey)

      if (existingGroup) {
        existingGroup.push(artwork)
      } else {
        groups.set(groupKey, [artwork])
      }
    })

    return [...groups.values()]
  }, [filteredArtworks])

  return (
    <section
      className={hideHeader ? 'mt-7' : 'mt-9'}
      aria-labelledby={hideHeader ? undefined : 'artwork-browse-title'}
      aria-label={hideHeader ? `${title} gallery` : undefined}
    >
      {hideHeader ? null : (
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-orange-700">
              Browse Gallery
            </p>
            <h2
              className="text-3xl font-bold text-slate-950 sm:text-4xl"
              id="artwork-browse-title"
            >
              {title}
            </h2>
            {description ? (
              <p className="mt-3 max-w-2xl leading-7 text-slate-700">
                {description}
              </p>
            ) : null}
          </div>
          <p className="text-sm font-bold text-slate-500">
            {artworkGroups.length} designs from {filteredArtworks.length}{' '}
            artworks
          </p>
        </div>
      )}

      <div
        className={`${hideHeader ? '' : 'mt-6'} grid items-start gap-6 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-8`}
      >
        <aside
          className="grid gap-4 rounded-xl bg-white p-4 shadow-lg shadow-slate-950/10 sm:grid-cols-2 lg:sticky lg:top-28 lg:grid-cols-1"
          aria-label="Artwork filters"
        >
          <h3 className="text-lg font-bold text-slate-950 sm:col-span-2 lg:col-span-1">
            Filters
          </h3>
        {lockedBreed ? null : (
          <FilterSelect
            label="Breed"
            value={breedFilter}
            onChange={setBreedFilter}
            options={[['all', 'All breeds'], ...byLabel(breeds, 'slug', 'name')]}
          />
        )}
        {lockedCollection ? null : (
          <FilterSelect
            label="Collection"
            value={collectionFilter}
            onChange={setCollectionFilter}
            options={[
              ['all', 'All collections'],
              ...byLabel(collections, 'slug', 'title'),
            ]}
          />
        )}
        <FilterSelect
          label="Style"
          value={styleFilter}
          onChange={setStyleFilter}
          options={styleOptions}
        />
        <FilterSelect
          label="Price"
          value={priceFilter}
          onChange={setPriceFilter}
          options={priceOptions}
        />
        <FilterSelect
          label="Sort"
          value={sort}
          onChange={setSort}
          options={sortOptions}
        />
        </aside>

        {filteredArtworks.length ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {artworkGroups.map((group) => {
            const artwork = group[0]
            const isSeries = group.length > 1

            return (
              <Link
                className="group overflow-hidden rounded-xl bg-white text-slate-950 shadow-lg shadow-slate-950/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/15 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-4"
                to={`/artworks/${artwork.slug}`}
                key={artwork.seriesSlug ?? artwork.slug}
              >
                <div className="relative overflow-hidden">
                  <img
                    className="aspect-[4/3] w-full object-cover transition group-hover:scale-105"
                    src={artwork.image}
                    alt={`${artwork.seriesTitle ?? artwork.title} artwork`}
                  />
                  {isSeries ? (
                    <span className="absolute bottom-3 left-3 rounded-full bg-slate-950/90 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur">
                      {group.length} breeds available
                    </span>
                  ) : null}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-orange-700">
                      {artwork.style}
                    </p>
                    <p className="text-sm font-bold text-slate-950">
                      ${artwork.price}
                    </p>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-slate-950">
                    {artwork.seriesTitle ?? artwork.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-slate-500">
                    {isSeries
                      ? `${group.length} breed variants`
                      : `${breedNames.get(artwork.breedSlug)} | ${collectionNames.get(artwork.collectionSlug)}`}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {isSeries
                      ? 'A candlelit fantasy map room, available with your favorite breed as the royal cartographer.'
                      : artwork.description}
                  </p>
                </div>
              </Link>
            )
          })}
          </div>
        ) : (
          <div className="rounded-xl bg-white p-8 text-center shadow-lg shadow-slate-950/10">
            <h3 className="text-2xl font-bold text-slate-950">
              No artwork matches those filters
            </h3>
            <p className="mt-3 text-slate-600">
              Try a different breed, collection, style, or price range.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ArtworkBrowse
