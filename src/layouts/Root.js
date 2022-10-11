import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div className="bg-blue-100">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
