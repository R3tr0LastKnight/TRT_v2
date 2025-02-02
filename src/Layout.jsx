import React from "react";
import { Outlet } from "react-router";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
