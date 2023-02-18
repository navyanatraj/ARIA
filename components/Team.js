import React from "react";
import Title from "./Title";
import team from "../constants/team";
const Team = () => {
  return (
    <section className="section" max-width="1000px">
      <Title title="team" />
      <div className="underline"></div>
      <div className="section-center services-center">
        {team.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              {/* <div className="underline"></div> */}
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Team;
