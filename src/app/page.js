import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Styles from './components/Styles'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Styles />
      <Gallery />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
