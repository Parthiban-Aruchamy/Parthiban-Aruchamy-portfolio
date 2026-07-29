# Parthiban Aruchamy — Portfolio

Personal portfolio site for Parthiban Aruchamy, PMP®. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Fonts are self-hosted via `@fontsource` (no external font fetch at build time).

## Sections

- **About** (`#about`) — photo, summary, education, résumé download, LinkedIn
- **Experience** (`#experience`) — full work history, toolkit/standards, PMP® certification
- **Contact** (`#contact`) — email, phone, LinkedIn

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Deploying to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel        # first deploy, follow prompts
vercel --prod # promote to production
```

### Option B — GitHub + Vercel dashboard (recommended)

1. Create a new, empty repo on GitHub (e.g. `parthiban-portfolio`) — do **not** initialize it with a README.
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/parthiban-portfolio.git
   git push -u origin main
   ```
3. Go to [vercel.com/new](https://vercel.com/new), import the GitHub repo, keep the default Next.js build settings, and deploy.
4. (Optional) Add a custom domain under Project → Settings → Domains.

## Updating content

- **Résumé PDF**: replace `public/resume.pdf`.
- **Photo**: replace `public/photo.jpg`.
- **Text content**: edit `components/Hero.tsx`, `components/Experience.tsx`, and `components/Contact.tsx` directly.
- **Colors/type**: edit the design tokens in `tailwind.config.ts`.
