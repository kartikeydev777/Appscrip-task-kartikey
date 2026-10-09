import { prisma } from "../utils/prisma.js";

export const getCategories = async () => {
  return prisma.category.findMany({
    orderBy: {
      name: "asc"
    }
  });
};
