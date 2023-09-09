import { React, useState, useEffect } from "react";
import Shopkeeperdisplay from "./Shopkeeperdisplay";
import axios from "axios";
function Adminpage() {
  const [dat, setData] = useState([]);
  const func = async () => {
    const { data } = await axios.get("http://pullventure.live/api/getallsk/");
    if (data.length > 0) {
      setData([data]);
      console.log(dat[0]);
    } else {
    }
  };
  useEffect(() => {
    func();
  }, []);
  const addDetails = () => {
    window.location = "/ShopKeeperDetails";
  };
  return (
    <>
      <nav
        className="on-top"
        style={{
          fontFamily: "Montserrat Alternates",
          display: "flex",
          justifyContent: "right",
        }}
      >
        <button className="admin-btn" onClick={addDetails}>
          Add shopkeeper
        </button>
        <button
          className="admin-btn"
          onClick={() => {
            localStorage.removeItem("email");
            window.location = "/";
          }}
        >
          Logout
        </button>
      </nav>
      <div
        className="product-display"
        style={{ fontFamily: "Montserrat Alternates" }}
      >
        <div>Shop name</div>
        <div>Address</div>
        <div>Pincode</div>
        <div>Mobile No.</div>
        <div>Email</div>
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
              return <Shopkeeperdisplay item={item} />;
            })}
          </div>
        ) : (
          <div
            className="text-center"
            style={{ fontFamily: "Montserrat Alternates" }}
          >
            Data Loading
          </div>
        )}
      </div>
    </>
  );
}

export default Adminpage;
