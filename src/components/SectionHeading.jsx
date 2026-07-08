import Reveal from './Reveal.jsx'

export default function SectionHeading({ kicker, title, sub, align = 'center' }) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <Reveal className={`flex flex-col gap-4 ${alignClass}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-display text-xs font-medium uppercase tracking-[0.2em] text-electric">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-volt" aria-hidden="true">
          <path d="M13 2 4.5 14H11l-1.5 8L18 10h-6.5L13 2z" />
        </svg>
        {kicker}
      </span>
      <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-mist-100 sm:text-5xl">
        {title}
      </h2>
      {sub && <p className="max-w-xl text-base leading-relaxed text-mist-500">{sub}</p>}
    </Reveal>
  )
}
