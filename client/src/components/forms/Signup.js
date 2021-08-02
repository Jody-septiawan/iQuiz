import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";

import { UserContext } from "../../contexts/userContext";

import { API } from "../../config/api";

export default function Signup({ handleClose }) {
  const { addToast, removeAllToasts } = useToasts();

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

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify({
        ...form,
        role: "CUSTOMER",
      });

      const response = await API.post("/register", body, config);
      console.log(response.data);
      if (response.data.status == "failed") {
        removeAllToasts();
        const content = response.data.message;
        addToast(content, {
          appearance: "error",
          autoDismiss: true,
        });
      } else {
        handleClose();
        removeAllToasts();
        const content = response.data.message;
        addToast(content, {
          appearance: "success",
          autoDismiss: true,
        });
        addToast("Please login", {
          appearance: "info",
          autoDismiss: true,
        });
      }
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
