import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";
import Seo from "../components/Seo";

const BusinessAndCorporateLaw = () => {
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
      <Seo
        title="Business & Corporate Law — Legal Platform"
        description="Comprehensive legal support for corporate governance, commercial transactions, and business compliance."
        canonicalPath="/business-corporate-law"
        image="/favicon.png"
      />
      <Header />
      <Breadcrumbs />
      <main className="info-page-section py-5">
        <div
          className="info-page-main-card"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="home-hero-title text-center"><AnimatedText text="Business & Corporate Law" /></h1>
          <div className="home-hero-text text-center">
            <AnimatedText text="Empower your enterprise with professional corporate legal services. Our verified lawyers provide strategic guidance on corporate governance, mergers and acquisitions, commercial contracts, and regulatory compliance to ensure your business thrives in a complex legal landscape." />
          </div>
        </div>

        <div className="info-page-list">
          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Corporate Governance" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Ensure your company operates with integrity and compliance. We assist with board advisory, shareholder rights, secretarial services, and the implementation of robust governance frameworks to protect your organization's reputation and value." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Commercial Transactions" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Navigate complex business deals with confidence. Our legal experts handle M&A, joint ventures, private equity, and structural reorganizations, providing meticulous due diligence and strategic negotiation to achieve your commercial objectives." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Regulatory Compliance" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Stay ahead of evolving legal requirements. We provide comprehensive support for industry-specific regulations, data protection, anti-money laundering (AML) compliance, and internal audits to minimize legal risks and operational disruptions." />
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

export default BusinessAndCorporateLaw;
