import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import AnimatedText from "../components/AnimatedText";

const Support = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  // useEffect(() => {
  //   const currentLang = i18n.language;
  //   const direction = currentLang === "ar" ? "rtl" : "ltr";
  //   document.documentElement.setAttribute("dir", direction);
  //   document.documentElement.setAttribute("lang", currentLang);
  // }, [i18n.language]);

  return (
    <>
      <div className="privacy-bg from-top">
        <Header />
      </div>
      <Breadcrumbs />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <div
              className="info-page-main-card mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1 className="home-hero-title text-center"><AnimatedText text="Support" /></h1>
              <div className="home-hero-text text-center">
                <AnimatedText text="Our support team is available to assist you with any questions regarding your account, payments, technical issues, or platform usage. Whether you are a user, lawyer, or corporate client, we are committed to ensuring a smooth and secure experience on LegalPlatform." />
                <br /> <br />
                <AnimatedText text="If you require assistance, you can contact our team directly through the platform or via our official support channels. We aim to respond promptly and resolve inquiries efficiently." />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <div style={{ width: "100%", maxWidth: "500px" }}>
              <h5 className="fw-bold mb-4">
                Get instant help from our experienced support team
              </h5>
              <form>
                <div className="mb-3">
                  <label className="form-label text-muted">
                    What is your name?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    style={{ backgroundColor: "#f5f5f5", border: "none" }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-muted">
                    What is your contact number?
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder=""
                    style={{ backgroundColor: "#f5f5f5", border: "none" }}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label text-muted">
                    Tell us more about your issue?
                  </label>
                  <textarea
                    className="form-control"
                    rows="4"
                    style={{ backgroundColor: "#f5f5f5", border: "none" }}
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn fw-bold"
                    style={{
                      backgroundColor: "#000000",
                      color: "#ffffff",
                      borderRadius: "10px",
                      width: "120px",
                      marginBottom: "32px",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Support;
