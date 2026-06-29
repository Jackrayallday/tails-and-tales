import { Link, useParams } from 'react-router-dom'
import { artworks } from '../data/artworks.js'
import { collections } from '../data/collections.js'
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

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {collectionArtworks.map((artwork) => (
              <Link
                className="group overflow-hidden rounded-xl bg-white text-slate-950 shadow-lg shadow-slate-950/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/15 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-4"
                to={`/artworks/${artwork.slug}`}
                key={artwork.slug}
              >
                <img
                  className="aspect-[4/3] w-full object-cover transition group-hover:scale-105"
                  src={artwork.image}
                  alt={`${artwork.title} artwork`}
                />
                <div className="p-5">
                  <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
                    ${artwork.price}
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-slate-950">
                    {artwork.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {artwork.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default CollectionDetailPage
