import Footer from './components/layout/Footer.jsx'
import Header from './components/layout/Header.jsx'
import StoreHome from './pages/StoreHome.jsx'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fbf7ef] text-slate-800">
      <Header />
      <StoreHome />
      <Footer />
    </div>
  )
}

export default App
