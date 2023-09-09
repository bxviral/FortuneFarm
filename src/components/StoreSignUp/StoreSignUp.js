import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import axios from "axios";

function StoreSignUp() {
  const [data, setData] = useState({
    mobile: "",
    pincode: "",
    name: "",
    address: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://35.192.176.64/api/createfarmer/", data)
      .then((res) => {
        if (res.status === 201) {
          alert("successfully added");
          window.location = "/storeLogin";
        } else {
          alert("wrong details");
          window.location.reload(true);
        }
      });
  };

  return (
    <>
      <section className={styles.leftContainer}>
        <ul className={styles.menus}>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              style={{ color: "black" }}
              to="/storeLogin"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </section>
      <section className={styles.rightContainer}>
        <h1 style={{ textAlign: "center", fontWeight: "400", color: "black" }}>
          Sign up
        </h1>
        <form style={{ padding: "60px" }} onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            className={styles.name}
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={data.name}
            required
          />
          <br />
          <input
            type="text"
            id="mobNo"
            className={styles.mobNo}
            placeholder="Mobile Number"
            name="mobile"
            onChange={handleChange}
            value={data.mobile}
            required
          />
          <br />
          <textarea
            type="text"
            id="add"
            className={styles.address}
            placeholder="Your Address"
            name="address"
            onChange={handleChange}
            value={data.address}
            required
          />
          <br />
          <input
            type="text"
            id="pincode"
            className={styles.pincode}
            placeholder="Pincode"
            name="pincode"
            onChange={handleChange}
            value={data.pincode}
            required
          />
          <br />

          <input
            type="button"
            id="btn"
            value="Sign Up"
            onClick={handleSubmit}
            className={styles.btn}
          />
          <br />
        </form>
      </section>
    </>
  );
}

export default StoreSignUp;
