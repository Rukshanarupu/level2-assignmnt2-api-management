"use strict";
// import { Schema, model, connect } from 'mongoose';
// import { EInventory, EProducts, EVariants, Username } from './ECommerce.interface';
// const userSchema = new Schema<Username>({
//     firstName: { type: String, required: true },
//     middleName: { type: String, required: true },
//     lastName: { type: String, required: true }
// })
// const  variantSchema = new Schema<EVariants>({
//     type: { type: String, required: true },
//     value: { type: String, required: true }
// })
// const  inventorySchema = new Schema<EInventory>({
//     quantity: { type: Number, required: true },
//     inStock: { type: Boolean, required: true },
// })
// const productsSchema = new Schema<EProducts>({
//     name: userSchema,
//     description : { type: String, required: true },
//     price : { type: Number, required: true },
//     category: { type: String, required: true },
//     tags :{type: [String], required: true},
//     variants :[variantSchema],
//     inventory: inventorySchema
// });
// const Products = model<EProducts>('Products', productsSchema);
