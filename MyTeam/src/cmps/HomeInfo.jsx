import React from "react";
import Image from "../images/bg-pattern-home-1.svg";
import Image2 from "../images/bg-pattern-home-1.svg";
export default function HomeInfo() {
  return (
    <section className="home-info full main-layout">
      <img className="dark-image left-col" src={Image} />

      <div className="home-info-body">
        <h1 className="home-info-title">
          Find the best <mark>talent</mark>
        </h1>

        <div className="home-info-content">
          <hr className="divider-light" />

          <p>
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </div>
      <img src={Image2} className="light-image" />
    </section>
  );
}
