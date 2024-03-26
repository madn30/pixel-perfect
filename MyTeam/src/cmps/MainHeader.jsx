import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export default function MainHeader() {
  return (
    <header className="main-header">
      <Logo />

      <NavBar />

      <Link to={"/contact"} className="btn-light">
        contact us
      </Link>
    </header>
  );
}
