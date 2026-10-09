import type { Product } from "@/types/catalog";
import { ProductCard } from "./product-card";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <section className="empty-state" aria-live="polite">
        <h2>No products found</h2>
        <p>Try clearing filters or using a broader search term.</p>
      </section>
    );
  }

  return (
    <section className="product-grid" aria-label="Product results">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} priority={index === 0} />
      ))}
    </section>
  );
}
