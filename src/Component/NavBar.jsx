import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    padding: scrolling ? '10px 0' : '25px 0',
    transition: 'padding 0.3s ease',
  };

  return (
    <>
      <nav
        id="header"
        className="navbar navbar-expand-lg fixed-top "
        style={navbarStyle}
      >
        <div className="container">
          <NavLink className="navbar-brand fs-2" to="/">
            Start Framework
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <NavLink className="nav-link" to="/about">
                  about
                </NavLink>
              </li>

              <li className="nav-item me-3">
                <NavLink className="nav-link" to="/portfolio">
                  portfolio
                </NavLink>
              </li>

              <li className="nav-item me-3">
                <NavLink className="nav-link" to="/contact">
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
