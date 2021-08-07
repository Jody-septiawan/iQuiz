import { Modal } from "react-bootstrap";

import AddCourseLevel from "../forms/AddCourseLevel";

export default function CourseLevelModalAdd(props) {
  const { showAdd, handleCloseAdd, refetch, id } = props;
  return (
    <Modal show={showAdd} onHide={handleCloseAdd} centered>
      <Modal.Body>
        <AddCourseLevel
          handleCloseAdd={handleCloseAdd}
          refetch={refetch}
          id={id}
        />
      </Modal.Body>
    </Modal>
  );
}
