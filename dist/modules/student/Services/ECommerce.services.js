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
exports.productsServices = void 0;
const mongoose_1 = require("mongoose");
const ECommerce_model_1 = require("../Model/ECommerce.model");
const createProducts = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ECommerce_model_1.Products.create(payLoad);
    return result;
});
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ECommerce_model_1.Products.find();
    return result;
});
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ECommerce_model_1.Products.findById(id);
    return result;
});
const updateProduct = (productId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.Types.ObjectId.isValid(productId)) {
        throw new Error('Invalid product ID');
    }
    console.log('id:', productId);
    console.log('Data in service:', updateData);
    const result = yield ECommerce_model_1.Products.findByIdAndUpdate(productId, { $set: updateData }, { new: true });
    console.log(result);
    return result;
});
const deleteProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ECommerce_model_1.Products.findByIdAndDelete(id);
    return result;
});
// const searchProducts = async (searchTerm: string) => {
//     const regex = new RegExp(searchTerm, 'i'); 
//     const result = await Products.find({
//         $or: [
//             { name: { $regex: regex } },
//             { category: { $regex: regex } },
//             { price: { $regex: regex } }
//         ]
//     });
//     // const result = await Products.find({ $text: { $search: searchTerm } });
//     return result;
// };
const searchProducts = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Search term:", searchTerm);
    const result = yield ECommerce_model_1.Products.find({
        $text: { $search: searchTerm }
    });
    return result;
});
exports.productsServices = {
    createProducts, getAllProducts, getProductById, updateProduct, deleteProductById, searchProducts,
};
