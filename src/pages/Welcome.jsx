import React from "react";
import { Link, useLocation } from "react-router-dom";

// CUSTOM COMPONENT
import ComponentWrapper from "../wrapper/ComponentWrapper";

// ASSETS
import Seller from "../assets/seller.png";
import Buyer from "../assets/customer.png";

function Welcome() {
  const location = useLocation();
  const { admin_path, user_path } = location.state;

  return (
    <ComponentWrapper>
      <div className="welcome-container">
        <div className="admin">
          <img src={Seller} alt="" />
          <h4>Want to sell your products?</h4>
          <Link to={admin_path}>Seller</Link>
        </div>

        <div className="user">
          <img src={Buyer} alt="" />
          <h4>Want to buy products?</h4>
          <Link to={user_path}>Continue as Buyer</Link>
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default Welcome;
