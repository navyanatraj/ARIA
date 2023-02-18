import React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";
import logo from "../assets/images/black.png";
import wlogo from "../assets/images/logo.jpg";
// const Navbar = () => {
//   const [show, setShow] = useState(false);

const Navbar = () => {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false);

  //   // fixed navbar
  const [scroll, setScroll] = useState(false);

  //   // fixed navbar

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={scroll ? "fixed-navbar" : ""}>
      {/* <nav className="navbar"> */}
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={scroll ? wlogo : logo} alt="Hewlett Packard Enterprise" />
          </Link>
          <button className="nav-btn" onClick={() => setNavbar(!navbar)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={navbar ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setNavbar(false)}
          >
            home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setNavbar(false)}
          >
            Service Portfolios
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setNavbar(false)}
          >
            POCs
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setNavbar(false)}
          >
            Demos
          </Link>
          <div className="nav-link contact-link">
            <Link
              to="/contact"
              className="btn"
              onClick={() => setNavbar(false)}
            >
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
