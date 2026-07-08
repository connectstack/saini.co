import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { FAQS } from '../data.js'

function FaqItem({ faq, open, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/8 bg-ink-800/50 transition-colors hover:border-white/15">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
      >
        <span className="font-display text-base font-semibold text-mist-100 sm:text-lg">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-volt"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-mist-500 sm:text-base">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-28">
      <SectionHeading
        kicker="Questions"
        title="Asked and answered."
      />
      <div className="mt-14 flex flex-col gap-4">
        {FAQS.map((faq, i) => (
          <Reveal key={faq.q} delay={i * 0.06}>
            <FaqItem
              faq={faq}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
