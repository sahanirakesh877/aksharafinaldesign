import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import mun1 from "../../src/assets/mun/IMG_0436.jpg";
import mun2 from "../../src/assets/mun/IMG_0481.jpg";
import mun3 from "../../src/assets/mun/IMG_0510.jpg";
import mun4 from "../../src/assets/mun/IMG_0511.jpg";
import mun5 from "../../src/assets/mun/IMG_0518.jpg";
import mun6 from "../../src/assets/mun/IMG_0537.jpg";
import mun7 from "../../src/assets/mun/IMG_0545.jpg";
import mun8 from "../../src/assets/mun/IMG_0611.jpg";

const MunImg = [mun4, mun7, mun2, mun8, mun6, mun3,];
const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 3},
};

const items = MunImg.map((img, index) => (
  <div className="px-1" key={index}>
    <img
      src={img}
      alt={`Brand ${index + 1}`}
      className="img-fluid rounded "
      style={{
        width: "100%",
        height: "auto",
        objectFit: "cover",
      }}
    />
  </div>
));

const AksharaMUN = () => {
  return (
    <>
      <div className="bg-light">
        <div className="container py-5">
          {/* AksharaMUN Section */}
          <section id="aksharaMUN">
            {/* <h2 className=" text-center  mb-3 head-color d-flex align-items-center justify-content-center  ">
               <span className="addcolor">AKSHARAA MODEL UNITED NATIONS</span>
               
              AMUN
            </h2> */}
            <h2 className="text-center mb-3 head-color d-flex flex-column align-items-center">
  <span className="addcolor text-uppercase">AKSHARAA MODEL UNITED NATIONS</span>
  <span style={{ color: '#BC0539' }}>AMUN</span>
</h2>



 

            <div className="row pb-4">
              <AliceCarousel
                mouseTracking
                items={items}
                autoPlay={true}
                infinite={true}
                responsive={responsive}
                controlsStrategy="alternate"
                animationDuration={3000}
                disableButtonsControls={true}
                disableDotsControls={true}
                paddingLeft={"5px"}
              />
            </div>

            {/* Content about AksharaMUN */}
            <h3>About MUN</h3>
            <p className="about-p">
              Model United Nations (MUN) is an educational activity that
              stimulates the proceedings of the United Nations, allowing
              participants to step into the roles of diplomats and
              representatives of various countries.
              Students engage in debates, negotiations, and problem-solving
              during this conference within assigned committees, addressing
              global issues such as diplomacy, security, economics, and social
              affairs.
              It provides a dynamic platform for participants to develop a deep
              appreciation for global affairs while clarifying their abilities
              to steer complex diplomatic scenarios.
            </p>
            <h3>WHY AMUN? </h3>
            <p className="about-p">
              The Aksharaa Model United Nations is an esteemed annual event
              organized by Aksharaa School, providing a dynamic platform for
              young minds to engage in meaningful discussions on global issues,
              diplomacy, and conflict resolution. With great pride, we aim to
              foster an enriching experience that empowers students to develop
              essential skills such as critical thinking, public speaking, and
              negotiation abilities, which are crucial for shaping tomorrow's
              future leaders and innovators.
              <br /><br />
              Our AMUN features an array of exciting committees, each focusing
              on pressing international issues. Students will have the
              extraordinary opportunity to represent different countries, engage
              in debates and negotiations, and collaborate on drafting
              resolutions that mirror real-world challenges the global community
              faces.
            </p>
          </section>

          {/* Activities Section */}
          <section id="activities" className="my-5">
          <div className="row d-flex justify-content-between align-items-start">
  {/* Left Content Section */}
  <div className="col-md-6 mb-4">
    <h3 className="mb-3">OUR GOALS</h3>
    <ul>
      <li>
        MUN helps to ensure a clear concept on diverse topics, diplomacy, & engaging committee sessions to provide an educational experience to delegates.
      </li>
      <li>
        Delegates improve their public speaking skills, overcome their massphobia, and increase their confidence while speaking and making conversations.
      </li>
      <li>
        The goal is to enhance research, presentation & facilitation skills and help to explore creative solutions to complex challenges to delegates.
      </li>
    </ul>
  </div>

  {/* Right Photo Gallery Section */}
  <div className="col-md-6">
    <div className="row g-3">
      <div className="col-6">
        <img
          src={mun5}
          alt="Activity 1"
          className="img-fluid rounded shadow-lg w-100"
          style={{ height: '250px', objectFit: 'cover' }}
        />
      </div>
      <div className="col-6">
        <img
          src={mun1}
          alt="Activity 2"
          className="img-fluid rounded shadow-lg w-100"
          style={{ height: '250px', objectFit: 'cover' }}
        />
      </div>
    </div>
  </div>
</div>

          </section>
        </div>
      </div>
    </>
  );
};

export default AksharaMUN;
