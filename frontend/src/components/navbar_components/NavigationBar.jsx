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
            <Navbar.Brand href="/dashboard">S E R A P H</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/pdfoverview">PDF Overview</Nav.Link>
                <Nav.Link href="/projectarchive">Project Archive</Nav.Link>
                <Nav.Link href="/war">Create War</Nav.Link>
                <Nav.Link href="/">Sign Out</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
} 
export default NavigationBar