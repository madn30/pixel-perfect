import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import IconFacebook from "../images/icon-facebook.svg";
import IconTwitter from "../images/icon-twitter.svg";
import IconPinterest from "../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer className="site-footer main-layout full">
      <div className="content-container">
        <div className="navigation-section">
          <Logo />
          <NavBar />
        </div>
        <div className="contact-section">
          <p>
            987 Hillcrest Lane
            <br />
            Irvine, CA California 92714
            <br />
            Call Us: 949-833-7432
          </p>
        </div>
        <div className="social-media-section">
          <div className="icons-container">
            <img src={IconFacebook} alt="Facebook" />
            <img src={IconPinterest} alt="Pinterest" />
            <img src={IconTwitter} alt="Twitter" />
          </div>
          <span>© 2020. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
