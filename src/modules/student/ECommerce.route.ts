import express, { Request, Response } from "express";
import { productsControllers } from "./ECommerce.controller";

const router = express.Router();

router.post("/", productsControllers.createProducts);
// router.get("/:slug", MovieControllers.getMovieBySlug);
// router.get("/", MovieControllers.getAllMovies);

export const ProductsRoutes = router;