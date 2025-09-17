import { Header } from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import VideoSection from './components/VideoSection'
import Products from './components/Products'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header data-id="main-header" />
      <Hero />
      <VideoSection />
      <About />
      <Products />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App