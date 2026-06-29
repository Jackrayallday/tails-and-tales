import { Link, useParams } from 'react-router-dom'
import { artworks } from '../data/artworks.js'
import { breeds } from '../data/breeds.js'
import { collections } from '../data/collections.js'
import ArtworkBrowse from '../components/gallery/ArtworkBrowse.jsx'
import NotFoundPage from './NotFoundPage.jsx'

function BreedDetailPage() {
  const { slug } = useParams()
  const breed = breeds.find((item) => item.slug === slug)

  if (!breed) {
    return <NotFoundPage />
  }

  const breedArtworks = artworks.filter((artwork) => artwork.breedSlug === breed.slug)
  const breedCollections = collections.filter((collection) =>
    breed.collectionIds.includes(collection.slug),
  )

  return (
    <main className="flex-1 bg-[#fbf7ef] px-6 pb-16 pt-36 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
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

        <ArtworkBrowse
          artworks={breedArtworks}
          title={`${breed.name} artwork`}
          description="Filter this breed's gallery by collection, style, and price."
          lockedBreed={breed.slug}
        />
      </div>
    </main>
  )
}

export default BreedDetailPage
