/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Container from "react-bootstrap/Container";
import "./nav.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
const Navigation = () => {
  return (
    <>
      <div className="container">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand className="header-logo">
            <img src={logo} className="logo" />
            <button className="header-button-mobile">For Consumers</button>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav-items">
              <Link to="/">
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link to="/">
                <Nav.Link>Events</Nav.Link>
              </Link>
              <Link to="/">
                <Nav.Link>Career</Nav.Link>
              </Link>
              <Link to="/">
                <Nav.Link>Venues</Nav.Link>
              </Link>
              <Link to="/">
                <Nav.Link>Blog</Nav.Link>
              </Link>
              <Link to="/">
                <Nav.Link>Contact</Nav.Link>
              </Link>
              <button className="header-button">For Consumers</button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Navigation;
