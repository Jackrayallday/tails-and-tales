import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { artworks } from '../data/artworks.js'
import { breeds } from '../data/breeds.js'
import { collections } from '../data/collections.js'
import NotFoundPage from './NotFoundPage.jsx'

const printSizes = ['8 x 10', '11 x 14', '16 x 20']
const printFormats = ['Fine art print', 'Framed print', 'Canvas']

function ArtworkDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const artwork = artworks.find((item) => item.slug === slug)
  const [selectedSize, setSelectedSize] = useState(printSizes[0])
  const [selectedFormat, setSelectedFormat] = useState(printFormats[0])

  if (!artwork) {
    return <NotFoundPage />
  }

  const breed = breeds.find((item) => item.slug === artwork.breedSlug)
  const collection = collections.find(
    (item) => item.slug === artwork.collectionSlug,
  )
  const seriesArtworks = artwork.seriesSlug
    ? artworks.filter((item) => item.seriesSlug === artwork.seriesSlug)
    : []

  return (
    <main className="flex-1 bg-[#fbf7ef] px-6 pb-16 pt-36 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <img
          className="w-full rounded-xl object-cover shadow-xl shadow-slate-950/15"
          src={artwork.image}
          alt={`${artwork.title} artwork`}
        />

        <div>
          {collection ? (
            <Link
              className="mb-6 inline-block font-semibold text-orange-700"
              to={`/collections/${collection.slug}`}
            >
              &lt;- {collection.title}
            </Link>
          ) : null}

          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-orange-700">
            Artwork
          </p>
          <h1 className="text-5xl font-bold text-slate-950">
            {artwork.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            {artwork.description}
          </p>
          <p className="mt-4 text-2xl font-bold text-slate-950">
            ${artwork.price}
          </p>

          {seriesArtworks.length > 1 ? (
            <div className="mt-8">
              <label
                className="block text-xl font-bold text-slate-950"
                htmlFor="breed-variant"
              >
                Choose a breed
              </label>
              <div className="relative mt-4 max-w-md">
                <select
                  className="h-14 w-full appearance-none rounded-xl border-2 border-slate-200 bg-white px-4 pr-12 text-base font-bold text-slate-950 shadow-md shadow-slate-950/5 transition hover:border-orange-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-200/70"
                  id="breed-variant"
                  value={artwork.slug}
                  onChange={(event) => navigate(`/artworks/${event.target.value}`)}
                >
                  {seriesArtworks.map((variant) => {
                    const variantBreed = breeds.find(
                      (item) => item.slug === variant.breedSlug,
                    )

                    return (
                      <option value={variant.slug} key={variant.slug}>
                        {variant.variantLabel ??
                          variantBreed?.name ??
                          'Breed variant'}
                      </option>
                    )
                  })}
                </select>
                <span
                  className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-orange-700"
                  aria-hidden="true"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m5 7.5 5 5 5-5" />
                  </svg>
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                {seriesArtworks.length} breed options available
              </p>
            </div>
          ) : null}

          <div className="mt-8">
            <h2 className="text-xl font-bold text-slate-950">Print size</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {printSizes.map((size) => (
                <button
                  className={`rounded-xl border-2 px-4 py-3 text-sm font-bold ${
                    selectedSize === size
                      ? 'border-slate-950 bg-slate-950 text-white'
                      : 'border-slate-200 bg-white text-slate-950'
                  }`}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  key={size}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-slate-950">Format</h2>
            <div className="mt-4 grid gap-3">
              {printFormats.map((format) => (
                <button
                  className={`rounded-xl border-2 px-4 py-3 text-left text-sm font-bold ${
                    selectedFormat === format
                      ? 'border-slate-950 bg-slate-950 text-white'
                      : 'border-slate-200 bg-white text-slate-950'
                  }`}
                  type="button"
                  onClick={() => setSelectedFormat(format)}
                  key={format}
                >
                  {format}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-white p-5 shadow-lg shadow-slate-950/10">
            <p className="font-bold text-slate-950">
              {selectedSize} {selectedFormat}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {breed ? `${breed.name} artwork` : 'Custom artwork'} from{' '}
              {collection ? collection.title : 'the gallery'}.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ArtworkDetailPage
