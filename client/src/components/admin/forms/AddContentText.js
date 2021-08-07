import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import { API } from '../../../config/api';

export default function AddContentText(props) {
  const { lessonId, handleCloseModalAdd, refetch } = props;
  const [form, setForm] = useState({
    title: '',
    desc: '',
    content: '',
    option: '',
    correctAnswer: '',
    correction: '',
    lessonId,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const body = JSON.stringify(form);

      const response = await API.post('/content', body, config);

      if (response.data.status == 'success') {
        refetch();
        handleCloseModalAdd();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId={`exampleForm.ControlInput1`}>
        <Form.Label className="mb-0">Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="mb-0">Description</Form.Label>
        <Form.Control
          as="textarea"
          style={{ minHeight: '120px' }}
          name="desc"
          value={form.desc}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
        <Form.Label className="mb-0">Content</Form.Label>
        <Form.Control
          as="textarea"
          style={{ minHeight: '120px' }}
          name="content"
          value={form.content}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
        <Form.Label className="mb-0">Option</Form.Label>
        <Form.Control
          as="textarea"
          style={{ minHeight: '120px' }}
          name="option"
          value={form.option}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea4">
        <Form.Label className="mb-0">Correct Answer</Form.Label>
        <Form.Control
          as="textarea"
          style={{ minHeight: '120px' }}
          name="correctAnswer"
          value={form.correctAnswer}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea5">
        <Form.Label className="mb-0">Correction</Form.Label>
        <Form.Control
          as="textarea"
          style={{ minHeight: '120px' }}
          name="correction"
          value={form.correction}
          onChange={handleChange}
        />
      </Form.Group>
      <div className="text-end">
        <Button
          size="sm"
          variant="secondary"
          className="me-2"
          onClick={handleCloseModalAdd}
        >
          Cancel
        </Button>
        <Button type="submit" size="sm">
          Save
        </Button>
      </div>
    </Form>
  );
}
