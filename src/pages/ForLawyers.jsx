import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";

const ForLawyers = () => {
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
          <h1 className="home-hero-title text-center"><AnimatedText text="For Lawyers" /></h1>
          <div className="home-hero-text text-center">
            <AnimatedText text="Turn your legal expertise into a scalable digital practice. LegalPlatform allows you to showcase your services, attract new clients globally, and monetize your profile through one-time consultations or monthly subscription retainers. Build your personal brand, increase visibility, and grow beyond traditional referrals." />
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
              <AnimatedText text="Create your verified lawyer profile, list your services, and set your pricing for one-time consultations or monthly subscription packages. Clients can post legal issues or connect with you directly through secure chat. Within the conversation, you can send customized invoices or service proposals. Once payment is completed through the platform, you deliver the service — all while managing communication, documents, and payments in one place. You can also share your unique profile link across your social media platforms to attract direct traffic and convert followers into paying clients." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Market Your Profile & Scale" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="LegalPlatform is not just a marketplace — it’s your digital storefront. Promote your personalized profile link on LinkedIn, Instagram, TikTok, or your website. Run targeted ads, build authority in your niche, and convert your audience into recurring monthly clients. With subscription retainers and global exposure, lawyers have the potential to build sustainable six-figure annual revenue streams." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Legal Platform Mission" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="Our mission is to empower lawyers with modern tools to monetize their expertise, expand their reach, and build scalable practices without geographical limitations." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Legal Platform Vision" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="We envision a future where lawyers operate as global digital professionals — growing their income through technology, transparency, and recurring service models." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Legal Platform History" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="LegalPlatform was created to modernize how lawyers connect with clients. By combining secure technology with structured payment systems, we built a digital environment where lawyers can grow sustainably while maintaining professionalism and control." />
            </div>
          </div>

          <div
            className="info-page-block"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="info-page-block-title"><AnimatedText text="Target Audience" /></h3>
            <div className="info-page-block-text">
              <AnimatedText text="LegalPlatform is designed for independent lawyers, consultants, boutique firms, and ambitious legal professionals who want to expand their client base, diversify income streams, and scale their practice digitally." />
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

export default ForLawyers;
