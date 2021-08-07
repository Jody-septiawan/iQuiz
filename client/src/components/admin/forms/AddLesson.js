import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Switch from "react-switch";

import { API } from "../../../config/api";

export default function AddLesson({ handleCloseAddLesson, refetch, item }) {
  const [message, setMessage] = useState(null);
  const [form, setform] = useState({
    name: "",
    levelId: item.id,
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

      console.log(form);

      const response = await API.post("/lesson", body, config);

      if (response.data.status == "success") {
        refetch();
        handleCloseAddLesson();
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
          placeholder="Enter lesson name"
          required
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
