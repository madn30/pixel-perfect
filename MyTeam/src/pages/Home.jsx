import React from "react";
import HomeTeams from "../cmps/HomeTeams";
import SuccessStories from "../cmps/SuccessStories";
import Contact from "../cmps/Contact";
import HomeInfo from "../cmps/HomeInfo";

export default function Home() {
  return (
    <main className="home-page main-layout full">
      <HomeInfo />
      <HomeTeams />
      <SuccessStories />
      <Contact />
    </main>
  );
}
