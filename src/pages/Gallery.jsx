import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Download from "yet-another-react-lightbox/plugins/download";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Share from "yet-another-react-lightbox/plugins/share";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { Thumbnails } from "yet-another-react-lightbox/plugins";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/StackImg.css";
import ReactPaginate from "react-paginate";
import Loader from "../components/Loader";

const Gallery = () => {
  const { id } = useParams(); // Get the gallery ID from URL
  const [gallery, setGallery] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    // Fetch gallery data by ID
    const fetchGallery = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVERAPI}/api/v1/getallgallery/${id}`
        );
        console.log("dynamic id data", response);
        setGallery(response.data.gallery);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGallery();
  }, [id]);

  if (loading) return <p><Loader/></p>;
  if (error) return <p>Error: {error}</p>;
  if (!gallery) return <p>No gallery found!</p>;

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  // Slice the gallery images array based on the current page
  const pageCount = Math.ceil(gallery.images.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentImages = gallery.images.slice(offset, offset + itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <>
      <div className="container py-5">
        <h2 className="text-center mb-4 border-bottom-title w-100">
          {gallery.title}
        </h2>
        <div className="row">
          {currentImages.map((image, index) => (
            <div
              key={index}
              className={`col-lg-3 col-md-4 mb-4 lightphoto`} // Adjusted column classes
              onClick={() => handleOpen(index + offset)} // Adjust index for lightbox
            >
              <img
                src={`${import.meta.env.VITE_SERVERAPI}/${image.replace(/\\/g, "/")}`}
                alt={`Gallery image ${index + 1}`}
                className="img-fluid rounded shadow"
              />
            </div>
          ))}
        </div>
        <Lightbox
          open={open}
          slides={gallery.images.map((img) => ({
            src: `${import.meta.env.VITE_SERVERAPI}/${img.replace(/\\/g, "/")}`,
          }))}
          currentIndex={currentIndex}
          close={() => setOpen(false)}
          plugins={[Zoom, Download, Share, Counter, Thumbnails]}
          counter={{ container: { style: { top: "unset", bottom: 0 } } }}
          zoom={{
            maxZoom: 5,
            zoomInLabel: "Zoom In",
            zoomOutLabel: "Zoom Out",
          }}
        />
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

export default Gallery;
