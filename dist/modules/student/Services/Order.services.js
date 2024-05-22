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
exports.orderServices = void 0;
const ECommerce_model_1 = require("../Model/ECommerce.model");
const Order_model_1 = require("../Model/Order.model");
const createOrders = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, quantity } = payLoad;
    const product = yield ECommerce_model_1.Products.findById(productId);
    if (!product) {
        return {
            success: false,
            message: 'Order not found'
        };
    }
    ;
    if (product.inventory.quantity < quantity) {
        return {
            success: false,
            message: 'Insufficient quantity available in inventory'
        };
    }
    //decrement the product quantity
    product.inventory.quantity -= quantity;
    product.inventory.inStock = product.inventory.quantity > 0;
    // Update the inStock status based on the new quantity
    if (product.inventory.quantity === 0) {
        product.inventory.inStock = false;
    }
    else {
        product.inventory.inStock = true;
    }
    //update product and order data
    const updatedOrder = yield ECommerce_model_1.Products.findByIdAndUpdate(productId, product, { new: true });
    const result = yield Order_model_1.Orders.create(payLoad);
    return { order: result };
});
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Order_model_1.Orders.find();
    return result;
});
const getOrderByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (!email) {
        return {
            success: false,
            message: 'Email query parameter is required'
        };
    }
    const result = yield Order_model_1.Orders.find({ email });
    return result;
});
exports.orderServices = {
    createOrders, getAllOrders, getOrderByEmail
};
