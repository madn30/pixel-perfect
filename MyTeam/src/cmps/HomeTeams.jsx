import React from "react";
import IconInfoCard from "./IconInfoCard";

export default function HomeTeams() {
  const data = [
    {
      title: "Experienced Individuals",
      description:
        "Our network is made up of highly experienced professionals who are passionate about what they do.",
    },
    {
      title: "Innovative Solutions",
      description:
        "We're at the forefront of innovation, constantly seeking out new approaches to tackle challenges.",
    },
    {
      title: "Innovative Solutions",
      description:
        "We're at the forefront of innovation, constantly seeking out new approaches to tackle challenges.",
    },
  ];

  return (
    <section className="main-layout full home-teams">
      <article className="home-teams-details">
        <div>
          <hr />
          <h2>Build & manage distributed teams like no one else.</h2>
        </div>
        <ul>
          {data.map((item, index) => (
            <IconInfoCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </article>
    </section>
  );
}
