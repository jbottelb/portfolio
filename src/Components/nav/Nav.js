import React from "react";
import { Link } from "react-router-dom";

// Creates a navbar
const Nav = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li className="nav-links">
          <Link to="/about">About Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
