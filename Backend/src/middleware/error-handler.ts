import type { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { HttpError } from "../utils/http-error.js";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof ZodError) {
    res.status(400).json({
      error: {
        message: "Invalid request parameters",
        details: err.flatten()
      }
    });
    return;
  }

  if (err instanceof HttpError) {
    res.status(err.statusCode).json({
      error: {
        message: err.message
      }
    });
    return;
  }

  console.error(err);

  res.status(500).json({
    error: {
      message: "Internal server error"
    }
  });
};
