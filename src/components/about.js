import React from "react";

const about = () => {
  return (
    <>
      <div className="d-flex justify-content-center mb-5">
        <div
          className=" mx-5"
          style={{
            justifyContent: "center",
            display: "flex",
            boxShadow: "0px 0px 5px rgb(0 0 0 / 40%)",
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff73",
            borderRadius: "10px",
          }}
        >
          <h5
            className="h mt-4"
            style={{
              paddingLeft: "15px",
              paddingRight: "15px",
              fontFamily: "Montserrat Alternates",
            }}
          >
            <ul>
              <li style={{ paddingTop: "15px" }}>
                Welcome to Fortune Farm, your go-to destination for all your
                farming needs. We understand the challenges farmers face in
                their daily lives, which is why we have created a platform that
                provides a comprehensive range of services to make your life
                easier. Whether you're looking for guidance on weather
                predictions, finding stores near your location, or even buying
                products online, we have got you covered.
              </li>
              <li style={{ paddingTop: "15px" }}>
                Our weather prediction tool is designed to help you plan your
                farming activities better, allowing you to make informed
                decisions about planting, irrigation, and harvesting. With
                real-time data and accurate forecasts, you can be sure that
                you're always one step ahead of the weather.
              </li>
              <li style={{ paddingTop: "15px" }}>
                In addition to this, our website also features a store locator
                tool that helps you find stores selling farming equipment,
                seeds, and other essential supplies in your local area. This
                way, you can save time and money by not having to travel long
                distances to get what you need.
              </li>
              <li style={{ paddingTop: "15px" }}>
                And if that wasn't enough, we also offer an online marketplace
                where you can buy a wide range of farming products and
                equipment, all from the comfort of your own home. With
                competitive prices and a user-friendly interface, our online
                store is the perfect solution for busy farmers who don't have
                the time to shop in person.
              </li>
              <li style={{ paddingTop: "15px" }}>
                So why wait? Sign up for our services today and start enjoying
                the benefits of our user-friendly platform, designed to make
                your life as a farmer easier and more efficient.
              </li>
            </ul>
          </h5>
        </div>
      </div>
    </>
  );
};

export default about;
