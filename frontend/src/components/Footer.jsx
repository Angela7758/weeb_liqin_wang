import React from "react";

// Images des réseaux sociaux
import youtube from "../images/youtube.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";

function Footer() {
  return (
    <footer className="footer">
      {/* Colonnes du footer */}
      <div className="container footer-columns">

        {/* Logo */}
        <div className="footer-col">
          <h2 className="footer-logo">weeb</h2>
        </div>

        {/* Product */}
        <div className="footer-col">
          <h4 className="footer-heading">PRODUCT</h4>
          <ul>
            <li>Pricing</li>
            <li>Overview</li>
            <li>Browse</li>
            <li>Accessibility</li>
            <li>Five</li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="footer-col">
          <h4 className="footer-heading">SOLUTIONS</h4>
          <ul>
            <li>Brainstorming</li>
            <li>Ideation</li>
            <li>Wireframing</li>
            <li>Research</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-col">
          <h4 className="footer-heading">RESOURCES</h4>
          <ul>
            <li>Help Center</li>
            <li>Blog</li>
            <li>Tutorials</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4 className="footer-heading">COMPANY</h4>
          <ul>
            <li>About</li>
            <li>Press</li>
            <li>Events</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      {/* Ligne de séparation */}
      <div className="footer-divider"></div>

      {/* Bas du footer */}
      <div className="container footer-bottom">
        <span className="footer-copy">
          © 2025 Weeb. Tous droits réservés.
        </span>

        {/* Réseaux sociaux */}
        <div className="footer-socials">
          <img src={youtube} alt="YouTube" />
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
          <img src={instagram} alt="Instagram" />
          <img src={linkedin} alt="LinkedIn" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
