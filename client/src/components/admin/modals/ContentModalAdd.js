import React from 'react';
import { Modal } from 'react-bootstrap';

import AddContentText from '../forms/AddContentText';

export default function ContentModalAdd(props) {
  const { showModalAdd, handleCloseModalAdd, typeModalAdd, lessonId, refetch } =
    props;
  return (
    <Modal
      size="lg"
      show={showModalAdd}
      onHide={handleCloseModalAdd}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header>{typeModalAdd}</Modal.Header>
      <Modal.Body>
        <AddContentText
          handleCloseModalAdd={handleCloseModalAdd}
          lessonId={lessonId}
          refetch={refetch}
        />
      </Modal.Body>
    </Modal>
  );
}
