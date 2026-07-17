import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { SERVICES } from '../data.js'

const ICONS = {
  battery: (
    <path d="M7 7h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2zm14 3h1v4h-1M12 9l-2.5 3.5H12L10.5 15 14 11.5h-2.5L12 9z" />
  ),
  code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16" />,
  sparks: (
    <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-6.5-2 2m-7 7-2 2m11 0-2-2m-7-7-2-2M12 8l1.2 2.8L16 12l-2.8 1.2L12 16l-1.2-2.8L8 12l2.8-1.2L12 8z" />
  ),
  people: (
    <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3 20c0-3 2.5-5 6-5s6 2 6 5m2-4c2.2.3 4 1.7 4 4" />
  ),
  film: (
    <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm3 0v14M17 5v14M3 9h4m10 0h4M3 15h4m10 0h4m-7-4-4-2.5v5L14 11z" />
  ),
}

const ACCENTS = {
  volt: { text: 'text-volt', border: 'hover:border-volt/40', chip: 'border-volt/25 text-volt', btn: 'bg-volt text-ink-950 shadow-[0_0_0_1px_rgba(185,255,46,0.4)] hover:shadow-[0_10px_30px_-8px_rgba(185,255,46,0.5)]' },
  electric: { text: 'text-electric', border: 'hover:border-electric/40', chip: 'border-electric/25 text-electric', btn: 'bg-electric text-ink-950 shadow-[0_0_0_1px_rgba(56,232,255,0.4)] hover:shadow-[0_10px_30px_-8px_rgba(56,232,255,0.5)]' },
  plasma: { text: 'text-plasma', border: 'hover:border-plasma/40', chip: 'border-plasma/25 text-plasma', btn: 'bg-plasma text-white shadow-[0_0_0_1px_rgba(143,107,255,0.4)] hover:shadow-[0_10px_30px_-8px_rgba(143,107,255,0.5)]' },
}

// Decorative battery illustration for the flagship card: cells "charge" in sequence.
function BatteryArt() {
  return (
    <svg viewBox="0 0 200 90" className="h-24 w-auto" aria-hidden="true">
      <rect x="4" y="18" width="168" height="54" rx="10" fill="none" stroke="rgba(185,255,46,0.45)" strokeWidth="3" />
      <rect x="176" y="34" width="14" height="22" rx="4" fill="rgba(185,255,46,0.45)" />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={14 + i * 38}
          y="28"
          width="30"
          height="34"
          rx="6"
          fill="#b9ff2e"
          className="charge-cell"
          style={{ animationDelay: `${i * 0.35}s` }}
        />
      ))}
    </svg>
  )
}

// Decorative terminal illustration for the software card: code lines "type" in sequence.
function CodeArt() {
  const lines = [
    { x: 16, y: 32, width: 92, fill: '#38e8ff' },
    { x: 16, y: 45, width: 132, fill: 'rgba(238,242,250,0.55)' },
    { x: 30, y: 58, width: 82, fill: '#b9ff2e' },
    { x: 30, y: 71, width: 56, fill: '#8f6bff' },
  ]
  return (
    <svg viewBox="0 0 200 90" className="h-24 w-auto" aria-hidden="true">
      <rect x="4" y="4" width="192" height="82" rx="10" fill="none" stroke="rgba(56,232,255,0.45)" strokeWidth="3" />
      {[18, 30, 42].map((cx) => (
        <circle key={cx} cx={cx} cy="16" r="3.5" fill="rgba(56,232,255,0.45)" />
      ))}
      {lines.map((line, i) => (
        <rect
          key={line.y}
          {...line}
          height="7"
          rx="3.5"
          className="charge-cell"
          style={{ animationDelay: `${i * 0.35}s` }}
        />
      ))}
      <rect x="92" y="71" width="8" height="7" rx="2" fill="#38e8ff" className="charge-cell" style={{ animationDelay: '1.4s' }} />
    </svg>
  )
}

const ART = { battery: BatteryArt, code: CodeArt }

function setSpotlight(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

function ServiceCard({ service, delay }) {
  const accent = ACCENTS[service.accent]
  const Art = service.art ? ART[service.art] : null
  return (
    <Reveal
      delay={delay}
      className={service.large ? 'md:col-span-3' : 'md:col-span-2'}
    >
      <article
        onMouseMove={setSpotlight}
        className={`spotlight group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-white/8 bg-ink-800/50 p-8 transition-colors duration-300 ${accent.border}`}
      >
        <div className="flex items-start justify-between gap-4">
          <span className={`grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] ${accent.text}`}>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              {ICONS[service.icon]}
            </svg>
          </span>
          {service.badge && (
            <span className={`hidden rounded-full border bg-white/[0.02] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] sm:block ${accent.chip}`}>
              {service.badge}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-3">
          <h3 className="font-display text-2xl font-bold tracking-tight text-mist-100">
            {service.title}
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-mist-500">{service.blurb}</p>
        </div>

        {Art && (
          <div className="hidden sm:block">
            <Art />
          </div>
        )}

        <ul className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <li
              key={tag}
              className={`rounded-full border bg-white/[0.02] px-3 py-1 text-xs font-medium ${accent.chip}`}
            >
              {tag}
            </li>
          ))}
        </ul>

        {service.link && (
          <a
            href={service.link.href}
            target="_blank"
            rel="noopener"
            className={`group/cta inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 font-display text-sm font-bold transition-transform hover:scale-[1.03] active:scale-95 ${accent.btn}`}
          >
            {service.link.label}
            <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        )}
      </article>
    </Reveal>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        kicker="What we do"
        title="Five practices. One accountable team."
        sub="Every practice is led by a specialist and backed by the founders. Engage one, or combine them — it's one conversation either way."
      />
      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-6">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.id} service={service} delay={i * 0.08} />
        ))}
      </div>
    </section>
  )
}
