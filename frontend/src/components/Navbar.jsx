import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const storedUsername = localStorage.getItem("username");
    if (token && storedUsername) {
      setUsername(storedUsername);
    } else {
      setUsername(null);
    }
  }, [location]); // Update on route change

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");
    setUsername(null);
    navigate("/login");
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar container">

        {/* ---- Gauche : Logo  ---- */}
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

        {/* ---- Droite : Log In + Join Now ---- */}
        <div className="navbar-links-right">
          {username ? (
            <div className="user-info" >
              <span>Welcome, {username}</span>
              <span>.</span>
              <button onClick={handleLogout} className="btn-primary logout-button">
                Log Out
              </button>
            </div>
          ) : (
            <>
              <NavLink to="/login" className="nav-link">
                Log In
              </NavLink>

              <NavLink to="/register" className="nav-link">
                Join Now
              </NavLink>
            </>
          )}
        </div>

        {/* ---- Mobile ---- */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className="toggle-bar" />
          <span className="toggle-bar" />
          <span className="toggle-bar" />
        </button>
      </nav>

      {/* Menu Mobile */}
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
