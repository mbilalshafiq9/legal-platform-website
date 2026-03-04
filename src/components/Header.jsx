import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-legal-company" },
  { name: "Contact Us", path: "/support" },
  { name: "FAQ", path: "/#faq" },
  { name: "Blog", path: "/blog" },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(location.pathname + location.hash || "/");
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef(null);

  useEffect(() => {
    // Check local storage for dark mode preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    if (newMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  useEffect(() => {
    // Sync active link with URL
    const currentPath = location.pathname + location.hash;
    // Check if the current path matches any link, if not, maybe just pathname (for sub-routes if any)
    // For now, exact match seems expected based on links array
    if (location.hash) {
        setActiveLink(location.pathname + location.hash);
    } else {
        setActiveLink(location.pathname);
    }
  }, [location]);

  useEffect(() => {
    if (navRef.current) {
      setHeaderHeight(navRef.current.offsetHeight);
    }
    
    const handleResize = () => {
      if (navRef.current) {
        setHeaderHeight(navRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = (path) => {
    setActiveLink(path);
    const closeBtn = document.getElementById('offcanvas-close-btn');
    if (closeBtn) closeBtn.click();
  };

  return (
    <div className="font-inter">
      <div className={`sticky-header-wrapper ${isVisible ? 'visible' : 'hidden'} ${isScrolled ? 'scrolled' : ''}`}>
        <nav ref={navRef} className="container navbar navbar-expand-lg bg-transparent px-3 header-main-nav">
          <Link 
            className="navbar-brand d-flex align-items-center" 
            to="/"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <img src={logo} alt="Legal Platform" className="logo hover-scale" />
          </Link>

          <button
            className="navbar-toggler d-lg-none ms-auto custom-mobile-menu-btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 7H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M5 17H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="collapse navbar-collapse d-none d-lg-flex header-desktop-nav">
            <ul className="navbar-nav header-nav-list gap-4">
              {links.map((l, index) => (
                <li 
                  className="nav-item" 
                  key={l.path}
                  data-aos="fade-down"
                  data-aos-delay={100 + index * 50}
                  data-aos-duration="800"
                >
                  <Link
                    to={l.path}
                    className={`nav-link header-nav-link hover-text-theme ${
                      activeLink === l.path ? "active" : ""
                    }`}
                    onClick={() => setActiveLink(l.path)}
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="header-segment-group d-flex align-items-center">
              <button
                className="btn border-0"
                onClick={toggleDarkMode}
                style={{ fontSize: '1.2rem' }}
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <i className="bi bi-sun-fill text-white"></i> : <i className="bi bi-moon-fill"></i>}
              </button>
              <button 
                type="button" 
                className="header-segment-btn header-segment-law"
                data-aos="fade-down"
                data-aos-delay="400"
                onClick={() => navigate("/law-firm")}
              >
                Law Firm
              </button>
              <button 
                type="button" 
                className="header-segment-btn header-segment-corp"
                data-aos="fade-down"
                data-aos-delay="500"
                onClick={() => navigate("/corporate")}
              >
                Corporate
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Spacer to prevent content overlap */}
      <div style={{ height: headerHeight > 0 ? headerHeight : '80px' }}></div>

      <div
        className="offcanvas offcanvas-start d-lg-none"
        id="offcanvasNavbar"
        tabIndex="-1"
      >
        <div className="offcanvas-header">
          <Link className="offcanvas-title mb-0" to="/" onClick={() => handleMobileNavClick('/')}>
            <img src={logo} alt="Legal Platform" className="header-offcanvas-logo" />
          </Link>
          <button
            type="button"
            id="offcanvas-close-btn"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav gap-2 mb-3">
            {links.map((l) => (
              <li className="nav-item" key={l.path}>
                <Link
                  to={l.path}
                  className={`nav-link ${activeLink === l.path ? "active" : ""}`}
                  onClick={() => handleMobileNavClick(l.path)}
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="header-mobile-actions">
            <Link
              to="/law-firm"
              className="btn btn-outline-dark rounded-pill d-flex justify-content-center align-items-center"
              onClick={() => handleMobileNavClick('/law-firm')}
            >
              <i className="bi bi-person me-2" />
              Law Firm
            </Link>
            <Link
              to="/corporate"
              className="btn btn-dark rounded-pill header-mobile-corp-btn d-flex justify-content-center align-items-center"
              onClick={() => handleMobileNavClick('/corporate')}
            >
              Corporate
            </Link>
            <button
              className="nav-link btn border-0 text-start w-100 mt-2"
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <>
                  <i className="bi bi-sun-fill me-2"></i> Light Mode
                </>
              ) : (
                <>
                  <i className="bi bi-moon-fill me-2"></i> Dark Mode
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
