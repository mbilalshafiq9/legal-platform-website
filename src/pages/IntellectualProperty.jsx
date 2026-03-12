import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";
import Seo from "../components/Seo";

const IntellectualProperty = () => {
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
        title="Intellectual Property — Legal Platform"
        description="Comprehensive legal protection for your ideas, inventions, and brand assets."
        canonicalPath="/intellectual-property"
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
          <h1 className="home-hero-title text-center"><AnimatedText text="Intellectual Property" /></h1>
          <div className="home-hero-text text-center">
            <AnimatedText text="Protect your creative work and business innovations with our specialized intellectual property services. Our verified lawyers help you secure trademarks, patents, and copyrights, ensuring your intangible assets are legally defended and properly commercialized." />
          </div>
        </div>

        <div className="info-page-list">
          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Trademarks & Branding" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Secure your brand identity through trademark registration and enforcement. We provide comprehensive searches, application filing, and monitoring services to protect your brand names, logos, and slogans from unauthorized use." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Copyright Protection" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Protect your literary, artistic, and digital works. Our legal experts assist with copyright registration, licensing agreements, and infringement litigation to ensure your creative output is fully protected under legal frameworks." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Patents & Innovations" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Defend your inventions and technical breakthroughs. We provide expert support for patent drafting, filing, and portfolio management to secure your competitive advantage in the marketplace." />
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

export default IntellectualProperty;
