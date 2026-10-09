import type { RequestHandler } from "express";
import { getProducts } from "../services/product-service.js";

export const listProducts: RequestHandler = async (req, res) => {
  const result = await getProducts(req.query);

  res.status(200).json(result);
};
