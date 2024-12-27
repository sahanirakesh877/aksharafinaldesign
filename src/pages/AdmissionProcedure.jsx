import React from "react";
import Enquiryform from "../components/Enquiryform";

import BreadImg from "../../src/assets/middle/GP4A8126.jpg";
import roadmap from "/roadmap.png";

const AdmissionProcedure = () => {
  return (
    <>
      {/* Admission Banner Section */}
      <section className="kinderbanner my-md-0">
        <img src={BreadImg} alt="Kindergarten" />
        <h3 className="xyz">Admission Procedure</h3>
        <nav className="breadcrumb-container">
          <ul className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Admission Procedure</li>
          </ul>
        </nav>
      </section>

      {/* Admission Process Section */}
      <section className="bg-light my-md-0">
        <div className="container py-4">
          <div className="row">
            {/* Admission Process Description */}
            <div className="col-md-4">
              <h3 className="kinder-head mb-md-1">Admission Procedure:</h3>
              <p className="kinder-text">
                The Admission Procedure is as follows:
              </p>
              <ul className="list-unstyled">
                <li className="d-flex admission-li">
                  <i className="fas fa-check-square me-2 text-danger"></i>
                  The parents of prospective students are given a tour of the
                  school.
                </li>
                <li className="d-flex admission-li">
                  <i className="fas fa-check-square me-2 text-danger"></i>
                  Parents file an application for admission in person or via the
                  school website.
                </li>
                <li className="d-flex admission-li">
                  <i className="fas fa-check-square me-2 text-danger"></i>
                  After evaluating the application, parents are notified of
                  entrance tests and interview dates.
                </li>
                <li className="d-flex admission-li">
                  <i className="fas fa-check-square me-2 text-danger"></i>
                  While the Admission Team interviews parents, students appear
                  in the written and oral test.
                </li>
                <li className="d-flex admission-li">
                  <i className="fas fa-check-square me-2 text-danger"></i>
                  Acceptance of a child is based on academic aptitude,
                  socio-emotional development, and parents' willingness to
                  collaborate with the school.
                </li>
                <li className="d-flex admission-li">
                  <i className="fas fa-check-square me-2 text-danger"></i>
                  Within 3 days of the written test and interview, parents are
                  notified by phone for confirmation.
                </li>
                <li className="d-flex admission-li">
                  <i className="fas fa-check-square me-2 text-danger"></i>
                  Within 7 days of confirmation, parents must register their
                  child.
                </li>
              </ul>
            </div>

            {/* Admission Enquiry Form */}
            <div className="col-md-8">
              <h3 className="kinder-head">
                For Admission Enquiry
                <span className="text-danger"> fill the form below:</span>
              </h3>
              <Enquiryform />
            </div>
          </div>
        </div>

        {/* Roadmap Image */}
        <div className="bg-light">
          <figure className="d-flex justify-content-center align-items-center">
            <img src={roadmap} alt="Roadmap" className="img-fluid w-75" />
          </figure>
        </div>
      </section>
    </>
  );
};

export default AdmissionProcedure;
