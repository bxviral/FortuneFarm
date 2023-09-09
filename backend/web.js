import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import express from "express";

import ProductRoute from "./router/ProductRoute.js";
import FarmerRoute from "./router/FarmerRoute.js";
import ShopkeeperRoute from "./router/ShopkeeperRoute.js";
const router = express.Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");

router.get("/getallsk/", ShopkeeperRoute.getAllDoc);

router.post("/getskbypin/", ShopkeeperRoute.getDocByPin);

router.post("/loginsk/", ShopkeeperRoute.getDocById);

router.post("/createsk/", ShopkeeperRoute.createDoc);

router.post("/getskbyid/", ShopkeeperRoute.getDoc);

router.put("/editskbyid/", ShopkeeperRoute.updateDoc);

router.delete("/deletesk/", ShopkeeperRoute.deleteDocById);

router.post("/getallproduct/", ProductRoute.getAllDoc);

router.get("/allproduct/", ProductRoute.getAll);

router.post("/getprodbyid/", ProductRoute.getDocById);

router.post("/createprod/", ProductRoute.createDoc);

router.post("/getprodbyid/", ProductRoute.getDoc);

router.put("/updateparticularprod/:id", ProductRoute.updateDocById);

router.put("/editprodbymail/", ProductRoute.updateDoc);

router.delete("/deleteprod/", ProductRoute.deleteDocById);

router.post("/createfarmer/", FarmerRoute.createDoc);
router.post("/farmerlogin/", FarmerRoute.getDocByNo);
router.post("/deletecart/", FarmerRoute.deletecart);
router.post("/updatecart/", FarmerRoute.updatecart);

router.put("/updatequantity/", ProductRoute.updateDocQuantity);

router.post("/orders", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: "rzp_test_IZyoqohluE390z",
            key_secret: "LSWvNexdVUNhVxApJOdTY4Vo",
        });

        const options = {
            amount: req.body.amount * 100,
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
            payment_capture: 0,
        };

        instance.orders.create(options, (err, order) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: "Something Went Wrong",
                });
            }
            return res.status(200).json({data: order});
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }

});

router.post("/verify", (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body;

        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac("sha256", "LSWvNexdVUNhVxApJOdTY4Vo")
            .update(sign.toString())
            .digest("hex");

        if (expectedSign === razorpay_signature) {
            return res.status(200).json({
                message: "Payment Successful",
            });
        }

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
})

export default router;
