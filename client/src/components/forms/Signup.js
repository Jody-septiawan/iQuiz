import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";

import { UserContext } from "../../contexts/userContext";

export default function Signup({ handleClose }) {
  const [state, dispatch] = useContext(UserContext);
  const [form, setForm] = useState({
    fullname: "",
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
      console.log(form);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          onChange={onChange}
          value={form.fullname}
          name="fullname"
          type="text"
          placeholder="Full name"
        />
      </Form.Group>

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
          Signup
        </Button>
      </div>
    </Form>
  );
}
