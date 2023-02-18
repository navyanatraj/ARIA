import React from "react";
import socialLinks from "../constants/sociallinks";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h4> Subscribe and be first to get our latest updates</h4>
        <div className="footer-links social-links">
          {socialLinks.map((link) => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
                <span> </span>
              </a>
            );
          })}
        </div>
        <h4 className="footer h4">
          copyright &copy; {new Date().getFullYear()} Hewlett Packard Enterprise
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
