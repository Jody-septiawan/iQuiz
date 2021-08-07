import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useQuery } from 'react-query';

import { Link } from 'react-router-dom';

import { MdArrowBack } from 'react-icons/md';
import { GoPlus } from 'react-icons/go';

import ContentModalAdd from '../modals/ContentModalAdd';

import { API } from '../../../config/api';

export default function LessonContentAdmin({ id }) {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [typeModalAdd, setTypeShowModalAdd] = useState('');

  const handleCloseModalAdd = () => setShowModalAdd(false);
  const handleShowModalAdd = (type) => {
    setShowModalAdd(true);
    setTypeShowModalAdd(type);
  };

  let {
    data: content,
    refetch,
    isLoading: isLoadingContent,
  } = useQuery('contentCache', async () => {
    const response = await API.get('/content/' + id);

    let data = response.data.data;
    let lessonContent = data?.lessonContent?.map((item) => {
      return {
        ...item,
        show: false,
      };
    });
    data = {
      ...data,
      lessonContent,
    };

    return data;
  });

  const [contentData, setContentData] = useState([]);

  useEffect(() => {
    if (content?.lessonContent) {
      setContentData(content?.lessonContent);
    }
    return () => {
      setContentData([]);
    };
  }, [content]);

  const handleShowHide = (id) => {
    let lessonContent = contentData.map((item) => {
      return {
        ...item,
        show: item.id == id && !item.show,
      };
    });
    setContentData(lessonContent);
  };

  return (
    <>
      <Container className="my-5">
        <Row>
          <Col lg="2"></Col>
          <Col lg="8">
            <Row className="mb-3">
              <Col xs="6">
                <Link
                  to={`/level-course/${content?.lessonLevel?.courseId}`}
                  style={{
                    color: '#000000',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <MdArrowBack />
                  Lesson - {content?.lessonLevel?.name}
                </Link>
              </Col>
              <Col xs="6" className="text-end"></Col>
            </Row>
            <div className="rounded card-course-level-admin p-2 mb-2">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  value={content?.name}
                  placeholder="Content name"
                />
              </Form.Group>
              <div className="text-end">
                <Button size="sm">Save</Button>
              </div>
            </div>

            <div className="bg-light rounded  p-2 mb-2">
              {isLoadingContent
                ? 'Loading content ...'
                : contentData?.map((item, index) => (
                    <>
                      <div className="card card-course-level-admin">
                        <div
                          className="card-header card-course-level-admin"
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleShowHide(item.id)}
                        >
                          Content {index + 1}
                        </div>
                        <div
                          className={`card-body card-course-level-admin ${
                            item?.show == false && 'd-none'
                          }`}
                        >
                          <Form.Group
                            className="mb-3"
                            controlId={`exampleForm.ControlInput${index}`}
                          >
                            <Form.Label className="mb-0">Title</Form.Label>
                            <Form.Control type="text" value={item.title} />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label className="mb-0">
                              Description
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              value={item.desc}
                              style={{ minHeight: '120px' }}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea2"
                          >
                            <Form.Label className="mb-0">Content</Form.Label>
                            <Form.Control
                              as="textarea"
                              value={item.content}
                              style={{ minHeight: '120px' }}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea3"
                          >
                            <Form.Label className="mb-0">Option</Form.Label>
                            <Form.Control
                              as="textarea"
                              value={item.option}
                              style={{ minHeight: '120px' }}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea4"
                          >
                            <Form.Label className="mb-0">
                              Correct Answer
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              value={item.correctAnswer}
                              style={{ minHeight: '120px' }}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea5"
                          >
                            <Form.Label className="mb-0">Correction</Form.Label>
                            <Form.Control
                              as="textarea"
                              value={item.correction}
                              style={{ minHeight: '120px' }}
                            />
                          </Form.Group>
                          <div className="text-end">
                            <Button size="sm">Save</Button>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
              <div className="card-course-level-admin rounded  p-2 mt-2">
                <span
                  onClick={() => handleShowModalAdd('text')}
                  style={{ cursor: 'pointer' }}
                  className="me-3"
                >
                  <GoPlus /> Text
                </span>
                <span
                  onClick={() => handleShowModalAdd('puzzle')}
                  style={{ cursor: 'pointer' }}
                  className="me-3"
                >
                  <GoPlus /> Puzzle
                </span>
                <span
                  onClick={() => handleShowModalAdd('quiz')}
                  style={{ cursor: 'pointer' }}
                  className="me-3"
                >
                  <GoPlus /> Quiz
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ContentModalAdd
        showModalAdd={showModalAdd}
        handleCloseModalAdd={handleCloseModalAdd}
        typeModalAdd={typeModalAdd}
        lessonId={content?.id}
        refetch={refetch}
      />
    </>
  );
}
