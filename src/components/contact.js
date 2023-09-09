import React from "react";

const contact = () => {
  return (
    <>
      <div className="d-flex justify-content-center mb-5">
        <div
          className="mx-5"
          style={{
            fontFamily: "Montserrat Alternates",
            justifyContent: "center",
            display: "flex",
            boxShadow: "0px 0px 5px rgb(0 0 0 / 40%)",
            width: "100%",
            height: "450px",
            backgroundColor: "#ffffff73",
            borderRadius: "10px",
          }}
        >
          <form
            action="https://formsubmit.co/24a23ab16ac8c359b7c3409196acc054"
            method="POST"
          >
            <div
              className="formm"
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                width: "32rem",
              }}
            >
              <h1 className="h mt-5">Contact me</h1>
              <label
                className="textform d-flex justify-content-start"
                htmlFor="name"
                style={{ fontWeight: "bold" }}
              >
                Name
              </label>
              <input
                name="name"
                className="textform mb-3"
                type="text"
                id="name"
                style={{ borderRadius: "10px" }}
                required
              />
              <label
                className="textform d-flex justify-content-start"
                htmlFor="email"
                style={{ fontWeight: "bold" }}
              >
                Email
              </label>
              <input
                name="email"
                className="textform mb-3"
                type="email"
                id="email"
                style={{ borderRadius: "10px" }}
                required
              />
              <input type="hidden" name="_next" value="" />
              <label
                className="textform d-flex justify-content-start"
                htmlFor="message"
                style={{ fontWeight: "bold" }}
              >
                Message
              </label>
              <textarea
                name="text"
                className="textform mb-4"
                type="text"
                id="message"
                style={{ borderRadius: "10px" }}
                required
              />
              <button
                type="submit"
                className="form-button"
                style={{
                  backgroundColor: "#42FC24",
                  width: "100px",
                  borderRadius: "7px",
                  boxShadow: "0px 0px 3px #42FC24",
                }}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default contact;
