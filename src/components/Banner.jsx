import React, { useEffect } from "react";
import "../css/banner.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroPhoto } from "./../redux/Hero/HeroSlice";
import Loader from "./Loader";

const Banner = () => {
  const dispatch = useDispatch();
  const { herophoto, loading, error } = useSelector((state) => state.herophoto);
  console.log("banner photo",herophoto.Heros)

  useEffect(() => {
    dispatch(fetchHeroPhoto());
  }, [dispatch]);

  return (
    <>
      <section className="home">
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-controls">
            <ol className="carousel-indicators">
              {loading && (
                <p>
                  <Loader />
                </p>
              )}
              {error && <p>Error: {error}</p>}
              {!loading &&
              !error &&
              herophoto.Heros &&
              herophoto.Heros.length > 0
                ? herophoto.Heros.map((item, index) => (
                    <li
                      key={item._id}
                      data-bs-target="#carousel"
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : ""}
                      loading="lazy"
                      style={{
                        backgroundImage: `url(${
                          import.meta.env.VITE_SERVERAPI
                        }/${item.images.replace(/\\/g, "/")})`,
                      }}
                    />
                  ))
                : null}
            </ol>

            <a
              className="carousel-control-prev"
              href="#carousel"
              role="button"
              data-bs-slide="prev"
            >
              <img src="/left-arrow.svg" alt="Prev" />
            </a>
            <a
              className="carousel-control-next"
              href="#carousel"
              role="button"
              data-bs-slide="next"
            >
              <img src="/right-arrow.svg" alt="Next" />
            </a>
          </div>

          <div className="carousel-inner">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading &&
            !error &&
            herophoto.Heros &&
            herophoto.Heros.length > 0 ? (
              herophoto.Heros.map((item, index) => (
                <div
                  key={item._id}
                  className={`carousel-item im ${index === 0 ? "active" : ""}`}
                  style={{
                    backgroundImage: `url(${
                      import.meta.env.VITE_SERVERAPI
                    }/${item.images.replace(/\\/g, "/")})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center", // Adjust for centering the image
                    backgroundRepeat: "no-repeat",
                    minHeight: "100vh", // Ensures the div spans the full viewport height
                    width: "100vw",
                  }}
                ></div>
              ))
            ) : (
              <div
                className="carousel-item active"
                style={{
                  backgroundImage: `url('/statichome.jpg')`,
                }}
              ></div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
