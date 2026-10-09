import { Router } from "express";
import { listCategories } from "../controllers/category-controller.js";
import { asyncHandler } from "../utils/async-handler.js";

export const categoryRoutes = Router();

categoryRoutes.get("/", asyncHandler(listCategories));
