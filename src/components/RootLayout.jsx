import React from "react";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default RootLayout;
