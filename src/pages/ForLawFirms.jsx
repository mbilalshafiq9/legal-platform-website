import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";

const ForLawFirms = () => {
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
          <h1 className="home-hero-title text-center"><AnimatedText text="For Law Firms" /></h1>
          <div className="home-hero-text text-center">
            <AnimatedText text="Expand your firm's reach, attract new clients, and generate recurring revenue through LegalPlatform's digital marketplace. Create a verified firm profile, onboard multiple lawyers from your team, and offer both one-time legal services and subscription-based retainers — all within a secure and scalable platform." />
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
              <AnimatedText text="Law firms create a verified firm profile and list their practice areas and services. Multiple lawyers from the firm can be onboarded under the same firm account, allowing centralized management of client interactions. Clients can post legal issues, browse your firm's profile, or connect directly with your lawyers through secure chat. Within the conversation, your firm can send customized service proposals or invoices for one-time matters or ongoing retainers. Once payment is processed through the platform, legal services begin — with full transparency and structured communication." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Legal Platform Mission" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Our mission is to empower law firms with modern digital infrastructure that enhances visibility, streamlines client acquisition, and simplifies service delivery while maintaining professionalism and control." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Legal Platform Vision" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Our vision is to become the global digital bridge between law firms and clients — enabling firms to operate beyond geographical limitations and scale sustainably in a technology-driven legal ecosystem." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Legal Platform History" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="LegalPlatform was founded to modernize traditional legal engagement models. By combining verified legal professionals with secure digital tools, we created a marketplace that allows firms to connect with clients efficiently and manage engagements seamlessly online." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Target Audience" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="LegalPlatform is designed for boutique firms, mid-sized practices, and international law firms seeking to expand their digital presence, diversify revenue streams, and access new markets without increasing physical overhead." />
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

export default ForLawFirms;
