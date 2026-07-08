import { NAV_LINKS, SERVICES, SITE } from '../data.js'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-900/60">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric to-volt">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-ink-950" aria-hidden="true">
                <path d="M13 2 4.5 14H11l-1.5 8L18 10h-6.5L13 2z" />
              </svg>
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-mist-100">
              {SITE.name}
              <span className="text-volt">.</span>
            </span>
          </a>
          <p className="max-w-xs text-sm leading-relaxed text-mist-500">{SITE.tagline}</p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-mist-300">
            Services
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <a href="#services" className="text-sm text-mist-500 transition-colors hover:text-volt">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-mist-300">
            Company
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-mist-500 transition-colors hover:text-volt">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="text-sm text-mist-500 transition-colors hover:text-volt">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-mist-300">
            Get in touch
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            <li>
              <a href={`mailto:${SITE.email}`} className="text-sm text-volt transition-colors hover:text-electric">
                {SITE.email}
              </a>
            </li>
            <li className="text-sm text-mist-500">{SITE.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row">
          <p className="text-xs text-mist-500">
            © {new Date().getFullYear()} {SITE.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-mist-500">
            Built with <span className="text-volt">⚡</span> by the founders
          </p>
        </div>
      </div>
    </footer>
  )
}
