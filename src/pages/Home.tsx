import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import PhotoGallery from '../components/PhotoGallery'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollingBackground from '../components/ScrollingBackground'

function Home() {
  const [selectedStart, setSelectedStart] = useState<string | null>(null)
  const [selectedEnd, setSelectedEnd] = useState<string | null>(null)

  const handleDateChange = (start: string | null, end: string | null) => {
    setSelectedStart(start)
    setSelectedEnd(end)
  }

  return (
    <>
      <ScrollingBackground />
      <Header />
      <main>
        <Hero
          selectedStart={selectedStart}
          selectedEnd={selectedEnd}
          onDateChange={handleDateChange}
        />
        <Services />
        <PhotoGallery />
        <About />
        <Contact
          selectedStart={selectedStart}
          selectedEnd={selectedEnd}
          onDateChange={handleDateChange}
        />
      </main>
      <Footer />
    </>
  )
}

export default Home
