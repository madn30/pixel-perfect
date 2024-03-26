import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import MainHeader from "./MainHeader";

export default function Layout() {
  return (
    <div className="main-layout">
      <MainHeader />
      <Outlet />
      <Footer />
    </div>
  );
}
