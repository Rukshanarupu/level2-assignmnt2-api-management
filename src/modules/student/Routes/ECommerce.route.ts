import express from "express";
import { productsControllers } from "../Controllers/ECommerce.controller";
import { orderControllers } from "../Controllers/Order.controller";

const router = express.Router();

router.post("/", productsControllers.createProducts);
router.get("/", productsControllers.getAllProducts);
router.get("/:productId", productsControllers.getProductById);
router.put("/:productId", productsControllers.updateProduct);
router.delete("/:productId", productsControllers.deleteProductById);
router.get("/search", productsControllers.searchProducts);



router.post("/", orderControllers.createOrders);

export const ProductsRoutes = router;