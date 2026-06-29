import { Link } from 'react-router-dom'
import { collections } from '../data/collections.js'

function CollectionsPage() {
  return (
    <main className="flex-1 bg-[#fbf7ef] px-6 pb-16 pt-36 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-orange-700">
            Browse Collections
          </p>
          <h1 className="text-4xl font-bold text-slate-950 sm:text-5xl">
            Explore artwork worlds
          </h1>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <Link
              className="group relative min-h-80 overflow-hidden rounded-xl bg-slate-900 shadow-lg shadow-slate-950/15 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/20 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-4"
              to={`/collections/${collection.slug}`}
              key={collection.slug}
            >
              <img
                className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-105"
                src={collection.image}
                alt={`${collection.title} collection`}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/15 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-6 text-white">
                <h2 className="text-3xl font-bold">{collection.title}</h2>
                <p className="mt-2 font-semibold">
                  {collection.theme} | {collection.count}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export default CollectionsPage
