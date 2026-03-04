import React, { useState, useEffect, useRef } from "react";

import appStore from "../assets/images/app-store.png";
import playStore from "../assets/images/play-store.png";
import appStoreDark from "../assets/images/apple-dark.png";
import playStoreDark from "../assets/images/google-dark.png";

import sendButton from "../assets/images/send-button.png";
import attachmentPin from "../assets/images/attachment-pin.png";

import benzinga from "../assets/images/benzinga.png";
import khaleej from "../assets/images/khaleej.png";
import chronical from "../assets/images/chronical.png";
import benzingaDark from "../assets/images/brands-slider/bazinga-dark.png";
import khaleejDark from "../assets/images/brands-slider/khaleej-dark.png";
import chronicalDark from "../assets/images/brands-slider/chronicle-dark.png";
import question from "../assets/images/question.png";
import caseImg from "../assets/images/case.png";

import appScreenshot from "../assets/images/download-section/download-app1.png";
import appScreenshot2 from "../assets/images/download-section/download-app.png";

import businessPortal from "../assets/images/businessPortal.png";
import hireMultipleLawyers from "../assets/images/hireMultipleLawyers.png";

import contractor from "../assets/images/contractor.png";
import profileOne from "../assets/images/p1.png";
import profileTwo from "../assets/images/p2.png";
import corporate from "../assets/images/corporate.png";
import user from "../assets/images/user.png";
import firmLaw from "../assets/images/firm-law.png";
import forLawyer from "../assets/images/for-lawyer.png";

import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PostQuestion from "../components/PostQuestion";
import AnimatedText from "../components/AnimatedText";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";

