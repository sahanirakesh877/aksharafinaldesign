import React from "react";
import "../css/Mobilecheck.css";
import { useNavigate } from "react-router-dom";
import seniorImg from "../../src/assets/children/High School final.png";
import middleImg from "../../src/assets/children/Middle school_png.png";
import kindergartenImg from "../../src/assets/children/Kindergarten _final.png";
import elementaryImg from "../../src/assets/children/Elementary School_final.png";

// Reusable Section Component
const Section = ({
  title,
  description,
  image,
  imageAlt,
  buttonText,
  buttonLink,
  reverse,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`row align-items-center my-4 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="col-lg-3 col-md-6 col-12 text-center text-md-start mb-3 mb-lg-0">
        <h2 className="mb-head sanskar">{title}</h2>
        <p className="mb-p">{description}</p>
        <button className="mb-btn" onClick={() => navigate(buttonLink)}>
          {buttonText}
        </button>
      </div>
      <div className="col-lg-9 col-md-6 col-12 bgimg">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="img-fluid rounded custom-img"
        />
      </div>
    </div>
  );
};

const Mobilecheck = () => {
  return (
    <div className="demo">
      <div className="container py-4">
        {/* Heading Section */}
        <div className="row">
          <div className="col-12 text-center mb-2">
            <h3 className="display-7 fw-bold">
              <span className="sanskar">संस्कारयुक्त शिक्षा</span>
              <br />
              Aksharaa's Guiding Principle
            </h3>
          </div>
          <div className="col-12">
            <p className="mb-p">
              Our guiding concept at Aksharaa School is "संस्कारयुक्त शिक्षा"
              which translates to education infused with values. We aim to
              develop individuals who possess good character and moral
              integrity, preparing them for life's challenges beyond academic
              achievements. Our Learning-Reinforcement-Practice-Application
              (LRPA) module fosters critical thinking, creativity, and
              problem-solving, and our curriculum emphasizes respect, integrity,
              compassion, and responsibility.
            </p>
          </div>
        </div>

        {/* Sections */}
        <Section
          title="Senior School (Grade 8-10)"
          description="Our Senior School program combines rigorous academics with value-based education, ensuring students are well-prepared for higher education and real-life challenges. Counseling and support services are available to guide students through their academic and personal decisions. Our graduates leave with a strong academic foundation, leadership qualities, critical thinking skills, problem-solving skills and a deep sense of social responsibility.."
          image={seniorImg}
          imageAlt="Senior School"
          buttonText="Enroll now"
          buttonLink="/academics/high"
        />

        <Section
          title="Middle School (Grade 6-7)"
          description="Middle School education at Aksharaa encourages independent ethical learning and reasoning, equipping students with the skills and values necessary for future success. Students learn to manage their time effectively taking responsibility for their own learning. Our advisory programs provide exposure, additional support and mentorship, helping students navigate this critical stage."
          image={middleImg}
          imageAlt="Girl"
          buttonText="Enroll now"
          buttonLink="/academics/middle"
          reverse
        />

        <Section
          title="Elementary School (Grade 1-5)"
          description="Aksharaa’s Elementary School nurtures intellectual growth and character development, ensuring students excel academically while embodying ethical principles. We aim to develop confident, well-rounded individuals prepared for middle school and beyond."
          image={kindergartenImg}
          imageAlt="Girl 2"
          buttonText="Enroll now"
          buttonLink="/academics/elementary"
        />

        <Section
          title="Kindergarten Daycare - ECD II (PG-UKG)"
          description="In our Kindergarten classes, children learn through playful experiences while instilling values like kindness, honesty, and respect, creating a strong educational foundation. Activities are carefully crafted to be fun and educational, promoting holistic growth. We believe in teaching children the importance of empathy and cooperation from an early age."
          image={elementaryImg}
          imageAlt="Kindergarten"
          buttonText="Enroll now"
          buttonLink="/academics/kindergarten"
          reverse
        />
      </div>
    </div>
  );
};

export default Mobilecheck;
