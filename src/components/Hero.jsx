import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import ParticleField from './ParticleField.jsx'
import { HERO_PHRASES, SITE } from '../data.js'

function RotatingPhrase({ index }) {
  return (
    <span className="relative inline-block overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: '105%' }}
          animate={{ y: 0 }}
          exit={{ y: '-105%' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block bg-gradient-to-r from-electric via-volt to-plasma bg-clip-text text-transparent"
        >
          {HERO_PHRASES[index].text}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

// Icon fallback card for phrases without an image (People Operations).
function PeopleVisual() {
  return (
    <div className="grid h-full w-full place-items-center bg-ink-800">
      <div className="relative">
        <div className="absolute -inset-16 rounded-full bg-electric/15 blur-3xl" />
        <svg viewBox="0 0 24 24" className="relative h-28 w-28 text-electric" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3 20c0-3 2.5-5 6-5s6 2 6 5m2-4c2.2.3 4 1.7 4 4" />
        </svg>
      </div>
    </div>
  )
}

// Right-side visual, crossfading in sync with the rotating headline phrase.
function Showcase({ index }) {
  const phrase = HERO_PHRASES[index]
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative hidden lg:block"
      aria-hidden="true"
    >
      {/* Glow behind the frame */}
      <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-electric/20 via-transparent to-volt/20 blur-2xl" />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/12 bg-ink-800 shadow-[0_24px_80px_-20px_rgba(56,232,255,0.25)] [transform:perspective(1200px)_rotateY(-6deg)_rotateX(2deg)]">
          <AnimatePresence mode="sync">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              {phrase.image ? (
                <img
                  src={phrase.image}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              ) : (
                <PeopleVisual />
              )}
              {/* Duotone overlay to keep third-party imagery on-brand */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/15 to-ink-950/30" />
            </motion.div>
          </AnimatePresence>

          {/* Caption chip */}
          <div className="absolute bottom-4 left-4 z-10">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink-950/80 px-3.5 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.15em] text-mist-100 backdrop-blur"
              >
                <svg viewBox="0 0 24 24" className="h-3 w-3 fill-volt" aria-hidden="true">
                  <path d="M13 2 4.5 14H11l-1.5 8L18 10h-6.5L13 2z" />
                </svg>
                {phrase.label}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Progress dots */}
          <div className="absolute bottom-5 right-5 z-10 flex gap-1.5">
            {HERO_PHRASES.map((p, i) => (
              <span
                key={p.text}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? 'w-5 bg-volt' : 'w-1.5 bg-white/25'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const [index, setIndex] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => {
      if (document.hidden) return // don't swap while tab is backgrounded — animations are paused
      setIndex((i) => (i + 1) % HERO_PHRASES.length)
    }, 3200)
    return () => clearInterval(id)
  }, [reduced])

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Backdrop layers */}
      <ParticleField className="absolute inset-0 z-0" />
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute -left-40 top-1/4 h-[420px] w-[420px] animate-float rounded-full bg-electric/15 blur-[130px]" />
        <div className="absolute -right-40 bottom-1/4 h-[460px] w-[460px] animate-float rounded-full bg-plasma/15 blur-[140px] [animation-delay:-4s]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 pb-20 pt-40 lg:grid-cols-[1.05fr_0.95fr] lg:pt-32">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-7 flex">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-wide text-mist-300 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-volt opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-volt" />
              </span>
              Now taking on new projects
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-mist-100 sm:text-6xl"
          >
            We engineer
            <br />
            <RotatingPhrase index={index} />
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-xl text-lg leading-relaxed text-mist-500">
            {SITE.fullName} is a founder-led consulting collective spanning EV battery
            design, software engineering, applied AI, HR, and video production.
            Plug in the expertise you need — exactly when you need it.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-volt px-7 py-3.5 font-display text-base font-bold text-ink-950 transition-transform hover:scale-105 active:scale-95"
            >
              Start a project
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-display text-base font-semibold text-mist-100 transition-colors hover:border-volt/50 hover:text-volt"
            >
              Explore services
            </a>
          </motion.div>

          <motion.p variants={item} className="mt-14 text-sm font-medium tracking-wide text-mist-500">
            <span className="text-mist-300">5 practice areas</span> · Founder-led ·{' '}
            {SITE.location}
          </motion.p>
        </motion.div>

        <Showcase index={index} />
      </div>
    </section>
  )
}
