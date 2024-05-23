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
exports.productsControllers = void 0;
const ECommerce_services_1 = require("../Services/ECommerce.services");
const errorHandler_1 = require("../errorHandler");
const productValidator_1 = require("../Validators/productValidator");
const createProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = (0, errorHandler_1.validateRequest)(req.body, productValidator_1.productSchema);
    if (error) {
        return (res.status(400).json({
            success: false,
            message: error.details[0].message
        }));
    }
    const productData = req.body;
    try {
        const result = yield ECommerce_services_1.productsServices.createProducts(productData);
        res.json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        // res.status(500).json({ success: false, message: error.message });
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield ECommerce_services_1.productsServices.getAllProducts();
        res.json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    try {
        const result = yield ECommerce_services_1.productsServices.getProductById(productId);
        res.json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const updateData = req.body;
    // console.log('Product ID:', productId);
    // console.log('Update Data:', updateData);
    try {
        const result = yield ECommerce_services_1.productsServices.updateProduct(productId, updateData);
        // if (!result) {
        //     return res.status(404).json({
        //         success: false,
        //         message: "Product not found",
        //     });
        // }
        res.json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    try {
        const result = yield ECommerce_services_1.productsServices.deleteProductById(productId);
        res.json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const searchProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = req.query;
    if (!searchTerm) {
        return res.status(400).json({
            success: false,
            message: "Search term is required",
        });
    }
    try {
        const result = yield ECommerce_services_1.productsServices.searchProducts(searchTerm);
        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: `No products found matching search term '${searchTerm}'`,
            });
        }
        res.json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});
exports.productsControllers = {
    createProducts, getAllProducts, getProductById, updateProduct, deleteProductById, searchProducts
};
