import React from "react";
import "../css/infrastucture.css";
import infrastructureData from "../Data/InfraData";
import { Link } from "react-router-dom";

const Infrastructure = () => {
  return (
    <>
      <div className="infrabg">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h3 className="w-100 border-bottom-title head-color">
                <span className="addcolor">Our </span> Infrastructure
              </h3>
              <p className="textcenter">
                At Aksharaa School, we believe that a well-designed
                infrastructure is vital for nurturing young minds and supporting
                their educational journey. Our school, strategically situated in
                a serene and lush environment, combines modern facilities with a
                supportive atmosphere to create an optimal learning environment
                for our students. Each aspect of our infrastructure is
                thoughtfully crafted to enhance students' academic performance,
                physical health, and overall well-being, ensuring that they have
                access to the best resources for their development.
              </p>
              <p className="textcenter">
                Our infrastructure is not just about providing physical spaces;
                it's about creating an environment where students can explore,
                learn, and grow holistically. From advanced technological
                resources to nurturing care facilities, Aksharaa School stands
                out in its commitment to offering a well-rounded educational
                experience.
              </p>
            </div>
          </div>

          <div className="row my-3 d-flex align-items-stretch">
            {infrastructureData.map((item, index) => (
              <div key={index} className="col-lg-6 d-flex mb-3 ">
                <div className="card shadow-lg h-100 infra-card">
                  <Link to={`/infrastructure/${item.id}`}>
                    <div className="card-body d-flex justify-content-between align-items-center flex-row gap-3">
                      {/* Left Side: Icons and Title */}
                      <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                        <i className={`${item.iconClass} infra-icon mb-3`}></i>
                        <h4>{item.title}</h4>
                      </div>

                      {/* Right Side: Image */}
                      <div className="col-6">
                        <img
                          src={item.images[0]}
                          alt={item.title}
                          className="img-fluid rounded"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Infrastructure;
