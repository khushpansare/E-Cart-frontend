import React from "react";
import { Link, useLocation } from "react-router-dom";

// CUSTOM COMPONENT
import ComponentWrapper from "../wrapper/ComponentWrapper";

// ASSETS
import Seller from "../assets/seller.png";
import Buyer from "../assets/customer.png";

function Welcome() {
  const location = useLocation();
  const { path } = location.state;

  return (
    <ComponentWrapper>
      <div className="welcome-container">
        <div className="admin">
          <img src={Seller} alt="" />
          {path === "/register" ? (
            <h4>Want to sell your products?</h4>
          ) : (
            <h4>Admin Login</h4>
          )}

          <Link to={path} state={{ role: "admin" }}>
            Seller
          </Link>
        </div>

        <div className="user">
          <img src={Buyer} alt="" />

          {path === "/register" ? (
            <h4>Want to buy products?</h4>
          ) : (
            <h4>User Login</h4>
          )}

          <Link to={path} state={{ role: "user" }}>
            Continue as Buyer
          </Link>
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default Welcome;
