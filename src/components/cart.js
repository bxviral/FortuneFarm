import React, { useState, useEffect } from "react";
import styles from "./ShopOnline/styles.module.css";
import { Button } from "antd";
import pic from "../images/seeds.jpg";
import pic1 from "../images/fertilizer.jpg";
import pic2 from "../images/tool.png";
import axios from "axios";


function Cart({ item }) {
  const [id, setData] = useState();
  const func = async () => {
    console.log(item?.productId);
    const { data } = await axios.post(
      "http://pullventure.live/api/getprodbyid/?id=" + item?.productId
    );

    setData(data);
  };
  useEffect(() => {
    func();
  }, []);

  const [first, setfirst] = useState({
    name: localStorage.getItem("name"),
    ide: item?.productId,
  });

  const remove = async (e) => {
    // e.preventDefault();
    console.log("ok");
    await axios
      .post("http://pullventure.live/api/deletecart/", first)
      .then((res) => {
        if (res.status === 200) {
          window.location.reload(true);
        } else {
          alert("wrong details");
          window.location.reload(true);
        }
      });
  };

  const payment = async (amount) => {
    try {
      const orderUrl = "http://pullventure.live/api/orders";
      console.log(amount);
      const { data } = await axios.post(orderUrl, { amount: amount });
      console.log(data);
      initPayment(data.data);

    } catch (error) {
      console.log(error);
    }
  }

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_IZyoqohluE390z",
      amount: data.amount,
      currency: data.currency,
      name: "Farmers-Portal",
      description: "Thank you for shopping with us",
      image: "https://i.imgur.com/n5tjHFD.png",
      order_id: data.id,
      handler: async (response) => {
        try {
          const url = "http://pullventure.live/api/verify";
          const { data } = await axios.post(url, response);
          if (data.message === "Payment Successful") {
            alert("Payment Successful");
            remove()
          }
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#3399cc",
      },
    }
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }



  const buy = async (e) => {
    // e.preventDefault();
    console.log(first.ide);
    try {
      const res = await axios.put("http://pullventure.live/api/updatequantity/?_id=" + first.ide);
      if (res.status === 200) {
        payment(res.data.user.price);
      } else {
        alert("product not found");
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <div className={styles.parentContainer} id="Seeds">
        <div
          className="card"
          style={{ width: "40vh", height: "65vh", margin: "5vh" }}
        >
          <img
            className="card-img-top"
            src={
              id?.prodType === "Seed"
                ? pic
                : id?.prodType === "Fertilizer"
                  ? pic1
                  : pic2
            }
            alt="Card image cap"
            style={{ width: "100%", height: "35%" }}
          />
          <div className="card-body">
            <h5 className="card-title">{id?.productName}</h5>
            <h5 className="card-title">{id?.type}</h5>
            <p className="card-text">
              <p>Rs. {id?.price} /-</p>
            </p>
            <div className="card-footer" style={{ height: "30%" }}>

              <Button
                className="btn btn-primary"
                style={{ width: "100%" }}
                on
                onClick={() => buy(id?.productId)}
              >
                Buy Now
              </Button>
              <Button
                className="btn btn-primary"
                style={{ width: "100%" }}
                onClick={remove}
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
