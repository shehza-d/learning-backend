import mongoose from "mongoose";
export const productModel = mongoose.model("productSchema", new mongoose.Schema({
    productName: { type: String, require: true },
    productDescription: String,
    productPrice: { type: Number, require: true },
    productImg: { type: String },
    // classID: String,
    createdDate: { type: Date, default: Date.now },
}));
