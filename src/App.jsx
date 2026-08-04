import { Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer.jsx'
import Header from './components/layout/Header.jsx'
import ScrollToTop from './components/routing/ScrollToTop.jsx'
import BasicPage from './pages/BasicPage.jsx'
import ArtworkDetailPage from './pages/ArtworkDetailPage.jsx'
import BreedDetailPage from './pages/BreedDetailPage.jsx'
import BreedsPage from './pages/BreedsPage.jsx'
import CollectionDetailPage from './pages/CollectionDetailPage.jsx'
import CollectionsPage from './pages/CollectionsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import StartPage from './pages/StartPage.jsx'
import StoreHome from './pages/StoreHome.jsx'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fbf7ef] text-slate-800">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<StoreHome />} />
        <Route path="/breeds" element={<BreedsPage />} />
        <Route path="/breeds/:slug" element={<BreedDetailPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/collections/:slug" element={<CollectionDetailPage />} />
        <Route path="/artworks/:slug" element={<ArtworkDetailPage />} />
        <Route
          path="/how-it-works"
          element={
            <BasicPage
              title="How It Works"
              description="Choose a breed, explore a world, and find artwork made for dog lovers."
            />
          }
        />
        <Route
          path="/about"
          element={
            <BasicPage
              title="About Tails & Tales"
              description="A playful gallery concept for custom dog artwork, magical settings, and future e-commerce flows."
            />
          }
        />
        <Route path="/start" element={<StartPage />} />
        <Route
          path="/user"
          element={
            <BasicPage
              title="User Page"
              description="User page goes here for now."
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
