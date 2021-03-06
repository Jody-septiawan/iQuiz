import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';

import { MdArrowBack } from 'react-icons/md';
import { ImHtmlFive } from 'react-icons/im';

import Navbar from '../components/Navbar';

import dataCourse from '../fakedata/course';
import { dataClass } from '../fakedata/class';
import { dataContent } from '../fakedata/Content';

import { API } from '../config/api';

export default function Course() {
  let history = useHistory();
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const detailCourse = dataCourse.find((item) => item.id == id);
    setData(detailCourse);
  }, []);

  let { data: courseLevel, refetch } = useQuery(
    'courseLevelCache',
    async () => {
      const response = await API.get('/course-level/' + id);
      return response.data.data;
    }
  );

  const handleToLesson = (id) => {
    history.push(`/lesson/${id}`);
  };

  return (
    <>
      <Navbar />
      <Container className="mt-3">
        <Row>
          <Col>
            <Link
              to="/dashboard"
              style={{ color: '#000000', textDecoration: 'none' }}
            >
              <MdArrowBack />
              Course
            </Link>
            <div className="mt-3 mb-4 d-flex align-items-center">
              <img
                src={data?.image}
                className="rounded bg-light"
                style={{ width: '25px', height: '25px', objectFit: 'cover' }}
              />
              <span className="ms-1 text-header-customer text-blue">
                {data?.name}
              </span>
            </div>

            {courseLevel?.map((item) => (
              <div className="card-class">
                <div className="text-header-customer text-blue">
                  <ImHtmlFive className="me-1" style={{ fontSize: '25px' }} />
                  {item.name}
                </div>
                <Row className="mt-4">
                  {item?.levelLesson?.map((itemContent) => (
                    <Col xl="2" lg="3" md="4" xs="6">
                      <div
                        className="card-content"
                        onClick={() => handleToLesson(itemContent.id)}
                      >
                        <div
                          style={{ fontWeight: '500', fontSize: '16px' }}
                          className="mb-3"
                        >
                          {itemContent.name}
                        </div>
                        <div
                          style={{
                            fontWeight: '400',
                            fontSize: '12px',
                            marginBottom: '-9px',
                          }}
                        >
                          {itemContent.id + 10} of 100 questions
                        </div>
                        <ProgressBar
                          style={{ height: '3px' }}
                          className="mt-2"
                          variant="success"
                          now={`${itemContent.id + 10}`}
                        />
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}
