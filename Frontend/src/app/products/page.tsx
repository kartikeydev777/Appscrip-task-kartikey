import { Breadcrumbs } from "@/components/breadcrumbs";
import type { Metadata } from "next";
import { ProductControls } from "@/components/product-controls";
import { ProductGrid } from "@/components/product-grid";
import { Pagination } from "@/components/pagination";
import { SiteFooter } from "@/components/site-footer";
import { FilterLayout } from "@/components/filter-layout";
import { SiteHeader } from "@/components/site-header";
import {
  buildProductsQuery,
  fetchCategories,
  fetchProducts,
  type ProductSearchParams
} from "@/lib/catalog-api";
import {
  buildProductsItemListJsonLd,
  productsBreadcrumbJsonLd
} from "@/lib/structured-data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Products | Appscrip Product Listing",
  description:
    "Browse Appscrip's server-rendered product listing with category filters, price filters, search, sorting, and pagination.",
  alternates: {
    canonical: "/products"
  },
  openGraph: {
    title: "Products | Appscrip Product Listing",
    description:
      "Browse a server-rendered catalog of curated ecommerce products.",
    url: "/products",
    siteName: "Appscrip Product Listing",
    type: "website"
  }
};

type ProductsPageProps = {
  searchParams: Promise<ProductSearchParams>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const resolvedSearchParams = await searchParams;
  const [productsResult, categoriesResult] = await Promise.all([
    fetchProducts(resolvedSearchParams),
    fetchCategories()
  ]);

  const query = buildProductsQuery(resolvedSearchParams);
  const itemListJsonLd = buildProductsItemListJsonLd(productsResult.data);

  return (
    <>
      <SiteHeader />
      <main className="plp-main">
        <Breadcrumbs />
        <section className="plp-hero" aria-labelledby="plp-title">
          <h1 id="plp-title">DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </section>

        <FilterLayout
          totalItems={productsResult.meta.total}
          sortControl={<ProductControls type="sort" />}
          sidebar={<ProductControls type="filters" categories={categoriesResult.data} />}
        >
          <h2 id="results-title" className="sr-only">
            Product results
          </h2>
          <ProductGrid products={productsResult.data} />
          <Pagination
            page={productsResult.meta.page}
            totalPages={productsResult.meta.totalPages}
            searchParams={query}
          />
        </FilterLayout>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListJsonLd).replace(/</g, "\\u003c")
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productsBreadcrumbJsonLd).replace(
            /</g,
            "\\u003c"
          )
        }}
      />
      <SiteFooter />
    </>
  );
}
