import { popularBreeds } from '../../data/galleryData.js'
import SectionHeader from '../ui/SectionHeader.jsx'

function PopularBreeds() {
  return (
    <section className="mx-auto max-w-7xl border-t border-slate-200 px-6 py-9 lg:px-10">
      <SectionHeader title="Popular Breeds" action="View all breeds" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {popularBreeds.map((breed, index) => (
          <article
            className="overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-950/10"
            key={breed.name}
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
              <a
                className="flex items-center justify-between text-sm font-semibold text-slate-950"
                href={`/breeds/${breed.name.toLowerCase().replaceAll(' ', '-')}`}
              >
                Explore <span aria-hidden="true">-&gt;</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PopularBreeds
