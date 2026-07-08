import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { TEAM } from '../data.js'

function Avatar({ initials }) {
  return (
    <div className="relative h-24 w-24">
      <div className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,#38e8ff,#b9ff2e,#8f6bff,#38e8ff)]" />
      <div className="absolute inset-[3px] grid place-items-center rounded-full bg-ink-900">
        <span className="bg-gradient-to-br from-electric to-volt bg-clip-text font-display text-2xl font-bold text-transparent">
          {initials}
        </span>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <section id="team" className="relative border-y border-white/5 bg-ink-900/40">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <SectionHeading
          kicker="Who you'll work with"
          title="Founder-led, by design."
          sub="No account managers, no hand-offs. The people on this page are the people on your project."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <article className="group flex h-full flex-col items-center gap-5 rounded-3xl border border-white/8 bg-ink-800/50 p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-white/15">
                <Avatar initials={member.initials} />
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-mist-100">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-electric">{member.role}</p>
                </div>
                <p className="text-sm leading-relaxed text-mist-500">{member.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
