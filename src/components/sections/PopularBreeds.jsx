import { popularBreeds } from '../../data/galleryData.js'
import SectionHeader from '../ui/SectionHeader.jsx'

function PopularBreeds() {
  return (
    <section className="mx-auto max-w-7xl border-t border-slate-200 px-6 py-9 lg:px-10">
      <SectionHeader title="Popular Breeds" action="View all breeds" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {popularBreeds.map((breed, index) => (
          <a
            className="group block overflow-hidden rounded-xl bg-white text-slate-950 shadow-lg shadow-slate-950/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/15 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-4"
            href={`/breeds/${breed.slug}`}
            key={breed.slug}
          >
            {breed.image ? (
              <img
                className="aspect-square w-full object-cover"
                src={breed.image}
                alt={`${breed.name} artwork`}
              />
            ) : (
              <div className="flex aspect-square items-center justify-center bg-linear-to-br from-orange-100 via-stone-200 to-sky-100 text-center text-sm font-semibold text-slate-500">
                Breed artwork {index + 1}
              </div>
            )}
            <div className="p-4">
              <h3 className="mb-7 min-h-10 font-bold text-slate-950">
                {breed.name}
              </h3>
              <span className="flex items-center justify-between text-sm font-semibold text-slate-950">
                Explore{' '}
                <span
                  className="transition group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  -&gt;
                </span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default PopularBreeds
