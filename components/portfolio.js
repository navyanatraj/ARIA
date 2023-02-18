import { Link } from "gatsby";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { SiSmartthings } from "react-icons/si";

const PortfolioList = ({ portfolio = [] }) => {
  return (
    <div className="recipes-list">
      {portfolio.map((portfolio) => {
        // return <p>{portfolio.image.GatsbyImageData}</p>;
        const { id, description, title, image, header } = portfolio;
        const pathToImage = getImage(image);
        return (
          <Link
            key={id}
            to={`/${title}`}
            className="recipe"
            // data-sal="slide-up"
            // data-sal-duration="500" // changes duration of the animation (from 200 to 2000 ms)
            // data-sal-delay="50" // adds delay to the animation (from 5 to 1000 ms)
            // data-sal-easing="ease"
          >
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            ></GatsbyImage>
            {/* <SiSmartthings color="#000000" /> */}
            <h2>{header}</h2>
            <h3>{description.description}</h3>
            <div className="recipe-underline"></div>
          </Link>
        );
      })}
    </div>
  );
};

export default PortfolioList;
