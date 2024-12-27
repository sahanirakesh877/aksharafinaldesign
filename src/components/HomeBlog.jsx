import React, { useState, useEffect } from "react";
import "../css/Honmeblog.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import SafeHTML from "../components/SafeHTML";

const HomeBlog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVERAPI}/api/v1/blog`
        );

        if (response.data.success) {
          const blogsToShow = response.data.blogs.slice(-4);
          setData(blogsToShow.reverse());
        } else {
          setError(response.data.message || "Failed to fetch data.");
        }
      } catch (error) {
        setError("An error occurred while fetching data.");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="homeblog">
      <div className="container mx-auto">
        <h2 className="border-bottom-title justify-content-center my-3 head-color d-flex align-items-start">
          <span className="addcolor">Latest&nbsp;</span>Blog
        </h2>
       

        <div className="row py-2">
          {loading && (
            <p>
              <Loader />
            </p>
          )}
          {error && <p className="text-danger">Error: {error}</p>}
          {!loading &&
            !error &&
            data.length > 0 &&
            data.map((item, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
                <div className="card h-100">
                  <div className="card-header p-0">
                    <img
                      src={`${
                        import.meta.env.VITE_SERVERAPI
                      }/${item.image.replace(/\\/g, "/")}`}
                      alt={item.title}
                      loading="lazy"
                      className="img-fluid w-100  "
                    />
                  </div>
                  <div className="card-body  position-relative">
                    <h6>{item.title}</h6>
                    <p>
  <SafeHTML htmlString={`${item.description.slice(0, 60)}...`} />
</p>

                    <button
                      className="btn px-3 text-white rounded-pill blog-btn shadow-sm  position-absolute end-0 bottom-0  mx-3"
                      onClick={() => navigate(`/blog/${item._id}`)}
                      
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {!loading && !error && data.length === 0 && (
            <p className="text-center">No blogs available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
