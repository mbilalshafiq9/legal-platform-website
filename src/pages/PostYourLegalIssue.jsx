import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import postQuestionBgImg from "../assets/images/postQuestionBgImg.png";
import { Dropdown } from 'primereact/dropdown';

const PostYourLegalIssue = () => {
  const [showTop, setShowTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [summary, setSummary] = useState("");
  const [jurisdiction, setJurisdiction] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [paymentPrice, setPaymentPrice] = useState("3.99");
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [authToken, setAuthToken] = useState(null);
  const [payLoading, setPayLoading] = useState(false);
  const [jurisdictionsList, setJurisdictionsList] = useState([]);

  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/getDropdownData`;
        const res = await axios.get(url);
        if (res?.data?.status) {
          setJurisdictionsList(res.data.data.jurisdictions || []);
        }
      } catch (e) {
        console.error("Error fetching dropdown data:", e);
      }
    };
    fetchDropdownData();
  }, []);

  useEffect(() => {
    const fetchAppVersion = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/getAppVersion`;
        const res = await axios.get(url);
        if (res?.data?.status) {
          const price = res?.data?.data?.question_payment;
          if (price) setPaymentPrice(price);
        }
      } catch (e) {
        console.error("Error fetching app version:", e);
      }
    };
    fetchAppVersion();
  }, []);

  const handleSendOtp = async () => {
    if (!fullName || !email) {
      toast.error("Please provide both name and email.");
      return;
    }

    setOtpLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", fullName);
      formData.append("email", email);

      const url = `${process.env.REACT_APP_API_URL}/resendOTP`;
      const res = await axios.post(url, formData);

      if (res?.data?.status) {
        toast.success(res?.data?.message || "OTP sent successfully!");
      } else {
        toast.error(res?.data?.message || "Failed to send OTP.");
      }
    } catch (e) {
      toast.error("An error occurred while sending OTP.");
    } finally {
      setOtpLoading(false);
    }
  };

  useEffect(() => {
    const verifyOtp = async () => {
      if (otp.length === 4) {
        if (!email) {
          toast.error("Email is required to verify OTP.");
          return;
        }
        try {
          const formData = new FormData();
          formData.append("email", email);
          formData.append("otp", otp);

          const url = `${process.env.REACT_APP_API_URL}/verifyOTP`;
          const res = await axios.post(url, formData);

          if (res?.data?.status) {
            toast.success(res?.data?.message || "OTP verified successfully!");
            setOtpVerified(true);
            setAuthToken(res.data.data.auth_token);
          } else {
            toast.error(res?.data?.message || "Invalid OTP.");
            setOtpVerified(false);
            setAuthToken(null);
          }
        } catch (e) {
          toast.error("An error occurred during OTP verification.");
          setOtpVerified(false);
          setAuthToken(null);
        }
      }
    };
    verifyOtp();
  }, [otp, email]);

  const handleProceedToPayment = async () => {
    if (!summary || !jurisdiction || !fullName || !email) {
      toast.error("Please fill all required fields.");
      return;
    }
    if (!otpVerified) {
      toast.error("Please verify your OTP first.");
      return;
    }

    setPayLoading(true);
    try {
      // 1. First add the question
      const questionData = new FormData();
      questionData.append("question", summary);
      questionData.append("jurisdiction_id", jurisdiction);
      if (file) {
        questionData.append("attachments[]", file);
      }
      questionData.append("doc_formats", "docs");
      questionData.append("max_documents", "2");

      const addQuestionUrl = `${process.env.REACT_APP_API_URL}/addQuestion`;
      const addRes = await axios.post(addQuestionUrl, questionData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (!addRes?.data?.status) {
        toast.error(addRes?.data?.message || "Failed to post question.");
        setPayLoading(false);
        return;
      }

      // 2. Then proceed to payment intent creation
      const paymentData = new FormData();
      paymentData.append("amount", paymentPrice);

      const stripeUrl = `${process.env.REACT_APP_API_URL}/stripePayment`;
      const stripeRes = await axios.post(stripeUrl, paymentData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (stripeRes?.data?.status) {
        toast.success(addRes?.data?.message || "Question posted successfully!");
        toast.success(stripeRes?.data?.message || "Payment intent created successfully!");
        // Reset form or redirect
      } else {
        toast.error(stripeRes?.data?.message || "Failed to create payment intent.");
      }
    } catch (e) {
      toast.error("An error occurred during processing.");
    } finally {
      setPayLoading(false);
    }
  };

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

  const handleFileChange = (e) => {
    const f = e.target.files && e.target.files[0];
    if (f) {
      setFile(f);
      setFileName(f.name);
    }
  };

  return (
    <div className="postq-page font-inter">
      <Seo
        title="Post Your Legal Issue — Legal Platform"
        description="Fill the form to post your legal issue and connect with verified lawyers."
        canonicalPath="/post-your-legal-issue"
        image="/favicon.png"
      />
      <Header />
      <div className="postq-page-hero">
        <div className="container h-100 d-flex align-items-center">
          <div className="postq-hero-copy">
            <h1 className="postq-hero-title">Post Your Legal Issue Today</h1>
            <p className="postq-hero-sub">
              Fill form and put your question with professional lawyers.
            </p>
          </div>
        </div>
        <img src={postQuestionBgImg} alt="" className="postq-hero-img" />
      </div>
      <Breadcrumbs />
      <main className="container my-4">
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="postq-form-card" data-aos="fade-up" data-aos-delay="100">
              <div className="postq-form-title">Post Your Legal Question</div>
              <div className="mb-3">
                <div className="postq-textarea-wrapper">
                  <textarea
                    className="form-control postq-textarea"
                    placeholder="Explain Your Question"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className="postq-select-wrap">
                  <Dropdown
                    value={jurisdiction}
                    onChange={(e) => setJurisdiction(e.value)}
                    options={jurisdictionsList}
                    optionLabel="name"
                    optionValue="id"
                    placeholder="Jurisdiction"
                    className="w-100 postq-select"
                    style={{ border: 'none', height: '52px' }}
                    filter
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="postq-attach d-flex align-items-center gap-2">
                  <i className="bi bi-paperclip" />
                  <span>{fileName || "Attach Document"}</span>
                  <input type="file" className="d-none" onChange={handleFileChange} />
                </label>
              </div>
              <div className="mt-4">
                <div className="postq-how-simple">
                  <div className="postq-how-title">How it works</div>
                  <ul className="postq-how-list">
                    <li><span className="postq-bullet" /> <span>Ask your question and see the answer in Questions & Answers.</span></li>
                    <li><span className="postq-bullet" /> <span>You will be notified when a lawyer answers.</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <div className="postq-form-title mb-3">Personal Information</div>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control postq-input"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control postq-input"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-3">
                <div className="postq-otp-block">
                  <button 
                    type="button" 
                    className="postq-otp-btn w-100" 
                    onClick={handleSendOtp} 
                    disabled={otpLoading}
                  >
                    {otpLoading ? "Sending..." : "Send OTP"}
                  </button>
                  <input
                    type="text"
                    className="postq-otp-input"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d{0,4}$/.test(value)) {
                        setOtp(value);
                      }
                    }}
                    maxLength="4"
                  />
                </div>
              </div>
              <div className="mt-3 d-flex align-items-center gap-2 postq-consent">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="agreeTerms" />
                </div>
                <label htmlFor="agreeTerms" className="form-check-label postq-terms">
                  By clicking the button, you agree to Legal Platform
                  <a href="/terms" className="text-decoration-none">Terms of Services</a> &
                  <a href="/terms" className="text-decoration-none">Payment Terms</a>
                </label>
              </div>
              <div className="mt-3">
                <button 
                  type="button" 
                  className="postq-pay-btn" 
                  onClick={handleProceedToPayment} 
                  disabled={payLoading || !otpVerified}
                >
                  <span className="postq-pay-label">
                    {payLoading ? "Processing..." : "Proceed to Payment"}
                  </span>
                  <span className="postq-pay-price">{paymentPrice} US</span>
                </button>
              </div>
            </div>
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
