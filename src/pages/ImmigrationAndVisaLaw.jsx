import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";
import Seo from "../components/Seo";

const ImmigrationAndVisaLaw = () => {
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
        title="Immigration & Visa Law — Legal Platform"
        description="Expert legal assistance for visa applications, residency, and immigration compliance."
        canonicalPath="/immigration-visa-law"
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
          <h1 className="home-hero-title text-center"><AnimatedText text="Immigration & Visa Law" /></h1>
          <div className="home-hero-text text-center">
            <AnimatedText text="Simplify your global movement with professional immigration and visa support. Our verified lawyers provide guidance on residency permits, citizenship applications, work visas, and corporate immigration compliance, ensuring your international transitions are smooth and legally sound." />
          </div>
        </div>

        <div className="info-page-list">
          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Visa Applications" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Get expert help with investor visas, golden visas, skilled worker permits, and family sponsorship. We handle documentation review and application tracking to maximize your chances of success." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Residency & Citizenship" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Navigate the path to permanent residency or citizenship. Our legal experts provide detailed advice on eligibility requirements, investment thresholds, and the necessary legal steps for long-term stay in your target country." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Corporate Immigration" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Manage employee transfers and global mobility for your business. We provide compliance support, work permit processing, and corporate relocation services to ensure your international workforce is legally authorized." />
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

export default ImmigrationAndVisaLaw;
