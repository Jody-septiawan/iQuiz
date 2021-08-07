import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

import { MdArrowBack, MdEdit } from "react-icons/md";
import { AiFillFolderAdd } from "react-icons/ai";
import { BsFillTrash2Fill } from "react-icons/bs";
import { FaPlusSquare, FaPlusCircle } from "react-icons/fa";

import CourseLevelModalAdd from "../modals/CourseLevelModalAdd";

import CardCourseLevelAdmin from "../cards/CardCourseLevelAdmin";

import { API } from "../../../config/api";

export default function CourseLevelComponent({ id }) {
  // Modal Level
  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  let { data: courseLevel, refetch } = useQuery(
    "courseLevelCache",
    async () => {
      const response = await API.get("/course-level/" + id);
      return response.data.data;
    }
  );

  const handleDelete = async (idCourseLevel) => {
    try {
      const response = await API.delete("/course-level/" + idCourseLevel);
      console.log(response);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
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
                <Button className="btn-sm px-1 py-0" onClick={handleShowAdd}>
                  <AiFillFolderAdd style={{ fontSize: "25px" }} />
                </Button>
              </Col>
            </Row>
            <div>
              {courseLevel?.map((item) => (
                <>
                  <CardCourseLevelAdmin
                    item={item}
                    handleDelete={handleDelete}
                    refetch={refetch}
                  />
                </>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <CourseLevelModalAdd
        showAdd={showAdd}
        handleCloseAdd={handleCloseAdd}
        refetch={refetch}
        id={id}
      />
    </>
  );
}
