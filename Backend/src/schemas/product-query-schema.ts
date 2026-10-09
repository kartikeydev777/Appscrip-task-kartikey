import { z } from "zod";

export const productQuerySchema = z
  .object({
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().positive().max(50).default(12),
    category: z.string().trim().min(1).optional(),
    minPrice: z.coerce.number().nonnegative().optional(),
    maxPrice: z.coerce.number().nonnegative().optional(),
    sort: z.enum(["price_asc", "price_desc", "newest"]).default("newest"),
    q: z.string().trim().min(1).optional()
  })
  .refine(
    (query) =>
      query.minPrice === undefined ||
      query.maxPrice === undefined ||
      query.minPrice <= query.maxPrice,
    {
      message: "minPrice must be less than or equal to maxPrice",
      path: ["minPrice"]
    }
  );

export type ProductQuery = z.infer<typeof productQuerySchema>;
