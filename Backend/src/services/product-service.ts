import type { Prisma } from "@prisma/client";
import { productQuerySchema } from "../schemas/product-query-schema.js";
import type { ProductQuery } from "../schemas/product-query-schema.js";
import { prisma } from "../utils/prisma.js";

const sortMap = {
  price_asc: { price: "asc" },
  price_desc: { price: "desc" },
  newest: { createdAt: "desc" }
} satisfies Record<ProductQuery["sort"], Prisma.ProductOrderByWithRelationInput>;

export const getProducts = async (rawQuery: unknown) => {
  const query = productQuerySchema.parse(rawQuery);
  const skip = (query.page - 1) * query.limit;

  const where: Prisma.ProductWhereInput = {
    ...(query.category
      ? {
          category: {
            name: {
              equals: query.category,
              mode: "insensitive"
            }
          }
        }
      : {}),
    ...(query.minPrice !== undefined || query.maxPrice !== undefined
      ? {
          price: {
            ...(query.minPrice !== undefined ? { gte: query.minPrice } : {}),
            ...(query.maxPrice !== undefined ? { lte: query.maxPrice } : {})
          }
        }
      : {}),
    ...(query.q
      ? {
          OR: [
            {
              title: {
                contains: query.q,
                mode: "insensitive"
              }
            },
            {
              description: {
                contains: query.q,
                mode: "insensitive"
              }
            }
          ]
        }
      : {})
  };

  const [products, total] = await prisma.$transaction([
    prisma.product.findMany({
      where,
      include: {
        category: true
      },
      orderBy: sortMap[query.sort],
      skip,
      take: query.limit
    }),
    prisma.product.count({ where })
  ]);

  return {
    data: products,
    meta: {
      page: query.page,
      limit: query.limit,
      total,
      totalPages: Math.ceil(total / query.limit)
    }
  };
};
