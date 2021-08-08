import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';

export default function LessonContent({ contentData }) {
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (contentData?.length != 0) {
      // setContent(contentData[0]);
      // console.log(contentData[0]);
    }

    return () => {
      setContent(null);
    };
  }, [contentData]);

  return (
    <Container fluid>
      <Row className="d-flex">
        <Col className="p-2 h-100 border-end" xs="2">
          <ContentLeft
            contentData={contentData}
            setContent={setContent}
            content={content}
          />
        </Col>
        <Col className="py-3" xs="7">
          <ContentRight content={content} />
        </Col>
      </Row>
    </Container>
  );
}
