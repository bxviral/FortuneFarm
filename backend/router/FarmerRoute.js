import FarmerModel from "../model/FarmerModel.js";

class FarmerRoute {
  static createDoc = async (req, res) => {
    const obj = new FarmerModel(req.body);
    const result = await obj.save();
    res.status(201).send(result);
  };

  static getAllDoc = async (req, res) => {
    try {
      const result = await FarmerModel.find({
        email: req.query.email,
      });

      res.status(200).send(result);
    } catch (err) {
      console(err);
    }
  };
  static getDoc = async (req, res) => {
    const data = await FarmerModel.findOne({ _id: req.query._id });
    return res.status(200).send(data);
  };
  static getDocByNo = async (req, res) => {
    try {
      const result = await FarmerModel.findOne({
        mobile: req.body.mobile,
      });
      if (result != null) {
        if (result.name === req.body.name) {
          res.status(200).send(result);
        } else {
          res.status(203).send("not ok");
        }
      } else {
        res.status(203).send("not ok");
      }
    } catch (err) {
      console.log(err);
    }
  };

  static updateDocById = async (req, res) => {
    try {
      const result = await FarmerModel.findOneAndUpdate(
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
      const updateuser = await FarmerModel.findOne({
        _id: req.query._id,
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
      const result = await FarmerModel.deleteMany({
        _id: req.query._id,
      });
      res.status(204).send(result);
    } catch (err) {
      console(err);
    }
  };
  static deletecart = async (req, res) => {
    try {
      const farmer = await FarmerModel.findOne({
        name: req.body.name,
      });
      const cartIndex = farmer.cart.findIndex(
        (item) => item.productId.toString() === req.body.ide.toString()
      );

      if (cartIndex === -1) {
        // If cart item not found, send appropriate response
        return res.status(404).send("Cart item not found");
      }
      farmer.cart.splice(cartIndex, 1);
      await farmer.save();
      res.status(200).send(farmer);
    } catch (err) {
      console.log(err);
    }
  };
  static updatecart = async (req, res) => {
    try {
      const farmer = await FarmerModel.findOne({
        name: req.body.name,
      });
      farmer.cart.push({
        productId: req.body.id,
        purchased: false,
      });
      farmer.save((err, updatedFarmer) => {
        if (err) {
          return res.status(500).json({ error: "Failed to add item to cart" });
        }

        return res.json(updatedFarmer);
      });
    } catch (err) {
      console.log(err);
    }
  };
}
export default FarmerRoute;
