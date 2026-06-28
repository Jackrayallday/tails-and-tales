import Benefits from '../components/sections/Benefits.jsx'
import BreedSearch from '../components/sections/BreedSearch.jsx'
import FeaturedCollections from '../components/sections/FeaturedCollections.jsx'
import HeroSection from '../components/sections/HeroSection.jsx'
import PopularBreeds from '../components/sections/PopularBreeds.jsx'

function StoreHome() {
  return (
    <main className="flex-1 bg-[#fbf7ef]">
      <HeroSection />
      <BreedSearch />
      <PopularBreeds />
      <FeaturedCollections />
      <Benefits />
    </main>
  )
}

export default StoreHome
