import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import corpBg from "../assets/images/corporate/corporate-main-bg-img.jpg";
import imgPriority from "../assets/images/corporate/priority-img.png";
import imgEarly from "../assets/images/corporate/early-img.png";
import imgExclusive from "../assets/images/corporate/exclusive-img.png";
import imgCommitment from "../assets/images/corporate/our-comitment-img.png";
import imgCorporate from "../assets/images/corporate/legalPlatform-corporate-img.png";
import axios from "axios";
import { toast } from "react-toastify";

const Corporate = () => {
  const [showTop, setShowTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [companyName, setCompanyName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [tradeLicense, setTradeLicense] = useState(null);
  const [companyLogo, setCompanyLogo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);
  const logoInputRef = useRef(null);

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
    window.scrollTo({ top: 0, behavior: "smooth" })
  };

  return (
    <div className="font-inter">
      <Seo
        title="Corporate — Legal Platform"
        description="Empower your business with seamless access to legal services at any time."
        canonicalPath="/corporate"
        image="/favicon.png"
      />
      <Header />
      <div className="corp-hero">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-end">
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start text-start" data-aos="fade-left" data-aos-delay="200">
              <div className="corp-hero-textwrap">
                <h1 className="corp-hero-title">Get legal help <br /> in minutes!</h1>
                <p className="corp-hero-sub">Empower your businesses with <br /> seamless access to legal services <br /> at anytime.</p>
              </div>
            </div>
          </div>
        </div>
        <img src={corpBg} alt="" className="corp-hero-bg" />

        {/* Form */}
      <div className="col-lg-5 d-flex justify-content-center corp-form-pos">
              <div className="corp-form-wrap" data-aos="fade-right" data-aos-delay="150">
                <div className="corp-form-card">
                  <label className="corp-label">Company Name <span className="corp-asterisk">*</span></label>
                  <input type="text" className={`form-control corp-input mb-3 ${errors.companyName ? 'is-invalid' : ''}`} placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                  {errors.companyName && <div className="invalid-feedback">{errors.companyName}</div>}

                  <div className="row g-2">
                    <div className="col-6">
                      <label className="corp-label">First Name <span className="corp-asterisk">*</span></label>
                      <input type="text" className={`form-control corp-input ${errors.firstName ? 'is-invalid' : ''}`} placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                      {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                    </div>
                    <div className="col-6">
                      <label className="corp-label">Last Name <span className="corp-asterisk">*</span></label>
                      <input type="text" className={`form-control corp-input ${errors.lastName ? 'is-invalid' : ''}`} placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                      {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                    </div>
                  </div>

                  <div className="row g-2 mt-3">
                    <div className="col-6">
                      <label className="corp-label">Company Email <span className="corp-asterisk">*</span></label>
                      <input type="email" className={`form-control corp-input ${errors.email ? 'is-invalid' : ''}`} placeholder="Company Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    <div className="col-6">
                      <label className="corp-label">Phone Number <span className="corp-asterisk">*</span></label>
                      <div className="input-group corp-phone">
                        <span className="input-group-text corp-cc"><span className="corp-flag" aria-hidden="true"></span> +971 ▾</span>
                        <input type="tel" className={`form-control corp-input corp-phone-input ${errors.phone ? 'is-invalid' : ''}`} placeholder="50 123 4567" value={phone} onChange={(e) => setPhone(e.target.value)} />
                      </div>
                      {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>
                  </div>

                  <div className="row g-2 mt-3">
                    <div className="col-6">
                      <label className="corp-label">Website</label>
                      <input type="url" className="form-control corp-input" placeholder="https://example.com" value={website} onChange={(e) => setWebsite(e.target.value)} />
                    </div>
                    <div className="col-6">
                      <label className="corp-label">Company Trade License <span className="corp-asterisk">*</span></label>
                      <input type="file" className={`form-control corp-input ${errors.tradeLicense ? 'is-invalid' : ''}`} onChange={(e) => setTradeLicense(e.target.files?.[0] || null)} ref={fileInputRef} />
                      {errors.tradeLicense && <div className="invalid-feedback">{errors.tradeLicense}</div>}
                    </div>
                  </div>

                  <div className="mt-3">
                    <label className="corp-label">Company Logo</label>
                    <input type="file" className="form-control corp-input" onChange={(e) => setCompanyLogo(e.target.files?.[0] || null)} ref={logoInputRef} />
                  </div>

                  <div className="mt-3">
                    <button
                      type="button"
                      className="btn w-100 corp-btn"
                      disabled={loading}
                      onClick={async () => {
                        const newErrors = {};
                        if (!companyName.trim()) newErrors.companyName = "Company name is required.";
                        if (!firstName.trim()) newErrors.firstName = "First name is required.";
                        if (!lastName.trim()) newErrors.lastName = "Last name is required.";
                        if (!email.trim()) {
                          newErrors.email = "Email is required.";
                        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                          newErrors.email = "Please enter a valid email.";
                        }
                        if (!phone.trim()) {
                          newErrors.phone = "Phone number is required.";
                        } else if (phone.replace(/\D/g, "").length < 7) {
                          newErrors.phone = "Please enter a valid phone number.";
                        }
                        if (!tradeLicense) newErrors.tradeLicense = "Trade license is required.";

                        if (Object.keys(newErrors).length > 0) {
                          setErrors(newErrors);
                          toast.error("Please fill all required fields correctly.");
                          return;
                        }

                        setErrors({});
                        setLoading(true);
                        try {
                          const form = new FormData();
                          form.append("company_name", companyName);
                          form.append("first_name", firstName);
                          form.append("last_name", lastName);
                          form.append("email", email);
                          form.append("country_code", "AE");
                          form.append("phone_number", phone.replace(/\D/g, ""));
                          if (website) form.append("website", website);
                          form.append("trade_license", tradeLicense);
                          if (companyLogo) form.append("company_logo", companyLogo);
                          const url = `${process.env.REACT_APP_API_URL}/business-register`;
                          const res = await axios.post(url, form, {
                            headers: { "Content-Type": "multipart/form-data" },
                          });
                          if (res?.data?.status) {
                            toast.success(res?.data?.message || "Registration submitted.");
                            setCompanyName("");
                            setFirstName("");
                            setLastName("");
                            setEmail("");
                            setPhone("");
                            setWebsite("");
                            setTradeLicense(null);
                            setCompanyLogo(null);
                            if (fileInputRef.current) fileInputRef.current.value = "";
                            if (logoInputRef.current) logoInputRef.current.value = "";
                          } else {
                            toast.error(res?.data?.message || "Submission failed.");
                          }
                        } catch (e) {
                          toast.error("Unable to submit. Please try again.");
                        } finally {
                          setLoading(false);
                        }
                      }}
                    >
                      {loading ? "Registering..." : "Register"}
                    </button>
                  </div>

                  <div className="corp-form-note mt-2 small text-muted">
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                  </div>
                </div>
              </div>
            </div>
      </div>
      <Breadcrumbs />
      <main className="container my-5">
        <div className="text-center mb-4">
          <h2 className="corp-section-title">Why Pre-Register?</h2>
        </div>
        <div className="row g-4 mb-5">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="corp-feature-card hover-lift">
              <div className="corp-feature-header">
                <img src={imgPriority} alt="" className="corp-feature-icon corp-icon-priority" />
                <h5 className="corp-feature-title">Priority Access</h5>
              </div>
              <p className="corp-feature-text">Be first in line to receive an invite once the LegalPlatform Business Portal goes live and secure your spot ahead of others.</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="150">
            <div className="corp-feature-card hover-lift">
              <div className="corp-feature-header">
                <img src={imgEarly} alt="" className="corp-feature-icon corp-icon-early bw" />
                <h5 className="corp-feature-title">Early Advantage</h5>
              </div>
              <p className="corp-feature-text">Get a head start in streamlining your company’s legal needs with access to tools designed to save time and reduce costs.</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="corp-feature-card hover-lift">
              <div className="corp-feature-header">
                <img src={imgExclusive} alt="" className="corp-feature-icon corp-icon-exclusive" />
                <h5 className="corp-feature-title">Exclusive Updates</h5>
              </div>
              <p className="corp-feature-text">Stay informed on launch progress & be the first to know about new features built specifically for corporates.</p>
            </div>
          </div>
        </div>
        <div className="corp-info-section p-4 rounded-4">
          <div className="corp-info-card" data-aos="fade-up" data-aos-delay="200">
            <div className="row g-0 align-items-center">
              <div className="col-md-auto">
                <img src={imgCommitment} alt="" className="corp-info-img corp-info-img-left" />
              </div>
              <div className="col-md">
                <div className="corp-info-content">
                  <h4 className="corp-info-title">Our Commitment</h4>
                  <p className="corp-info-text">We’re shaping LegalPlatform Corporate to be more than just a service — it’s a trusted partner for your company. By pre-registering, you’re joining a select group of businesses preparing to access a platform where your team can consult lawyers anytime for fast, reliable advice. Invite team members & manage all company legal matters in one place. The best lawyers for the needs of your business across domains and jurisdictions. This is your opportunity to get early access to a smarter way of handling legal matters — faster, more affordable, & tailored to the needs of modern companies.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="corp-info-card" data-aos="fade-up" data-aos-delay="250">
            <div className="row g-0 align-items-center">
              <div className="col-md">
                <div className="corp-info-content">
                  <h4 className="corp-info-title">LegalPlatform Corporate</h4>
                  <p className="corp-info-text">We’re shaping LegalPlatform Corporate to be more than just a service — it’s a trusted partner for your company. By pre-registering, you’re joining a select group of businesses preparing to access a platform where your team can consult lawyers anytime for fast, reliable advice. Invite team members & manage all company legal matters in one place. The best lawyers for the needs of your business across domains and jurisdictions. This is your opportunity to get early access to a smarter way of handling legal matters — faster, more affordable, & tailored to the needs of modern companies.</p>
                </div>
              </div>
              <div className="col-md-auto">
                <img src={imgCorporate} alt="" className="corp-info-img corp-info-img-right" />
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

export default Corporate;
