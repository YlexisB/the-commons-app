import React from "react";
import { Outlet } from "react-router-dom";
import StaticHeader from "./StaticHeader";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <StaticHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
