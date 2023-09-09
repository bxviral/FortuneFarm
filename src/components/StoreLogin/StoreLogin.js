import React, { useState } from "react";
import styles from "./style.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

function StoreLogin() {
  const [data, setData] = useState([{ name: "", mobile: "" }]);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://pullventure.live/api/farmerlogin/", data)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("mobile", res.data.mobile);
          localStorage.setItem("name", res.data.name);
          localStorage.setItem("pincode", res.data.pincode);

          window.location = "/shopOnline";
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
          {/* <li className="nav-item">
            <NavLink
              className="nav-link"
              style={{ color: "black" }}
              to="/shopOnline"
            >
              Shop Online
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              style={{ color: "black" }}
              to="/nearShops"
            >
              Shops Near me
            </NavLink>
          </li> */}
        </ul>
      </section>
      <section className={styles.rightContainer}>
        <h1 style={{ textAlign: "center", fontWeight: "400", color: "black" }}>
          Login
        </h1>
        <form style={{ padding: "60px" }} onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            className={styles.name}
            placeholder="Name"
            name="name"
            value={data.name}
            required
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            id="mobNo"
            className={styles.mobNo}
            placeholder="Mobile Number"
            name="mobile"
            value={data.mobile}
            required
            onChange={handleChange}
          />
          <br />
          <input
            type="button"
            id="btn"
            value="Login"
            onClick={handleSubmit}
            className={styles.btn}
          />
          <br />

          <h5>Don't have an account?</h5>
          <NavLink to="/StoreSignUp">
            <input
              type="button"
              id="btn"
              value="Sign Up"
              className={styles.btn}
            />
          </NavLink>
          <br />
        </form>
      </section>
    </>
  );
}

export default StoreLogin;
