import { motion, useScroll, useSpring } from 'framer-motion'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Services from './components/Services.jsx'
import Stats from './components/Stats.jsx'
import Process from './components/Process.jsx'
import Team from './components/Team.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.4 })

  return (
    <div className="relative">
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-electric via-volt to-plasma"
        style={{ scaleX: progress }}
      />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <Process />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
