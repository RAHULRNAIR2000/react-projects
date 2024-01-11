import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
function NavScrollExample() {
  return (
    <Navbar expand="lg" bg="transperant" data-bs-theme="dark" className="pt-3 pb-2 ps-5 pe-5" style={{fontSize:"18px"}}>
      <Container fluid >
        <Navbar.Brand href="/">UpCraze</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" className="navLink">
          About
        </Nav.Link>
        <Nav.Link as={NavLink} to="/login" className="navLink">
          Login
        </Nav.Link>
        <Nav.Link as={NavLink} to="/startup" className="navLink">
          Startups
        </Nav.Link>  
        <Nav.Link as={NavLink} to="/investors" className="navLink">
          Investors
        </Nav.Link> 
        <Nav.Link as={NavLink} to="/profile" className="navLink">
          Profile
        </Nav.Link>
         
            
          </Nav>

         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
