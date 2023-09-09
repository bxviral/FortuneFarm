import React from "react";
import axios from "axios";
function Productdetails({ item }) {
  const edit = () => {
    localStorage.setItem("productId", item?._id);
    window.location = "/EditProduct";
  };
  const del = async () => {
    await axios
      .delete("http://pullventure.live/api/deleteprod/?_id=" + item?._id)
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
        <div>{item?.productName}</div>
        <div>{item?.quantity}</div>
        <div>{item?.price}</div>
        <div>{item?.prodType}</div>

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
}

export default Productdetails;
