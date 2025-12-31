import React, { useState } from "react";
import { Link } from "react-router-dom";

// MUI Component
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <ul className="bg-dark dropdown-menu dropdown-menu-lg-end">
                <li>
                  <Link to={"/welcome"}> Login </Link>
                </li>
                <li>
                  <Link to={"/welcome"}> Register </Link>
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
