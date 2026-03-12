import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/footer-logo.png";
import fb from "../assets/images/fb.png";
import insta from "../assets/images/insta.png";
import whatsApp from "../assets/images/whatsApp.png";
import tiktok from "../assets/images/tiktok.png";
import AnimatedText from "./AnimatedText";

const Footer = () => {
  return (
    <footer className="footer-minimal font-inter">
      <div className="container py-5">
        <div className="row g-4 footer-grid">
          <div className="col-6 col-md-3">
            <h6 className="footer-heading"><AnimatedText text="Quick Links" /></h6>
            <ul className="list-unstyled footer-list mt-3">
              <li>
                <Link to="/#home" className="footer-link hover-text-theme">
                  <AnimatedText text="Home" />
                </Link>
              </li>
              <li>
                <Link to="/#who-for" className="footer-link hover-text-theme">
                  <AnimatedText text="About Us" />
                </Link>
              </li>
              <li>
                <Link to="/#faq" className="footer-link hover-text-theme">
                  <AnimatedText text="FAQ" />
                </Link>
              </li>
              <li>
                <Link to="/#download-app" className="footer-link hover-text-theme">
                  <AnimatedText text="Download App" />
                </Link>
              </li>
              <li>
                <Link to="/terms" className="footer-link hover-text-theme">
                  <AnimatedText text="Terms and Conditions" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-6">
            <h6 className="footer-heading"><AnimatedText text="Legal Consultation" /></h6>
            <ul className="list-unstyled footer-list mt-3">
              <li>
                <Link to="/contract-services" className="footer-link hover-text-theme">
                  <AnimatedText text="Contract Services" />
                </Link>
              </li>
              <li>
                <Link to="/business-corporate-law" className="footer-link hover-text-theme">
                  <AnimatedText text="Business & Corporate Law" />
                </Link>
              </li>
              <li>
                <Link to="/property-real-estate-law" className="footer-link hover-text-theme">
                  <AnimatedText text="Property & Real Estate Law" />
                </Link>
              </li>
              <li>
                <Link to="/family-personal-matters" className="footer-link hover-text-theme">
                  <AnimatedText text="Family & Personal Matters" />
                </Link>
              </li>
              <li>
                <Link to="/immigration-visa-law" className="footer-link hover-text-theme">
                  <AnimatedText text="Immigration and Visa Law" />
                </Link>
              </li>
              <li>
                <Link to="/dispute-resolution" className="footer-link hover-text-theme">
                  <AnimatedText text="Dispute Resolution" />
                </Link>
              </li>
              <li>
                <Link to="/intellectual-property" className="footer-link hover-text-theme">
                  <AnimatedText text="Intellectual Property" />
                </Link>
              </li>
              <li>
                <Link to="/startup-business-setup" className="footer-link hover-text-theme">
                  <AnimatedText text="Startup and Business Setup" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link hover-text-theme">
                  <AnimatedText text="Explore 100+ Legal Services" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-6">
            <h6 className="footer-heading"><AnimatedText text="Products" /></h6>
            <ul className="list-unstyled footer-list mt-3">
              <li>
                <Link to="/for-lawyers" className="footer-link hover-text-theme">
                  <AnimatedText text="Lawyers App Dashboard" />
                </Link>
              </li>
              <li>
                <Link to="/business-portal" className="footer-link hover-text-theme">
                  <AnimatedText text="Businesses Portal" />
                </Link>
              </li>
              <li>
                <Link to="/law-firm" className="footer-link hover-text-theme">
                  <AnimatedText text="Law Firm Portal" />
                </Link>
              </li>
              <li>
                <Link to="/for-users" className="footer-link hover-text-theme">
                  <AnimatedText text="User App Dashboard" />
                </Link>
              </li>
            </ul>
            {/* Mobile Logo Position (Left Column) */}
            <div className="footer-logo-wrap mt-4 d-block d-md-none" data-aos="fade-in" data-aos-delay="500">
              <img src={logo} alt="Legal Platform" className="footer-logo hover-scale" />
            </div>
          </div>

          <div className="col-md-3 col-6">
            <h6 className="footer-heading"><AnimatedText text="Features" /></h6>
            <ul className="list-unstyled footer-list mt-3">
              <li>
                <Link to="/post-your-legal-issue" className="footer-link hover-text-theme">
                  <AnimatedText text="Post Your Legal Issue" />
                </Link>
              </li>
              <li>
                <Link to="/hire-a-lawyer" className="footer-link hover-text-theme">
                  <AnimatedText text="Hire a Lawyer" />
                </Link>
              </li>
              <li>
                <Link to="/chat-with-lawyers" className="footer-link hover-text-theme">
                  <AnimatedText text="Chat Box" />
                </Link>
              </li>
              <li>
                <Link to="/post-your-legal-issue" className="footer-link hover-text-theme">
                  <AnimatedText text="Create a Case" />
                </Link>
              </li>
            </ul>
            {/* Desktop Logo Position (Right Column) */}
            <div className="footer-logo-wrap mt-4 d-none d-md-block" data-aos="fade-in" data-aos-delay="500">
              <img src={logo} alt="Legal Platform" className="footer-logo hover-scale" />
            </div>
          </div>
        </div>

        <div className="row mt-5 align-items-center footer-bottom">
          <div className="col-md-4 text-md-start text-center">
            <span className="footer-copy">
              <AnimatedText text="©2026 Legal Platform. All rights reserved." />
            </span>
          </div>
          
          <div className="col-md-4 text-center mt-3 mt-md-0 best-app-development-company">
            <div className="text-center">
              <a 
                href="https://www.devicebee.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#0E4593', textDecoration: 'none', cursor: 'default' }} 
              >
                Best App Development Company Dubai
              </a>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
            <div className="footer-social d-flex align-items-center gap-3">
              <a 
                href="https://www.linkedin.com/in/legalplatform-co/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <span 
                  className="footer-social-icon hover-scale d-inline-flex align-items-center justify-content-center"
                  style={{ background: "#fff", borderRadius: "50%" }}
                >
                  <i className="bi bi-linkedin" style={{ fontSize: "20px", color: "#000" }}></i>
                </span>
              </a>
              <a 
                href="https://www.instagram.com/legalplatform.co/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img src={insta} alt="Instagram" className="footer-social-icon hover-scale" />
              </a>
              <a 
                href="https://wa.me/971565556294"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat"
              >
                <img src={whatsApp} alt="WhatsApp" className="footer-social-icon hover-scale" />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
