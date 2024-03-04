import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/main/Home";
import AboutMe from "../components/main/AboutMe";
import Footer from "../components/footer/Footer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/portfolio" element={<Footer />} />
    </Routes>
  );
};

export default AppRoutes;
