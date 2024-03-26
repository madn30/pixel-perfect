import React, { useState, useEffect } from "react";

export default function SuccessStories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // An array of import promises
    const importPromises = [
      import("../images/avatar-kady.jpg"),
      import("../images/avatar-aiysha.jpg"),
      import("../images/avatar-arthur.jpg"),
    ];

    Promise.all(importPromises)
      .then((images) => {
        const loadedStories = [
          {
            content:
              "“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
            name: "Kady Baker",
            avatar: images[0].default,
          },
          {
            content:
              "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”",
            name: "Aiysha Reese",
            avatar: images[1].default,
          },
          {
            content:
              "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
            name: "Arthur Clarke",
            avatar: images[2].default,
          },
        ];
        setStories(loadedStories);
      })
      .catch((error) => {
        console.error("Failed to load images", error);
      });
  }, []);

  return (
    <section className="success-details">
      <h2 className="success-details-title">
        Delivering real results for top companies. Some of our
        <mark>success stories.</mark>
      </h2>

      <ul>
        {stories.map((story) => (
          <li>
            <h3 className="success-details-list-content">{story.content}</h3>
            <p className="success-details-list-name">{story.name}</p>
            <img
              src={story.avatar}
              style={{ width: 50, borderRadius: "50%" }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
