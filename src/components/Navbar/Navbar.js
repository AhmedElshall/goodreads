import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Image } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/userAvatar.png";
import { Button } from "react-bootstrap";

import "./Navbar.scss";

const navBar = props => {
  return (
    <>
      <header className="main-nav">
        <Navbar variant="light" expand="md">
          <Navbar.Brand className="main-nav__logo">
            <NavLink to="/" exact>
              <img
                src={logo}
                width="140"
                height="40"
                className="d-inline-block align-top"
                alt="Goodreads Logo"
              />
            </NavLink>
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="mr-auto main-nav__items">
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
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
          <div className="user-avatar">
            <Image src={avatar} width="50" height="50" roundedCircle />
            <Button onClick={props.logout} variant="success">
              log out
            </Button>
          </div>
          {/* </Navbar.Collapse> */}
        </Navbar>
        {/* //! collapsed */}
      </header>
      <Nav className="main-nav__items main-nav__items__collapsed">
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
      </Nav>
    </>
  );
};

export default navBar;
