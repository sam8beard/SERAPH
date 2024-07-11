import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import seraph_logo from '../assets/seraph_logo.png';
import 'bootstrap/dist/css/bootstrap.css';

const AppNavbar = () => {
  const location = useLocation();

  // Define page titles based on the pathname
  const pageTitles = {
    '/': 'Dashboard',
    '/sprintcreation': 'Sprint Creation',
    '/sprintoverview': 'Sprint Overview',
    '/sprintupdate': 'Sprint Update',
    '/pdfoverview': 'PDF Overview',
    '/projectcreation': 'Project Creation',
    '/projectupdate': 'Project Update',
    '/projectarchive': 'Project Archive',
    '/projectview': 'Project View',
    '/warcreation': 'War Creation',
  };

  // Determine current page title
  const currentPageTitle = pageTitles[location.pathname];

  const isSignInPage = location.pathname === '/signin';
  if (isSignInPage) {
    return null; // Return null to render nothing if on the sign-in page
  }

  return (
    <Navbar expand="lg" style={{ 
      backgroundColor: '#20375D', 
      color: 'white', 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100vw', 
      zIndex: 100 
    }}>
      <Container>
        <img src={seraph_logo} alt="Seraph Logo" style={{ 
          height: '60px', 
          marginRight: '10px' 
        }} />
        <Navbar.Brand as={Link} to="/signin" style={{ 
          color: '#d9d9d9', 
          fontFamily: 'Lexend-Regular, Helvetica', 
          textDecoration: 'none', 
          marginRight: 'auto', 
          fontSize: '20px', 
          fontWeight: '400', 
          marginLeft: '15px', 
          lineHeight: '80px', 
          fontSize: '50px', 
          marginBottom: '-10px' 
        }}>S E R A P H</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ 
            marginRight: '15px', 
            backgroundColor: '#FFFFFF', 
            color: '#20375D', 
            borderRadius: '10px', 
            fontWeight: 'bold' 
          }}>
            <NavDropdown title="DROPDOWN" id="basic-nav-dropdown" align="end">
              <NavDropdown.Item as={Link} to="/">Dashboard</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sprintcreation">Sprint Creation</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sprintoverview">Sprint Overview</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sprintupdate">Sprint Update</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pdfoverview">PDF Overview</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/projectcreation">Project Creation</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/projectupdate">Project Update</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/projectarchive">Project Archive</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/projectview">Project View</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/warcreation">War Creation</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/signin">Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* Conditional rendering of page title */}
          {currentPageTitle && (
            <div className="page-title" style={{ 
              position: 'absolute', 
              color: 'white', 
              fontSize: '24px', 
              marginTop: '12px', 
              left: '50%', 
              transform: 'translateX(-50%)' 
            }}>
              <h2>{currentPageTitle}</h2>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
