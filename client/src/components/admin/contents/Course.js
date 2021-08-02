import { Container, Row, Col, Button } from "react-bootstrap";
import { useQuery } from "react-query";

import { AiFillFolderAdd } from "react-icons/ai";
import { FaCode } from "react-icons/fa";

import TableCourse from "../tables/TableCourse";

import { API } from "../../../config/api";

export default function Course() {
  let { data: courses, refetch } = useQuery("coursesCache", async () => {
    const response = await API.get("/courses");
    return response.data.data;
  });
  return (
    <Container className="mt-5">
      <Row>
        <Col xs="2"></Col>

        <Col xs="8">
          <Row className="mb-3">
            <Col>
              <div className="text-header-customer text-blue">
                <FaCode className="me-1" style={{ fontSize: "30px" }} />
                Course
              </div>
            </Col>
            <Col className="text-end">
              <Button className="btn-sm px-1 py-0">
                <AiFillFolderAdd style={{ fontSize: "25px" }} />
              </Button>
            </Col>
          </Row>
          <TableCourse courses={courses} />
        </Col>
      </Row>
    </Container>
  );
}
