import { isValidObjectId } from "mongoose";
import ProductModel from "../model/ProductModel.js";


class ProductRoute {
  static createDoc = async (req, res) => {
    const obj = new ProductModel(req.body);
    const result = await obj.save();
    res.status(201).send(result);
  };

  static getAllDoc = async (req, res) => {
    try {
      const result = await ProductModel.find({
        email: req.query.email,
      });

      res.status(200).send(result);
    } catch (err) {
      console(err);
    }
  };
  static getAll = async (req, res) => {
    try {
      const result = await ProductModel.find();

      res.status(200).send(result);
    } catch (err) {
      console(err);
    }
  };
  static getDoc = async (req, res) => {
    const data = await ProductModel.findOne({ _id: req.query._id });
    return res.status(200).send(data);
  };
  static getDocById = async (req, res) => {
    if (!req.query.id) {
      return res.status(400).send("no data");
    } else {
      try {
        const result = await ProductModel.findOne({
          _id: req.query.id,
        });
        if (result != null) {
          res.status(200).send(result);
        } else {
          res.status(203).send("not ok");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  static updateDocById = async (req, res) => {
    try {
      const result = await ProductModel.findOneAndUpdate(
        { email: req.query.email },
        { salary: req.body.salary }
      );
      res.send(result);
    } catch (err) {
      console(err);
    }
  };
  static updateDoc = async (req, res) => {
    try {
      const updateuser = await ProductModel.findOne({
        _id: isValidObjectId(req.query._id),
      });
      if (updateuser.email === req.body.email) {
        await updateuser.updateOne({ $set: req.body });
        res.status(200).json("User Has Been Updated.");
      } else {
        res.status(403).json("You Can Not Update User");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

  static deleteDocById = async (req, res) => {
    try {
      const result = await ProductModel.deleteMany({
        _id: req.query._id,
      });
      res.status(204).send(result);
    } catch (err) {
      console(err);
    }
  };

  static updateDocQuantity = async (req, res) => {

    const isValidId = isValidObjectId(req.query._id);
    if (!isValidId) {
      return res.status(400).json({ message: "Invalid product ID" });
    }
    try {
      console.log(req.query._id);
      const productId = req.query._id;

      // Assuming the ProductModel is a Mongoose model for the 'products' collection
      const updateuser = await ProductModel.findOneAndUpdate(
        { _id: productId },
        { $inc: { quantity: -1 } }, // Decrease the 'quantity' field by 1
        { new: true } // Return the updated document
      );

      if (!updateuser) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json({ user: updateuser });
    } catch (err) {
      res.status(500).json(err);
    }
  };
}



export default ProductRoute;
