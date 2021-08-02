import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

import { MdArrowBack } from "react-icons/md";
import { AiFillFolderAdd } from "react-icons/ai";

import { API } from "../../../config/api";

export default function CourseLevelComponent({ id }) {
  let { data: courseLevel, refetch } = useQuery(
    "courseLevelCache",
    async () => {
      const response = await API.get("/course-level/" + id);
      console.log(response.data);
      return response.data.data;
    }
  );
  return (
    <Container className="mt-5">
      <Row>
        <Col xs="2"></Col>
        <Col xs="8">
          <Row className="mb-3">
            <Col xs="6">
              <Link
                to="/admin"
                style={{ color: "#000000", textDecoration: "none" }}
              >
                <MdArrowBack />
                Course
              </Link>
            </Col>
            <Col xs="6" className="text-end">
              <Button className="btn-sm px-1 py-0">
                <AiFillFolderAdd style={{ fontSize: "25px" }} />
              </Button>
            </Col>
          </Row>
          <div>
            {courseLevel?.map((item) => (
              <div className="rounded card-course-level-admin p-2 mb-2">
                <div className="text-header-customer d-flex">
                  <div className="flex-fill"> {item.name}</div>
                  <div className="flex-fill text-end">
                    <Button className="btn-sm btn-info">Edit</Button>
                    <Button className="btn-sm btn-danger ms-1">delete</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
