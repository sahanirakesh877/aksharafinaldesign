import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../css/Creative.css";
import { fetchNotices } from "../redux/Notice/NoticeSlice";
// import axios from "axios";
import Loader from "./Loader";
import creativeweek from "../Data/creativeweekData";
// import SafeHTML from "../components/SafeHTML";

const CreativeWeek = () => {
  const dispatch = useDispatch();
  const { notices, loading, error } = useSelector((state) => state.notices);

  // const [creativesOfWeek, setCreativesOfWeek] = useState();

  useEffect(() => {
    dispatch(fetchNotices());
  }, [dispatch]);

  // useEffect(() => {
  //   async function getCreativesOfWeek() {
  //     try {
  //       const response = await axios.get(
  //         `${import.meta.env.VITE_SERVERAPI}/api/v1/activity/`
  //       );

  //       if (response.data.success) {
  //         if (response.data.activities.length === 0) {
  //           console.warn("No activities found for the creative week.");
  //         }
  //         setCreativesOfWeek(response.data.activities);
  //       } else {
  //         setError(response.data.message || "Failed to fetch data.");
  //       }
  //     } catch (error) {
  //       setError("An error occurred while fetching data.");
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   getCreativesOfWeek();
  // }, []);

  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };
  // const items = creativeweek.map((week) => (
  //   <div key={week.id} className="item">
  //     <img src={week.image} alt={week.title} className="carousel-image" />
  //     <h3>{week.title}</h3>
  //   </div>
  // ));
  const items = creativeweek.map((week) => (
    <div
      key={week.id}
      className="creative-item card border-0 p-3 m-md-0 p-md-1"
    >
      <div className="img-containe">
        <img
          src={week.image}
          alt={week.title}
          className="card-img-top img-fluid"
          loading="lazy"
        />
      </div>
      <div className="card-body p-2 m-0  ">
      <h5 className="text-center text-primary fw-bold mb-2" style={{ textShadow: '1px 1px 1px #000', letterSpacing: '1px' }}>
      {week.title}</h5>
      </div>
    </div>
  ));

  // if (creativesOfWeek && creativesOfWeek.length) {
  //   items = creativesOfWeek.map((creative, index) => {
  //     const shareUrls = {
  //       facebook: `https://www.facebook.com/sharer/sharer.php?u=${
  //         window.location.href
  //       }&quote=${encodeURIComponent(creative.title)}`,
  //       whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
  //         creative.title
  //       )}%20${encodeURIComponent(
  //         `http://localhost:5174/newsactivity/${creative._id}`
  //       )}`,
  //       linkedin: `https://www.linkedin.com/shareArticle?url=${
  //         window.location.href
  //       }&title=${encodeURIComponent(creative.title)}`,
  //       twitter: `https://twitter.com/share?url=${
  //         window.location.href
  //       }&text=${encodeURIComponent(creative.title)}`,
  //     };

  //     return (
  //       <div
  //         className="creative-item card border-0 p-3 m-md-0 p-md-1 "
  //         key={index}
  //       >
  //         <div className="img-container">
  //           <img
  //             src={`${import.meta.env.VITE_SERVERAPI}/${creative.image.replace(
  //               /\\/g,
  //               "/"
  //             )}`}
  //             className="card-img-top img-fluid"
  //             alt={creative.title}
  //             loading="lazy"
  //           />
  //         </div>
  //         <div className="card-body my-md-0  border position-relative">
  //           <h5 className="text-danger my-md-0 d-inline">{creative.title}</h5>
  //           <p className="creative-text my-md-0 pb-5">
  //             <SafeHTML htmlString={creative.description.slice(0, 100)} />
  //           </p>
  //           <div className="btn_wraps position-absolute end-0 bottom-0 my-2 me-3">
  //             <span className="share">
  //               Share <i className="fa-solid fa-share"></i>
  //             </span>
  //             <div className="share-icon">
  //               <a
  //                 href={shareUrls.facebook}
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //               >
  //                 <i className="fab fa-facebook-f creative_i" />
  //               </a>
  //               <a
  //                 href={shareUrls.whatsapp}
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //               >
  //                 <i className="fab fa-whatsapp creative_i" />
  //               </a>
  //               <a
  //                 href={shareUrls.linkedin}
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //               >
  //                 <i className="fab fa-linkedin creative_i" />
  //               </a>
  //               <a
  //                 href={shareUrls.twitter}
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //               >
  //                 <i className="fab fa-twitter creative_i" />
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
  // }

  return (
    <>
      <div className="demo">
        <div className="container ">
          <div className="row py-5">
            <div className="col-lg-6 col-md-12 mb-4">
              <h2 className="text-center border-bottom-title w-100 head-color mb-5">
                <span className="addcolor">Creatives Of </span> This Week
              </h2>
              <AliceCarousel
                ref={carouselRef}
                mouseTracking
                items={items}
                autoPlay={false}
                infinite={true}
                autoPlayDirection="rtl"
                responsive={responsive}
                controlsStrategy="alternate"
                animationDuration={1000}
                disableDotsControls={true}
                disableButtonsControls={true}
              />
              {/* Custom Previous Button */}
              <button
                className="custom-prev-btn"
                onClick={() => carouselRef.current?.slidePrev()}
              >
                {/* &#8249; */}
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
              </button>
              {/* Custom Next Button */}
              <button
                className="custom-next-btn"
                onClick={() => carouselRef.current?.slideNext()}
              >
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>

            {/*  important  notices  */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h2 className="text-center border-bottom-title w-100 head-color mb-5">
                <span className="addcolor">Important </span> Notice
              </h2>
              <div className="creative-items shadow ">
                {loading && (
                  <p>
                    <Loader />
                  </p>
                )}
                {error && <p>Error: {error}</p>}
                {!loading && !error && notices.length > 0 && (
                  <img
                    src={`${
                      import.meta.env.VITE_SERVERAPI
                    }/${notices[0].images.replace(/\\/g, "/")}`}
                    alt="Important Notice"
                    className="img-fluid w-100 h-100"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeWeek;
