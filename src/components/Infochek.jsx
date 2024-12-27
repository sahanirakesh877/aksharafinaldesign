import React from "react";
import "../css/infocheck.css";

 import ifograpgh from "/round.jpeg";

const Infochek = () => {
  return (
    <>
      <div className="container mx-auto  pt-5">
        <div className="text-center mb-2">
          <h2 className="text-center border-bottom-title w-100 head-color">
            <span className="addcolor">Our Core</span> Values
          </h2>
          <p className=" textjustify">
            Aksharaa School provides a balanced education that emphasizes both
            strong values and academic achievement.Through collaboration with
            parents and stakeholders, we focus on building resilience,
            leadership skills, and emotional intelligence in every student,
            ensuring their holistic growth and development. We cultivate
            critical thinking and a positive attitude, guiding students to
            embrace new perspectives and take responsible action.{" "}
          </p>
        </div>
        <figure className="d-flex justify-content-center align-items-center border">
          <img
            src={ifograpgh}
            alt=""
            loading="lazy"
           className="img-fluid w-75 w-md-75 w-lg-100 "
          />
        </figure>
      </div>
    </>
  );
};

export default Infochek;
