// import React from "react";
import "./NavMenu.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavMenu() {
  return (
    <div>
      <Container>
        <Navbar className="custom-navbar" expand="lg" fixed="top">
          <Navbar.Brand href="/" className="nav-title">
            GA
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <>
                <Nav.Link href="#projects" className="navbar-button">
                  Project
                </Nav.Link>
                <Nav.Link href="#skills" className="navbar-button">
                  Skills
                </Nav.Link>
                <Nav.Link href="#contact" className="navbar-button">
                  Contact
                </Nav.Link>
              </>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default NavMenu;
