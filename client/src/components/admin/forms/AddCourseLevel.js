import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Switch from "react-switch";

import { API } from "../../../config/api";

export default function AddCourseLevel({ handleCloseAdd, refetch, id }) {
  const [message, setMessage] = useState(null);
  const [form, setform] = useState({
    name: "",
    courseId: id,
    isPublish: true,
  });

  const handleChangePublish = () => {
    setform({
      ...form,
      isPublish: !form.isPublish,
    });
  };

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      const response = await API.post("/course-level", body, config);

      if (response.data.status == "success") {
        refetch();
        handleCloseAdd();
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="mb-2 text-danger">{message && message}</div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter course level name"
        />
      </Form.Group>
      <div className="d-flex align-items-center">
        <span className="me-1">Publish</span>
        <Switch
          width={36}
          height={18}
          onChange={handleChangePublish}
          checked={form.isPublish}
        />
      </div>
      <div className="d-grid gap-2 mt-3">
        <Button variant="primary" type="submit" size="sm">
          Submit
        </Button>
      </div>
    </Form>
  );
}
