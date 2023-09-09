import React, { useState, useEffect } from "react";
import axios from "axios";
const EditShopkeeper = () => {
  const [user, setuser] = useState({
    ShopName: "",
    address: "",
    pincode: "",
    mobile_no: "",
    email: "",
    password: "",
  });
  const [id, setid] = useState(localStorage.getItem("skId"));
  const onSubmit = async (e) => {
    await axios
      .put("http://pullventure.live/api/editskbyid/?_id=" + id, user)
      .then((res) => {
        if (res.status == 200) {
          alert("successfully added");
          localStorage.removeItem("skId");
          window.location = "/Shopkeeperpage";
        } else {
          alert("something went wrong");
          window.location.reload(true);
        }
      });
  };
  let name, value;
  const handler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };
  const fun = async (e) => {
    await axios
      .post("http://pullventure.live/api/getskbyid/?_id=" + id)
      .then((res) => {
        setuser(res.data);
        console.log(res.data);
      });
  };
  useEffect(() => {
    fun();
  }, [id]);
  return (
    <>
      <div className="box" style={{ fontFamily: "Montserrat Alternates" }}>
        <h2>Update Shopkeeper</h2>
        <input
          type="text"
          name="ShopName"
          value={user.ShopName}
          onChange={handler}
          style={{ fontFamily: "Montserrat Alternates" }}
        />
        <input
          type="text"
          name="address"
          value={user.address}
          onChange={handler}
          style={{ fontFamily: "Montserrat Alternates" }}
        />
        <input
          type="text"
          name="pincode"
          value={user.pincode}
          onChange={handler}
          style={{ fontFamily: "Montserrat Alternates" }}
        />
        <input
          type="text"
          name="mobile_no"
          value={user.mobile_no}
          onChange={handler}
          style={{ fontFamily: "Montserrat Alternates" }}
        />
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handler}
          style={{ fontFamily: "Montserrat Alternates" }}
        />
        <input
          type="text"
          name="password"
          value={user.password}
          onChange={handler}
          style={{ fontFamily: "Montserrat Alternates" }}
        />
        <button className="btn" onClick={onSubmit}>
          Update
        </button>
      </div>
    </>
  );
};

export default EditShopkeeper;
