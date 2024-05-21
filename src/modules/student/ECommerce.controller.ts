import { Request, Response } from "express";
import { EProducts } from "./ECommerce.interface";
import { productsServices } from "./ECommerce.services";

const createProducts = async (req: Request<{}, {}, EProducts>, res: Response): Promise<void> => {
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

export const productsControllers = {
    createProducts,
};
