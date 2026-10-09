"use client";

import { SiteHeader } from "@/components/site-header";

export default function ProductsError({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <SiteHeader />
      <main className="plp-main">
        <section className="error-state" role="alert">
          <p className="eyebrow">Catalog unavailable</p>
          <h1>Unable to load products</h1>
          <p>
            The product API could not be reached. Check that the backend server
            is running, then try again.
          </p>
          <button type="button" onClick={reset}>
            Retry
          </button>
        </section>
      </main>
    </>
  );
}
