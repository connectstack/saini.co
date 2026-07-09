import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // BASE_PATH is set by the GitHub Pages workflow (e.g. /saini-co/); local
  // dev and root-domain hosting (Vercel/Netlify/custom domain) use '/'.
  base: process.env.BASE_PATH || '/',
  // Respect an externally assigned port (e.g. preview tooling); defaults to 5173.
  server: { port: Number(process.env.PORT) || 5173 },
  plugins: [react(), tailwindcss()],
})
