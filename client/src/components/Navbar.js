import { useContext, useState } from "react";
import {
  Container,
  Navbar as NavbarComp,
  Nav,
  Button,
  Dropdown,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { UserContext } from "../contexts/userContext";

import imgLogo from "../assets/logo.png";
import ImgDiamond from "../assets/diamond.svg";

import Auth from "./modals/Auth";

export default function Navbar() {
  let history = useHistory();
  const [state, dispatch] = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(null);

  const ImgProfile = "https://avatars.githubusercontent.com/u/44697757?v=4";

  console.log(state);

  const handleClose = () => {
    setShow(false);
    setTitle(null);
  };
  const handleShow = () => {
    setShow(true);
    setTitle(null);
  };

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    history.push("/");
  };

  return (
    <>
      <NavbarComp expand="lg" className="py-1">
        <Container>
          <NavbarComp.Brand as={Link} to="/">
            <img src={imgLogo} style={{ width: "40px" }} />
          </NavbarComp.Brand>
          <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
          <NavbarComp.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {state.isLogin === false ? (
                <>
                  <button
                    className="btn-auth"
                    onClick={() => {
                      handleShow();
                      setTitle("login");
                    }}
                  >
                    Login
                  </button>
                  <button
                    className="btn-auth"
                    onClick={() => {
                      handleShow();
                      setTitle("signup");
                    }}
                  >
                    Signup
                  </button>
                </>
              ) : (
                <>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="p-0 btn-dropdown"
                      id="dropdown-basic"
                    >
                      <img
                        src={ImgProfile}
                        className="img-profile-navbar ms-1"
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="mt-2">
                      <img
                        src={ImgDiamond}
                        className="ms-3 me-1"
                        style={{ maxWidth: "20px" }}
                      />
                      <span style={{ fontSize: "12px" }}>1240</span>
                      <Dropdown.Item as={Link} to="/topup">
                        Topup
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item as={Link} to="/dashboard">
                        Dashboard
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/profile">
                        Profile
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={handleLogout}>
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              )}

              <Button
                as={Link}
                to="/super-users"
                className="btn btn-super-user-landing ms-3 d-flex align-items-center"
              >
                Super user
              </Button>
            </Nav>
          </NavbarComp.Collapse>
        </Container>
      </NavbarComp>
      <Auth show={show} title={title} handleClose={handleClose} />
    </>
  );
}
