# Credit Insight AI

Credit analytics dashboard built with React, TypeScript, Vite, Tailwind, and shadcn/ui.

## Run Locally (Any Device)

### 1) Prerequisites

- Node.js 20+ (or newer)
- npm 10+

Recommended: use a Node version manager so everyone uses the same runtime.

## 2) Clone and install

```bash
git clone <your-repo-url>
cd credit-insight-ai
npm install
```

## 3) Start development server

```bash
npm run dev
```

Open the URL shown in terminal (usually http://localhost:8080).

## 4) Build for production

```bash
npm run build
```

Production files are generated in `dist/`.

## 5) Preview production build locally

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - start local development server
- `npm run build` - production build
- `npm run build:dev` - build using development mode
- `npm run preview` - preview built app
- `npm run lint` - run ESLint
- `npm run test` - run Vitest tests once
- `npm run test:watch` - run tests in watch mode

## Deploying

This is a static Vite app, so you can deploy the `dist/` output to any static hosting provider:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- AWS S3 + CloudFront

Typical deploy flow:

```bash
npm ci
npm run build
```

Then upload or publish the `dist/` folder.

## Troubleshooting

- If install fails, verify versions:

```bash
node -v
npm -v
```

- If dependencies look corrupted:

```bash
rm -rf node_modules package-lock.json
npm install
```

On Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```
