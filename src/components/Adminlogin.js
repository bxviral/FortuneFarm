import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Adminpage from "./Adminpage";

function Adminlogin() {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };
  const navigate = useNavigate();
  const onSubmit = () => {
    if (user.email === "ab@gmail.com" && user.password === "12") {
      window.location = "/Adminpage";
    } else {
      alert("wrong info.");
      window.location.reload(true);
    }
  };
  return (
    <>
      <div className="box" style={{fontFamily: 'Montserrat Alternates'}}>
        <h2>Admin Login</h2>
        <input
          type="text"
          placeholder="Email Id"
          name="email"
          value={user.email}
          onChange={handler}
          style={{ fontFamily: 'Montserrat Alternates' }}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handler}
          style={{ fontFamily: 'Montserrat Alternates' }}
        />
        <button className="btn" onClick={onSubmit}>
          Login
        </button>
      </div>
    </>
  );
}

export default Adminlogin;
