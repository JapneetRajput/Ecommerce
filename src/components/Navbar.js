import React, { useState } from "react";

import { Link } from "react-router-dom";
import styles from "./css/nav.module.css";
import SureshLogo from "../images/SureshLogo.png";

export const Navbar = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav
      className="navbar navbar-dark navbar-expand-lg py-3 px-2 h4"
      style={{ backgroundColor: "#3F3B6C" }}
    >
      <Link className="navbar-brand  font-weight-bolder mx-5" to="./">
        {/* <img src={Logo} alt="Logo" width="135" height="42" className="vertical-align-middle" /> */}
        <a
          className={`${styles.navlink} nav-link `}
          style={{ color: "white", fontSize: "1.7rem" }}
        >
          <img src={SureshLogo} width="150"></img>
        </a>
      </Link>
      <button
        className="custom-toggler navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample09"
        aria-controls="navbarsExample09"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
        // style={{ color: "white" }}
      >
        <span className="navbar-toggler-icon "></span>
      </button>

      <div
        className={`${
          isNavCollapsed ? "collapse justify-content-end" : ""
        } navbar-collapse text-end`}
        id="navbarsExample09"
      >
        <Link
          className={`${styles.navlink} nav-link mx-5`}
          to="/"
          style={{ color: "white" }}
        >
          Home
        </Link>
        <Link
          className={`${styles.navlink} nav-link mx-5`}
          to="/product"
          style={{ color: "white" }}
        >
          Products
        </Link>
        <Link
          className={`${styles.navlink} nav-link mx-5`}
          to="/cart"
          style={{ color: "white" }}
        >
          Cart
        </Link>
      </div>
    </nav>
  );
};
