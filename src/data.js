// ---------------------------------------------------------------------------
// All editable site content lives here — swap names, emails, and copy freely.
// ---------------------------------------------------------------------------

// Hero showcase images. All are license-clean for commercial use with NO
// attribution required (Unsplash / Pexels licenses). Credits kept here for
// record; swap to owned photos of real work anytime by replacing the files.
//   battery  — Pexels · Luke Miller     · EV powertrain bay
//   software — Pexels · Nemuel Sereti   · VS Code on a MacBook
//   ai       — Unsplash · Logan Voss    · glowing neural-flow abstract
//   video    — Unsplash · Alan Alves    · DaVinci Resolve color-grading suite
//   people   — Unsplash · Brooke Cagle  · team collaborating
import heroSoftware from './assets/hero/software.jpeg'
import heroVideo from './assets/hero/video.jpeg'
import heroBattery from './assets/hero/battery.jpeg'
import heroAi from './assets/hero/ai.jpeg'
import heroPeople from './assets/hero/people.jpeg'

export const SITE = { 
  name: 'Saini & Co',
  fullName: 'Saini & Co. Consulting',
  tagline: 'Batteries. Software. AI. People. Stories.',
  // Displayed contact address — swap to a branded inbox (hello@yourdomain)
  // once you register a domain. Must be a REAL, monitored mailbox.
  email: 'vikassainier@gmail.com',
  // FormSubmit.co inbox — submissions are emailed here. Requires one-time
  // activation: submit the form once, then click the link FormSubmit emails you.
  formEmail: 'vikassainier@gmail.com',
  location: 'India · working worldwide',
}

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Team', href: '#team' },
  { label: 'FAQ', href: '#faq' },
]

// Each phrase pairs the rotating headline text with the showcase visual
// shown beside it. image: null renders the icon fallback card instead.
export const HERO_PHRASES = [
  { text: 'battery systems.', label: 'EV Battery Systems', image: heroBattery },
  { text: 'intelligent software.', label: 'Software & Dashboards', image: heroSoftware },
  { text: 'AI that ships.', label: 'Applied AI', image: heroAi },
  { text: 'high-trust teams.', label: 'People Operations', image: heroPeople },
  { text: 'stories that sell.', label: 'Video Production', image: heroVideo },
]

export const MARQUEE_ITEMS = [
  'EV Battery Systems',
  'BMS Architecture',
  'iOS & Web Apps',
  'LLM Integration',
  'Cloud & DevOps',
  'Hiring Pipelines',
  'People Operations',
  'Video Editing',
  'Motion Graphics',
  'Brand Films',
  'AI Strategy',
  'Thermal Design',
]

export const SERVICES = [
  {
    id: 'battery',
    title: 'EV Battery Design',
    icon: 'battery',
    accent: 'volt',
    blurb:
      'From cell selection to full pack architecture — we design battery systems that are safe, dense, and manufacturable. Flagship practice for EV startups and retrofitters.',
    tags: ['Pack architecture', 'BMS strategy', 'Thermal design', 'Cell selection', 'Certification support'],
    large: true,
    badge: 'Flagship practice',
    art: 'battery',
  },
  {
    id: 'software',
    title: 'Software Engineering',
    icon: 'code',
    accent: 'electric',
    blurb:
      'Product-grade iOS, web, and backend systems built by engineers who have shipped production software for 8+ years.',
    tags: ['iOS & Swift', 'Web apps', 'APIs & cloud', 'Code audits'],
    large: true,
    badge: '8+ years shipping',
    art: 'code',
  },
  {
    id: 'ai',
    title: 'Applied AI',
    icon: 'sparks',
    accent: 'plasma',
    blurb:
      'LLM-powered products, agents, and pipelines that make it past the demo and into production.',
    tags: ['LLM apps & agents', 'RAG pipelines', 'Fine-tuning', 'AI strategy'],
  },
  {
    id: 'hr',
    title: 'HR & Talent',
    icon: 'people',
    accent: 'electric',
    blurb:
      'Hiring pipelines, onboarding, and people ops for teams that are growing faster than their processes.',
    tags: ['Hiring pipelines', 'Onboarding', 'Policy & payroll', 'Culture ops'],
  },
  {
    id: 'video',
    title: 'Video Production',
    icon: 'film',
    accent: 'volt',
    blurb:
      'Product films, social edits, and motion graphics that make technical work look as good as it is.',
    tags: ['Product films', 'Social edits', 'Motion graphics', 'YouTube pipelines'],
  },
]

export const STATS = [
  { value: 20, suffix: '+', label: 'Combined years of engineering experience' },
  { value: 5, suffix: '', label: 'Practice areas under one roof' },
  { value: 100, suffix: '%', label: 'Founder-led delivery, no hand-offs' },
  { value: 24, suffix: 'h', label: 'Average first-response time' },
]

export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Discover',
    text: 'A free scoping call. We listen, ask the awkward questions early, and tell you honestly if we are not the right fit.',
  },
  {
    num: '02',
    title: 'Blueprint',
    text: 'You get a written proposal with fixed scope, timeline, and price — no vague day rates, no surprise invoices.',
  },
  {
    num: '03',
    title: 'Build',
    text: 'Weekly demos and async updates. You always know exactly what state your project is in, without asking.',
  },
  {
    num: '04',
    title: 'Scale',
    text: 'Clean handover with documentation, then ongoing support if you want us on call as you grow.',
  },
]

export const TEAM = [
  {
    initials: 'RS',
    name: 'Rohit Saini',
    role: 'Co-founder · Engineering & AI',
    bio: '8+ years shipping iOS apps, AI systems, and developer tools. Leads the software and AI practices.',
  },
  {
    initials: 'VS',
    name: 'Vikas Saini',
    role: 'Co-founder · EV & Battery Engineering',
    bio: 'Senior battery design engineer with 12+ years in automotive and EV — battery packs, BMS, and drivetrains. Leads the flagship battery practice.',
  },
  {
    initials: 'SV',
    name: 'Sonali Verma',
    role: 'Head of People · HR Practice',
    bio: 'Runs the HR practice end to end — hiring, onboarding, and people ops for growing teams.',
  },
]

export const FAQS = [
  {
    q: 'How does one firm cover batteries and video editing?',
    a: 'Each practice is run by a specialist, not a generalist wearing five hats. You engage the pod you need — battery engineering, software, AI, HR, or media — and the founders stay personally accountable for every engagement.',
  },
  {
    q: 'Can we hire you for just one discipline?',
    a: 'Absolutely — most clients start with a single practice. The advantage of the roof is that when your project needs a second discipline (say, an app for your battery product, or a launch film for your app), it is one conversation, not a new vendor search.',
  },
  {
    q: 'How do engagements work?',
    a: 'Fixed-scope projects with a written proposal, or a monthly retainer for ongoing work. Both come with weekly demos and async updates, so you always know where things stand.',
  },
  {
    q: 'What does it cost?',
    a: 'It depends on scope, and we will tell you before we start — every proposal has a fixed price attached. The scoping call is free, and there is no obligation after it.',
  },
  {
    q: 'Where are you based?',
    a: 'India, working with clients worldwide. We are fully async-friendly and overlap comfortably with EU and US time zones for calls.',
  },
]
