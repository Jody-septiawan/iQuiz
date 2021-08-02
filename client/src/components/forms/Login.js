import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router";

import { UserContext } from "../../contexts/userContext";

import { API } from "../../config/api";

export default function Login({ handleClose }) {
  let history = useHistory();
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

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(form);
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify({
        email: form.email,
        password: form.password,
      });

      const response = await API.post("/login", body, config);

      if (response.data.status == "success") {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });
        handleClose();
        removeAllToasts();
        const content = "Login success";
        addToast(content, {
          appearance: "success",
          autoDismiss: true,
        });
        // if (response.data.data.role == "ADMIN") {
        //   history.push("/admin");
        // }
      } else {
        removeAllToasts();
        const content = response.data.message;
        addToast(content, {
          appearance: "error",
          autoDismiss: true,
        });
      }

      // dispatch({
      //   type: "LOGIN_SUCCESS",
      //   payload: form,
      // });
      // handleClose();
      // removeAllToasts();
      // const content = "Login success";
      // addToast(content, {
      //   appearance: "success",
      //   autoDismiss: true,
      // });
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
