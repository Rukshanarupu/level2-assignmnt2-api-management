import { EProducts } from "./ECommerce.interface"
import { Products } from "./ECommerce.model"

const createProducts= async (payLoad: EProducts)=>{
    const result=await Products.create(payLoad)
    return result
}

export const productsServices={
    createProducts
}