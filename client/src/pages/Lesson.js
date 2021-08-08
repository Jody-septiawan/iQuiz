import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';

import { API } from '../config/api';

import NavbarLesson from '../components/NavbarLesson';
import LessonContent from '../components/contents/LessonContent';

export default function Lesson() {
  let { id } = useParams();
  let { data: contentLesson, refetch } = useQuery(
    'contentLessonCache',
    async () => {
      const response = await API.get('/content-lesson/' + id);
      return response.data;
    }
  );
  return (
    <>
      <NavbarLesson id={contentLesson?.lessonData?.lessonLevel?.courseId} />
      <LessonContent refetch={refetch} contentData={contentLesson?.data} />
    </>
  );
}
