import type { Product } from "@/types/catalog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const productUrl = (product: Product) => `${siteUrl}/products#product-${product.id}`;

export const buildProductsItemListJsonLd = (products: Product[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Appscrip product listing",
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: productUrl(product),
    item: {
      "@type": "Product",
      name: product.title,
      description: product.description,
      image: product.image,
      category: product.category?.name,
      offers: {
        "@type": "Offer",
        price: String(product.price),
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: productUrl(product)
      }
    }
  }))
});

export const productsBreadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${siteUrl}/products`
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Products",
      item: `${siteUrl}/products`
    }
  ]
};
