import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import logo from '../assets/logo.png';
import profile from '../assets/profile.jpg';

const NavBar = () => {
  return (
    <Navbar bg="success" variant="dark" expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" className="navbar-logo" />
        ERP-Admin
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form className="mx-auto search-form">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light" className="search-button">
            <i className="bi bi-search"></i>
          </Button>
        </Form>
        <Nav className="ml-auto">
          <Nav.Link href="#notifications" className="nav-icon">
            <FontAwesomeIcon icon={faBell} />
            <span className="badge1">5</span>
            <span className="nav-icon-name">Notifications</span>
          </Nav.Link>
          <Nav.Link href="#messages" className="nav-icon">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="badge">2</span>
            <span className="nav-icon-name">Messages</span>
          </Nav.Link>
          <NavDropdown
            title={
              <span>
                <img src={profile} alt="Profile" className="rounded-circle profile-image" />MS mavas
              </span>
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
