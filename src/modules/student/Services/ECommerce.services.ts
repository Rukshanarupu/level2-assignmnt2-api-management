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
    if (!Types.ObjectId.isValid(id)) {
        throw new Error('Invalid product ID');
    }

    const result = await Products.findOneAndUpdate({_id:id}, { $set: updateData }, { new: true });
    return result;
};
// db.test.updateOne({ "_id" : ObjectId("6406ad63fc13ae5a40000069")},{$set:{age:70}})

const deleteProductById= async (id: string)=>{
    const result=await Products.findByIdAndDelete(id)
    return result
}

const searchProducts = async (searchTerm: string) => {
    const result = await Products.find({ $text: { $search: searchTerm } });
    return result;
};

export const productsServices={
    createProducts, getAllProducts, getProductById, updateProduct, deleteProductById, searchProducts,
}