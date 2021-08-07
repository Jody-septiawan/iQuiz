import { Modal } from "react-bootstrap";

import AddLesson from "../forms/AddLesson";

export default function LessonModalAdd(props) {
  const { showAddLesson, handleCloseAddLesson, item, refetch } = props;
  return (
    <Modal show={showAddLesson} onHide={handleCloseAddLesson} centered>
      <Modal.Body>
        <div className="h5">{item.name}</div>
        <AddLesson
          refetch={refetch}
          handleCloseAddLesson={handleCloseAddLesson}
          item={item}
        />
      </Modal.Body>
    </Modal>
  );
}
