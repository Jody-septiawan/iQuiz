import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { MdArrowBack, MdEdit } from 'react-icons/md';
import { AiFillFolderAdd } from 'react-icons/ai';
import { BsFillTrash2Fill } from 'react-icons/bs';
import { FaPlusSquare, FaPlusCircle } from 'react-icons/fa';

import LessonModalAdd from '../modals/LessonModalAdd';

export default function CardCourseLevelAdmin(props) {
  let history = useHistory();
  const { item, handleDelete, refetch } = props;

  // Modal Lesson
  const [showAddLesson, setShowAddLesson] = useState(false);
  const handleCloseAddLesson = () => setShowAddLesson(false);
  const handleShowAddLesson = () => setShowAddLesson(true);

  const handleToLesson = (id) => {
    history.push(`/lesson/${id}`);
  };

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
        <Container fluid>
          <Row>
            {item.levelLesson.map((itemLesson) => (
              <Col xs="3" className="px-0">
                <div
                  className="card-level-lesson-admin me-1 p-1 px-2 rounded mb-1 px-0"
                  style={{ minHeight: '80px' }}
                  onClick={() => handleToLesson(itemLesson.id)}
                >
                  {itemLesson.name}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
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
