import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ProfileContent from "../components/contents/Profile";

export default function Profile() {
  return (
    <>
      <Navbar />
      <ProfileContent />
      <Footer />
    </>
  );
}
