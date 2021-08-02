import React from "react";
import { useParams } from "react-router-dom";

import NavbarAdmin from "../components/NavbarAdmin";
import CourseLevelComponent from "../components/admin/contents/CourseLevelComponent";

export default function CourseLevel() {
  const { id } = useParams();
  return (
    <div>
      <NavbarAdmin />
      <CourseLevelComponent id={id} />
    </div>
  );
}
