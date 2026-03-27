import React, { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/layout/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Process from './sections/Process'
import Services from './sections/Services'
import CTA from './sections/CTA'
import Footer from './components/layout/Footer'
import { Analytics } from '@vercel/analytics/react';
import CustomCursor from './components/ui/CustomCursor'

gsap.registerPlugin(ScrollTrigger)

const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    // sync Lenis scroll position with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // sync Lenis with GSAP's ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [])

  return (
    <>
      <CustomCursor/>
      <Navbar />
      <Hero />
      <About />
      <Services/>
      <Process />
      <CTA />
      <Footer />
      <Analytics />
    </>
  )
}

export default App