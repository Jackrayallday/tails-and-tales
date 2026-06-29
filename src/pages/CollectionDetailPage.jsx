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
    <main className="flex-1 bg-[#fbf7ef] px-6 pb-16 pt-36 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div>
          <Link
            className="mb-6 inline-block font-semibold text-orange-700"
            to="/collections"
          >
            &lt;- All collections
          </Link>
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-orange-700">
            Collection
          </p>
          <h1 className="text-5xl font-bold text-slate-950">
            {collection.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            {collection.description}
          </p>
          <p className="mt-4 font-semibold text-slate-950">
            {collection.theme} | {collection.count}
          </p>

          <ArtworkBrowse
            artworks={collectionArtworks}
            title={`${collection.title} artwork`}
            description="Filter this collection by breed, style, and price."
            lockedCollection={collection.slug}
          />
        </div>
      </div>
    </main>
  )
}

export default CollectionDetailPage