import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [scrollX, setScrollX] = useState(0);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [audienceTab, setAudienceTab] = useState("consumers");
  const [faqTab, setFaqTab] = useState("general");
  const [showPostQuestion, setShowPostQuestion] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.body.classList.contains("dark-mode"));
    };

    checkDarkMode(); // Initial check

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const generalFaq = [
    {
      q: "What is LegalPlatform?",
      a: "LegalPlatform is a secure digital marketplace that connects individuals and businesses with verified lawyers. Users can post legal matters, hire professionals, communicate privately, upload documents, and manage payments — all within one structured platform.",
    },
    {
      q: "Can I start if I have a legal issue?",
      a: "Yes. If you have a legal matter, simply create an account and post your issue. You can then receive responses from relevant lawyers or browse and connect directly with a professional that matches your needs.",
    },
    {
      q: "How are payments handled?",
      a: "All payments are processed securely within the platform. Lawyers send customized invoices directly in chat, and services begin once payment is confirmed. Payments outside the platform are strictly prohibited to protect both parties.",
    },
    {
      q: "Can I retain a lawyer monthly?",
      a: "Yes. Many lawyers offer subscription-based retainers for ongoing legal support. You can subscribe to a monthly package and receive continuous advisory services tailored to your needs.",
    },
    {
      q: "How do I choose the right lawyer?",
      a: "You can review lawyer profiles, including their practice areas, services, pricing, and jurisdictions before making a decision. After you post your legal issue, relevant lawyers may respond. Once a lawyer responds, you can continue the discussion through a one-on-one secure chat to clarify details before proceeding with a one-time service or monthly retainer.",
    },
    {
      q: "How can my company access legal support on LegalPlatform?",
      a: "Your company can create a corporate account, post legal matters, or directly hire lawyers based on your business needs. Once a lawyer responds or is selected, you can communicate securely and proceed with structured engagements through the platform.",
    },
    {
      q: "How long does it take to receive a response after posting my legal issue?",
      a: "Once you post your legal matter, relevant lawyers can review and respond based on their availability and expertise. Response times may vary depending on the complexity of the issue, but you will be notified as soon as a lawyer replies so you can continue the discussion in a secure one-on-one chat.",
    },
  ];
  const lawyersFaq = [
    {
      q: "Why should I join LegalPlatform?",
      a: "LegalPlatform helps lawyers attract new clients, monetize their expertise, and scale beyond traditional referrals. You can offer one-time services, monthly retainers, and receive payments securely through the platform.",
    },
    {
      q: "How do I get clients?",
      a: "Clients either post legal issues that match your expertise or connect directly through your profile. You can also share your unique profile link on social media to drive traffic and convert your audience into paying clients.",
    },
    {
      q: "Can I set my own pricing?",
      a: "Yes. You control your pricing for consultations, document review, or subscription packages. You can also send customized invoices directly within the chat.",
    },
    {
      q: "How do I get paid?",
      a: "Once a client approves your invoice and completes payment through the platform, the funds are processed and transferred according to the platform's payout schedule.",
    },
    {
      q: "Can I offer monthly subscription services?",
      a: "Yes. Lawyers can create recurring packages for businesses or individuals seeking ongoing legal support — allowing you to build predictable income streams.",
    },
    {
      q: "Is there a platform fee?",
      a: "LegalPlatform applies a transparent service fee on completed transactions and take a platform fee from the lawyers. This fee supports secure payments, client acquisition, and platform infrastructure.",
    },
    {
      q: "How can I scale to six figures using LegalPlatform?",
      a: "Lawyers can scale their income by actively promoting their LegalPlatform profile outside the platform. You receive a personalized profile link that can be shared on LinkedIn, Instagram, TikTok, your website, email signature, or digital ads. By driving your own audience to your profile and offering structured one-time services or monthly subscription retainers, you can convert followers into paying clients. Consistent promotion combined with recurring retainers creates the opportunity to build predictable, scalable revenue.",
    },
    {
      q: "Can law firms join?",
      a: "Yes. Firms can onboard multiple lawyers under one structured account and manage client interactions centrally.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const moveX = scrollPosition * 0.5;
      setScrollX(moveX);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
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

  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;

    if (!svg || !path) return;

    const scroll = () => {
      const distance = window.scrollY;
      const totalDistance = svg.clientHeight - window.innerHeight;
      console.log(totalDistance);
      const percentage = distance / totalDistance;
      const pathLength = path.getTotalLength();

      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
    };

    scroll();
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace("#", "");
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -100,
        });
      }, 300);
    }
  }, [location]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
      delay: 100,
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="img1 font-inter">
        <Header />
        <div className="header-banner" id="home">
          <div className="container position-relative">
            <div className="row g-4 align-items-stretch home-hero-row">
              <div className="col-lg-6">
                <div
                  className="home-hero-main-card hp-hero-clickable"
                  data-aos="fade-up"
                  data-aos-delay="150"
                  onClick={() => navigate("/post-your-legal-issue")}
                >
                  <h1 className="home-hero-title text-center">
                    <AnimatedText text="Post Your" tag="span" />{" "}
                    <AnimatedText text="Legal" tag="span" />
                    <br className="d-none d-md-block" />
                    <span className="d-md-none">
                      <br />
                    </span>
                    <AnimatedText text="Issue Today" tag="span" />
                  </h1>
                  <div className="home-hero-text text-center">
                    <AnimatedText
                      text="Post your legal issue today & connect with trusted"
                      tag="span"
                    />
                    <span className="d-md-none"> </span>
                    <br className="d-none d-md-block" />
                    <AnimatedText
                      text="professionals ready to help. Share your situation"
                      tag="span"
                    />
                    <span className="d-md-none"> </span>
                    <br className="d-none d-md-block" />
                    <AnimatedText
                      text="securely, receive clear guidance, & explore practical"
                      tag="span"
                    />
                    <span className="d-md-none"> </span>
                    <br className="d-none d-md-block" />
                    <AnimatedText
                      text="solutions quickly. From family matters to business"
                      tag="span"
                    />
                    <span className="d-md-none"> </span>
                    <br className="d-none d-md-block" />
                    <AnimatedText
                      text="disputes, get timely answers, save time & money,"
                      tag="span"
                    />
                    <span className="d-md-none"> </span>
                    <br className="d-none d-md-block" />
                    <AnimatedText
                      text="and move forward with confidence through an"
                      tag="span"
                    />
                    <span className="d-md-none"> </span>
                    <br className="d-none d-md-block" />
                    <AnimatedText
                      text="easy, confidential online platform today."
                      tag="span"
                    />
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      className="btn home-hero-main-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowPostQuestion(true);
                      }}
                    >
                      Post Question
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 hire-a-lawyer-mob-res">
                <div className="d-flex flex-column gap-4 home-hero-side">
                  <div
                    className="home-hero-card home-hero-card-light hp-hero-clickable"
                    data-aos="fade-left"
                    data-aos-delay="200"
                    onClick={() => navigate("/hire-a-lawyer")}
                  >
                    <h3 className="home-hero-card-title">
                      <AnimatedText text="Hire a Lawyer" />
                    </h3>
                    <div className="home-hero-card-text">
                      <AnimatedText
                        text="Hire trusted lawyers online, compare services, and get"
                        tag="span"
                      />{" "}
                      <AnimatedText
                        text="professional legal advice — all in one secure platform."
                        tag="span"
                      />
                    </div>
                  </div>
                  <div
                    className="home-hero-card home-hero-card-dark hp-hero-clickable"
                    data-aos="fade-left"
                    data-aos-delay="250"
                    onClick={() => navigate("/chat-with-lawyers")}
                  >
                    <h3 className="home-hero-card-title home-hero-card-title-chat">
                      <AnimatedText text="Chat with Lawyers" />
                    </h3>
                    <div className="home-hero-card-text text-white">
                      <AnimatedText
                        text="Skip the high fees and long waiting times. Speak directly"
                        tag="span"
                      />{" "}
                      <AnimatedText
                        text="with experienced lawyers and resolve your legal matters"
                        tag="span"
                      />{" "}
                      <AnimatedText text="quickly and securely." tag="span" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Slider */}
      <div
        className="container brands-slider"
        data-aos="fade-in"
        data-aos-duration="1200"
      >
        <div className="press-slider">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={2000}
            loop
            grabCursor
            slidesPerView={3}
            spaceBetween={40}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 24 },
              768: { slidesPerView: 3, spaceBetween: 32 },
              992: { slidesPerView: 3, spaceBetween: 40 },
            }}
          >
            <SwiperSlide>
              <img
                src={isDarkMode ? benzingaDark : benzinga}
                alt="Benzinga"
                className="press-logo hover-scale"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={isDarkMode ? khaleejDark : khaleej}
                alt="Khaleej Times"
                className="press-logo hover-scale"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={isDarkMode ? chronicalDark : chronical}
                alt="The Chronicle Journal"
                className="press-logo hover-scale"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={isDarkMode ? benzingaDark : benzinga}
                alt="Benzinga"
                className="press-logo hover-scale"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={isDarkMode ? khaleejDark : khaleej}
                alt="Khaleej Times"
                className="press-logo hover-scale"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={isDarkMode ? chronicalDark : chronical}
                alt="The Chronicle Journal"
                className="press-logo hover-scale"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/*  What is Legal Platform  */}
      <div className="container who-for my-5" id="who-for">
        <div className="who-wrap" data-aos="fade-up">
          <h2
            className="text-white text-center pt-5 mb-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <AnimatedText text="What is Legal Platform" />
          </h2>
          <div
            className="who-for-p text-center mb-4 mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <AnimatedText
              text="LegalPlatform connects users, businesses, and lawyers in one secure platform to post issues, hire legal experts, and manage matters effortlessly."
              tag="span"
            />
          </div>
          <div className="row g-3 g-md-4 mt-2">
            <div
              className="col-md-3 pe-0"
              data-aos="flip-left"
              data-aos-delay="300"
            >
              <div
                className="who-card hover-lift position-relative cursor-pointer"
                onClick={() => navigate("/for-corporate")}
                style={{ cursor: "pointer" }}
              >
                <h4>
                  <AnimatedText text="For" tag="span" /> <br className="br" />{" "}
                  <AnimatedText text="Corporate" tag="span" />
                </h4>
                <div>
                  <p>
                    <AnimatedText
                      text="Hire multiple lawyers, manage company legal matters, and oversee cases across departments from one centralized portal."
                      tag="span"
                    />
                  </p>
                </div>
                <div className="who-icon hover-rotate">
                  <img
                    src={corporate}
                    alt="Corporate"
                    style={{ width: "32px", height: "32px" }}
                  />
                </div>
                <div className="position-absolute bottom-0 end-0 p-3">
                  <i className="bi bi-arrow-up-right text-white fs-4"></i>
                </div>
              </div>
            </div>
            <div className="col-md-3" data-aos="flip-left" data-aos-delay="400">
              <div
                className="who-card h-100 hover-lift position-relative cursor-pointer"
                onClick={() => navigate("/for-users")}
                style={{ cursor: "pointer" }}
              >
                <h4>
                  <AnimatedText text="For" tag="span" /> <br className="br" />{" "}
                  <AnimatedText text="Users" tag="span" />
                </h4>
                <div>
                  <p>
                    <AnimatedText
                      text="Post your legal issue, hire a lawyer monthly or one-time, and connect directly for secure one-on-one guidance."
                      tag="span"
                    />
                  </p>
                </div>
                <div className="who-icon hover-rotate">
                  <img
                    src={user}
                    alt="Users"
                    style={{ width: "32px", height: "32px" }}
                  />
                </div>
                <div className="position-absolute bottom-0 end-0 p-3">
                  <i className="bi bi-arrow-up-right text-white fs-4"></i>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 ps-0"
              data-aos="flip-left"
              data-aos-delay="500"
            >
              <div
                className="who-card h-100 hover-lift position-relative cursor-pointer"
                onClick={() => navigate("/for-law-firms")}
                style={{ cursor: "pointer" }}
              >
                <h4>
                  <AnimatedText text="For" tag="span" /> <br className="br" />{" "}
                  <AnimatedText text="Law Firms" tag="span" />
                </h4>
                <div>
                  <p>
                    <AnimatedText
                      text="Acquire new clients, manage legal work digitally, and streamline communication and billing in one secure platform."
                      tag="span"
                    />
                  </p>
                </div>
                <div className="who-icon hover-rotate">
                  <img
                    src={firmLaw}
                    alt="Law Firms"
                    style={{ width: "32px", height: "32px" }}
                  />
                </div>
                <div className="position-absolute bottom-0 end-0 p-3">
                  <i className="bi bi-arrow-up-right text-white fs-4"></i>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 ps-0"
              data-aos="flip-left"
              data-aos-delay="600"
            >
              <div
                className="who-card h-100 hover-lift position-relative cursor-pointer"
                onClick={() => navigate("/for-lawyers")}
                style={{ cursor: "pointer" }}
              >
                <h4>
                  <AnimatedText text="For" tag="span" /> <br className="br" />
                  <AnimatedText text="Lawyers" tag="span" />
                </h4>
                <div>
                  <p>
                    <AnimatedText
                      text="Offer your services, respond to posted legal issues, send invoices in chat, and market your profile to scale to 6 figures."
                      tag="span"
                    />
                  </p>
                </div>
                <div className="who-icon hover-rotate">
                  <img
                    src={forLawyer}
                    alt="Lawyers"
                    style={{ width: "32px", height: "32px" }}
                  />
                </div>
                <div className="position-absolute bottom-0 end-0 p-3">
                  <i className="bi bi-arrow-up-right text-white fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features of AI Lawyer */}
      <div className="container features-legal" id="howitwork">
        <div className="text-center mb-3">
          <h2>
            <AnimatedText text="Features of Legal Platform" />
          </h2>
          <div className="mt-4 mb-5">
            <AnimatedText
              text="LegalPlatform connects users, businesses, and lawyers in one secure platform to post issues, hire legal experts, and manage matters effortlessly."
              tag="span"
            />
          </div>
        </div>
        <div className="row g-4 align-items-stretch">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div
              className="feature-tile feature-question text-center hover-lift"
              onClick={() => navigate("/post-your-legal-issue")}
              style={{ cursor: "pointer" }}
            >
              <h4 className="mt-1 fw-bold">
                <AnimatedText text="Post Question" />
              </h4>
              <img
                src={question}
                alt="Create a Question"
                className="feature-icon my-4 hover-scale"
              />
              <div className="feature-desc">
                <AnimatedText
                  text="Submit your legal issue and receive answers from"
                  tag="span"
                />
                <span className="d-md-none"> </span>
                <br className="d-none d-md-block" />
                <AnimatedText
                  text="qualified lawyers."
                  tag="span"
                />
              </div>
            </div>

            <div
              className="mt-3 case-card hover-lift"
              data-aos="fade-up"
              data-aos-delay="300"
              onClick={() => navigate("/hire-a-lawyer")}
              style={{ cursor: "pointer" }}
            >
              <div className="feature-tile feature-case text-center">
                <h4 className="mt-1 fw-bold text-white">
                  <AnimatedText text="Hire a Lawyer" />
                </h4>
                <img
                  src={caseImg}
                  alt="Create a Case"
                  className="feature-icon case-img my-4 hover-scale"
                />
                <div className="feature-desc text-white">
                  <AnimatedText
                    text="Connect with verified lawyers and get the legal"
                    tag="span"
                  />{" "}
                  <br />
                  <AnimatedText
                    text="support you need."
                    tag="span"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8" data-aos="fade-up" data-aos-delay="200">
            <div className="chat-card hover-lift">
              <img src={profileOne} alt="Profile" className="mini-chat-avatar" />
              <div className="mini-chat-card d-flex justify-content-center">
                <img
                  src={contractor}
                  alt=""
                  className="contractor hover-scale"
                />
              </div>

              <div className="chat-bubbles">
                <div className="d-flex align-items-center justify-content-end mb-3">
                  <div
                    className="bubble dark align-self-end hp-dark-bubble d-flex flex-column align-items-end justify-content-between w-auto"
                    data-aos="fade-left"
                    data-aos-delay="400"
                  >
                    <span className="mb-1">
                      <AnimatedText
                        text="accusantium doloremque laudantium, totam."
                        tag="span"
                      />
                    </span>
                    <span className="time">02:14 PM</span>
                  </div>
                  <img
                    src={profileOne}
                    alt="User avatar"
                    className="chat-avatar ms-2"
                  />
                </div>

                <div className="d-flex align-items-center">
                  <img
                    src={profileTwo}
                    alt="Lawyer avatar"
                    className="chat-avatar me-2"
                  />
                  <div
                    className="bubble light d-flex align-items-center justify-content-center hp-light-bubble"
                    data-aos="fade-right"
                    data-aos-delay="500"
                  >
                    <AnimatedText text="Ok. Thanks Bro!" tag="span" />
                  </div>
                </div>
              </div>
              <div className="chat-footer">
                <div className="text-white hp-ask-ai-text">
                  <AnimatedText
                    text="Legal research never been easier. Have a conversation with your virtual assistant, gain insights and simple answers to your complex questions in real-time."
                    tag="span"
                  />
                </div>
                <div className="input-wrap">
                  <input
                    type="text"
                    placeholder="Write a Messages..."
                    readOnly
                  />
                  <div className="input-actions">
                    <img
                      src={attachmentPin}
                      alt=""
                      className="hover-scale hp-attachment-icon"
                    />
                    <button className="send-btn hover-scale">
                      <img
                        src={sendButton}
                        alt=""
                        className="hp-send-button-icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-2 business-portal-mob-res">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div
              className="multi-panel p-3 hover-lift hp-multi-panel-auto-height"
              onClick={() => navigate("/business-portal")}
              style={{ cursor: "pointer" }}
            >
              <h6 className="fw-semibold mb-3">
                <AnimatedText text="Business Portal" />
              </h6>
              <p>
                <AnimatedText text="Manage all your company's legal matters from one centralized dashboard. Post legal issues, track ongoing cases, onboard team members, and communicate with lawyers securely — all in one structured environment designed for businesses." />
              </p>
              <div className="row g-3 mt-1 px-3 pb-4">
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <img
                    src={businessPortal}
                    alt=""
                    className="hover-scale hp-business-portal-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div
              className="multi-panel p-3 hover-lift hp-multi-panel-auto-height"
              onClick={() => navigate("/hire-multiple-lawyers")}
              style={{ cursor: "pointer" }}
            >
              <h6 className="fw-semibold mb-3">
                <AnimatedText text="Hire Multiple Lawyers for Your Business" />
              </h6>
              <p className="text-muted">
                <AnimatedText text="Access and retain multiple lawyers across different practice areas based on your company’s needs. Compare services, manage subscriptions, review invoices, and build a scalable legal support system tailored to your organization." />
              </p>
              <div className="row g-3 mt-1 px-3 pb-4">
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <img
                    src={hireMultipleLawyers}
                    alt=""
                    className="hover-scale hp-hire-lawyers-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ's */}
      <div className="container-fluid faq-bgImg mt-5">
        <div className="container my-5" id="faq">
          <div className="faq-wrap p-3 p-md-4" data-aos="fade-up">
            <div className="text-center mb-3">
              <h2>
                <AnimatedText text="Have a question?" />
              </h2>
              <div className="text-muted mb-5">
                <AnimatedText text="Browse through our frequently asked topics." />
              </div>
            </div>
            <div
              className="d-flex justify-content-center mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="faq-tabs">
                <button
                  className={`faq-tab ${faqTab === "general" ? "active" : ""}`}
                  onClick={() => setFaqTab("general")}
                >
                  General
                </button>
                <button
                  className={`faq-tab ${faqTab === "lawyers" ? "active" : ""}`}
                  onClick={() => setFaqTab("lawyers")}
                >
                  Lawyers
                </button>
              </div>
            </div>
            <div className="accordion accordion-flush" id="faqAccordion">
              {(faqTab === "general" ? generalFaq : lawyersFaq).map(
                (item, idx) => (
                  <div
                    className="accordion-item faq-card hover-lift"
                    key={idx}
                    data-aos="fade-up"
                    data-aos-delay={idx * 50}
                  >
                    <h2 className="accordion-header" id={`flush-heading${idx}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse${idx}`}
                        aria-expanded="false"
                        aria-controls={`flush-collapse${idx}`}
                      >
                        <AnimatedText text={item.q} />
                      </button>
                    </h2>
                    <div
                      id={`flush-collapse${idx}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`flush-heading${idx}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">{item.a}</div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5" id="download-app">
        <div
          className="mobile-app-banner p-3 p-md-4 hover-lift"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row align-items-center g-4 h-100">
            <div
              className="col-md-6 d-none d-md-block"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <div className="download-phones">
                <img
                  src={appScreenshot}
                  alt="App preview 1"
                  className="phone-1"
                />
                <img
                  src={appScreenshot2}
                  alt="App preview 2"
                  className="phone-2"
                />
              </div>
            </div>
            <div className="col-md-6 h-100 d-flex flex-column justify-content-center align-items-center">
              <div className="text-white">
                <h2 className="mb-2 download-app-title text-center">
                  <AnimatedText text="Start your legal" /> <br />
                  <AnimatedText text="journey today" baseIndex={16} />
                </h2>
                <div className="download-app-desc text-center">
                  <AnimatedText
                    text="Access trusted legal professionals, streamline"
                    tag="span"
                  />{" "}
                  <br className="br" />
                  <AnimatedText
                    text="communication, and handle your legal needs"
                    tag="span"
                  />{" "}
                  <br className="br" />
                  <AnimatedText
                    text="with confidence — anytime, anywhere."
                    tag="span"
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
                  {/* Light Mode Images */}
                  <img
                    src={appStore}
                    alt="App Store"
                    className="store-badge store-badge-light hover-scale"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  />
                  <img
                    src={playStore}
                    alt="Google Play"
                    className="store-badge store-badge-light hover-scale"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  />
                  {/* Dark Mode Images */}
                  <img
                    src={appStoreDark}
                    alt="App Store"
                    className="store-badge store-badge-dark hover-scale"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  />
                  <img
                    src={playStoreDark}
                    alt="Google Play"
                    className="store-badge store-badge-dark hover-scale"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  />
                </div>

                {/* Mobile-only images shown after buttons */}
                <div className="d-block d-md-none mt-5 text-center">
                  <div className="download-phones position-relative d-inline-block">
                    <img
                      src={appScreenshot2}
                      alt="App preview 2"
                      className="phone-2"
                      style={{
                        transform: "none",
                        position: "relative",
                        left: "auto",
                        top: "auto",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
      <PostQuestion
        isOpen={showPostQuestion}
        onClose={() => setShowPostQuestion(false)}
      />
    </>
  );
};

export default HomePage;
