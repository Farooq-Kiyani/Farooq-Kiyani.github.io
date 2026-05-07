# M. Farooq — Portfolio

Personal portfolio website for M. Farooq, Senior Software Engineer with 10 years of experience.

Built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Deployed on **GitHub Pages** via GitHub Actions.

## Live Site

[https://farooq-kiyani.github.io](https://farooq-kiyani.github.io)

## Sections

- **Hero** — Introduction and stats
- **About** — Summary, specialties, and contact details
- **Skills** — Categorized tech stack (Backend, Frontend, AI/ML, Cloud, Data, DevOps)
- **Projects** — Featured systems shipped across companies
- **Experience** — Work history timeline (FIT Technologies, Emprise Technologies, PRI Talent)
- **Education** — Bahria University, B.S. Computer Science
- **Contact** — Email, phone, LinkedIn, GitHub

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build & Export

```bash
npm run build   # generates /out static files
```

## Deployment

Every push to `main` triggers GitHub Actions CI which builds and deploys the static export to GitHub Pages automatically.

## Placeholders to Update

- `src/components/Contact.tsx` — Replace the LinkedIn `href="#"` with your LinkedIn profile URL
