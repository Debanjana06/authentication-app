import { Navbar,Nav,Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const NavComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand as={NavLink} to="/">
        Authentication App
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link as={NavLink} to="/">SignUp</Nav.Link>
          <Nav.Link as={NavLink} to="/Profile">Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavComponent