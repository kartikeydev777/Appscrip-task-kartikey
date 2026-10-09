import type {
  CategoriesResponse,
  ProductsResponse
} from "@/types/catalog";

type SearchValue = string | string[] | undefined;
export type ProductSearchParams = Record<string, SearchValue>;

const apiBaseUrl =
  process.env.API_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:4000";

const productQueryKeys = [
  "page",
  "limit",
  "category",
  "minPrice",
  "maxPrice",
  "sort",
  "q"
] as const;

const getSingleValue = (value: SearchValue) =>
  Array.isArray(value) ? value[0] : value;

export const buildProductsQuery = (searchParams: ProductSearchParams) => {
  const params = new URLSearchParams();

  for (const key of productQueryKeys) {
    const value = getSingleValue(searchParams[key]);

    if (value) {
      params.set(key, value);
    }
  }

  return params;
};

export const fetchProducts = async (
  searchParams: ProductSearchParams
): Promise<ProductsResponse> => {
  const params = buildProductsQuery(searchParams);
  const response = await fetch(`${apiBaseUrl}/products?${params.toString()}`, {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Unable to load products");
  }

  return response.json() as Promise<ProductsResponse>;
};

export const fetchCategories = async (): Promise<CategoriesResponse> => {
  const response = await fetch(`${apiBaseUrl}/categories`, {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Unable to load categories");
  }

  return response.json() as Promise<CategoriesResponse>;
};
