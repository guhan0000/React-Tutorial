import React from "react";

import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="items">
        <h3 style={{ marginRight: "500px" }}>logo</h3>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
