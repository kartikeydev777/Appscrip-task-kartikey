import type { RequestHandler } from "express";
import { getCategories } from "../services/category-service.js";

export const listCategories: RequestHandler = async (_req, res) => {
  const categories = await getCategories();

  res.status(200).json({
    data: categories
  });
};
