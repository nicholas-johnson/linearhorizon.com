# Linear Horizon

Corporate site for Linear Horizon — applied intelligence for real organisations. Built with Astro and Tailwind. Static output, deployed on GitHub Pages.

The public site is `https://linearhorizon.com`. The repository is [`nicholas-johnson/linearhorizon.com`](https://github.com/nicholas-johnson/linearhorizon.com).

## Local

```sh
npm install
npm run dev
```

| Command | Action |
| --- | --- |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the production build |

## GitHub Pages

The site is configured for the custom domain `linearhorizon.com` (`site` in `astro.config.mjs`, `public/CNAME`). There is no `base` path.

1. Push to `main`.
2. In the repository: **Settings → Pages → Source: GitHub Actions**.
3. Point DNS at GitHub Pages.

### DNS

Apex (`linearhorizon.com`):

| Type | Name | Value |
| --- | --- | --- |
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `AAAA` | `@` | `2606:50c0:8000::153` |
| `AAAA` | `@` | `2606:50c0:8001::153` |
| `AAAA` | `@` | `2606:50c0:8002::153` |
| `AAAA` | `@` | `2606:50c0:8003::153` |

`www`:

| Type | Name | Value |
| --- | --- | --- |
| `CNAME` | `www` | `<user-or-org>.github.io` |

GitHub may also ask you to add a verification `TXT` record when you attach the domain in **Settings → Pages**.

## Content API

Public site content is also written as static JSON files under `/api/v1`. These are generated at build time and can be ingested with ordinary HTTP GET requests.

| File | Contents |
| --- | --- |
| [`/api/v1.json`](https://linearhorizon.com/api/v1.json) or [`/api/v1/index.json`](https://linearhorizon.com/api/v1/index.json) | Catalog of every file |
| [`/api/v1/all.json`](https://linearhorizon.com/api/v1/all.json) | Single dump of every record |
| [`/api/v1/site.json`](https://linearhorizon.com/api/v1/site.json) | Identity, navigation, and shared marketing copy |
| [`/api/v1/pages.json`](https://linearhorizon.com/api/v1/pages.json) | Page inventory (path, title, description) |
| [`/api/v1/products.json`](https://linearhorizon.com/api/v1/products.json) | Products, comparison, and page extras |
| [`/api/v1/work.json`](https://linearhorizon.com/api/v1/work.json) | Case studies |
| [`/api/v1/courses.json`](https://linearhorizon.com/api/v1/courses.json) | Course catalogue, categories, and pathways |
| [`/api/v1/programmes.json`](https://linearhorizon.com/api/v1/programmes.json) | Flagship Python programmes |
| [`/api/v1/insights.json`](https://linearhorizon.com/api/v1/insights.json) | Insight posts, including markdown bodies |
| [`/api/v1/labs.json`](https://linearhorizon.com/api/v1/labs.json) | Lab handbook pages (present when course repos are available at build time) |

Each collection also has one file per record, for example `/api/v1/products/platform.json` or `/api/v1/courses/rag-from-fundamentals-to-production.json`.

Every file has `apiVersion`, `kind`, and `self`. Item files also include `page` (site path) and `url`. Lab handbook files include module/exercise markdown and, where present, the `start.py` / `test_start.py` / `solution.py` sources shown on the site.

```sh
curl -sS https://linearhorizon.com/api/v1/index.json
curl -sS https://linearhorizon.com/api/v1/all.json
```

## Contact form

The contact page posts a web-channel conversation to Callcenter (`POST /api/v1/conversations`). GitHub Pages only serves the static form; the browser calls Callcenter directly.

Set these repository variables if the ingest host or key is not the default:

| Variable | Purpose |
| --- | --- |
| `PUBLIC_CALLCENTER_INGEST_URL` | Ingest endpoint. Default: `https://callcenter.linearhorizon.com/api/v1/conversations` |
| `PUBLIC_CALLCENTER_PUBLISHABLE_KEY` | Optional bearer token sent as `Authorization` |

Callcenter must allow CORS from `https://linearhorizon.com` (and `http://localhost:4321` in development).
