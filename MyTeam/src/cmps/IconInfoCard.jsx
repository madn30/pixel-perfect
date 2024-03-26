import React from "react";
import Image from "../images/icon-person.svg";

export default function IconInfoCard({ title, description }) {
  return (
    <li className="icon-info-card">
      <img src={Image} alt={title} className="icon-info-card-image" />
      <div className="icon-info-card-content">
        <h3 className="icon-info-card-title">{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </li>
  );
}
