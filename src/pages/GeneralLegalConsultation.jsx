import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";
import Seo from "../components/Seo";

const ContractReview = () => {
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
        title="Contract Review — Legal Platform"
        description="Get expert contract review to identify risks, clarify obligations, and protect your interests."
        canonicalPath="/contract-review"
        image="/favicon.png"
      />
      <Header />
      <Breadcrumbs />
      <main className="info-page-section py-5">
        <div className="info-page-main-card" data-aos="fade-up" data-aos-delay="100">
          <h1 className="home-hero-title text-center"><AnimatedText text="Contract Review" /></h1>
          <div className="home-hero-text text-center">
            <AnimatedText text="Upload your agreement and receive a professional review from verified lawyers. We highlight risks, propose revisions, and ensure the document reflects your commercial goals." />
          </div>
        </div>

        <div className="info-page-list">
          <div className="info-page-block" data-aos="fade-up" data-aos-delay="150">
            <h3 className="info-page-block-title"><AnimatedText text="What You Get" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Detailed comments on clauses, liability, payment terms, IP, termination, and dispute resolution, with clear recommendations." />
            </div>
          </div>
          <div className="info-page-block" data-aos="fade-up" data-aos-delay="200">
            <h3 className="info-page-block-title"><AnimatedText text="How It Works" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Post your document, choose a lawyer, receive a proposal, and proceed with secure payment. Feedback and revised drafts are delivered inside the platform." />
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

export default ContractReview;
