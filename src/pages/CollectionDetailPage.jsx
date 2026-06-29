import { Link, useParams } from 'react-router-dom'
import { collections } from '../data/galleryData.js'
import NotFoundPage from './NotFoundPage.jsx'

function CollectionDetailPage() {
  const { slug } = useParams()
  const collection = collections.find((item) => item.slug === slug)

  if (!collection) {
    return <NotFoundPage />
  }

  return (
    <main className="flex-1 bg-[#fbf7ef] px-6 pb-16 pt-36 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
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
            This collection route is ready for themed artwork and products. The
            route is powered by the slug:{' '}
            <span className="font-semibold text-slate-950">
              {collection.slug}
            </span>.
          </p>
          <p className="mt-4 font-semibold text-slate-950">
            {collection.count}
          </p>
        </div>

        <img
          className="w-full rounded-xl object-cover shadow-xl shadow-slate-950/15"
          src={collection.image}
          alt={`${collection.title} collection`}
        />
      </div>
    </main>
  )
}

export default CollectionDetailPage
