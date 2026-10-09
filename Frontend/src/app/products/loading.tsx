import { SiteHeader } from "@/components/site-header";

export default function ProductsLoading() {
  return (
    <>
      <SiteHeader />
      <main className="plp-main">
        <section className="plp-hero">
          <p className="eyebrow">Appscrip assignment</p>
          <h1>Loading products</h1>
          <p>Preparing the latest catalog results.</p>
        </section>
        <section className="product-grid" aria-label="Loading product results">
          {Array.from({ length: 8 }, (_, index) => (
            <article className="product-card " key={index}>
              <div className="product-image-wrap skeleton-block" />
              <div className="product-card-body">
                <div className="skeleton-line short" />
                <div className="skeleton-line" />
                <div className="skeleton-line" />
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
