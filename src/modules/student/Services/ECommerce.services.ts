import { Types } from "mongoose"
import { EProducts } from "../ECommerce.interface"
import { Products } from "../Model/ECommerce.model"

const createProducts= async (payLoad: EProducts)=>{
    const result=await Products.create(payLoad)
    return result
}
const getAllProducts= async ()=>{
    const result=await Products.find()
    return result
}
const getProductById= async (id: string)=>{
    const result=await Products.findById(id)
    return result
}
const updateProduct = async (id: string, updateData: EProducts) => {
    // const {name, price, category, inventory}=updateData
    if (!Types.ObjectId.isValid(id)) {
        throw new Error('Invalid product ID');
    }
    const result = await Products.findByIdAndUpdate(id, { $set: updateData }, { new: true });
    return result;
};

const deleteProductById= async (id: string)=>{
    const result=await Products.findByIdAndDelete(id)
    return result
}

const searchProducts = async (searchTerm: string) => {
    const regex = new RegExp(searchTerm, 'i'); 
    const result = await Products.find({
        $or: [
            { name: { $regex: regex } },
            { description: { $regex: regex } },
            { tags: { $in: [regex] } },
        ]
    });
    // const result = await Products.find({ $text: { $search: searchTerm } });
    return result;
};

export const productsServices={
    createProducts, getAllProducts, getProductById, updateProduct, deleteProductById, searchProducts,
}