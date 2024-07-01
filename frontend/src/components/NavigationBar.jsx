import 'bootstrap/dist/css/bootstrap.css';
import './NavigationBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function NavigationBar() { 
    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar">
          <Container>
            <Navbar.Brand href="/">S E R A P H</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/sprintoverview">Sprint Overview</Nav.Link>
                <Nav.Link href="/sprintcreation">Sprint Creation</Nav.Link>
                <Nav.Link href="/pdfoverview">PDF Overview</Nav.Link>
                <Nav.Link href="/projectarchive">Project Archive</Nav.Link>
                <Nav.Link href="/signin">Sign In</Nav.Link>
                <Nav.Link href="/projectview">Project View</Nav.Link>
                <Nav.Link href="/projectupdate">Project Update</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
} 
export default NavigationBar