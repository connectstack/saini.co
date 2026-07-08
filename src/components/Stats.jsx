import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { STATS } from '../data.js'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref} className="bg-gradient-to-r from-electric to-volt bg-clip-text font-display text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
      {display}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="relative border-y border-white/5 bg-ink-900/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-20 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1} className="flex flex-col items-center gap-3 text-center">
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="max-w-[180px] text-sm leading-snug text-mist-500">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
