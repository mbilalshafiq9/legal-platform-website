import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";

const HireALawyer = () => {
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
          <h1 className="home-hero-title text-center"><AnimatedText text="Hire a Lawyer" /></h1>
          <div className="home-hero-text text-center">
            <AnimatedText text="Hire trusted lawyers online, compare services, and get professional legal advice — all in one secure platform." />
          </div>
        </div>

        <div className="info-page-list">
          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Legal Platform Mission" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Our mission is to simplify legal access through technology. We provide a secure and transparent platform where users can post legal issues, hire lawyers, or subscribe to ongoing legal services — while enabling lawyers to grow sustainable, scalable practices in a modern digital economy." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Legal Platform Vision" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Our vision is to modernize the legal industry by creating a global digital marketplace where legal services are accessible, transparent, and efficient. We aim to eliminate barriers such as high upfront costs, limited accessibility, and outdated processes — empowering individuals and businesses to access trusted legal expertise anytime, anywhere." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Legal Platform History" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="LegalPlatform was founded to bridge the gap between clients and legal professionals in a rapidly evolving digital world. Recognizing the inefficiencies of traditional legal systems, we built a technology-driven solution that enables lawyers to showcase their services and allows clients to hire or retain them seamlessly online. Today, we continue to innovate and expand globally." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Target Audience" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="LegalPlatform serves individuals, startups, SMEs, and corporations seeking reliable legal support. We also empower lawyers and legal consultants who want to scale their practice, offer subscription-based services, and reach clients beyond geographical limitations." />
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

export default HireALawyer;
