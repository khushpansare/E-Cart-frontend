import React, { useState } from "react";
import { Link } from "react-router-dom";

const welcomePageData = {
  register: {
    admin_path: "/admin-register",
    user_path: "/user-register",
  },
  login: {
    admin_path: "/admin-login",
    user_path: "/user-login",
  },
};

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <ul className="logo">
            <h2>Logo</h2>
          </ul>
          <ul>
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
          </ul>
          <ul>
            <div className="btn-group">
              <button
                type="button"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
                style={{
                  outline: "none",
                  border: "none",
                  borderRadius: "50%",
                  // padding: "7px 10px ",
                }}
              >
                <i
                  className="bi bi-person-circle"
                  style={{ fontSize: "30px", borderRadius: "50%" }}
                ></i>
              </button>
              <ul className="bg-dark dropdown-menu dropdown-menu-lg-end text-center">
                <li className="p-0!">
                  <Link to={"/welcome"} state={welcomePageData.login}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to={"/welcome"} state={welcomePageData.register}>
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
