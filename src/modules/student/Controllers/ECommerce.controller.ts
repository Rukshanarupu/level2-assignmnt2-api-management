import { Request, Response } from "express";
import { productsServices } from "../Services/ECommerce.services";
import { validateRequest } from "../errorHandler";
import { productSchema } from "../Validators/productValidator";

const createProducts = async (req: Request, res: Response) => {
    const { error } = validateRequest(req.body, productSchema);
    if (error) return res.status(400).json({ success: false, message: error.details[0].message });

    const productData = req.body;
    try {
        const result = await productsServices.createProducts(productData);
        res.json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    } catch (error) {
        console.log(error)
        // res.status(500).json({ success: false, message: error.message });
    }
};

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await productsServices.getAllProducts();
        res.json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    } catch (error) {
        console.log(error)
    }
};

const getProductById = async (req: Request, res: Response) => {
    const { productId } = req.params;

    try {
        const result = await productsServices.getProductById(productId);
        res.json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    } catch (error) {
        console.log(error)
    }
};

const updateProduct = async (req: Request, res: Response) => {
    const { productId } = req.params;
    const updateData=req.body
    try {
        const result = await productsServices.updateProduct(productId, updateData);
        res.json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    } catch (error) {
        console.log(error)
    }
};

const deleteProductById = async (req: Request, res: Response) => {
    const { productId } = req.params;

    try {
        const result = await productsServices.deleteProductById(productId);
        res.json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    } catch (error) {
        console.log(error)
    }
};

const searchProducts = async (req: Request, res: Response)=> {
    const { searchTerm } = req.query as { searchTerm: string };

    try {
        const result = await productsServices.searchProducts(searchTerm);
        res.json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: result,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

export const productsControllers = {
    createProducts, getAllProducts, getProductById, updateProduct, deleteProductById, searchProducts
};


