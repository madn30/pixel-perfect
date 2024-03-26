import React from "react";

export default function AboutInfo() {
  return (
    <section className="about-info">
      {/* <img src={Image} height={120} width={120} /> */}
      <h1 className="about-info-title">About</h1>

      <div className="about-info-content">
        <hr className="divider-dark" />

        <p className="about-info-details">
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </p>
      </div>
    </section>
  );
}
