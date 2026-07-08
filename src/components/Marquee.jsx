import { MARQUEE_ITEMS } from '../data.js'

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {MARQUEE_ITEMS.map((label) => (
        <span key={label} className="flex items-center">
          <span className="px-6 font-display text-sm font-semibold uppercase tracking-[0.18em] text-mist-500">
            {label}
          </span>
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-volt/70" aria-hidden="true">
            <path d="M13 2 4.5 14H11l-1.5 8L18 10h-6.5L13 2z" />
          </svg>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-ink-900/60 py-5" aria-label="Capabilities">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <Row />
        {/* Visual clone for the seamless loop — hidden from screen readers */}
        <div aria-hidden="true" className="contents">
          <Row />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink-950 to-transparent" />
    </section>
  )
}
