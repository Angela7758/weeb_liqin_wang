import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const isContactPage = location.pathname === "/contact";

  return (
    <header className="navbar-wrapper">
      <nav className="navbar container">

        {/* ---- GAUCHE : Logo  ---- */}
        <div className="navbar-left">
          <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
            weeb
          </NavLink>

          <div className="navbar-links-left">
            <NavLink to="/" className="nav-link">
              About Us
            </NavLink>

            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </div>
        </div>

        {/* ---- DROITE : Log In + Join Now ---- */}
        <div className="navbar-links-right">
          <NavLink to="/login" className="nav-link">
            Log In
          </NavLink>

          <button className="btn-primary nav-cta">
            {isContactPage ? "Se connecter" : "Join Now"}
          </button>
        </div>

        {/* ---- MOBILE ---- */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className="toggle-bar" />
          <span className="toggle-bar" />
          <span className="toggle-bar" />
        </button>
      </nav>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="mobile-menu">
          <NavLink to="/" className="mobile-link" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/contact" className="mobile-link" onClick={closeMenu}>
            Contact
          </NavLink>
          <NavLink to="/login" className="mobile-link" onClick={closeMenu}>
            Log In
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Navbar;
