import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
function ShopKeeperLogin() {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  let name, value;
  const handler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://pullventure.live/api/loginsk/", user).then((res) => {
      if (res.status == 200) {
        // console.log(res.data);
        localStorage.setItem("email", user.email);
        console.log(localStorage.getItem("email"));
        window.location = "/Shopkeeperpage";
      } else {
        alert("wrong details");
        window.location.reload(true);
      }
    });
  };
  return (
    <>
      <div className="box" style={{ fontFamily: "Montserrat Alternates" }}>
        <h2>Shopkeeper Login</h2>
        <input
          type="text"
          placeholder="Email Id"
          name="email"
          value={user.email}
          onChange={handler}
          style={{ fontFamily: "Montserrat Alternates" }}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handler}
          style={{ fontFamily: "Montserrat Alternates" }}
        />
        <button className="btn" onClick={onSubmit}>
          Login
        </button>
      </div>
    </>
  );
}

export default ShopKeeperLogin;
