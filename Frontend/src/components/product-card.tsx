import Image from "next/image";
import type { Product } from "@/types/catalog";

const formatPrice = (price: Product["price"]) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(Number(price));

export function ProductCard({
  product,
  priority = false
}: {
  product: Product;
  priority?: boolean;
}) {
  const categoryName = product.category?.name;

  return (
    <article className="product-card" id={`product-${product.id}`}>
      <div className="product-image-wrap">
        <Image
          src={product.image}
          alt={`${product.title}${categoryName ? ` in ${categoryName}` : ""}`}
          className="product-image"
          fill
          priority={priority}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="product-card-body">
        <div className="product-title-row">
          <h3 className="product-title">{product.title}</h3>
          <button type="button" className="wishlist-button" aria-label="Add to wishlist">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <p className="product-description">
          <a href="#footer" className="sign-in-link">Sign in</a> or Create an account to see pricing
        </p>
      </div>
    </article>
  );
}
