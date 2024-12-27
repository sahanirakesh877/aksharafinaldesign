import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import school1 from '../../src/assets/middle/GP4A7655.jpg'
import school2 from '../../src/assets/middle/GP4A7788.jpg'
import school3 from '../../src/assets/middle/GP4A7810.jpg'
import school4 from '../../src/assets/middle/aksharaa school6142F.jpg'
import school5 from '../../src/assets/middle/GP4A7926.jpg'
import school6 from '../../src/assets/middle/GP4A7946.jpg'
import school7 from '../../src/assets/middle/GP4A8041.jpg'
import school8 from '../../src/assets/middle/GP4A8094.jpg'


const brandImg = [
  school2,
  school4,
  school1,
  school3,
  school5,
];
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

const Middleschool = () => {
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
          <div className="row">
            <h3 className="w-100 border-bottom-title head-color text-center">
              <span className="addcolor">Middle School </span> (Grade  6-7)
            </h3>
            <div className="col-md-12 col-12 px-4 py-2">
              <p className="kinder-text">
              The Middle School, is where the journey of discovery and growth continues for students in grade 6-7 as they experience academic and social  development. At our school, we believe that education is not just about imparting knowledge but also about shaping character and nurturing values. Our commitment to providing quality academic education, coupled with a strong focus on ethics and moral education, sets us apart and makes our middle school experience truly extraordinary
              </p>
              <p className="kinder-text">
              In Middle School, we recognize that students are at a critical stage of their development. They are curious, energetic, and eager to explore the world around them. Our dynamic learning environment is designed to cater to their evolving needs, fostering a love for learning and encouraging intellectual curiosity.
              </p>

              <p className="kinder-text">
              Gone are the days of monotonous lectures and passive learning. Our classrooms are interactive spaces where students engage in discussions, group activities, and hands-on projects. This approach not only enhances their understanding of concepts but also hones their critical thinking and problem-solving skills. Our teachers act as facilitators, guiding students on their learning journey and encouraging them to ask questions and think independently.
              </p>
            </div>
          </div>

          <div className="row d-flex  align-items-start justify-content-between my-2">
            <div className="col-md-6">
              <h2 className="kinder-head mb-md-2">
                Beyond Academics: Building Character and Values :
              </h2>
              <p className="kinder-text">
              At our Middle School, we understand that education is incomplete without a strong foundation of ethics and values. We believe that instilling moral principles in our students is essential for their overall development and success in life.
              </p>

              <h5 className="kinder-subhead mb-md-2">
                Ethics and Moral Education
              </h5>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />
                  Integrated curriculum.
                </li>
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />{" "}
                  Interactive learning (discussions, role-playing, real-life
                  scenarios).
                </li>
                <li>
                  {" "}
                  <i className="fas fa-check-square me-2 text-danger" />
                  Real-life application through everyday interactions and
                  activities.
                </li>
              </ul>

              <h5 className="kinder-subhead mb-md-2">
                Community Service and Social Responsibility
              </h5>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />
                  Active participation in community service projects.
                </li>
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />
                  Cultivation of empathy and compassion.
                </li>
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />
                  Hands-on experiences teaching the value of giving back to
                  society.
                </li>
              </ul>

              <h2 className="kinder-head mb-md-1">
                A Supportive and Inclusive Community
              </h2>
              <p className="kinder-text">
                Our Middle School is a nurturing and inclusive community where
                every student is valued and supported. We believe in creating a
                safe and positive environment where students can thrive
                academically, socially, and emotionally
              </p>
              <h5 className="kinder-subhead mb-md-2">
                Counseling and Guidance
              </h5>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />{" "}
                  Dedicated team of counselors available for guidance and
                  support.
                </li>
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />
                  Assistance with academic advice, career counseling, and
                  personal issues.
                </li>
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />
                  Trusted resource for students navigating the transition from
                  childhood to adolescence.
                </li>
              </ul>
              <h5 className="kinder-subhead mb-md-2">Parental Involvement</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />{" "}
                  Encouragement of active parental involvement through meetings,
                  workshops, and events.
                </li>
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />
                  Partnership between school and parents to support student
                  development.
                </li>
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />
                  Ensuring students receive the best possible support both at
                  school and home.
                </li>
              </ul>
              <h5 className="kinder-subhead mb-md-2">Inclusive Education</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />{" "}
                  Commitment to inclusive education catering to diverse student
                  needs.
                </li>
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />
                  Classrooms equipped with resources for different learning
                  styles and abilities.
                </li>
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />
                  Celebration of diversity and promotion of a culture of
                  acceptance and respect.
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h2 className="kinder-head mb-md-1">
                Extracurricular Excellence :
              </h2>
              <p className="kinder-text">
                Education at our Middle School goes beyond textbooks and
                examinations. We believe in the holistic development of our
                students and offer a wide range of extracurricular activities to
                nurture their talents and interests.
              </p>
              <h5 className="kinder-subhead mb-md-2">
                Sports and Physical Education
              </h5>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />
                  Variety of activities (soccer, basketball, athletics,
                  swimming).
                </li>
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />{" "}
                  Learning teamwork, discipline, and perseverance.
                </li>
                <li>
                  {" "}
                  <i className="fas fa-check-square me-2 text-danger" />
                  Contribution to mental and emotional well-being.{" "}
                </li>
              </ul>

              <h5 className="kinder-subhead mb-md-2 ">Arts and Creativity</h5>
              <ul className="list-unstyled">
                <li className="">
                  <i className="fas fa-check-square me-2 text-danger" />
                  Inclusive programs (music, dance, drama, visual arts).
                </li>
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />
                  Opportunities to explore and express artistic talents.
                </li>
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />
                  Regular exhibitions, performances, and productions for
                  showcasing skills.
                </li>
              </ul>

              <h5 className="kinder-subhead mb-md-2 ">Clubs and Societies</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-check-square me-2 text-danger" /> Diverse
                  range of clubs (Science Club, Debate Society, Robotics Club,
                  Environmental Club).
                </li>
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />
                  Opportunities to pursue passions and develop leadership
                  skills.
                </li>
                <li>
                  <i className="fas fa-check-square me-2 text-danger" />
                  Collaboration with like-minded peers.
                </li>
              </ul>
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
                   src={school3}
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

export default Middleschool;
