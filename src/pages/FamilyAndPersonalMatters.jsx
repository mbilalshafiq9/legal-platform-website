import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";
import Seo from "../components/Seo";

const FamilyAndPersonalMatters = () => {
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
        title="Family & Personal Matters — Legal Platform"
        description="Compassionate legal support for family law, personal disputes, and estate planning."
        canonicalPath="/family-personal-matters"
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
          <h1 className="home-hero-title text-center"><AnimatedText text="Family & Personal Matters" /></h1>
          <div className="home-hero-text text-center">
            <AnimatedText text="Handle sensitive family and personal legal issues with care and expertise. Our verified lawyers provide guidance on marriage, divorce, child custody, inheritance, and personal legal rights, ensuring your family's future and personal interests are protected." />
          </div>
        </div>

        <div className="info-page-list">
          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Family Law" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Get professional support for marriage contracts, divorce proceedings, child custody arrangements, and alimony. We provide mediation and representation to achieve fair outcomes while prioritizing family well-being." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Inheritance & Wills" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Secure your legacy with expert estate planning. Our lawyers assist with will preparation, inheritance distribution, and probate management, ensuring your assets are passed on according to your wishes and legal requirements." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Personal Legal Support" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Discuss personal legal concerns ranging from name changes to civil rights and personal liability. Get clear, actionable advice tailored to your unique situation from experienced legal professionals." />
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

export default FamilyAndPersonalMatters;
