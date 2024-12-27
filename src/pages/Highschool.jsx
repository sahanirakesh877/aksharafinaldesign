import React from "react";
import AliceCarousel from "react-alice-carousel";


import school1 from '../../src/assets/senior/aksharaa school5777 Final.jpg'
import school2 from '../../src/assets/senior/GP4A8126.jpg'
import school3 from '../../src/assets/senior/GP4A8177.jpg'
import school4 from '../../src/assets/senior/GP4A8190.jpg'
import school5 from '../../src/assets/senior/GP4A8244.jpg'
import school6 from '../../src/assets/senior/GP4A8291.jpg'
import school7 from '../../src/assets/senior/GP4A8378.jpg'
import school8 from '../../src/assets/senior/PKS_8329.jpg'

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
const Highschool = () => {
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
        <div className="container">
         <h3 className="w-100 border-bottom-title head-color text-center">
              <span className="addcolor">Senior  School </span> (Grade 8-10)
            </h3>
          <div className="row d-flex  ">
            <div className="col-md-12">
              <p className="kinder-text">
              At Aksharaa, our Senior School program (Grade 8-10) is meticulously designed to prepare students for the academic rigor and personal growth required for success encompassing  the grit and growth mindset.  Our school follows Nepal's National  Curriculum formulated by the “Curriculum Development Center (CDC)”, Sanothimi, Bhaktapur to attain the national goals of education. Students are required to appear for the Secondary Education Examination (SEE) in grade 10 conducted by the National Examination Board, Nepal.
              </p>

              <p className="kinder-text">
              
              We focus on delivering a challenging and well-rounded education that equips students with the knowledge, skills, and confidence necessary for higher education and beyond. Our holistic approach ensures that each student is not only prepared for exams but also developed as versatile  individuals embedded in them the skills required for the present world.
              </p>
            </div>

            <div className="row d-flex  align-items-start justify-content-between my-5 ">
              <div className="col-md-6">
                <h2 className="kinder-head mb-md-2">
                  Preparing for the Future :
                </h2>
                <p className="kinder-text">
                Senior School is a stepping stone to high school and beyond. We strive to equip our students with the comprehensive knowledge, essential skills, and core values required to excel and thrive in their future endeavors.
                </p>

                <h5 className="kinder-subhead mb-md-2">Career Guidance</h5>
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-check-square me-2 text-danger" />
                    Exploration of diverse career options coupled with the ability to make a well informed and strategic decision.
                  </li>
                  <li>
                    <i className="fas fa-check-square me-2 text-danger" />{" "}
                    Workshops, seminars, and professional interactions that offer in depth insights of different fields.
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-check-square me-2 text-danger" />
                    Pathways and strategies for achieving career goals.
                  </li>
                </ul>

                <h5 className="kinder-subhead mb-md-2">Skill Development</h5>
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-check-square me-2 text-danger" />
                    Emphasis on essential life skills: communication, collaboration, critical thinking, information literacy, analytical reasoning, perseverance and many more.
                  </li>
                  <li>
                    <i className="fas fa-check-square me-2 text-danger" />{" "}
                    Integration of these skills into both curriculum and
                    extracurricular activities.
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-check-square me-2 text-danger" />
                    Preparation for future challenges through comprehensive
                    skill development.
                  </li>
                </ul>

                <h5 className="kinder-subhead mb-md-2">Global Perspective</h5>
                <ul className="list-unstyled">

                

                  <li>
                    <i className="fas fa-check-square me-2 text-danger" />
                    Curriculum that encompasses global issues,fosters an understanding of  cultural diversity, and   delves into international relations.
                  </li>
                  <li>
                    <i className="fas fa-check-square me-2 text-danger" />{" "}
                    Encouragement of participation in exchange programs and
                    international competitions.
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-check-square me-2 text-danger" />
                    Fostering a global outlook to prepare students for an
                    interconnected world.
                  </li>
                </ul>
              </div>

              <div className="col-md-6">
                <h2 className="kinder-head mb-md-1">
                  Celebrating Achievements :
                </h2>
                <p className="kinder-text">
                At our Senior School, we celebrate every achievement and successes of our students. We are committed to recognizing and rewarding their efforts, as this serves as a powerful motivator inspiring them to pursue success. 
                </p>
                <h5 className="kinder-subhead mb-md-2">Academic Awards</h5>
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-check-square me-2 text-danger" />
                    Comprehensive system recognizing hard work and dedication.
                  </li>
                  <li>
                    <i className="fas fa-check-square me-2 text-danger" />{" "}
                    Awards for subject-specific achievements and overall
                    academic excellence.
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-check-square me-2 text-danger" />
                    Ensuring every student's achievements are celebrated.
                  </li>
                </ul>
                <h5 className="kinder-subhead mb-md-2 ">
                ECA/CCA Achievements
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-check-square me-2 text-danger" />{" "}
                    Opportunities for students to showcase their skills and
                    talents.
                  </li>
                  <li>
                    <i className="fas fa-check-square me-2 text-danger" />
                    Includes events such as educational fairs, debating competitions, national and international exposure 
                  </li>
                  <li>
                    <i className="fas fa-check-square me-2 text-danger" />
                    Provides a platform for students to shine and be recognized
                    for their abilities.
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="col-md-6">
              <div className="g pb-3">
                <div className="gallerys">
                  <img src="/a.jpg" alt="a big park inside a modern city" />
                  <img src="/b.jpg" alt="a small street between buildings" />
                  <img src="/c.jpg" alt="view from the sky of a big city" />
                  <img src="/d.jpg" alt="a bridge at night" />
                </div>
              </div>
            </div> */}
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
                    src={school4}
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

export default Highschool;
