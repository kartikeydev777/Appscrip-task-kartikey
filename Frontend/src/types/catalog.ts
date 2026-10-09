export type Category = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: string | number;
  image: string;
  categoryId: number;
  createdAt: string;
  category?: Category;
};

export type ProductsMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type ProductsResponse = {
  data: Product[];
  meta: ProductsMeta;
};

export type CategoriesResponse = {
  data: Category[];
};

export type ProductSort = "price_asc" | "price_desc" | "newest";
