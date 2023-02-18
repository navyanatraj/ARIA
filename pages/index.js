import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import InfiniteScroll from "react-infinite-scroll-component";
import Layout from "../components/Layout";
import Team from "../components/Team";
import Marq from "../constants/marquee";
import LeaderFinal from "../components/leaderfinal";
import Title from "../components/Title";

// import { Link } from "gatsby";
// import PortfoliosFinal from "../components/PortfoliosFinal";
import StaticImage from "../assets/images/hero.png";
import ServicePortfolios from "../components/ServicePortfolios";
import HeroSection from "../components/hero";
// import SEO from "../components/SEO";
// import PortfolioList from "../components/portfolio";  const controls = useAnimation();
// const teamVariants = {
//   visible: {initial :{ y: -30, opacity: 0},
//         animate:{ y: -7, opacity: 1 },
//         transition:{duration: 2 }},
//   hidden: { opacity: 0, scale: 0 }
// };

// const [ref, inView] = useInView();
//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

export default function Home() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    // <InfiniteScroll>
    <Layout>
      {/* <SEO title="Home " /> */}
      <HeroSection />
      <motion.div
        ref={ref}
        animate={inView ? { opacity: 0, y: 200 } : { opacity: 1, y: 20 }}
        transition={{ duration: 1.5 }}
      >
        <Title title="Service Portfolios" />
        <div className="underline"></div>
        <ServicePortfolios />
      </motion.div>

      <LeaderFinal />
      {/* <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: -7, opacity: 1 }}
        transition={{ duration: 2 }}
      > */}
      <motion.div
        ref={ref}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
      >
        <Team />
      </motion.div>
      {/* </motion.div> */}
      <div className="marq">
        <Title title="Our Customers" />
        <div className="underline"></div>
        <Marq />
      </div>
      {/* </br> */}
      {/* <PortfoliosFinal title="Service Portfolios" showLink projects={projects} /> */}
    </Layout>
    // </InfiniteScroll>
  );
}
