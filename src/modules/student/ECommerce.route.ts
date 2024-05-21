import express, { Request, Response } from "express";
import { productsControllers } from "./ECommerce.controller";

const router = express.Router();

router.post("/", productsControllers.createProducts);
router.get("/", productsControllers.getAllProducts);

export const ProductsRoutes = router;