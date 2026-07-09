# Saini & Co. Consulting — Website

Client-facing site for Saini & Co. Consulting: EV battery design, software
engineering, applied AI, HR & talent, and video production.

Built with **React 19 + Vite + Tailwind CSS v4 + Framer Motion**. Single
page: animated hero with a rotating practice showcase, capabilities marquee,
services grid, stats, process timeline, team, FAQ, and a contact form.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173 (respects PORT env var)
npm run lint       # oxlint
```

## Edit content

**All copy, names, and contact details live in [`src/data.js`](src/data.js)** —
services, team bios, FAQ, stats, hero phrases, and the marquee items. No
component changes are needed for content edits.

- **Contact emails:** `SITE.email` is the address *displayed* on the site
  (currently vikassainier@gmail.com — swap for a branded inbox once you
  register a domain; it must be a real, monitored mailbox). `SITE.formEmail`
  is where form submissions are *delivered*.
- **Hero showcase images** live in `src/assets/hero/` and are wired up via
  imports at the top of `data.js`. Each rotating phrase pairs with one image.
  > ⚠️ `battery/software/ai/video.jpeg` are temporary third-party
  > placeholders (visible external branding) — replace them with owned or
  > licensed visuals before going live. `people.jpeg` is already licensed
  > (Unsplash, Brooke Cagle) and needs no replacement.
- **Service cards:** each service in `data.js` can set `accent`
  (volt/electric/plasma), `large` (wide card), `badge` (corner chip), and
  `art` (`battery` or `code` animated illustration).

## Contact form (FormSubmit)

The form POSTs to [FormSubmit](https://formsubmit.co) and delivers
submissions to `SITE.formEmail`. **One-time activation required:** FormSubmit
has emailed an "Activate Form" link to that inbox — click it and the form
goes live. Submissions made before activation are retained by FormSubmit and
delivered once activated. If a submission fails in the browser, the form
shows a fallback with the direct email address.

## Deploy (GitHub Pages)

Pushing to `main` auto-deploys via `.github/workflows/deploy.yml`. One-time
setup:

```bash
gh auth login
gh repo create saini-co --public --source . --push
gh api -X POST repos/{owner}/saini-co/pages -f build_type=workflow
```

(or create the repo on github.com, push, then Settings → Pages → Source:
GitHub Actions). The site lands at `https://<username>.github.io/saini-co/`.
The workflow sets `BASE_PATH` automatically; local dev and root-domain
hosting (Vercel/Netlify/custom domain) are unaffected.
