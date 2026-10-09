# Architecture

## Overview

This repository is organized as an npm workspace monorepo with separate frontend and backend applications.

```text
appscrip-fullstack-assignment/
  frontend/  Next.js App Router application
  backend/   Express API application
```

## Frontend

The frontend is a Next.js application using React, TypeScript, the App Router, and plain CSS.
The initial product listing will be rendered through server components once the product API exists.

For local development, the frontend runs on port `3000` and reads the API origin from `NEXT_PUBLIC_API_URL`.

## Backend

The backend is an Express application written in TypeScript.
It uses Prisma for PostgreSQL access and Zod for request validation.

For local development, the backend runs on port `4000` and exposes:

- `GET /health`
- `GET /products`
- `GET /categories`

## Communication

The frontend will call the backend over HTTP.
During local development:

- frontend origin: `http://localhost:3000`
- backend origin: `http://localhost:4000`
- frontend API setting: `NEXT_PUBLIC_API_URL=http://localhost:4000`
- backend CORS setting: `FRONTEND_URL=http://localhost:3000`

When server-rendering the product listing, Next.js server components can fetch directly from the Express API using that backend origin.
