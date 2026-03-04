import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";

const ForUsers = () => {
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
          <h1 className="home-hero-title text-center"><AnimatedText text="For Users" /></h1>
          <div className="home-hero-text text-center">
            <AnimatedText text="Access professional legal support without the complexity of traditional law firms. LegalPlatform allows you to connect directly with verified lawyers, ask questions, share documents, and receive tailored legal guidance — all through a secure and transparent digital experience. Whether you need quick advice, contract review, or long-term representation, everything is handled in one place." />
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
              <AnimatedText text="Simply post your legal issue or browse lawyers based on your needs. Once connected, you can chat privately with the lawyer, explain your situation, and upload any relevant documents for review. The lawyer may provide direct advice or send a customized service proposal or invoice within the chat. After secure payment through the platform, the legal work begins — and if needed, you can retain the lawyer on a monthly subscription for ongoing support." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Legal Platform Mission" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Our mission is to simplify legal access by making professional advice transparent, affordable, and instantly available. We aim to remove barriers such as long waiting times, unclear pricing, and complicated legal processes." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Legal Platform Vision" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="We envision a modern legal ecosystem where individuals and businesses can access trusted legal professionals globally, without geographical limitations or outdated systems." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Legal Platform History" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="LegalPlatform was founded to bridge the gap between people and legal professionals in a digital-first world. By combining technology with verified legal expertise, we created a secure marketplace that allows users to hire, retain, and manage lawyers efficiently online." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Target Audience" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="LegalPlatform is designed for individuals, entrepreneurs, startups, and growing businesses seeking flexible legal solutions — whether for one-time consultations, document review, dispute resolution, or ongoing legal retainers." />
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

export default ForUsers;
