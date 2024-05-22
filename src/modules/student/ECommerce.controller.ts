import { Request, Response } from "express";
import { EProducts } from "./ECommerce.interface";
import { productsServices } from "./ECommerce.services";

const createProducts = async (req: Request<{}, {}, EProducts>, res: Response) => {
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

export const productsControllers = {
    createProducts, getAllProducts, getProductById, updateProduct, deleteProductById
};
