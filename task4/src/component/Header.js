
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import '../App.css';
import Container from 'react-bootstrap/Container';


function Header(){
    return(

<div>
<Navbar bg="black" variant="dark" expand="lg" >

      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end me-5" id="basic-navbar-nav">
      <Container>
          <Navbar.Brand href="/" style={{paddingLeft:"90px"}}>BEYOND</Navbar.Brand>
        </Container>
      <Nav className="mr-auto my-3">
      <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
      <Nav.Link as={NavLink} to="/reviews">
            Reviews
          </Nav.Link>
        <Nav.Link as={NavLink} to="/about" className="navLink">
          About
        </Nav.Link>
        <Nav.Link as={NavLink} to="/starreviews" className="navLink">
          Star Reviews
        </Nav.Link>
    
       </Nav>
        </Navbar.Collapse>
      </Navbar>
</div>



    )
}
export default Header