import React from "react";
import VergeIcon from "../images/logo-the-verge.png";
import GadgetIcon from "../images/logo-gadgets-now.png";
import JakartaIcon from "../images/logo-jakarta-post.png";
import TechRadar from "../images/logo-tech-radar.png";
import GuardianIcon from "../images/logo-the-guardian.png";

export default function ClientsInfo() {
  return (
    <section className="clients-info main-layout full">
      <h1 className="clients-info-title">Some of our clients</h1>
      <div className="images-grid">
        <img src={VergeIcon} alt="The Verge" />
        <img src={JakartaIcon} alt="Jakarta Post" />
        <img src={GuardianIcon} alt="The Guardian" />
        <img src={TechRadar} alt="Tech Radar" />
        <img src={GadgetIcon} alt="Gadgets Now" />
      </div>
    </section>
  );
}
