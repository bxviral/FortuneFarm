import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Divider } from "antd";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import cart from "../cart";
import axios from "axios";
import pic from "../../images/seeds.jpg";
import pic1 from "../../images/fertilizer.jpg";
import pic2 from "../../images/tool.png";


function ShopOnline(props) {
  const [seed, setSeed] = useState([{}]);
  const [fertilizers, setFertilizers] = useState([{}]);
  const [tools, setTools] = useState([]);
  const [first, setfirst] = useState([]);
  const func = async () => {
    const { data } = await axios.get("http://pullventure.live/api/allproduct/");
    console.log(data);
    if (data.length > 0) {
      setSeed(data.filter((item) => item.prodType === "Seed"));
      setFertilizers(data.filter((item) => item.prodType === "Fertilizer"));
      setTools(data.filter((item) => item.prodType === "Tool"));
    } else {
    }
  };
  useEffect(() => {
    func();
  }, [first]);
  const abc = () => {
    window.location = "/cartItems";
  };
  const addToCart = async (par, i) => {
    if (i > 0) {
      const { data } = await axios.post(
        "http://pullventure.live/api/updatecart/",
        {
          name: localStorage.getItem("name"),
          id: par,
        }
      );
      alert("successfully added");
    } else {
      alert("Product unavailable");
    }
  };
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
      <section className={styles.rightContainer}>
        <section count={cart.length}>
          <div style={{ flexDirection: "column" }}>
            <nav aria-label="...">
              <ul className="pagination pagination-md">
                <li className="page-item">
                  <a className="page-link" href="#Seeds">
                    Seeds
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#Fertilizers">
                    Fertilizers
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#Tools">
                    Tools
                  </a>
                </li>
              </ul>
            </nav>
            <div>
              <Button
                style={{
                  transitionDuration: "0.4s",
                  backgroundColor: "blue",
                  color: "white",
                  border: "none",
                  textDecoration: "none",
                  fontWeight: "bolder",
                  height: "2rem",
                  width: "5rem",
                  fontFamily: "Montserrat Alternates",
                }}
                onClick={abc}
              >
                Cart
              </Button>
            </div>
          </div>
        </section>
        <Divider />
        <section className="flex">
          <div className={styles.parentContainer} id="Seeds">
            {seed.map((seed, seedIndex) => {
              return (
                <div
                  className="card"
                  style={{ width: "40vh", height: "50vh", margin: "5vh" }}
                >
                  <img
                    className="card-img-top"
                    src={pic}
                    alt="Card image cap"
                    style={{ width: "100%", height: "40%" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{seed.productName}</h5>
                    <p className="card-text">
                      <p>Rs. {seed.price} /-</p>
                    </p>
                    <div className="card-footer">
                      <Button
                        className="btn btn-primary"
                        style={{ width: "100%" }}
                        onClick={() => addToCart(seed._id, seed.quantity)}
                      >
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Divider />
          <div className={styles.parentContainer} id="Fertilizers">
            {fertilizers.map((fertilizers, fertilizersIndex) => {
              return (
                <div
                  className="card"
                  style={{ width: "40vh", height: "60vh", margin: "5vh" }}
                >
                  <img
                    className="card-img-top"
                    src={pic1}
                    alt="Card image cap"
                    style={{ width: "100%", height: "40%" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{fertilizers.productName}</h5>
                    <p className="card-text">
                      <p>Rs. {fertilizers.price} /-</p>
                    </p>
                    <div className="card-footer">
                      <Button
                        className="btn btn-primary"
                        onClick={() => addToCart(fertilizers._id, fertilizers.quantity)}
                        style={{ width: "100%" }}
                      >
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Divider />
          <div className={styles.parentContainer} id="Tools">
            {tools.map((tools, toolsIndex) => {
              return (
                <div
                  className="card"
                  style={{ width: "40vh", height: "50vh", margin: "5vh" }}
                >
                  <img
                    className="card-img-top"
                    src={pic2}
                    alt="Card image cap"
                    style={{ width: "100%", height: "40%" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{tools.productName}</h5>
                    <p className="card-text">
                      <p>Rs. {tools.price} /-</p>
                    </p>
                    <div className="card-footer">
                      <Button
                        className="btn btn-primary"
                        onClick={() => addToCart(tools._id, tools.quantity)}
                        style={{ width: "100%" }}
                      >
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
}

export default ShopOnline;
