"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const ECommerce_controller_1 = require("../Controllers/ECommerce.controller");
const Order_controller_1 = require("../Controllers/Order.controller");
const router = express_1.default.Router();
router.post("/", ECommerce_controller_1.productsControllers.createProducts);
router.get("/", ECommerce_controller_1.productsControllers.getAllProducts);
router.get("/:productId", ECommerce_controller_1.productsControllers.getProductById);
router.put("/:productId", ECommerce_controller_1.productsControllers.updateProduct);
router.delete("/:productId", ECommerce_controller_1.productsControllers.deleteProductById);
router.get("/search", ECommerce_controller_1.productsControllers.searchProducts);
router.post("/", Order_controller_1.orderControllers.createOrders);
exports.ProductsRoutes = router;
