import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const brandImg = [
  "/brand/LeaderinMe.png",
  "/brand/FC_EdLogoLockup_rgb-300dpi.png",

  "/brand/logo.png",
  "/brand/logo partners.png",
];

const responsive = {
  0: { items: 2 },
  568: { items: 3 },
  768: { items: 3 },
  1024: { items: 4 },
  1200: { items: 5 },
};

const items = brandImg.map((img, index) => (
  <div
    className="item py-2 d-flex justify-content-center align-items-center"
    key={index}
  >
    <div
      className=" rounded overflow-hidden"
      style={{ width: "150px", height: "auto" }}
    >
      <img
        src={img}
        alt={`Brand ${index + 1}`}
        className="img-fluid object-fit-cover w-100 h-100"
      />
    </div>
  </div>
));

const Brand = () => {
  return (
    <div className="brand py-5 ">
      <div className="container ">
        <h2 className="text-center head-color border-bottom-title w-100 mb-5">
          <span className="addcolor">Our Educational</span> Partners
        </h2>
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay={true}
          infinite={true}
          responsive={responsive}
          controlsStrategy="alternate"
          animationDuration={2000}
          disableButtonsControls={true}
          disableDotsControls={true}
        />
      </div>
    </div>
  );
};

export default Brand;
