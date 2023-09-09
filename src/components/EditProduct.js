import React, { useState, useEffect } from "react";
import axios from "axios";
const EditProduct = () => {
  const emo = localStorage.getItem("email");
  const [prod, setprod] = useState({
    productName: "",
    quantity: "",
    price: "",
    email: emo,
    prodType: "",
  });
  const [id, setid] = useState(localStorage.getItem("productId"));
  let name, value;
  const handler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setprod({ ...prod, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put("http://pullventure.live/api/editprodbymail/?_id=" + id, prod)
      .then((res) => {
        if (res.status == 200) {
          alert("successfully added");
          localStorage.removeItem("productId");
          window.location = "/Shopkeeperpage";
        } else {
          alert("something went wrong");
          window.location.reload(true);
        }
      });
  };

  const fun = async (e) => {
    await axios
      .post("http://pullventure.live/api/getprodbyid/?_id=" + id)
      .then((res) => {
        setprod(res.data);
        console.log(res.data);
      });
  };
  useEffect(() => {
    fun();
  }, [id]);
  return (
    <>
      <div className="box">
        <label htmlFor="">Product Name</label>
        <input
          type="text"
          name="productName"
          value={prod.productName}
          onChange={handler}
        />
        <label htmlFor="">Quanity</label>

        <input
          type="number"
          name="quantity"
          value={prod.quantity}
          onChange={handler}
        />
        <label htmlFor="">Price</label>

        <input
          type="number"
          placeholder="price per unit Kg"
          name="price"
          value={prod.price}
          onChange={handler}
        />
        <select
          id="type"
          name="prodType"
          value={prod.prodType}
          onChange={handler}
        >
          <option value="Seed">Seeds</option>
          <option value="Fertilizer">Fertilizers</option>
          <option value="Tool">Tools</option>
        </select>
        <button className="btn" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default EditProduct;
