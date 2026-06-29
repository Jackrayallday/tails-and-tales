import { Link } from 'react-router-dom'
import { breeds } from '../data/breeds.js'

function BreedsPage() {
  return (
    <main className="flex-1 bg-[#fbf7ef] px-6 pb-16 pt-36 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-orange-700">
            Browse Breeds
          </p>
          <h1 className="text-4xl font-bold text-slate-950 sm:text-5xl">
            Find artwork by breed
          </h1>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {breeds.map((breed) => (
            <Link
              className="group overflow-hidden rounded-xl bg-white text-slate-950 shadow-lg shadow-slate-950/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/15 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-4"
              to={`/breeds/${breed.slug}`}
              key={breed.slug}
            >
              <img
                className="aspect-[4/3] w-full object-cover transition group-hover:scale-105"
                src={breed.image}
                alt={`${breed.name} artwork`}
              />
              <div className="p-5">
                <h2 className="text-xl font-bold">{breed.name}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {breed.size} | {breed.temperament.slice(0, 2).join(', ')}
                </p>
                <p className="mt-3 text-sm font-semibold text-orange-700">
                  Explore breed <span aria-hidden="true">-&gt;</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export default BreedsPage
