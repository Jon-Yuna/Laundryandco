# Laundry & Co

Static marketing site for **Laundry & Co** — a laundry pickup & delivery service based in Forest Hills, Queens, NYC.

**Live site:** [www.laundryandco.nyc](https://www.laundryandco.nyc)

## Stack

| Tool | Purpose |
|---|---|
| Next.js 15 (App Router) | Framework — static export |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Lucide React | Icons |
| `next/font` | Self-hosted Google Fonts |
| ESLint + Prettier | Linting & formatting |
| Husky + lint-staged | Pre-commit hooks |
| AWS S3 + CloudFront | Hosting (us-east-1) |

---

## Prerequisites

- **Node.js** v20 or later — [nodejs.org](https://nodejs.org)
- **npm** v10 or later (comes with Node.js)

Verify:

```bash
node -v
npm -v
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Git hooks (first time only)

```bash
npx husky install
```

> This enables pre-commit linting. Skip if you don't need it locally.

### 3. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The server uses **Turbopack** for fast hot-reload.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Build static site → `out/` |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint and auto-fix issues |
| `npm run format` | Format all files with Prettier |
| `npm run format:check` | Check formatting without writing |
| `npm run type-check` | TypeScript type check (no emit) |
| `npm run analyze` | Build + open bundle size report |

---

## Building for Production

```bash
npm run build
```

The static output is generated in the `out/` directory. You can preview it locally with any static server:

```bash
npx serve out
```

Then open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — metadata, fonts, JSON-LD
│   ├── page.tsx            # Homepage
│   ├── sitemap.ts          # Auto-generates /sitemap.xml
│   ├── robots.ts           # Auto-generates /robots.txt
│   └── not-found.tsx       # 404 page
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   ├── seo/
│   │   └── JsonLd.tsx      # LocalBusiness + FAQ schema.org structured data
│   └── ui/
│       └── Button.tsx
├── config/
│   └── site.ts             # Site-wide config — name, URL, address, service areas
└── lib/
    └── utils.ts            # cn() utility
```

### Key config file

All site details (domain, phone, address, service areas, social links) live in a single place:

```
src/config/site.ts
```

Update that file first whenever business info changes.

---

## SEO

SEO is handled through three layers:

1. **Next.js Metadata API** — title templates, description, Open Graph, Twitter cards, geo meta tags, canonical URL, robots directives (`src/app/layout.tsx`)
2. **Schema.org JSON-LD** — `LocalBusiness`, `LaundryBusiness`, `areaServed`, `hasOfferCatalog`, and `FAQPage` structured data (`src/components/seo/JsonLd.tsx`)
3. **Sitemap + robots.txt** — generated automatically from `src/app/sitemap.ts` and `src/app/robots.ts` at build time

Target area: **Forest Hills, Queens** — with keywords and `areaServed` covering 15 surrounding neighborhoods.

---

## Deployment

The site deploys automatically via GitHub Actions on every push to `main`.

### GitHub Actions secrets & variables

Go to **Settings → Secrets and variables → Actions** in your repo and add:

| Type | Name | Value |
|---|---|---|
| Secret | `AWS_ACCESS_KEY_ID` | IAM user access key |
| Secret | `AWS_SECRET_ACCESS_KEY` | IAM user secret key |
| Variable | `S3_BUCKET_NAME` | Your S3 bucket name |
| Variable | `CLOUDFRONT_DISTRIBUTION_ID` | Your CloudFront distribution ID |
| Variable | `SITE_URL` | `https://www.laundryandco.nyc` |

### Manual deploy

```bash
# Build
npm run build

# Sync to S3 — hashed assets (long cache)
aws s3 sync out/ s3://YOUR-BUCKET-NAME/ \
  --exclude "*.html" --exclude "sitemap.xml" --exclude "robots.txt" \
  --cache-control "public, max-age=31536000, immutable"

# Sync HTML + SEO files (no cache)
aws s3 sync out/ s3://YOUR-BUCKET-NAME/ \
  --exclude "*" --include "*.html" --include "sitemap.xml" --include "robots.txt" \
  --cache-control "public, max-age=0, must-revalidate"

# Invalidate CloudFront
aws cloudfront create-invalidation \
  --distribution-id YOUR-DISTRIBUTION-ID \
  --paths "/*"
```

> Full AWS infrastructure setup (S3 bucket policy, CloudFront config, IAM policy) is documented in [`infrastructure/README.md`](infrastructure/README.md).

---

## Code Quality

Pre-commit hooks run automatically on staged files:

- **ESLint** — lint & auto-fix TypeScript/React files
- **Prettier** — format all files

To run manually:

```bash
npm run lint:fix && npm run format
```

To check types:

```bash
npm run type-check
```
