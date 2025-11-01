# Ramesh Raoufi Portfolio

A polished personal site built with the Next.js App Router to highlight Ahmad Ramesh Raoufi’s frontend experience, AI-led workflows, and production projects. The UI leans on Tailwind CSS 4 styling primitives and custom glassmorphism surfaces to keep the focus on content while still feeling high-end.

## Highlights
- Hero section with live metrics (age, availability, launches, automations) derived from typed helpers in `src/lib/site-data.ts`.
- Modular sections for experience, skills, projects, education, AI capabilities, and contact details composed through the shared `Section` component.
- Opinionated content source file (`site-data.ts`) that centralizes personal details, project metadata, and SEO-ready JSON-LD generators.
- Responsive glassmorphism design with gradient lighting effects and subtle interactions powered by Tailwind CSS 4 utilities.
- Production-ready sitemap and robots endpoints plus JSON-LD schema injection for richer search previews.

## Tech Stack
- Next.js 15 App Router with React 19 and TypeScript.
- Tailwind CSS 4 with custom utility layers in `src/app/globals.css`.
- GitHub Actions workflow (`.github/workflows/nextjs.yml`) for install, lint, build, and (`next lint`) confidence on every push.

## Getting Started
1. Install Node.js 18.18+ (Node 20 LTS recommended) and npm.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start a local dev server:
   ```bash
   npm run dev
   ```
   The site defaults to `http://localhost:3000` with hot module reloading.
4. Run a production build or lint when needed:
   ```bash
   npm run build
   npm run lint
   ```

## Project Structure
- `src/app` – App Router entrypoints (`layout.tsx`, `page.tsx`), global styles, sitemap/robots generators.
- `src/components` – Reusable presentational components grouped by section (Hero, Experience, Skills, Projects, Education, Contact, Navbar, Footer, etc.).
- `src/lib/site-data.ts` – Typed content model for personal info, metrics, projects, AI tooling, and JSON-LD helpers. Update this file to refresh the site without touching JSX.

## Customization Tips
- Update personal details, skills, and project highlights in `src/lib/site-data.ts`; all sections read from this single source of truth.
- Adjust visual theming in `src/app/globals.css` or component-level class lists; Tailwind CSS 4 is already configured.
- For production deploys, Vercel works out of the box. Any Node host that can run `npm run build` followed by `npm start` is supported.

## Deployment
- Build artifacts are static + server components; deploy via Vercel, Netlify, or a containerized Node runtime.
- The included GitHub Actions workflow caches dependencies and runs lint/build to catch regressions before deployment.
