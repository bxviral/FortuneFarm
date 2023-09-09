import mongoose from "mongoose";

const FarmerSchema = new mongoose.Schema({
  mobile: { type: String },
  pincode: { type: String },
  name: { type: String },
  address: { type: String },
  cart: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
      },
      purchased: { type: Boolean },
    },
  ],
});

const FarmerModel = new mongoose.model("FarmerLogin", FarmerSchema);
export default FarmerModel;