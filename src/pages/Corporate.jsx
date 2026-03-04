import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";

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
          <h1 className="home-hero-title text-center"><AnimatedText text="For Corporate" /></h1>
          <div className="home-hero-text text-center">
            <AnimatedText text="Manage all your company's legal needs through one powerful, centralized portal. Onboard multiple team members, hire and retain multiple lawyers across different practice areas, and streamline your legal operations with full visibility and control." />
          </div>
        </div>

        <div className="info-page-list">
          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Legal Platform Mission" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Our mission is to transform how businesses access legal services by providing a secure, scalable digital infrastructure. We empower companies to manage legal matters efficiently, reduce overhead costs, and gain immediate access to verified legal professionals worldwide." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Legal Platform Vision" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Our vision is to become the global operating system for legal services — where companies of all sizes can seamlessly hire, retain, and manage legal professionals through one unified platform." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Legal Platform History" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="LegalPlatform was built to eliminate inefficiencies in traditional legal engagement models. We created a technology-driven marketplace that enables businesses to access legal expertise on-demand or through structured retainers, while maintaining transparency, security, and operational efficiency." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Target Audience" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="LegalPlatform is designed for startups, SMEs, and large corporations seeking flexible and scalable legal support. Whether you require one-time advisory services or ongoing retainers across multiple departments, our platform adapts to your company's structure and growth." />
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
