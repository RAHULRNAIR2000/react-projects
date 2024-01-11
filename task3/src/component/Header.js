
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";

function Header(){
    return(

<div>
<Navbar bg="dark" variant="dark" expand="lg" >
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto my-3">
      <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
      <Nav.Link as={NavLink} to="/services">
            Services
          </Nav.Link>
        <Nav.Link as={NavLink} to="/about" className="navLink">
          About
        </Nav.Link>
        <Nav.Link as={NavLink} to="/contact" className="navLink">
          Contact
        </Nav.Link>
        
       
        <Nav.Link as={NavLink} to="/profile" className="navLink">
          Profile
        </Nav.Link>
 
        <Nav.Link as={NavLink} to="/login" className="navLink">
          Login
        </Nav.Link>
       
       </Nav>
        </Navbar.Collapse>
      </Navbar>
</div>



    )
}
export default Header