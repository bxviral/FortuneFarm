import mongoose from "mongoose";

const ShopkeeperSchema = new mongoose.Schema({
  ShopName: { type: String },
  address: { type: String },
  pincode: { type: String },
  mobile_no: { type: String },
  email: { type: String },
  password: { type: String },
});

const ShopkeeperModel = new mongoose.model("shopkeeperlogin", ShopkeeperSchema);
export default ShopkeeperModel;