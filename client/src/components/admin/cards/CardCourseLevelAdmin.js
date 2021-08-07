import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { MdArrowBack, MdEdit } from "react-icons/md";
import { AiFillFolderAdd } from "react-icons/ai";
import { BsFillTrash2Fill } from "react-icons/bs";
import { FaPlusSquare, FaPlusCircle } from "react-icons/fa";

import LessonModalAdd from "../modals/LessonModalAdd";

export default function CardCourseLevelAdmin(props) {
  const { item, handleDelete, refetch } = props;

  // Modal Lesson
  const [showAddLesson, setShowAddLesson] = useState(false);
  const handleCloseAddLesson = () => setShowAddLesson(false);
  const handleShowAddLesson = () => setShowAddLesson(true);

  return (
    <>
      <div className="rounded card-course-level-admin p-2 mb-2">
        <div className="text-header-customer d-flex mb-2">
          <div className="flex-fill"> {item.name}</div>
          <div className="flex-fill text-end">
            <Button
              className="btn-sm btn-primary py-0 px-1"
              onClick={handleShowAddLesson}
            >
              <div className="content-middle-admin">
                <FaPlusCircle className="me-1" /> lesson
              </div>
            </Button>
            <Button className="btn-sm btn-info py-0 px-1 ms-1">
              <MdEdit />
            </Button>
            <Button
              onClick={() => handleDelete(item.id)}
              className="btn-sm btn-danger py-0 px-1 ms-1"
            >
              <BsFillTrash2Fill />
            </Button>
          </div>
        </div>
        {item.levelLesson.map((itemLesson) => (
          <span className="card-level-lesson-admin me-1 p-1 px-2 rounded d-inline-flex mb-1">
            {itemLesson.name}
          </span>
        ))}
      </div>
      <LessonModalAdd
        showAddLesson={showAddLesson}
        handleCloseAddLesson={handleCloseAddLesson}
        item={item}
        refetch={refetch}
      />
    </>
  );
}
