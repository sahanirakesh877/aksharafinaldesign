import React, { useEffect, useState, memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import School2 from '../../src/assets/aksharaa-school.jpg'

// Extracted static data for AboutContent
const aboutData = {
  introText: [
    `Established in 2011, Aksharaa School, the Best School in Kathmandu is a co-education institute offering day school from Kindergarten through grade 10. The school operates in three earthquake-resistant academic and administrative blocks spread over 23 ropanis of land. Our advanced infrastructure includes modern classrooms and facilities designed to provide a safe, technologically advanced learning environment that meets international standards.`,
    `Ranked among internationally accredited schools, Aksharaa is renowned for employing innovative teaching methodologies in technology-enhanced classrooms. Our child-friendly facilities create sophisticated learning environments, encouraging students to engage deeply during their study hours. We are committed to fostering a physically, mentally, and intellectually stimulating environment that promotes the holistic development of young children.`,
  ],
  whyChooseUs: [
    {
      iconClass: "fas fa-check-square me-2 text-danger",
      title: "Modern Infrastructure: ",
      description:
        "Earthquake-resistant buildings and modern facilities ensure a safe and advanced learning environment.",
    },
    {
      iconClass: "fas fa-check-square me-2 text-danger",
      title: "Technologically Advanced  Classrooms: ",
      description:
        "Integration of Information Communication Technology (ICT) and Learning Management Systems (LMS) to enhance learning.",
    },
    {
      iconClass: "fas fa-check-square me-2 text-danger",
      title: "Holistic Development: ",
      description:
        "Focus on physical, mental, and intellectual growth through our innovative Learning by Practice Reinforcement Approach (LPRA).",
    },
    {
      iconClass: "fas fa-check-square me-2 text-danger",
      title: "Experienced Faculty: ",
      description:
        "Dedicated and skilled educators committed to nurturing each child's potential.",
    },
    {
      iconClass: "fas fa-check-square me-2 text-danger",
      title: "Inclusive Learning Environment: ",
      description:
        "Child-friendly facilities that support a well-rounded education.",
    },
  ],
};

const PhilosophySection = memo(({ navigate }) => (
  <div className="mission-color py-4">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="w-100 border-bottom-title head-color">
            <span className="addcolor">Our Philosophy</span> & Approach
          </h2>
        </div>
      </div>
      <div className="row d-flex align-items-start mt-4">
        <div className="col-lg-6 col-md-12 mb-4">
          <p className="textcenter">
            Aksharaa School adopts a student-centered, constructivist
            philosophy, fostering autonomous learning and emphasizing awareness,
            autonomy, and authenticity. We cater to diverse intelligences,
            promoting holistic growth through a balanced education system.
          </p>
          <p className="textcenter">
            Our Learning-Reinforcement-Practice-Application (LRPA) module
            enhances cognitive abilities with fun and curiosity, encouraging
            critical thinking, collaboration, creativity, and problem-solving.
            This prepares students to be global citizens.
          </p>
          <p className="textcenter">
            We value respect and diversity, blending traditional values with
            modern technology. Through national festivals and educational trips,
            we instill patriotism and global awareness, aiming to nurture
            well-rounded, globally competent citizens.
          </p>
          <button className="button-21" onClick={() => navigate("/about")}>
            Know More<i className="fa-solid fa-arrow-right ms-2"></i>
          </button>
        </div>
        <div className="col-lg-6 col-md-12">
          <video width="100%" height="auto" controls className="textcenter">
            <source
              src="https://www.aksharaaschool.edu.np/assets/aksharaa-space.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </div>
));

const AboutContent = memo(() => (
  <div className="container ">
    <div className="text-center mb-3 ">
      <h4 className=" border-bottom-title head-color">
        <span className="">INTRODUCTION</span>
      </h4>
    </div>
    <div className="mb-5">
      {aboutData.introText.map((text, index) => (
        <p className="textcenter " key={index}>
          {text}
        </p>
      ))}
    </div>
    <div className="bg-light p-4 rounded">
      <h5 className="font-weight-bold text-success mb-4">
        Why Choose Aksharaa School?
      </h5>
      <ul className="list-unstyled">
        {aboutData.whyChooseUs.map(
          ({ iconClass, title, description }, index) => (
            <li
              className="mb-3 d-flex align-items-center flex-wrap"
              key={index}
            >
              <i className={iconClass} />
              <strong>{title}</strong> {description}
            </li>
          )
        )}
      </ul>
    </div>
    <div className="mt-3">
      <p className="textcenter">
        Through the implementation of a
        Learning-Reinforcement-Practice-Application (LRPA) approach that
        incorporates creative teaching techniques, ongoing reinforcement,
        practical experience, and real-world application, Aksharaa strives to
        achieve integrated child development. Our institutional setup, combined
        with modern technologies, ensures a comprehensive educational experience
        that supports and enhances student learning.
      </p>
    </div>
  </div>
));

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(location.pathname === "/");
  }, [location.pathname]);

  return show ? (
    <PhilosophySection navigate={navigate} />
  ) : (
    <>
    <div >
    <img src={School2} alt="School Background" className="img-fluid" style={{ width: "100%", height: "auto" }} />

    </div>
      <div className="container">
        <h2 className="w-100 border-bottom-title head-color text-center py-2 mb-2">
          <span className="addcolor">About Us</span>
        </h2>
        <p className="textcenter">
          Aksharaa School provides an enriching educational experience with its
          blend of modern facilities and innovative teaching methods. Our
          expansive premises feature spacious buildings and full-sized
          playgrounds, offering a holistic learning environment that extends
          beyond traditional classroom settings.
        </p>
        <p className="textcenter">
          At Aksharaa School, we are committed to integrating cutting-edge
          technology into our curriculum. Our classrooms are equipped with
          computers, laptops, projectors, and other advanced tools, facilitating
          interactive and project-based learning. This technology supports
          students in conducting research, creating multimedia presentations,
          and collaborating effectively on group projects.
        </p>
        <p className="textcenter">
          We pride ourselves on fostering critical thinking and problem-solving
          skills through hands-on experiences. Our students engage in a variety
          of enriching activities, including educational field trips, guest
          lectures, and international tours. These experiences are designed to
          broaden their perspectives and apply classroom knowledge to real-world
          situations.
        </p>
        <p className="textcenter">
          Our approach to education combines intellectual mentoring with
          practical application. Students are encouraged to explore, discuss,
          and apply their knowledge through diverse methods such as role plays,
          group work, and virtual learning. This integration of theory and
          practice not only strengthens their understanding but also prepares
          them for future challenges with confidence and adaptability.
        </p>
        <p className="textcenter">
          At Aksharaa School, we believe in nurturing well-rounded individuals
          who are ready to make meaningful contributions to society. Our focus
          on holistic development ensures that students leave us not only with
          academic excellence but also with the skills and experiences needed to
          succeed in an ever-evolving world.
        </p>
      </div>
      <AboutContent />
      <PhilosophySection navigate={navigate} />
    </>
  );
};

export default About;
