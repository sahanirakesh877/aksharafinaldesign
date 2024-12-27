import React from "react";
import "../css/Kindergarten.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChild,
  faBook,
  faChalkboardTeacher,
  faHandsHelping,
  faLaptopCode,
  faRunning,
  faMusic,
  faTheaterMasks,
  faPaintBrush,
  faFootballBall,
  faSwimmer,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

import school1 from '../../src/assets/kinder/GP4A7402.jpg'
import school2 from '../../src/assets/kinder/GP4A7423.jpg'
import school3 from '../../src/assets/kinder/GP4A7429.jpg'
import school4 from '../../src/assets/kinder/GP4A7438.jpg'
import school5 from '../../src/assets/kinder/GP4A7490.jpg'
import school6 from '../../src/assets/kinder/GP4A7507.jpg'
import school7 from '../../src/assets/kinder/GP4A7544.jpg'
import school8 from '../../src/assets/kinder/GP4A7607.jpg'
import school9 from '../../src/assets/kinder/PKS_4767.jpg'

const brandImg = [school2, school4, school1, school3, school5];
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 2 },
};
const items = brandImg.map((img, index) => (
  <div className="academic-itemk" key={index}  >
      <img src={img} alt={`Brand ${index + 1}`} className="img-fluid object-fit " style={{
      width: '100%',
      height: 'auto',
      objectFit: 'cover', 
    }} />
    </div>
));

