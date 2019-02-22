import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

const MainNav = props => {
  return (
    <header className="main-nav">
      <div className="main-nav__logo">
        <h1>Navbar</h1>
      </div>

      <nav className="main-nav__items">
        <ul>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
          <li>
            <NavLink to="/authors">Authors</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
