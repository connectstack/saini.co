import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { PROCESS_STEPS } from '../data.js'

export default function Process() {
  const lineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ['start 75%', 'end 60%'],
  })
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })

  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        kicker="How we work"
        title="A process with zero surprises."
        sub="Fixed scope, weekly demos, honest updates. Here is exactly what happens after you say hello."
      />

      <div ref={lineRef} className="relative mx-auto mt-16 max-w-3xl">
        {/* Track + animated progress line */}
        <div className="absolute bottom-6 left-[19px] top-2 w-px bg-white/10 sm:left-[23px]" />
        <motion.div
          className="absolute bottom-6 left-[19px] top-2 w-px origin-top bg-gradient-to-b from-electric to-volt sm:left-[23px]"
          style={{ scaleY: lineScale }}
        />

        <ol className="flex flex-col gap-14">
          {PROCESS_STEPS.map((step, i) => (
            <li key={step.num}>
              <Reveal delay={i * 0.08} className="relative flex gap-6 sm:gap-8">
                <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-volt/40 bg-ink-950 font-display text-sm font-bold text-volt sm:h-12 sm:w-12">
                  {step.num}
                </span>
                <div className="pt-1.5">
                  <h3 className="font-display text-xl font-bold tracking-tight text-mist-100 sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-mist-500 sm:text-base">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
