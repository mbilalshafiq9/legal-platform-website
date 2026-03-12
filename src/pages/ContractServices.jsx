import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";
import Seo from "../components/Seo";

const ContractServices = () => {
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
        title="Contract Services — Legal Platform"
        description="Comprehensive contract review, drafting, and management services for individuals and businesses."
        canonicalPath="/contract-services"
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
          <h1 className="home-hero-title text-center"><AnimatedText text="Contract Services" /></h1>
          <div className="home-hero-text text-center">
            <AnimatedText text="Protect your interests with professional contract services. From drafting solid agreements to reviewing complex legal documents, our verified lawyers ensure your contracts are legally sound, transparent, and tailored to your specific needs." />
          </div>
        </div>

        <div className="info-page-list">
          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Contract Drafting" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Get custom-drafted contracts for business partnerships, employment, real estate, or personal agreements. Our legal experts create clear, enforceable documents that minimize risk and define clear terms for all parties involved." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Contract Review" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Before you sign, have a professional lawyer review your documents. We identify potential risks, hidden clauses, and ensure that the agreement aligns with your best interests and current legal standards." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Legal Consultation" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Discuss your contract requirements with experienced attorneys. Get clarity on legal terminology, jurisdictional requirements, and negotiation strategies to ensure a smooth and secure contractual process." />
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

export default ContractServices;
