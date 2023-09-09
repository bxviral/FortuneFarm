import { React, useState, useEffect } from "react";
import Productdetails from "./Productdetails";
import axios from "axios";
function Shopkeeperpage() {
  const [dat, setData] = useState([]);
  const func = async () => {
    const emo = localStorage.getItem("email");
    const { data } = await axios.post(
      "http://pullventure.live/api/getallproduct/?email=" + emo
    );
    if (data.length > 0) {
      setData([data]);
    } else {
    }
  };
  useEffect(() => {
    func();
  }, []);
  const addDetails = () => {
    window.location = "/AddProduct";
  };
  return (
    <>
      <nav className="on-top" style={{ fontFamily: "Montserrat Alternates" }}>
        <button className="admin-btn" onClick={addDetails}>
          Add Products
        </button>
        <button
          className="admin-btn"
          onClick={() => {
            localStorage.removeItem("email");
            window.location = "/";
          }}
        >
          Log Out
        </button>
      </nav>
      <div
        className="product1-display"
        style={{ fontFamily: "Montserrat Alternates" }}
      >
        <div>Product name</div>
        <div>Quantity</div>
        <div>Price</div>
        <div>Type</div>
      </div>
      <div
        style={{
          marginTop: "5px",
          display: "flex",
          justifyContent: "center",
          fontFamily: "Montserrat Alternates",
        }}
      >
        {dat.length > 0 ? (
          <div>
            {dat[0].map((item) => {
              return <Productdetails item={item} />;
            })}
          </div>
        ) : (
          <div className="text-center">Data Loading</div>
        )}
      </div>
    </>
  );
}

export default Shopkeeperpage;
