import mongoose from "mongoose";
const mongoURI =
  "mongodb+srv://apar:apar@cluster0.wqr5km9.mongodb.net/?retryWrites=true&w=majority";

const mongoDB = async () => {
  await mongoose.connect(mongoURI, async (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected successfully");
    }
  });
};
export default mongoDB;
