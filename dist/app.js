"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const ECommerce_route_1 = require("./modules/student/Routes/ECommerce.route");
const Order_route_1 = require("./modules/student/Routes/Order.route");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
// app.use(cors())
app.use('/api/products', ECommerce_route_1.ProductsRoutes);
app.use('/api/orders', Order_route_1.OrderRoutes);
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route not found' });
});
app.use((err, req, res, next) => {
    res.status(500).json({ success: false, message: err.message });
});
app.get("/", (req, res) => {
    res.send("Hello Next!");
});
exports.default = app;
