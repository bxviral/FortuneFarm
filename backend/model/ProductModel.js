import mongoose from "mongoose";

const allowedOptions = ["Seed", "Fertilizer", "Tool"];
const ProductSchema = new mongoose.Schema({
  productName: { type: String },
  quantity: { type: Number },
  price: { type: Number },
  email: { type: String },
  prodType: {
    type: String,
    enum: allowedOptions,
  },
});
const ProductModel = new mongoose.model("Product", ProductSchema);
export default ProductModel;