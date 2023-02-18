import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Leaders from "./leaders";

const query = graphql`
  query {
    allContentfulLeader {
      nodes {
        id
        name
        designation
        image {
          gatsbyImageData
        }
      }
    }
  }
`;

const LeaderFinal = () => {
  const data = useStaticQuery(query);
  const customers = data.allContentfulLeader.nodes;
  console.log(customers);
  return (
    <section>
      <Leaders customers={customers} />
    </section>
  );
};

export default LeaderFinal;
