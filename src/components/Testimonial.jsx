
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import axios from "axios";
import "react-alice-carousel/lib/alice-carousel.css";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch testimonials from the backend
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVERAPI}/api/v1/testimonial`
        );
        if (response.data.success) {
          setTestimonials(response.data.testimonial);
        } else {
          console.error("Failed to fetch testimonials:", response.data.message);
          setError(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setError("Failed to load testimonials.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // AliceCarousel responsive settings
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 2 },
  };

  // Generate carousel items dynamically
  const items = testimonials.map((testimonial) => (
    <div className="item" key={testimonial._id}>
      <div className="testimonial">
        <h3 className="title">{testimonial.title}</h3>
        <p className="description">{testimonial.feedback}</p>
        <div className="testimonial-content">
          <div className="pic">
            <img
              src={`${import.meta.env.VITE_SERVERAPI}/${testimonial.image.replace(/\\/g, "/")}`}
              alt={testimonial.parentname}
            />
          </div>
          <div className="content">
            {/* <h4 className="name">{testimonial.parentname}</h4> */}
            <h4 className="name">
  {testimonial.parentname.split(",")[0]} 
  <br />
  <small className="position" style={{ fontSize: "0.9rem", color: "#777" }}>
    {testimonial.parentname.split(",")[1]}
  </small>
</h4>
           
            <ul className="rating">
              {Array(testimonial.rating || 5)
                .fill()
                .map((_, index) => (
                  <li className="fa fa-star" key={index}></li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  ));

  // Handle loading and error states
  if (loading) return <p>Loading testimonials...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="demo py-4">
      <div className="container">
        <h2 className="border-bottom-title w-100 text-center head-color">
          <span className="addcolor">Testimo</span>nial
        </h2>
        <div className="row d-flex justify-content-between align-items-center py-4">
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay={true}
            infinite={true}
            responsive={responsive}
            controlsStrategy="alternate"
            animationDuration="1500"
            disableButtonsControls={false}
            disableDotsControls={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

