import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { artworks } from '../data/artworks.js'
import { breeds } from '../data/breeds.js'
import { collections } from '../data/collections.js'
import NotFoundPage from './NotFoundPage.jsx'

const printSizes = ['8 x 10', '11 x 14', '16 x 20']
const printFormats = ['Fine art print', 'Framed print', 'Canvas']

function ArtworkDetailPage() {
  const { slug } = useParams()
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
