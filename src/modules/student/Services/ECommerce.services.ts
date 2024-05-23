// import { Types } from "mongoose"
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
// const updateProduct = async (productId: string, updateData: EProducts) => {
//     if (!Types.ObjectId.isValid(productId)) {
//         throw new Error('Invalid product ID');
//     }
//     console.log('id:', productId);
//     console.log('Data in service:', updateData);
//     const result = await Products.findByIdAndUpdate(productId, { $set: updateData }, { new: true });
//     console.log(result)
//     return result;
// };

const deleteProductById= async (id: string)=>{
    const result=await Products.findByIdAndDelete(id)
    return result
}

// const searchProducts = async (searchTerm: string) => {
//     // const regex = new RegExp(searchTerm, 'i'); 
//     // const result = await Products.find({
//     //     $or: [
//     //         { name: { $regex: regex } },
//     //         { category: { $regex: regex } },
//     //         { price: { $regex: regex } }
//     //     ]
//     // });
//     const result = await Products.find({
//         name: { $regex: new RegExp(`^${searchTerm}$`, "i") },
//       });
//     console.log(result)
//     return result;
// };

const searchProducts = async (searchTerm: string) => {
    console.log("Search term:", searchTerm);
    const result = await Products.find({
        $text: { $search: searchTerm }
    });
    return result;
};

export const productsServices={
    createProducts, getAllProducts, getProductById,  deleteProductById, 
    searchProducts,
}