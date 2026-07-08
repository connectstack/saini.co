import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { SERVICES, SITE } from '../data.js'

const inputClass =
  'w-full rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500/60 outline-none transition-colors focus:border-electric/60 focus:ring-2 focus:ring-electric/20'

export default function Contact() {
  // idle | sending | sent | error
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = Object.fromEntries(new FormData(e.currentTarget))
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${SITE.formEmail}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          service: form.service,
          message: form.message,
          _subject: `Project inquiry: ${form.service} — ${form.name}`,
          _replyto: form.email,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const json = await res.json().catch(() => null)
      setStatus(res.ok && json && String(json.success) === 'true' ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-ink-900/70 p-8 sm:p-14">
          {/* Glow accents */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-volt/10 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-electric/10 blur-[120px]" />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center gap-6">
              <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-mist-100 sm:text-5xl">
                Have a project in mind?{' '}
                <span className="bg-gradient-to-r from-electric to-volt bg-clip-text text-transparent">
                  Let's make it real.
                </span>
              </h2>
              <p className="max-w-md text-base leading-relaxed text-mist-500">
                Tell us what you're building and we'll come back within 24 hours
                with honest next steps — even if the honest answer is that you
                don't need us yet.
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="group inline-flex w-fit items-center gap-2 font-display text-lg font-semibold text-volt"
              >
                {SITE.email}
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>

            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-volt/20 bg-volt/5 p-10 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-electric to-volt">
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="#04060c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                </span>
                <h3 className="font-display text-2xl font-bold text-mist-100">Message sent!</h3>
                <p className="max-w-xs text-sm leading-relaxed text-mist-500">
                  Thanks for reaching out — we'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input name="name" required placeholder="Your name" className={inputClass} />
                  <input name="email" required type="email" placeholder="Your email" className={inputClass} />
                </div>
                <select name="service" required defaultValue="" aria-label="What do you need help with?" className={inputClass}>
                  <option value="" disabled>
                    What do you need help with?
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Multiple / not sure">Multiple / not sure yet</option>
                </select>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project…"
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-2 rounded-xl bg-gradient-to-r from-electric to-volt px-7 py-3.5 font-display text-base font-bold text-ink-950 transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-wait disabled:opacity-60 disabled:hover:scale-100"
                >
                  {status === 'sending' ? 'Sending…' : 'Send inquiry'}
                </button>
                {status === 'error' && (
                  <p role="alert" className="text-sm leading-relaxed text-mist-300">
                    Something went wrong sending your message. Please email us
                    directly at{' '}
                    <a href={`mailto:${SITE.email}`} className="text-volt underline underline-offset-2">
                      {SITE.email}
                    </a>
                    .
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
