import React, { useEffect, useState } from "react";
import Cart from "./cart";
import axios from "axios";
const CartItems = (props) => {
  const [productInfo, setProductInfo] = useState([]);
  const [productData, setProductData] = useState({
    name: localStorage.getItem("name"),
    mobile: localStorage.getItem("mobile"),
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [first, setfirst] = useState([
    {
      productName: "",
      quantity: "",
      price: "",
      email: "",
      prodType: "",
    },
  ]);
  const func = async () => {
    const { data } = await axios.post(
      "http://pullventure.live/api/farmerlogin/",
      productData
    );

    if (data.cart.map !== undefined) {
      if (data.cart.length > 0) {
        setProductInfo([data.cart]);
        console.log("prod. infod", productInfo);
      }
    } else {
    }
    if (productInfo) {
      if (productInfo.length > 0) {
        const axiosRequests = productInfo[0].map(async (item) => {
          const { data } = await axios.post(
            "http://pullventure.live/api/getprodbyid/?id=" + item?.productId
          );
          console.log("er");
          return parseInt(data.price);
        });

        const prices = await Promise.all(axiosRequests);
        const total = prices.reduce((acc, price) => acc + price, 0);
        setTotalPrice(total);
      }
    }
  };

  useEffect(() => {
    func();
  }, [productData]);
  return (
    <>
      {productInfo.map !== undefined ? (
        <>
          <div
            style={{
              gridTemplateColumns: "repeat(3, 1fr)",
              display: "grid",
              justifySelf: "center",
              paddingLeft: "4rem",
            }}
          >
            {productInfo[0]?.map((item) => {
              return (
                <Cart
                  item={item}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className="text-center">Data Loading</div>
      )}
    </>
  );
};

export default CartItems;
