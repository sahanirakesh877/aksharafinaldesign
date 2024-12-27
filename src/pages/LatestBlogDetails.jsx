import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SafeHTML from "../components/SafeHTML";

const LatestBlogDetails = ({ news }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  let categoryId;

  useEffect(() => {
    async function getRelatedPosts() {
      let blogData;
      setLoading(true);
      try {
        const response = await axios.get(
          news
            ? `${import.meta.env.VITE_SERVERAPI}/api/v1/activity/`
            : `${import.meta.env.VITE_SERVERAPI}/api/v1/blog/`,
          {
            params: {
              categoryId,
            },
          }
        );
        blogData = news ? response.data.activities : response.data.blogs;
        if (response.data.success) {
          setRelatedPosts(
            blogData.filter((relatedBlog) => relatedBlog._id !== blog._id)
          );
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

    if (blog) {
      categoryId = blog.category?._id ? blog.category._id : "";
      getRelatedPosts();
    }
  }, [blog]);

  console.log(news, " News");
  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const blogResponse = await axios.get(
          news
            ? `${import.meta.env.VITE_SERVERAPI}/api/v1/activity/${id}`
            : `${import.meta.env.VITE_SERVERAPI}/api/v1/blog/${id}`
        );

        console.log("Fetch blogs details", blogResponse.data);

        const categoriesResponse = await axios.get(
          news
            ? `${import.meta.env.VITE_SERVERAPI}/api/v1/activityCategory/`
            : `${import.meta.env.VITE_SERVERAPI}/api/v1/category`
        );

        setBlog(news ? blogResponse.data.activity : blogResponse.data.blog);
        setCategories(categoriesResponse.data.categories);
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id, news]);

  useEffect(() => {
    if (relatedPosts.length > 3) {
      setRelatedPosts(relatedPosts.slice(0, 3));
    }
  }, [relatedPosts]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {/* Left Side: Blog Details */}
          <div className="col-lg-8 col-md-12">
            <div className="blog-details">
              <h2>{blog?.title}</h2>
              <p className="text-muted">
                Publish Date: {new Date(blog?.createdAt).toLocaleDateString()}
              </p>
              <div className="blog-content">
                <p>
                  <SafeHTML htmlString={blog?.description} />
                </p>
                {/* You can add more details or sections here */}
              </div>
              <img
                src={`${import.meta.env.VITE_SERVERAPI}/${blog?.image.replace(
                  /\\/g,
                  "/"
                )}`}
                alt={blog?.title}
                className="img-fluid mb-4 border  border-danger"
                style={{
                  width: "70%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* Right Side: Categories */}
          <div className="col-lg-4 col-md-12 position-sticky top-0 ">
            <div className="sidebar bg-light p-4 rounded border shadow-sm">
              <h4 className="mb-4 text-primary border-bottom border-danger pb-2">
                Blog Categories
              </h4>
              <ul className="list-group">
                {categories.map((category) => (
                  <li
                    key={category._id}
                    onClick={() =>
                      navigate(
                        news
                          ? `/newsactivitycategory/${category._id}`
                          : `/category/${category._id}`
                      )
                    }
                    className="list-group-item d-flex justify-content-start gap-3 align-items-center border-0 rounded-0 border-bottom"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-primary"
                    />
                    {category.title}
                  </li>
                ))}
              </ul>
              {/* Related Posts Section */}
            </div>
            <div className="related-posts mt-5">
              <h4 className="text-primary border-bottom border-danger pb-2">
                Related Posts
              </h4>
              <ul className="list-group">
                {relatedPosts.length < 1 ? (
                  <div>No related Post for this Category</div>
                ) : (
                  relatedPosts.map((post) => (
                    <li
                      key={post._id}
                      className="list-group-item d-flex justify-content-start align-items-center border-0 rounded-0 border-bottom  "
                    >
                      <img
                        src={`${
                          import.meta.env.VITE_SERVERAPI
                        }/${post.image.replace(/\\/g, "/")}`}
                        alt={post.title}
                        className=" me-3"
                        style={{
                          width: "100px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <Link
                          to={
                            news
                              ? `/newsactivity/${post._id}`
                              : `/blog/${post._id}`
                          }
                          className="text-decoration-none"
                        >
                          {post.title}
                        </Link>

                        <p className="text-muted">
                          Publish Date:{" "}
                          {new Date(blog?.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlogDetails;
