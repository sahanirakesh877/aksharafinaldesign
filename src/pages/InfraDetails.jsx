import React from "react";
import "../css/infrastucture.css";
import { useParams, Link } from "react-router-dom";
import infrastructureData from "../Data/InfraData";

const InfraDetails = () => {
  const { id } = useParams();
  const infraItem = infrastructureData.find((item) => item.id === parseInt(id));

  if (!infraItem) {
    return (
      <div className="container my-3 text-center">
        <h2>Infrastructure Not Found</h2>
        <p>Sorry, we couldn't find the infrastructure you're looking for.</p>
        <Link to="/infrastructure" className="btn btn-primary">
          Back to Infrastructure
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        {/* Title and Description Section */}
        <div className="col-md-12 text-center">
          <h1 className="infra-details-title">{infraItem.title}</h1>
          <p className=" textcenter">{infraItem.description}</p>
        </div>
      </div>  

      {/* Image Gallery Section */}
      <div className="row my-4">
        {infraItem.images.map((image, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <img
              src={image}
              alt={`${infraItem.title} ${index + 1}`}
              className="img-fluid rounded infra-img"
            />
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="text-center">
        <Link to="/infrastructure">
          <button className="px-4 py-1 btn-outline-none bg-danger text-white border-0">
            Back to Infrastructure
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InfraDetails;
