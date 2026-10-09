import { Router } from "express";
import { listProducts } from "../controllers/product-controller.js";
import { asyncHandler } from "../utils/async-handler.js";

export const productRoutes = Router();

productRoutes.get("/", asyncHandler(listProducts));
