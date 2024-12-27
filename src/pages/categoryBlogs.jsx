import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";


const CategoryBlogs = ({news}) => {
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getCategoryBlogs() {
      setLoading(true);
      try {
        const response = await axios.get(news ? `${import.meta.env.VITE_SERVERAPI}/api/v1/activity/` : `${import.meta.env.VITE_SERVERAPI}/api/v1/blog/`, {
          params: {
            categoryId,
          },
        });
        if (response.data.success) {
          console.log("blog for category : ",response.data);
          setBlogs(news ? response.data.activities : response.data.blogs);
        } else {
          setError(response.data.message || "Failed to fetch data.");
        }
      } catch (error) {
        setError("An error occurred while fetching data.");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    getCategoryBlogs();
  }, [categoryId]);

  if (loading) return <div><Loader/></div>;
  if (error) return <div>{error}</div>;

  return (
    <>
  <div className="container mt-4">
      <h3 className="py-4 text-primary">Blogs For Category :</h3>
      <div className="row">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Link to={news ? `/newsactivity/${blog._id}` : `/blog/${blog._id}`}
              key={blog._id}
              className="col-md-4 mb-4"
              // onClick={() => navigate()}
            >
              <div className="card h-100 shadow-sm rounded-0 ">
                <img
                  src={`${import.meta.env.VITE_SERVERAPI}/${blog.image.replace(
                    /\\/g,
                    "/"
                  )}`}
                  alt={blog.title}
                  className="card-img-top "
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">{blog.title}</h5>
                  <p
                    className="card-text"
                    dangerouslySetInnerHTML={{ __html: blog.description.slice(0,150)+"..." }}
                  ></p>
                  
                  <div className=" text-muted">
                    <small>
                      Published on:{" "}
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </small>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>No blogs found for this category.</div>
        )}
      </div>
    </div>
    </>
  
  );
};

export default CategoryBlogs;
