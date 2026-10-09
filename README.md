# Appscrip Full-Stack Assignment

Production-minded monorepo scaffold for the Appscrip Full-Stack Engineer assignment.

## Workspace

- `frontend`: Next.js, React, TypeScript, App Router, plain CSS.
- `backend`: Node.js, Express, TypeScript, Prisma, PostgreSQL, Zod.

## Dependency Choices

- Next.js and React provide App Router SSR and the frontend runtime.
- Express provides a small HTTP API layer.
- Prisma provides typed PostgreSQL access and migrations.
- Zod validates backend query parameters and environment variables.
- CORS, Helmet, and dotenv cover API security headers, frontend access, and environment loading.
- No UI framework, Redux, authentication, cart, or payment dependencies are used.

## Local Setup

Install dependencies from the repository root:

```bash
npm install
```

Create local environment files:

```bash
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env
```

Run both applications:

```bash
npm run dev
```

Run one application at a time:

```bash
npm run dev:frontend
npm run dev:backend
```

## Default Local URLs

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:4000`

The product listing page is available at:

```text
http://localhost:3000/products
```

## Current Scope

The backend implements the product catalog API and database schema.
The frontend product listing UI, SSR, and SEO are fully implemented and integrated with the backend API.

## Backend Environment

Create `backend/.env` with:

```env
PORT=4000
NODE_ENV=development
DATABASE_URL="postgresql://USER:PASSWORD@HOST/DBNAME?sslmode=require"
FRONTEND_URL=http://localhost:3000
```

`FRONTEND_URL` is used by CORS. `DATABASE_URL` should point to your PostgreSQL database, such as Neon.

## Frontend Environment

Create `frontend/.env.local` with:

```env
API_URL=http://localhost:4000
NEXT_PUBLIC_API_URL=http://localhost:4000
```

`API_URL` is used by the Next.js server when rendering the initial product listing.

## Database Setup

From the repository root:

```bash
npm run prisma:generate --workspace backend
npm run prisma:migrate --workspace backend -- --name init_catalog
npm run prisma:seed --workspace backend
```

Or from `backend/`:

```bash
npm run prisma:generate
npm run prisma:migrate -- --name init_catalog
npm run prisma:seed
```

## API

Base URL:

```text
http://localhost:4000
```

### Health

```http
GET /health
```

Response:

```json
{
  "status": "ok"
}
```

### Categories

```http
GET /categories
```

Response:

```json
{
  "data": [
    {
      "id": 1,
      "name": "Accessories"
    }
  ]
}
```

### Products

```http
GET /products
GET /products/
```

Supported query parameters:

- `page`: positive integer, defaults to `1`
- `limit`: positive integer up to `50`, defaults to `12`
- `category`: category name
- `minPrice`: minimum product price
- `maxPrice`: maximum product price
- `sort`: `price_asc`, `price_desc`, or `newest`
- `q`: text search across title and description

Response format:

```json
{
  "data": [],
  "meta": {
    "page": 1,
    "limit": 12,
    "total": 0,
    "totalPages": 0
  }
}
```

Example:

```bash
curl "http://localhost:4000/products?page=1&limit=12&category=Clothing&sort=newest"
```

Invalid query parameters return:

```json
{
  "error": {
    "message": "Invalid request parameters",
    "details": {}
  }
}
```

## SSR Explanation

The product listing page at `/products` is rendered by the Next.js server.
On the first request, the browser asks Next.js for `/products`, Next.js reads the URL query parameters, calls the Express backend, the backend reads PostgreSQL through Prisma, and Next.js returns HTML containing the product cards.

The initial product list is not loaded with `useEffect`.
Client-side code is limited to the filter controls that update the URL.

## SEO Explanation

The PLP uses Next.js metadata APIs for the page title, description, canonical URL, and Open Graph metadata.
The canonical URL is `/products`, so filter and pagination query strings do not become duplicate canonical pages.

The page includes Schema.org `ItemList` JSON-LD generated from the server-rendered product data.
Each item includes Product data with offer price, currency, image, description, and category.
Breadcrumb UI is also represented with `BreadcrumbList` JSON-LD.

Product images use `next/image`, responsive sizes, meaningful alt text, and a priority image for the first visible product.

## AI Usage

This project was scaffolded and iterated with AI assistance in Codex.
AI was used to generate initial structure, backend API layers, Prisma schema, seed data, frontend SSR PLP components, SEO metadata, and documentation.
The implementation should still be reviewed and tested locally before submission.

## Known Limitations

- The Figma design is approximated in plain CSS; exact pixel-level fidelity should be checked manually against the provided Figma.
- Product data is seeded sample catalog data, not a live merchant catalog.
- No authentication, cart, wishlist, checkout, or payment flows are implemented.
- The backend exposes read-only catalog endpoints only.
- Production deployment needs real `DATABASE_URL`, `FRONTEND_URL`, and `NEXT_PUBLIC_SITE_URL` values.

## Production Build

Build frontend and backend:

```bash
npm run build --workspace frontend
npm run build --workspace backend
```

Start the backend after building:

```bash
npm run start --workspace backend
```

For production, configure:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST/DBNAME?sslmode=require"
FRONTEND_URL=https://your-frontend-domain.com
NEXT_PUBLIC_SITE_URL=https://your-frontend-domain.com
API_URL=https://your-backend-domain.com
```
