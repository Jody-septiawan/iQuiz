import { Modal } from "react-bootstrap";

import Login from "../forms/Login";
import Signup from "../forms/Signup";

export default function Auth(props) {
  const { show, handleClose, title } = props;
  return (
    <Modal show={show} onHide={handleClose} size="sm" centered>
      <Modal.Body>
        {title === "login" ? (
          <Login handleClose={handleClose} />
        ) : (
          <Signup handleClose={handleClose} />
        )}
      </Modal.Body>
    </Modal>
  );
}
