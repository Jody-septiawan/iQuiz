import { useContext, useState } from 'react';
import {
  Container,
  Navbar as NavbarComp,
  Nav,
  Button,
  Dropdown,
} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import { FaDoorClosed } from 'react-icons/fa';
import { SiCoderwall } from 'react-icons/si';

import { UserContext } from '../contexts/userContext';

import imgLogo from '../assets/logo.png';
import ImgDiamond from '../assets/diamond.svg';

import Auth from './modals/Auth';

export default function NavbarLesson({ id }) {
  let history = useHistory();
  const [state, dispatch] = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(null);

  const ImgProfile = 'https://avatars.githubusercontent.com/u/44697757?v=4';

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
      type: 'LOGOUT',
    });
    history.push('/');
  };

  return (
    <>
      <NavbarComp
        expand="lg"
        className="py-1"
        className="border-bottom bg-light"
      >
        <Container fluid>
          <NavbarComp.Brand
            as={Link}
            to={`/course/${id}`}
            className="text-danger"
          >
            <FaDoorClosed /> <span style={{ fontSize: '13px' }}>exit</span>
          </NavbarComp.Brand>
          <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
          <NavbarComp.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <>
                <SiCoderwall />
              </>
            </Nav>
          </NavbarComp.Collapse>
        </Container>
      </NavbarComp>
      <Auth show={show} title={title} handleClose={handleClose} />
    </>
  );
}
