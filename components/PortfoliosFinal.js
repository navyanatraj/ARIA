import React from "react";
import Title from "./Title";
import ServicePortfolios from "./ServicePortfolios";
import { Link } from "gatsby";
const PortfoliosFinal = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return (
            <ServicePortfolios key={project.id} index={index} {...project} />
          );
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  );
};

export default PortfoliosFinal;
