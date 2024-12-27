import React, { useState, useEffect } from "react";
import "../css/StackImg.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Loader from "./Loader";

const Photos = () => {
  const [galleries, setGalleries] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 8; // Number of items per page
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all galleries
    const fetchGalleries = async () => {
      try {
        const response = await axios.get(
        `${import.meta.env.VITE_SERVERAPI }/api/v1/getallgallery`
        );
        setGalleries(response.data.gallery);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGalleries();
  }, []);

  if (loading) return <p><Loader/></p>;
  if (error) return <p>Error: {error}</p>;

  // Slice the galleries array based on the current page
  const pageCount = Math.ceil(galleries.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentGalleries = galleries.slice(offset, offset + itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <>
      <div className="container my-3">
        <h3 className="w-100 border-bottom-title head-color text-center">
          <span className="addcolor">Galleries</span>
        </h3>
        <div className="row d-flex justify-content-around align-items-center">
          {currentGalleries.map((gallery, id) => (
            <div className="col-md-3 mb-4" key={id}>
              <p className="fs-5 fw-semibold text-primary border-bottom border-danger d-inline-block text-capitalize">
                {gallery.title}
              </p>
              <div className="card card-animated w-100 h-100">
                <div className="card-img-wrapper position-relative">
                  <img
                    src={`${import.meta.env.VITE_SERVERAPI}/${gallery.images[0].replace(
                      /\\/g,
                      "/"
                    )}`} // Adjust if necessary
                    className="card-img-top main-image"
                    alt={gallery.title}
                    loading="lazy"
                  />
                  <div className="hover-text position-absolute bottom-0 start-0 p-2 bg-dark text-white">
                    <p onClick={() => navigate(`/gallery/${gallery._id}`)}>
                      Click For More Photos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};

export default Photos;
