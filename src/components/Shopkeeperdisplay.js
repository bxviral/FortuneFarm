import React from "react";
import axios from "axios";
const Shopkeeperdisplay = ({ item }) => {
  const edit = () => {
    localStorage.setItem("skId", item?._id);
    window.location = "/EditShopkeeper";
  };
  const del = async () => {
    await axios
      .delete("http://pullventure.live/api/deletesk/?_id=" + item?._id)
      .then((res) => {
        if (res.status === 204) {
          alert("successfully delete");
          window.location.reload(true);
        } else {
          window.location.reload(true);
        }
      });
  };
  return (
    <>
      <div className="product-display-two">
        <div>{item?.ShopName}</div>
        <div>{item?.address}</div>
        <div>{item?.pincode}</div>
        <div>{item?.mobile_no}</div>
        <div>{item?.email}</div>
        <div className="btn-s" style={{ backgroundColor: "transparent" }}>
          <button className="edit" onClick={edit}>
            Edit
          </button>
          <button className="delete" onClick={del}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Shopkeeperdisplay;
