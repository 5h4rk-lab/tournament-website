import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="light" expand="lg" sticky="top">
      <Navbar.Brand as={Link} to="/homelogin">
        Tournament Website
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/create-event">
            Create an Event
          </Nav.Link>
          <Nav.Link as={Link} to="/upcoming-events">
            Upcoming Events
          </Nav.Link>
          <Nav.Link as={Link} to="/need-help">
            Need Help
          </Nav.Link>
          <Nav.Link as={Link} to="/account">
            Account
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
