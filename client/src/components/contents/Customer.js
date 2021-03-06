import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';

import { FaCode } from 'react-icons/fa';

import dataCourse from '../../fakedata/course';

import { API } from '../../config/api';

export default function Customer() {
  let history = useHistory();

  let { data: courses, refetch } = useQuery('coursesCache', async () => {
    const response = await API.get('/courses');
    return response.data.data;
  });

  const handleClick = (id) => {
    history.push('course/' + id);
  };
  return (
    <Container className="mt-3 mb-5">
      <Row>
        <Col>
          <div className="text-header-customer text-blue">
            <FaCode className="me-1" style={{ fontSize: '30px' }} />
            Course
          </div>
          <Row className="mt-3">
            {courses?.map((item, index) => (
              <Col xl="2" lg="3" md="4" xs="6">
                <div
                  onClick={() => handleClick(item.id)}
                  className="card-course rounded p-1 mt-1"
                  data-aos="zoom-in"
                  data-aos-delay={index + '0'}
                >
                  <div>
                    <img
                      src={item.image}
                      className="img-fluid rounded bg-light"
                      style={{
                        height: '150px',
                        width: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <span style={{ fontSize: '13px', textDecoration: 'none' }}>
                    {item.name}
                  </span>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
