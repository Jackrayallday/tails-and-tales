import { collections } from '../../data/galleryData.js'
import SectionHeader from '../ui/SectionHeader.jsx'

function FeaturedCollections() {
  return (
    <section className="mx-auto max-w-7xl border-t border-slate-200 px-6 py-9 lg:px-10">
      <SectionHeader title="Featured Collections" action="View all collections" />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {collections.map((collection, index) => (
          <article
            className="relative min-h-72 overflow-hidden rounded-xl bg-slate-900 shadow-lg shadow-slate-950/15"
            key={collection.title}
          >
            {collection.image ? (
              <img
                className="absolute inset-0 h-full w-full object-cover object-[75%_center]"
                src={collection.image}
                alt={`${collection.title} collection`}
              />
            ) : (
              <div className="absolute inset-0 bg-linear-to-br from-orange-300 via-slate-700 to-slate-950 opacity-80" />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/15 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-5 text-white">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-white/60">
                Collection {index + 1}
              </p>
              <h3 className="text-2xl font-bold leading-tight">
                {collection.title}
              </h3>
              <p className="mt-2 font-semibold">{collection.count}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturedCollections
