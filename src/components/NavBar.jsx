import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaFacebook, FaLinkedin, FaGithub, FaHome } from "react-icons/fa";

function NavBar() {
  return (
    <>
      <Navbar bg="teal" variant="dark">
        <Navbar.Brand href="/home" id="nav-name">
          <FaHome /> Monicah Cloud |
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/hire">Hire Me</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link
            href="https://www.facebook.com/monicah.cloud"
            target="_blank"
          >
            <FaFacebook />
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/cloudmonicah/"
            target="_blank"
          >
            <FaLinkedin />
          </Nav.Link>
          <Nav.Link href="https://github.com/monicahcloud" target="_blank">
            <FaGithub />
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavBar;
