import { Link, useParams } from 'react-router-dom'
import { popularBreeds } from '../data/galleryData.js'
import NotFoundPage from './NotFoundPage.jsx'

function BreedDetailPage() {
  const { slug } = useParams()
  const breed = popularBreeds.find((item) => item.slug === slug)

  if (!breed) {
    return <NotFoundPage />
  }

  return (
    <main className="flex-1 bg-[#fbf7ef] px-6 pb-16 pt-36 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <img
          className="w-full rounded-xl object-cover shadow-xl shadow-slate-950/15"
          src={breed.image}
          alt={`${breed.name} artwork`}
        />

        <div>
          <Link className="mb-6 inline-block font-semibold text-orange-700" to="/breeds">
            &lt;- All breeds
          </Link>
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-orange-700">
            Breed Gallery
          </p>
          <h1 className="text-5xl font-bold text-slate-950">{breed.name}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            This page is ready for breed-specific artwork, collections, and
            product options. The route is powered by the slug:{' '}
            <span className="font-semibold text-slate-950">{breed.slug}</span>.
          </p>
        </div>
      </div>
    </main>
  )
}

export default BreedDetailPage
