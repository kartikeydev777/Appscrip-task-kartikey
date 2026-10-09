import cors from "cors";
import express from "express";
import helmet from "helmet";
import { env } from "./config/env.js";
import { errorHandler } from "./middleware/error-handler.js";
import { notFoundHandler } from "./middleware/not-found-handler.js";
import { categoryRoutes } from "./routes/category-routes.js";
import { productRoutes } from "./routes/product-routes.js";

export const app = express();

app.use(helmet());
app.use(
  cors({
    origin: env.FRONTEND_URL
  })
);
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);

app.use(notFoundHandler);
app.use(errorHandler);
