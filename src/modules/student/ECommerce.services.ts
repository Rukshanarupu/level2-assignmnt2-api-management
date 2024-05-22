import { EProducts } from "./ECommerce.interface"
import { Products } from "./ECommerce.model"

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
    const result = await Products.findByIdAndUpdate(id, { $set: updateData }, { new: true });
    return result;
};
const deleteProductById= async (id: string)=>{
    const result=await Products.findByIdAndDelete(id)
    return result
}

export const productsServices={
    createProducts, getAllProducts, getProductById, updateProduct, deleteProductById
}