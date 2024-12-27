import axios from "axios";
import React, { useRef, useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const [res, setRes] = useState(null);

  async function submitContactForm(e) {
    e.preventDefault();
    setRes(null);
    setLoading(true); // Set loading to true before making the request
    console.log(`${import.meta.env.VITE_SERVERAPI}/api/v1/contact`);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVERAPI}/api/v1/contact`,
        { name, email, phone, message }
      );
      setRes(response.data);
      if (response.data.success) {
        formRef.current.reset();
        // Optionally reset the state as well
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong with the contact form");
    } finally {
      setLoading(false); // Ensure loading is set to false after the request is complete
    }
  }

  return (
    <>
      <div className="demo">
        <div className="container py-5">
          <h2 className="border-bottom-title justify-content-center mb-5 head-color d-flex align-items-start">
            <span className="addcolor">Contact</span> Us
          </h2>
          <div className="row d-flex align-items-center justify-content-start">
            <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-md-center align-items-center shadow-sm bg-light py-2 mb-2">
              <i
                className="fa fa-envelope text-light rounded-circle p-2 contact-iconbg me-2"
                style={{ fontSize: "0.8em" }}
              ></i>
              <p className="text-secondary mb-0" style={{ fontSize: "0.82em" }}>
                info@aksharaaschool.edu.np
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-md-center align-items-center shadow-sm py-2 bg-light mb-2">
              <i
                className="fa fa-phone text-white rounded-circle p-2 contact-iconbg me-2"
                style={{ fontSize: "0.8em" }}
              ></i>
              <p className="text-secondary mb-0" style={{ fontSize: "0.82em" }}>
                +977-01-4993031/32/33
              </p>
            </div>
            <div className="col-lg-4 col-md-12 col-12 d-flex justify-content-md-center align-items-center shadow-sm py-2 bg-light mb-2">
              <i
                className="fa fa-location-arrow text-light rounded-circle p-2 contact-iconbg me-1"
                style={{ fontSize: "0.8em" }}
              ></i>
              <p className="text-secondary mb-0" style={{ fontSize: "0.82em" }}>
                Kandaghari, Kageshwori Manohara 9, KTM, Nepal
              </p>
            </div>
          </div>

          <div className="row d-flex align-items-start">
            <div className="col-lg-6 col-md-12 mb-2 contact-bg">
              <form onSubmit={submitContactForm} ref={formRef}>
                <div className="form-group pb-2">
                  <label htmlFor="name" className="pb-1 text-dark">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control pb-2 rounded-1 border-0 shadow-none"
                    id="name"
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className="form-group pb-2">
                  <label htmlFor="email" className="pb-1 text-dark">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control pb-2 rounded-1 border-0 shadow-none"
                    id="email"
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="form-group pb-2">
                  <label htmlFor="number" className="pb-1 text-dark">
                    Phone:
                  </label>
                  <input
                    type="number"
                    className="form-control pb-2 rounded-1 border-0 shadow-none"
                    id="number"
                    placeholder="Your Phone"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
                <div className="form-group pb-2">
                  <label htmlFor="message" className="pb-1 text-dark">
                    Message:
                  </label>
                  <textarea
                    className="form-control rounded-1 border-0 shadow-none"
                    id="message"
                    style={{ resize: "none" }}
                    rows="5"
                    placeholder="Your Message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  ></textarea>
                </div>
                <div className="messageHeight">
                  {res ? (
                    res.success ? (
                      <p className="text-success">{res.message}</p>
                    ) : (
                      <p className="text-danger">*** {res.message}</p>
                    )
                  ) : null}
                </div>

                <button
                  type="submit"
                  className={`button-21 w-100 my-3 ${loading ? "pointer" : ""}`}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>

            <div className="col-lg-6 col-md-12  d-flex flex-column">
              <div
                className="map-container  flex-grow-1"
                style={{ position: "relative", paddingBottom: "91%" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d56528.98843456104!2d85.29982577525458!3d27.684485455816603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39eb1a3058f08937%3A0x5e58e8a5ed6fa73b!2sM9X9%2B5C5%20Aksharaa%20School%2C%20Kageshwori%20Manohara%2044600!3m2!1d27.6973403!2d85.3670331!5e0!3m2!1sen!2snp!4v1715844547576!5m2!1sen!2snp"
                  frameBorder="0"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
