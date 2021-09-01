import React from "react";
import { Link } from "react-router-dom";

// Creates a navbar
const Nav = () => {
  return (
    <nav class="standard">
      <ul className="nav-links">
        <li className="nav-links">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-links">
          <Link to="/about">About This Page</Link>
        </li>
        <li className="nav-links">
          <Link to="projects">Projects and Code</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
