"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderControllers = exports.getOrderByEmail = void 0;
const Order_services_1 = require("../Services/Order.services");
const errorHandler_1 = require("../errorHandler");
const orderValidator_1 = require("../Validators/orderValidator");
const createOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = (0, errorHandler_1.validateRequest)(req.body, orderValidator_1.orderSchema);
    // if (error) return res.status(400).json({ success: false, message: error.details[0].message });
    const orderData = req.body;
    try {
        const order = yield Order_services_1.orderServices.createOrders(orderData);
        res.json({
            success: true,
            message: "Order created successfully!",
            data: order,
        });
    }
    catch (error) {
        console.log(error);
        // res.status(500).json({ success: false, message: err.message });
    }
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Order_services_1.orderServices.getAllOrders();
        res.json({
            success: true,
            message: "Orders fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getOrderByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.query.email;
    try {
        const result = yield Order_services_1.orderServices.getOrderByEmail(email);
        res.json({
            success: true,
            message: `Orders fetched successfully for user email!`,
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getOrderByEmail = getOrderByEmail;
exports.orderControllers = {
    createOrders, getAllOrders, getOrderByEmail: exports.getOrderByEmail
};
