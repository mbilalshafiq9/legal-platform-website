import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";
import aboutImg from "../assets/images/aboutImg.png";

const AboutLegalCompany = () => {
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="info-page-wrapper font-inter">
      <Header />
      <Breadcrumbs />
      <main className="info-page-section py-5">
        <div
          className="info-page-main-card"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
            <div className="flex-grow-1">
              <h1 className="home-hero-title text-center text-md-start">
                <AnimatedText text="About Legal Company" />
              </h1>
              <div className="home-hero-text text-center text-md-start">
                <AnimatedText text="LegalPlatform is a next-generation legal marketplace transforming how legal services are accessed, delivered, and scaled globally." />
              </div>
            </div>
            <img
              src={aboutImg}
              alt="About LegalPlatform"
              className="info-hero-illustration d-none d-md-block"
            />
          </div>
        </div>

        <div className="info-page-list">
          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="info-page-block-text">
              <AnimatedText text="We connect individuals, businesses, corporate teams, law firms, and independent lawyers inside one structured digital ecosystem. Users can post legal issues or hire lawyers on a one-time or monthly retainer basis. Lawyers can respond, consult, invoice directly within chat, and build recurring client relationships — all through a secure, transparent platform." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="info-page-block-text">
              <AnimatedText text="Traditional legal systems are slow, expensive, and geographically limited. LegalPlatform removes those barriers by creating a borderless legal infrastructure where legal services can be accessed instantly, managed digitally, and paid for securely." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className="info-page-block-text">
              <AnimatedText text="For businesses, we provide a centralized legal operations portal to manage multiple lawyers, onboard internal staff, and oversee ongoing matters." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="info-page-block-text">
              <AnimatedText text="For lawyers, we provide a scalable digital practice model — allowing them to market their profile externally, attract recurring clients, and grow toward six-figure annual income streams without relying solely on traditional referrals." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <div className="info-page-block-text">
              <AnimatedText text="Our mission is to modernize legal services through technology, structured payments, and intelligent matching — building the foundation for a more accessible, efficient, and scalable global legal economy." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="info-page-block-text text-center fw-bold">
              <AnimatedText text="LegalPlatform is not just a legal app. It is the infrastructure for the future of legal services." />
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

export default AboutLegalCompany;
