import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";
// removed illustrative images per request

const PostYourLegalIssue = () => {
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
          <h1 className="home-hero-title text-center">
            <AnimatedText text="Post Your Legal Issue Today" />
          </h1>
          <div className="home-hero-text text-center">
            <AnimatedText text="The Post Question feature allows users to submit their legal issue and receive responses from multiple lawyers. Users can review the responses, choose the lawyer that best fits their needs, and proceed with legal services through secure engagement." />
          </div>
        </div>

        <div className="info-page-list">
          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h3 className="info-page-block-title">
              <AnimatedText text="Post Your Legal Issue" />
            </h3>
            <div className="info-page-block-text">
              <AnimatedText text="Submit your legal matter through the platform and describe your situation. You can also upload relevant documents to help lawyers better understand your case." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="info-page-block-title">
              <AnimatedText text="Receive Responses from Lawyers" />
            </h3>
            <div className="info-page-block-text">
              <AnimatedText text="Once your issue is posted, multiple lawyers may review your matter and provide their initial responses or opinions based on their expertise." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <h3 className="info-page-block-title">
              <AnimatedText text="Choose the Right Lawyer for Your Case" />
            </h3>
            <div className="info-page-block-text">
              <AnimatedText text="Review the responses and select the lawyer who best fits your situation. You can then connect directly and discuss your matter further through secure chat." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="info-page-block-title">
              <AnimatedText text="Review the Service Proposal" />
            </h3>
            <div className="info-page-block-text">
              <AnimatedText text="The lawyer may send a customized invoice or service proposal based on the legal work required, whether it is consultation, case handling, or document review." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <h3 className="info-page-block-title">
              <AnimatedText text="Proceed with Your Legal Support" />
            </h3>
            <div className="info-page-block-text">
              <AnimatedText text="Once the invoice is approved, you can proceed with the legal service. If you are satisfied with the lawyer, you may continue working together through a one-time engagement or retain them on a monthly basis for ongoing legal support." />
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

export default PostYourLegalIssue;
