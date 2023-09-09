import React, { useState, useEffect } from "react";
import axios from "axios";
function AddProduct() {
  const emo = localStorage.getItem("email");
  const [prod, setprod] = useState({
    productName: "",
    quantity: "",
    price: "",
    email: emo,
    prodType: "",
  });
  let name, value;
  const handler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setprod({ ...prod, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://pullventure.live/api/createprod/", prod)
      .then((res) => {
        if (res.status === 201) {
          alert("successfully added");
          window.location = "/Shopkeeperpage";
        } else {
          alert("something went wrong");
          window.location.reload(true);
        }
      });
  };

  return (
    <>
      <div className="box" style={{ fontFamily: "Montserrat Alternates" }}>
        <h2>Add Product</h2>
        <input
          type="text"
          placeholder="Enter product name"
          name="productName"
          value={prod.productName}
          onChange={handler}
          style={{ fontFamily: "Montserrat Alternates" }}
        />
        <input
          type="number"
          placeholder="Enter Quantity"
          name="quantity"
          value={prod.quantity}
          onChange={handler}
          style={{ fontFamily: "Montserrat Alternates" }}
        />
        <input
          type="text"
          placeholder="Price per unit Kg"
          name="price"
          value={prod.price}
          onChange={handler}
          style={{ fontFamily: "Montserrat Alternates" }}
        />
        <select
          id="type"
          name="prodType"
          value={prod.prodType}
          onChange={handler}
          style={{ fontFamily: "Montserrat Alternates" }}
        >
          <option value="Seed">Seed</option>
          <option value="Fertilizer">Fertilizer</option>
          <option value="Tool">Tool</option>
        </select>
        <button className="btn" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default AddProduct;
