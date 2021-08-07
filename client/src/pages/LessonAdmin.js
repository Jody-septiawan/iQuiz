import React from 'react';
import { useParams } from 'react-router-dom';

import NavbarAdmin from '../components/NavbarAdmin';
import LessonContentAdmin from '../components/admin/contents/LessonContentAdmin';

export default function LessonAdmin() {
  let { id } = useParams();
  return (
    <>
      <NavbarAdmin />
      <LessonContentAdmin id={id} />
    </>
  );
}
