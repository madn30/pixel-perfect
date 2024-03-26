import React from "react";
import Contact from "../cmps/Contact";
import AboutInfo from "../cmps/AboutInfo";
import Directors from "../cmps/Directors";
import ClientsInfo from "../cmps/ClientsInfo";

export default function About() {
  return (
    <main className="home-page main-layout full">
      <AboutInfo />
      <Directors />
      <ClientsInfo />
      <Contact />
    </main>
  );
}
