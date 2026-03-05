import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";
import chatWithLawyer from "../assets/images/chatWithLawyer.png";

const ChatWithLawyers = () => {
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
                <AnimatedText text="Chat with Lawyers" />
              </h1>
              <div className="home-hero-text text-center text-md-start">
                <AnimatedText text="Receive professional legal guidance in real time. Simple, secure, and designed for individuals and businesses worldwide." />
              </div>
            </div>
            <img
              src={chatWithLawyer}
              alt="Chat with lawyers"
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
            <h3 className="info-page-block-title">
              <AnimatedText text="Discussion with Professional Lawyer" />
            </h3>
            <div className="info-page-block-text">
              <AnimatedText text="Start a secure, real-time conversation with verified lawyers. Discuss your matter confidentially, ask questions, and receive clear legal guidance — all without scheduling delays or unnecessary complexity." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="info-page-block-title">
              <AnimatedText text="Get Advice for your Legal Issues" />
            </h3>
            <div className="info-page-block-text">
              <AnimatedText text="Share your legal concern and receive tailored professional advice from experienced lawyers. Within the chat, lawyers can also send customized service proposals or invoices for one-time services or ongoing work. Review the details, approve securely, and proceed with confidence — all in one place." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <h3 className="info-page-block-title">
              <AnimatedText text="Upload Legal Documents and Images" />
            </h3>
            <div className="info-page-block-text">
              <AnimatedText text="Share contracts, agreements, or supporting documents directly in the chat. Lawyers can review your files and provide accurate legal feedback based on your documents." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Monthly and one time services" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Retain a lawyer through flexible monthly subscription packages for continuous legal support. Enjoy priority access, ongoing advisory services, and predictable legal costs tailored to your needs." />
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

export default ChatWithLawyers;
