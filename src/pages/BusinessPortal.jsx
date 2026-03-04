import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";

const BusinessPortal = () => {
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
          <h1 className="home-hero-title text-center"><AnimatedText text="Business Portal" /></h1>
          <div className="home-hero-text text-center">
            <AnimatedText text="The LegalPlatform Business Portal provides companies with a centralized legal management system. From one secure dashboard, you can post legal matters, hire and retain multiple lawyers across different practice areas, onboard team members, track ongoing cases, manage invoices, and maintain full visibility over your company's legal operations — all in one structured environment designed for scale." />
          </div>
        </div>

        <div className="info-page-list">
          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h3 className="info-page-block-title"><AnimatedText text="How It Works" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Your company creates a dedicated corporate account and gains access to a structured dashboard where legal matters can be initiated, tracked, and managed. Team members can be onboarded with assigned roles and permissions, allowing departments to collaborate while maintaining executive oversight. From the portal, businesses can hire or retain multiple lawyers across different practice areas, communicate securely through integrated chat, and upload relevant documents for review. Lawyers may send customized proposals or invoices directly through the system, which can be reviewed and approved internally before secure payment is processed. As your company grows, you can retain multiple legal professionals simultaneously, manage ongoing subscriptions, monitor active matters, and maintain full visibility over legal spend — all within one unified platform." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Target Audience" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="The Business Portal is built for startups, growing enterprises, and established corporations seeking structured legal management, operational transparency, and scalable access to professional legal expertise." />
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

export default BusinessPortal;
