import React, { useState } from "react";
import { Link } from "react-router-dom";
import footerLogo from "../assets/Aksharaa School Logo_white.png";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState({ message: "", success: null });


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFeedback({
        message: "Please enter a valid email address.",
        success: false,
      });
      return;
    }

    try {
      // Send email data to the backend
      const response = await axios.post(
        `${import.meta.env.VITE_SERVERAPI}/api/v1/subscribe`,
        { email }
      );

      if (response.data.success) {
        setFeedback({ message: "Thank you for subscribing!", success: true });
        setEmail(""); // Clear the input field
      } else {
        setFeedback({
          message: response.data.message || "Subscription failed.",
          success: false,
        });
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setFeedback({
        message: "Subscription failed. Please try again later.",
        success: false,
      });
    }
  };
  return (
    <>
      <footer className="footer">
        <section>
          <div className="container">
            <div className="row d-flex align-items-start">
              <div className="col-12 col-lg-4 footer-left py-4 py-md-5 py-xxl-8">
                <div className="row h-100 align-items-end justify-content-center">
                  <div className="col-12 col-md-12 col-xl-12">
                    <div
                      className="footer-logo-wrapper 
                    mb-4"
                    >
                      <Link to="/">
                        <img
                          src={footerLogo}
                          loading="lazy"
                          alt="BootstrapBrain Logo"
                          className="img-fluid "
                        />
                      </Link>
                    </div>

                    <div className="address-wrapper  ">
                      <address className="mb-2 footer-tag d-flex  align-items-center">
                        <i
                          class="fa fa-location-arrow fs-5 me-2 p-2 border rounded-circle text-success bg-white "
                          aria-hidden="true"
                        ></i>{" "}
                        Kageshwori Manohara 9, Kathmandu, Nepal
                      </address>
                      <p className="mb-2 ">
                        <Link
                          className="footer-tag text-decoration-none"
                          to="tel:+15057922430"
                        >
                          <i
                            class="fa fa-phone text-success fs-5 border p-2 me-2 bg-white  rounded-circle"
                            aria-hidden="true"
                          ></i>
                          +977-01-4993031/32/33
                        </Link>
                      </p>
                      <p className="mt-1 ">
                        <Link
                          className="footer-tag text-decoration-none"
                          to="mailto:demo@yourdomain.com"
                        >
                          <i
                            class="fa fa-envelope fs-5 text-success bg-white  border p-2 rounded-circle"
                            aria-hidden="true"
                          ></i>{" "}
                          <span className="ms-1 ">
                            info@aksharaaschool.edu.np
                          </span>
                        </Link>
                      </p>
                    </div>
                    <div className="social-media-wrapper mt-5">
                      <ul className="nav">
                        <li className="nav-item me-3">
                          <Link
                            className="nav-link link-primary p-2 bg-light rounded"
                            to="https://www.facebook.com/AksharaaSchool/"
                            target="blank"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              fill="currentColor"
                              className="bi bi-facebook text-success"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          </Link>
                        </li>
                        <li className="nav-item me-3">
                          <Link
                            className="nav-link link-primary p-2 bg-light rounded"
                            to="https://www.youtube.com/@aksharaaschool6713"
                            target="blank"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              fill="currentColor"
                              className="bi bi-youtube text-success"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                            </svg>
                          </Link>
                        </li>
                        <li className="nav-item me-3">
                          <Link
                            className="nav-link link-primary p-2 bg-light rounded"
                            to="#!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              fill="currentColor"
                              className="bi bi-twitter text-success"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link link-primary p-2 bg-light rounded"
                            to="https://www.instagram.com/aksharaa_school_/"
                            target="blank"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              fill="currentColor"
                              className="bi bi-instagram text-success"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                            </svg>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-8  py-4 py-md-5 py-xxl-8">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-12 col-xxl-12">
                    <div className="row gy-4 gy-sm-0 ">
                      <div className="col-md-4 col-sm-3">
                        <div className="widget">
                          <h4 className="widget-title mb-4 animated-border-header">
                            Useful Links
                          </h4>
                          <ul className="list-unstyled">
                            <li className="mb-3">
                              <Link
                                to="/about"
                                className="footer-tag  text-decoration-none animated-hover"
                              >
                                <i
                                  class="fa fa-angle-right me-1"
                                  aria-hidden="true"
                                ></i>{" "}
                                About Us
                              </Link>
                            </li>
                            <li className="mb-3">
                              <Link
                                to="/about/lrpa"
                                className="footer-tag text-decoration-none animated-hover"
                              >
                                <i
                                  class="fa fa-angle-right me-1"
                                  aria-hidden="true"
                                ></i>{" "}
                                Philosophy
                              </Link>
                            </li>
                            <li className="mb-3">
                              <Link
                                to="/admission/procedure"
                                className="footer-tag text-decoration-none animated-hover"
                              >
                                <i
                                  class="fa fa-angle-right me-1"
                                  aria-hidden="true"
                                ></i>{" "}
                                Admission
                              </Link>
                            </li>

                            <li className="mb-3">
                              <Link
                                to="/apply-online"
                                className="footer-tag text-decoration-none animated-hover"
                              >
                                <i
                                  class="fa fa-angle-right me-1"
                                  aria-hidden="true"
                                ></i>{" "}
                                Apply Online
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-3  ">
                        {/* <div className="widget ">
                          <h4 className="widget-title mb-4 animated-border-header">
                            Our Newsletter
                          </h4>
                          <p className="mb-4 footer-tag">
                            Never miss out on our Akshara school's exclusive
                            offers! Subscribe to our newsletter today.
                          </p>
                          <form action="#!">
                            <div className="row gy-2">
                              <div className="col-12">
                                <div className="input-group">
                                  <span
                                    className="input-group-text text-light"
                                    id="email-newsletter-addon"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      fill="currentColor"
                                      className="bi bi-envelope text-success"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                    </svg>
                                  </span>
                                  <input
                                    type="email"
                                    className="form-control "
                                    id="email-newsletter"
                                    placeholder="Email Address"
                                    aria-label="email-newsletter"
                                    aria-describedby="email-newsletter-addon"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="mb-sm-4">
                                  <button
                                    class="bg-success border-0  w-100 rounded-1 py-2 text-center text-white"
                                    role="button"
                                  >
                                    {" "}
                                    Subscribe
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div> */}
                        <div className="widget">
                          <h4 className="widget-title mb-4 animated-border-header">
                            Our Newsletter
                          </h4>
                          <p className="mb-4 footer-tag">
                            Never miss out on Aksharaa school's exclusive offers!
                            Subscribe to our newsletter today.
                          </p>
                          <form onSubmit={handleSubmit}>
                            <div className="row gy-2">
                              <div className="col-12">
                                <div className="input-group">
                                  <span
                                    className="input-group-text text-light"
                                    id="email-newsletter-addon"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      fill="currentColor"
                                      className="bi bi-envelope text-success"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                    </svg>
                                  </span>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="email-newsletter"
                                    placeholder="Email Address"
                                    aria-label="email-newsletter"
                                    aria-describedby="email-newsletter-addon"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="mb-sm-4">
                                  <button
                                    type="submit"
                                    className="bg-success border-0 w-100 rounded-1 py-2 text-center text-white"
                                  >
                                    Subscribe
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                          {feedback.message && (
                            <p
                              className={`mt-3 ${
                                feedback.success
                                  ? "text-success"
                                  : "text-danger"
                              }`}
                            >
                              {feedback.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-3 ">
                      <h5 className="text-center  text-white">
                          Sister Organization
                        </h5>
                        <div className="d-flex flex-column align-items-md-start align-items-center  text-center bg-white mb-2  rounded-1">
                        
                          <img 
                            src="/sisremove.png"
                            alt="sister organization..."
                            className="img-fluid "
                            loading="lazy"
                            // style={{ width: '200px', height: 'auto' }} 
                          />

                          <h6 className="w-100  head-color text-center">
                            <span className="addcolor">
                              {" "}
                              Jawlakhel, Lalitpur, Nepal{" "}
                            </span>{" "}
                            <br />
                            01-5426371
                          </h6>
                        </div>
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
