import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
const ShopsNearMe = () => {
  const [dat, setData] = useState([]);
  const pi = localStorage.getItem("pincode");
  const func = async () => {
    const { data } = await axios.post(
      "http://pullventure.live/api/getskbypin/?pin=" + pi
    );
    if (data.length > 0) {
      setData([data]);
      console.log(dat);
    } else {
    }
  };
  useEffect(() => {
    func();
  }, [pi]);
  const logout = () => {
    localStorage.removeItem("mobile");
    localStorage.removeItem("pincode");
    localStorage.removeItem("name");
    window.location = "/storeLogin";
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
              onClick={logout}
            >
              Log out
            </NavLink>
          </li>
          <li className="nav-item">
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
          </li>
        </ul>
      </section>

      {dat.length > 0 ? (
        <div
          className={styles.rightContainer}
          style={{
            marginRight: "1rem",
            width: "76%",
          }}
        >
          <h1
            style={{
              fontWeight: "400",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              color: "black",
            }}
          >
            Shops near me
          </h1>
          {dat[0].map((item) => {
            return (
              <div className="product-display-two">
                <div>{item?.ShopName}</div>
                <div>{item?.address}</div>
                <div>{item?.mobile_no}</div>
                <div>{item?.email}</div>
                <br />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center">Data Loading</div>
      )}
    </>
  );
};

export default ShopsNearMe;