const Kindergarten = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="py-2">
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
      </div>

      <div className="bg-light py-2">
        <div className="container mx-auto">
          <h3 className="w-100 border-bottom-title head-color text-center">
            <span className="addcolor">Kindergarten </span>Daycare - ECD II (PG-UKG)
          </h3>
          <div className="row d-flex justify-content-between align-items-start">
            <div className="col-md-5 col-12 px-4 py-4">
              <p className="kinder-text">
                At Aksharaa Kindergarten, our center is dedicated to providing a
                nurturing and educational environment for children aged 2 to 6
                years old. Our Kindergarten program is designed to provide
                comprehensive early childhood education through our Day Care,
                Pre-ECD, ECD I, and ECD II programs.
              </p>

              <ul className="list-unstyled ">
                <li>
                  <strong>Day Care:</strong> For children aged 2-3 years.
                </li>
                <li>
                  <strong>Pre-ECD:</strong> For children aged 2.5-4 years.
                </li>
                <li>
                  <strong>ECD I:</strong> For children aged 3.5-5 years.
                </li>
                <li>
                  <strong>ECD II:</strong> For children aged 4.5-6 years.
                </li>
              </ul>

              <p className="kinder-text">
              Aksharaa Kindergarten provides a joyful and safe environment where children can explore, play and learn confidently. We cater to student's holistic development using child-friendly teaching-learning methodologies which makes them enjoy school and feel at home. At Aksharaa Kindergarten, we instill value-based and culture-driven education in every child, fostering mutual respect, gratitude, ethos, and compassion through integrated subjects and activities, including character education and “Sanskar Yukta Sikshya (संस्कारयुक्त शिक्षा).”
              </p>
              <p className="kinder-text">
              At Aksharaa Kindergarten, we adopt a thematic and integrated approach, where multiple subject areas are combined under a single theme. This approach enables children to connect new knowledge with their personal experiences and relate it to their communities and families. Our learning centers are designed to accommodate various learning styles, incorporating hands-on activities, sensory play, inquiry-based learning, and real-world connections
              </p>
              <p className="kinder-text">
              These centers foster holistic and enjoyable learning experiences, engaging and motivating students through small-group and project-based activities. Students have the opportunity to develop new skills and learn independence, all while being guided by the facilitator.
              </p>
              <p className="kinder-text">
              Here, we recognize each child's uniqueness and encourage their holistic development through our Balanced Education System and LRPA module, which promotes cognitive, physical, emotional, and social development. We offer a vibrant, kid-centered setting where learning is infused into play activities. Our play-based learning programs focus on:
              </p>

              <ol className=" ">
                <li className="">
                
                  Stimulating a child's natural curiosity
                </li>
                <li>
                 
                  Cultivating creativity and problem-solving
                </li>
                <li>
                  
                  Enhancing emotional and social development
                </li>
                <li>
                 
                  Encouraging independent thinking and decision-making
                </li>
              </ol>


              <p className="kinder-text">
              Our Touch-Explore-Learn-Enjoy process fosters curiosity, motivates exploration, and instills a lifelong love for learning. These centers are meticulously designed to accommodate diverse learning styles, incorporating a range of activities such as hands-on projects, sensory play, inquiry-based learning, and real-world applications. 
              </p>
            </div>

            <div className="col-md-7 col-12 px-4 py-4">
              <img src="/kgpng.png" alt="" className="img-fluid" />

              <div className="mt-5 d-flex justify-content-between flex-column">
              <div>
                  <h4 className="kinder-head mb-md-2">Learning Centers </h4>
                  <p>
                    Learning centers are designed to cater to differentiated
                    learning where students practice and learn new skills
                    independently and under the guidance of the facilitators.
                    The learning centers provide enough learning opportunities
                    in small groups.
                  </p>
                  <ul className="list-unstyled ms-4">
                    <li>1. Art center </li>
                    <li>2. Phonic Center</li>
                    <li>3. Exploration and investigation center </li>
                    <li>4. Pre-writing center </li>
                    <li>5. Dramatic Center </li>
                    <li>6. Literacy center </li>
                    <li>7. Science and Nature Center </li>
                    <li>8. Math Center </li>
                    <li>9.	Sensory Center</li>
                  </ul>
                </div>





                <div>
                  <h4 className="kinder-head mb-md-2">
                    Extra/ Co-curricular Activities
                  </h4>
                  <ul className="list-unstyled ms-4 ">
                    <li className=" ">
                      <FontAwesomeIcon
                        icon={faRunning}
                        className="me-2 text-danger"
                      />
                      Yoga & Mindfulness{" "}
                    </li>

                    <li>
                      <FontAwesomeIcon
                        icon={faMusic}
                        className="me-2 text-danger"
                      />
                      Music & Movement{" "}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faTheaterMasks}
                        className="me-2 text-danger"
                      />
                      Dance{" "}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faSwimmer}
                        className="me-2 text-danger"
                      />
                      Water Splash{" "}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faRunning}
                        className="me-2 text-danger"
                      />
                      Gymnastics{" "}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faFootballBall}
                        className="me-2 text-danger"
                      />
                      Physical Exercise (P.E) / Sports{" "}
                    </li>

                    <li>
                      <FontAwesomeIcon
                        icon={faUserFriends}
                        className="me-2 text-danger"
                      />
                      Excursion/ Field Trips
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="kinder-head mb-md-2">
                    Aksharaa Approach to Quality Education
                  </h4>
                  <ul className="list-unstyled ms-4">
                    <li>
                      <FontAwesomeIcon
                        icon={faChalkboardTeacher}
                        className="me-2 text-danger"
                      />
                      Theme-based curriculum
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faHandsHelping}
                        className="me-2 text-danger"
                      />
                      Caring, qualified staff
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faLaptopCode}
                        className="me-2 text-danger"
                      />
                      Activity-based learning
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faChalkboardTeacher}
                        className="me-2 text-danger"
                      />
                      Field-based learning
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faTheaterMasks}
                        className="me-2 text-danger"
                      />
                      Co-curricular activities
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faUserFriends}
                        className="me-2 text-danger"
                      />
                      Parent-teacher collaboration
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faChild}
                        className="me-2 text-danger"
                      />
                      Child-friendly environment
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faLaptopCode}
                        className="me-2 text-danger"
                      />
                      ICT-integrated activities
                    </li>
                  </ul>
                </div>
             

              
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="kg-back" id="kg-back1">
        <div className="container">
          <div className="row py-4">
            <div className="col-12">
              <div className="row">
                <div className="col-md-3 col-6">
                  <img
                    src={school6}
                    alt="School 6"
                    className="img-fluid border border-white border-2"
                  />
                </div>
                <div className="col-md-3 col-6">
                  <img
                    src={school7}
                    alt="School 7"
                    className="img-fluid border border-white border-2"
                  />
                </div>
                <div className="col-md-3 col-6">
                  <img
                    src={school8}
                    alt="School 8"
                    className="img-fluid border border-white border-2"
                  />
                </div>
                <div className="col-md-3 col-6">
                  <img
                    src={school9}
                    alt="School 9"
                    className="img-fluid border border-white border-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kindergarten;
