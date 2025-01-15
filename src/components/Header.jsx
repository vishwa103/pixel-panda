import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll's Link
import logo from '../assets/logo.png';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

const Header = () => {
  return (
    <Navbar className="header" expand="lg">
      <Navbar.Brand className="logo">
        <img src={logo} alt="Pixel Panda" width={24.74} height={15.48} />
        <span className="logo-name">Pixel Panda</span>
      </Navbar.Brand>

      <Navbar.Toggle className="nav-toggle" aria-controls="navbar-nav" />

      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto me-5">
          <Nav.Link>
            <ScrollLink
              to="aboutus" // ID of the section to scroll to
              smooth={true} // Enable smooth scrolling
              duration={500} // Time (in ms) for the scroll animation
              offset={-70} // Offset to adjust for fixed header
            >
              About Us
            </ScrollLink>
          </Nav.Link>
          <Nav.Link>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Services
            </ScrollLink>
          </Nav.Link>
          <Nav.Link>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Projects
            </ScrollLink>
          </Nav.Link>
        </Nav>

        <ScrollLink
          to="getintouch" // ID of the "Get in Touch" section
          smooth={true}
          duration={500}
          offset={-70}
          className="button-one "
        >
          Get in Touch <IoArrowForwardCircleOutline size={20} />
        </ScrollLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
