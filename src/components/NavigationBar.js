import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="shadow-sm">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://cdn.shopify.com/shopify-marketing_assets/static/shopify-favicon.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        The Shoppies
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/nominations">Nominations</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;