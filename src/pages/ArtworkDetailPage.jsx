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
    <main className="flex-1 bg-[#fbf7ef] px-6 pb-20 pt-32 lg:px-10 lg:pt-36">
      <div className="mx-auto max-w-7xl">
        {collection ? (
          <Link
            className="group mb-6 inline-flex items-center gap-2 rounded-xl border-2 border-slate-950 bg-white px-4 py-2.5 text-sm font-bold text-slate-950 shadow-sm transition hover:bg-slate-950 hover:text-white hover:shadow-lg hover:shadow-slate-950/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
            to={`/collections/${collection.slug}`}
          >
            <svg
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            Back to {collection.title}
          </Link>
        ) : null}

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)] lg:items-start xl:gap-14">
          <figure className="lg:sticky lg:top-28">
            <div className="flex min-h-[28rem] items-center justify-center lg:min-h-[36rem]">
              <img
                className="max-h-[calc(100vh-11rem)] max-w-full rounded-xl object-contain shadow-2xl shadow-slate-950/20"
                src={artwork.image}
                alt={`${artwork.title} artwork`}
              />
            </div>
            <figcaption className="mt-3 px-1 text-sm text-slate-600">
              <span>{artwork.title}</span>
            </figcaption>
          </figure>

          <div className="rounded-2xl bg-white p-6 shadow-xl shadow-slate-950/10 sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              {breed ? (
                <Link
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-200 hover:text-slate-950"
                  to={`/breeds/${breed.slug}`}
                >
                  {breed.name}
                </Link>
              ) : null}
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              {artwork.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              {artwork.description}
            </p>
            <p className="mt-5 text-3xl font-bold text-slate-950">
              ${artwork.price}
            </p>

          {seriesArtworks.length > 1 ? (
            <div className="mt-8 border-t border-slate-200 pt-8">
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
                  className={`rounded-xl border-2 px-4 py-3 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${
                    selectedSize === size
                      ? 'border-slate-950 bg-slate-950 text-white'
                      : 'border-slate-200 bg-white text-slate-950 hover:border-slate-500'
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
                  className={`rounded-xl border-2 px-4 py-3 text-left text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${
                    selectedFormat === format
                      ? 'border-slate-950 bg-slate-950 text-white'
                      : 'border-slate-200 bg-white text-slate-950 hover:border-slate-500'
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

          <div className="mt-8 rounded-xl bg-[#fbf7ef] p-5 ring-1 ring-slate-200">
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
      </div>
    </main>
  )
}

export default ArtworkDetailPage
