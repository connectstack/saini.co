# Saini & Co. Consulting — Website

Client-facing site for Saini & Co. Consulting: EV battery design, software
engineering, applied AI, HR & talent, and video production.

Built with **React + Vite + Tailwind CSS v4 + Framer Motion**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Edit content

All copy, names, and contact details live in **`src/data.js`** — services,
team bios, FAQ, stats, hero phrases, and the marquee items. No component
changes needed for content edits.

> The displayed contact email (`SITE.email` in `src/data.js`) currently
> points at vikassainier@gmail.com — swap it for a branded inbox once you
> register a domain. It must be a real, monitored mailbox: it appears in the
> contact section, the footer, and the form-failure fallback.
>
> ⚠️ The hero showcase images in `src/assets/hero/` are temporary
> placeholders containing third-party branding — replace them with owned or
> licensed visuals before going live (see comments in `src/data.js`).

## Contact form (FormSubmit)

The form POSTs to [FormSubmit](https://formsubmit.co) and delivers
submissions to `SITE.formEmail` in `src/data.js` (currently
`vikassainier@gmail.com`). **One-time activation required:** submit the form
once, then click the confirmation link FormSubmit emails to that inbox.
Until activated, submissions show the error fallback with a direct
email link.

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
