import React from "react";
import { NavLink } from "react-router-dom";
import pic from "../images/logo.png";
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ fontSize: "1.2rem", fontFamily: "Montserrat Alternates", color: 'black' }}
    >
      <div className="container-fluid">
        {/* <NavLink className="navbar-brand mx-3" to="/">
                    <img src={photo} alt="" height={40} width={40} style={{ borderRadius: '100px' }} />
                </NavLink> */}
        <NavLink className="navbar-brand mx-3" to="/">
          <img
            src={pic}
            width="180"
            height="90"
            className="d-inline-block align-top"
            alt="logo"
            style={{ paddingLeft: "20px" }}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item mx-3">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink className="nav-link" to="/storeLogin">
                Store
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink to="/weather" className="nav-link">
                Weather
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink to="/contact" className="nav-link">
                Contact us
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink to="/about" className="nav-link">
                About us
              </NavLink>
            </li>
            <li
              className="nav-item dropdown mx-3"
              style={{ paddingTop: "8px", fontSize: "1.2rem" }}
            >
              <a
                className=" dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="."
                style={{ textDecoration: 'none', color: 'black', fontFamily: 'Montserrat Alternates', opacity: '0.6' }}
              >
                Login
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/Adminlogin" className="nav-link">
                    Login as Admin
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ShopKeeperLogin" className="nav-link">
                    Login as Shopkeeper
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
