import React, { useState } from "react";
import axios from "axios";
function ShopKeeperDetails() {
  const [user, setuser] = useState({
    ShopName: "",
    address: "",
    pincode: "",
    mobile_no: "",
    email: "",
    password: "",
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://pullventure.live/api/createsk/", user)
      .then((res) => {
        if (res.status == 201) {
          alert("successfully added");
          window.location = "/Adminpage";
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
  return (
    <>
      <div className="box" style={{ fontFamily: "Montserrat Alternates" }}>
        <h2 style={{ paddingTop: "20px" }}>Add Shopkeeper</h2>
        <input
          type="text"
          placeholder="Enter shop name"
          name="ShopName"
          value={user.ShopName}
          onChange={handler}
          style={{ fontFamily: "Montserrat Alternates" }}
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={user.address}
          onChange={handler}
          style={{ fontFamily: "Montserrat Alternates" }}
        />
        <input
          type="text"
          placeholder="pincode"
          name="pincode"
          value={user.pincode}
          onChange={handler}
          style={{ fontFamily: "Montserrat Alternates" }}
        />
        <input
          type="text"
          placeholder="Mobile number"
          name="mobile_no"
          value={user.mobile_no}
          onChange={handler}
          style={{ fontFamily: "Montserrat Alternates" }}
        />
        <input
          type="text"
          placeholder="Email address"
          name="email"
          value={user.email}
          onChange={handler}
          style={{ fontFamily: "Montserrat Alternates" }}
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handler}
          style={{ fontFamily: "Montserrat Alternates" }}
        />
        <button className="btn" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default ShopKeeperDetails;
