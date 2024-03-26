import React from "react";
import IconInfoCard from "../cmps/IconInfoCard";
const data = [
  {
    title: "The quality of our talent network",
  },
  {
    title: "Usage & implementation of our software",
  },
  {
    title: "How we help drive innovation",
  },
];
export default function Contact() {
  return (
    <section className="contact">
      <div>
        <h1 className="contact-title">Contact</h1>
        <p className="contact-ask-us">Ask us about</p>
        <ul>
          {data.map((item, index) => (
            <IconInfoCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </div>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email Address" />
        <input placeholder="Company Name" />
        <input placeholder="Title" />
        <textarea rows={3} placeholder="Message" />
        <div>
          <button className="btn-contain">submit</button>
        </div>
      </form>
    </section>
  );
}
