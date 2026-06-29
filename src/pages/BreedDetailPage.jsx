import { Link, useParams } from 'react-router-dom'
import { artworks } from '../data/artworks.js'
import { breeds } from '../data/breeds.js'
import { collections } from '../data/collections.js'
import NotFoundPage from './NotFoundPage.jsx'

function BreedDetailPage() {
  const { slug } = useParams()
  const breed = breeds.find((item) => item.slug === slug)

  if (!breed) {
    return <NotFoundPage />
  }

  const featuredArtwork = artworks.find(
    (artwork) => artwork.slug === breed.featuredArtwork,
  )
  const breedCollections = collections.filter((collection) =>
    breed.collectionIds.includes(collection.slug),
  )

  return (
    <main className="flex-1 bg-[#fbf7ef] px-6 pb-16 pt-36 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <img
          className="w-full rounded-xl object-cover shadow-xl shadow-slate-950/15"
          src={breed.image}
          alt={`${breed.name} artwork`}
        />

        <div>
          <Link
            className="mb-6 inline-block font-semibold text-orange-700"
            to="/breeds"
          >
            &lt;- All breeds
          </Link>
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-orange-700">
            Breed Gallery
          </p>
          <h1 className="text-5xl font-bold text-slate-950">{breed.name}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            {breed.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 shadow-sm">
              {breed.size}
            </span>
            {breed.temperament.map((trait) => (
              <span
                className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-800"
                key={trait}
              >
                {trait}
              </span>
            ))}
          </div>

          {featuredArtwork ? (
            <Link
              className="mt-8 block overflow-hidden rounded-xl bg-white text-slate-950 shadow-lg shadow-slate-950/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/15 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-4"
              to={`/artworks/${featuredArtwork.slug}`}
            >
              <img
                className="aspect-[4/3] w-full object-cover"
                src={featuredArtwork.image}
                alt={`${featuredArtwork.title} artwork`}
              />
              <div className="p-5">
                <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
                  Featured Artwork
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950">
                  {featuredArtwork.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  {featuredArtwork.description}
                </p>
                <p className="mt-4 font-bold text-slate-950">
                  ${featuredArtwork.price}
                </p>
              </div>
            </Link>
          ) : null}

          <div className="mt-8">
            <h2 className="text-xl font-bold text-slate-950">
              Available collections
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {breedCollections.map((collection) => (
                <Link
                  className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white"
                  to={`/collections/${collection.slug}`}
                  key={collection.slug}
                >
                  {collection.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BreedDetailPage
