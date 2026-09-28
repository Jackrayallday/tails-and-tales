import { Link, useParams } from 'react-router-dom'
import { artworks } from '../data/artworks.js'
import { collections } from '../data/collections.js'
import ArtworkBrowse from '../components/gallery/ArtworkBrowse.jsx'
import NotFoundPage from './NotFoundPage.jsx'

function CollectionDetailPage() {
  const { slug } = useParams()
  const collection = collections.find((item) => item.slug === slug)

  if (!collection) {
    return <NotFoundPage />
  }

  const collectionArtworks = artworks.filter(
    (artwork) => artwork.collectionSlug === collection.slug,
  )

  return (
    <main className="flex-1 bg-[#fbf7ef] px-6 pb-16 pt-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div>
          <div className="grid gap-6 text-center lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-0">
            <Link
              className="group inline-flex items-center gap-2 justify-self-center rounded-xl border-2 border-slate-950 bg-white px-4 py-2.5 text-sm font-bold text-slate-950 shadow-sm transition hover:bg-slate-950 hover:text-white hover:shadow-lg hover:shadow-slate-950/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 lg:justify-self-start"
              to="/collections"
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
              All collections
            </Link>

            <h1 className="text-5xl font-bold text-slate-950 lg:col-start-2">
              {collection.title}
            </h1>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mt-4 text-base leading-7 text-slate-700">
              {collection.description}
            </p>
            <p className="mt-2 text-sm font-bold text-slate-950">
              {collection.theme} <span className="text-slate-400">|</span>{' '}
              {collection.count}
            </p>
          </div>

          <ArtworkBrowse
            artworks={collectionArtworks}
            title={`${collection.title} artwork`}
            lockedCollection={collection.slug}
            hideHeader
          />
        </div>
      </div>
    </main>
  )
}

export default CollectionDetailPage
