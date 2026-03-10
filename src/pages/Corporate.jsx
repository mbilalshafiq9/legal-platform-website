import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import corpBg from "../assets/images/corporate/corporate-main-bg-img.jpg";
import corpFormImg from "../assets/images/corporate/form-img.png";
import imgPriority from "../assets/images/corporate/priority-img.png";
import imgEarly from "../assets/images/corporate/early-img.png";
import imgExclusive from "../assets/images/corporate/exclusive-img.png";
import imgCommitment from "../assets/images/corporate/our-comitment-img.png";
import imgCorporate from "../assets/images/corporate/legalPlatform-corporate-img.png";

const Corporate = () => {
  const [showTop, setShowTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => {
      setShowTop(window.pageYOffset > 400);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? doc.scrollTop / max : 0;
      setScrollProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  };

  return (
    <div className="font-inter">
      <Seo
        title="Corporate — Legal Platform"
        description="Empower your business with seamless access to legal services at any time."
        canonicalPath="/corporate"
        image="/favicon.png"
      />
      <Header />
      <div className="corp-hero">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-5 d-flex justify-content-center">
              <div className="corp-form-wrap" data-aos="fade-right" data-aos-delay="150">
                <img src={corpFormImg} alt="Corporate registration preview" className="corp-form-img hover-scale" />
              </div>
            </div>
            <div className="col-lg-7" data-aos="fade-left" data-aos-delay="200">
              <h1 className="corp-hero-title">Get legal help <br /> in minutes!</h1>
              <p className="corp-hero-sub">Empower your businesses with <br /> seamless access to legal services <br /> at anytime.</p>
            </div>
          </div>
        </div>
        <img src={corpBg} alt="" className="corp-hero-bg" />
      </div>
      <Breadcrumbs />
      <main className="container my-5">
        <div className="text-center mb-4">
          <h2 className="corp-section-title">Why Pre-Register?</h2>
        </div>
        <div className="row g-4 mb-5">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="corp-feature-card hover-lift">
              <img src={imgPriority} alt="" className="corp-feature-icon" />
              <h5 className="corp-feature-title">Priority Access</h5>
              <p className="corp-feature-text">Be first in line to receive an invite once the LegalPlatform Business Portal goes live and secure your spot ahead of others.</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="150">
            <div className="corp-feature-card hover-lift">
              <img src={imgEarly} alt="" className="corp-feature-icon bw" />
              <h5 className="corp-feature-title">Early Advantage</h5>
              <p className="corp-feature-text">Get a head start in streamlining your company’s legal needs with access to tools designed to save time and reduce costs.</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="corp-feature-card hover-lift">
              <img src={imgExclusive} alt="" className="corp-feature-icon" />
              <h5 className="corp-feature-title">Exclusive Updates</h5>
              <p className="corp-feature-text">Stay informed on launch progress & be the first to know about new features built specifically for corporates.</p>
            </div>
          </div>
        </div>

        <div className="corp-info-card" data-aos="fade-up" data-aos-delay="200">
          <div className="row g-0 align-items-center">
            <div className="col-md-4">
              <img src={imgCommitment} alt="" className="corp-info-img" />
            </div>
            <div className="col-md-8">
              <div className="corp-info-content">
                <h4 className="corp-info-title">Our Commitment</h4>
                <p className="corp-info-text">We’re shaping LegalPlatform Corporate to be more than just a service — it’s a trusted partner for your company. By pre-registering, you’re joining a select group of businesses preparing to access a platform where your team can consult lawyers anytime for fast, reliable advice. Invite team members & manage all company legal matters in one place. The best lawyers for the needs of your business across domains and jurisdictions. This is your opportunity to get early access to a smarter way of handling legal matters — faster, more affordable, & tailored to the needs of modern companies.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="corp-info-card reverse" data-aos="fade-up" data-aos-delay="250">
          <div className="row g-0 align-items-center">
            <div className="col-md-8">
              <div className="corp-info-content">
                <h4 className="corp-info-title">LegalPlatform Corporate</h4>
                <p className="corp-info-text">We’re shaping LegalPlatform Corporate to be more than just a service — it’s a trusted partner for your company. By pre-registering, you’re joining a select group of businesses preparing to access a platform where your team can consult lawyers anytime for fast, reliable advice. Invite team members & manage all company legal matters in one place. The best lawyers for the needs of your business across domains and jurisdictions. This is your opportunity to get early access to a smarter way of handling legal matters — faster, more affordable, & tailored to the needs of modern companies.</p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={imgCorporate} alt="" className="corp-info-img" />
            </div>
          </div>
        </div>
      </main>
      {showTop && (
        <button
          type="button"
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{ "--progress": `${Math.round(scrollProgress * 100)}%` }}
        >
          <span className="scroll-top-ring" />
          <i className="bi bi-arrow-up-short" />
        </button>
      )}
      <Footer />
    </div>
  );
};

export default Corporate;
