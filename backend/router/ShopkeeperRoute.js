import ShopkeeperModel from "../model/ShopkeeperModel.js";

class ShopkeeperRoute {
  static createDoc = async (req, res) => {
    try {
      const obj = new ShopkeeperModel(req.body);
      const result = await obj.save();
      res.status(201).send(result);
    } catch (err) {
      // Send error response
      res
        .status(500)
        .json({ error: "Failed to create user", message: err.message });
    }
  };

  static getAllDoc = async (req, res) => {
    try {
      const result = await ShopkeeperModel.find();
      res.send(result);
    } catch (err) {
      console(err);
    }
  };
  static getDoc = async (req, res) => {
    const id = req.query._id;

    const data = await ShopkeeperModel.findOne({ _id: id });
    return res.status(200).send(data);
  };
  static getDocByPin = async (req, res) => {
    const pin = req.query.pin;

    const data = await ShopkeeperModel.find({ pincode: pin });
    return res.status(200).send(data);
  };
  static getDocById = async (req, res) => {
    try {
      const result = await ShopkeeperModel.findOne({
        email: req.body.email,
      });
      if (result != null) {
        if (result.password === req.body.password) {
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

  static updateDoc = async (req, res) => {
    try {
      const updateuser = await ShopkeeperModel.findOne({
        id: req.query._id,
      });
      const result = await updateuser.updateOne({ $set: req.body });

      res.status(200).json("User Has Been Updated.");
    } catch (err) {
      res.status(500).json(err);
    }
  };

  static deleteDocById = async (req, res) => {
    try {
      const result = await ShopkeeperModel.deleteMany({
        _id: req.query._id,
      });
      res.status(204).send(result);
    } catch (err) {
      console(err);
    }
  };
}

export default ShopkeeperRoute;
