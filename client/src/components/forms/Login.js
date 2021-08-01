import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";

import { UserContext } from "../../contexts/userContext";

export default function Login({ handleClose }) {
  const { addToast, removeAllToasts } = useToasts();

  const [state, dispatch] = useContext(UserContext);
  const [form, setForm] = useState({
    name: "Jody Septiawan",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    try {
      e.preventDefault();
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: form,
      });
      handleClose();
      removeAllToasts();
      const content = "Login success";
      addToast(content, {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          onChange={onChange}
          value={form.email}
          name="email"
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          onChange={onChange}
          value={form.password}
          name="password"
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <div className="d-grid gap-2">
        <Button className="btn-get-started" type="submit" size="sm">
          Login
        </Button>
      </div>
    </Form>
  );
}
