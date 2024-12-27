import React from "react";
import { useParams } from "react-router-dom";
import longtermProjectsdata from "./../Data/ProjectData";


const LongTermProject = () => {
  const { id } = useParams();
  const project = longtermProjectsdata.find((item) => item.id === parseInt(id)); 
  console.log("projects fetched", project)

  if (!project) {
    return <p>Project not found!</p>; // Handle invalid ID
  }

  return (
    <>
     <div className="container py-4">
  {/* Title Section */}
  <div className="row ">
    <div className="col-12 text-center">
      <h3 className=" fw-semibold">{project.title}</h3>
      <hr className="w-25 mx-auto border-dark mt-1" />
    </div>
  </div>

  {/* Content Section */}
  <div className="row mb-5">
    <div className="col-md-10 offset-md-1">
      <p className=" text-muted text-justify">{project.description}</p>
    </div>
  </div>
 {/* Video and Image Section */}
 <div className="row d-flex align-items-center mb-5">
    {/* Video Section */}
    {/* <div className="col-md-6">
      <h4  className="mb-4 text-center">Project Video</h4>
      <div className="ratio ratio-16x9 rounded shadow">
        <iframe
          src={project.video}
          title={project.title}
          allowFullScreen
          className="rounded"
        ></iframe>
      </div>
    </div> */}

    {/* Image Gallery Section */}
    <div className="col-md-12">
      <h4 className="mb-4 text-center">Project Demonstration</h4>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {project.image.map((image, index) => (
          <div key={index} className="rounded shadow overflow-hidden">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="img-fluid"
              style={{ height: "150px", width: "auto", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default LongTermProject;
