import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Link } from "gatsby";
import PortfolioList from "./portfolio";
const query = graphql`
  query {
    allContentfulPortfolio {
      nodes {
        id
        title
        description {
          description
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        header
      }
    }
  }
`;

const ServicePortfolios = () => {
  const data = useStaticQuery(query);
  const portfolio = data.allContentfulPortfolio.nodes;
  console.log(portfolio);
  return (
    <section className="recepes-container">
      <PortfolioList portfolio={portfolio} />
    </section>
  );
};
// const ServicePortfolios = ({ description, title, url, image, index, slug }) => {
//       const data = useStaticQuery(query);
//   return (
//     <article className="project">
//       <GatsbyImage
//         image={getImage(image)}
//         className="project-img"
//         alt={title}
//       />
//       <div className="project-info">
//         <span className="project-number">0{index + 1}.</span>
//         <Link to={`/projects/${slug}`} className="project-slug">
//           <h3>{title}</h3>
//         </Link>
//         <p className="project-desc">{description}</p>
//         <div className="project-links">
//           <a href={url}>
//             <MdOutlineDoubleArrow className="project-icon"></MdOutlineDoubleArrow>
//           </a>
//         </div>
//       </div>
//     </article>
//   );
// };

export default ServicePortfolios;
