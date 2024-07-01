import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import seraph_logo from '../assets/seraph_logo.png';
import 'bootstrap/dist/css/bootstrap.css';

const AppNavbar = () => {
  const location = useLocation();
  const isSignInPage = location.pathname === '/signin';

  if (isSignInPage) {
    return null; // Return null to render nothing if on the sign-in page
  }

  const navbarStyles = {
    backgroundColor: '#20375D',
    color: 'white',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    zIndex: 1000,
  };

  const brandStyles = {
    color: '#d9d9d9',
    fontFamily: 'Lexend-Regular, Helvetica',
    textDecoration: 'none',
    marginRight: 'auto',
    fontSize: '20px',
    fontWeight: '400',
    marginLeft: '15px',
    lineHeight: '80px', // Center the brand vertically within the navbar
    fontSize: '50px',
  };

  const dropdownStyles = {
    marginRight: '15px',
    backgroundColor: '#FFFFFF', // Background color of the dropdown
    color: '#20375D', // Text color of the dropdown items
    borderRadius: '0', // Optional: Adjust border radius if needed
    fontWeight: 'bold',
    borderRadius: '10px',
  };

  const logoStyles = {
    height: '60px', // Adjust the logo height as needed
    marginRight: '10px', // Optional: Adjust logo margin
  };

  return (
    <Navbar expand="lg" style={navbarStyles}>
      <Container>
        <img src={seraph_logo} alt="Seraph Logo" style={logoStyles} />
        <Navbar.Brand as={Link} to="/signin" style={brandStyles}>S E R A P H</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={dropdownStyles}>
            <NavDropdown title="DROPDOWN" id="basic-nav-dropdown" align="end">
              <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sprintcreation">Sprint Creation</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sprintoverview">Sprint Overview</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sprintupdate">Sprint Update</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pdfoverview">PDF Overview</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/projectcreation">Project Creation</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/projectarchive">Project Archive</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/projectview">Project View</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/warcreation">War Creation</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/signin">Sign In</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
