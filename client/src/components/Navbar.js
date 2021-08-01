import { Container, Navbar as NavbarComp, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import imgLogo from "../assets/logo.png";

export default function Navbar() {
  return (
    <NavbarComp expand="lg" className="py-1">
      <Container>
        <NavbarComp.Brand as={Link} to="/">
          <img src={imgLogo} style={{ width: "40px" }} />
        </NavbarComp.Brand>
        <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
        <NavbarComp.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#link">Signup</Nav.Link>
            <Button
              as={Link}
              to="/buy-super-user"
              className="btn btn-super-user-landing ms-3"
            >
              Super user
            </Button>
          </Nav>
        </NavbarComp.Collapse>
      </Container>
    </NavbarComp>
  );
}
