import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import axios from "axios";
import Loader from "../components/Loader";
import SafeHTML from "../components/SafeHTML";
import longtermProjectsdata from "../Data/ProjectData";

const Blog = () => {
  const { pathname } = useLocation();
  const [filter, setFilter] = useState("Featured News");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVERAPI}/api/v1/activity/`
        );
        console.log('creative week activity',response.data) 

        if (response.data.success) {
          setData(response.data.activities);
          console.log("blogs data fetchs", response.data.activities);
        } else {
          console.error("Failed to fetch  data:", response.data.message);
          setError(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const blogData = [
    {
      id: 1,
      title: "PTM",
      date: "2081-Poush-13",
      des: "2nd Diagnostic Test",
    },
    // {
    //   id: 2,
    //   title: "Exhibition's day",
    //   date: "2024-May-12",
    //   des: "Year 6 pupils are invited to join us for a Taster Day.",
    // },
    // {
    //   id: 3,
    //   title: "Robotics Training",
    //   date: "2024-Apr-10",
    //   des: "Celebrating National Parent Involvement Day on December 3.",
    // },
    // {
    //   id: 4,
    //   title: "Online Learning Tips",
    //   date: "2024-Jul-20",
    //   des: "Year 6 pupils are invited to join us for a Taster Day.",
    // },
    // {
    //   id: 5,
    //   title: "Exhibition's day",
    //   date: "2024-sep-29",
    //   des: "Year 6 pupils are invited to join us for a Taster Day.",
    // },
    // {
    //   id: 6,
    //   title: "Training Corner",
    //   date: "2024-apr-06",
    //   des: "Year 6 pupils are invited to join us for a Taster Day.",
    // },
    // {
    //   id: 7,
    //   title: "Robotics Training",
    //   date: "2024-feb-01",
    //   des: "Year 6 pupils are invited to join us for a Taster Day.",
    // },
    // {
    //   id: 8,
    //   title: "Farewell Program",
    //   date: "2024-Jan-10",
    //   des: "Year 6 pupils are invited to join us for a Taster Day.",
    // },
  ];

  const scheduleData = [

    {
      date: "Baisakh 2081 (April-May 2024)",
      event: [
        "1st:Happy New Year",
        "4th:Chait Dashain",
        "10th:School Reopens",
        "11th:Loktantra Diwas",
        "26th:Mothers Day", 
        "4-7th,9th,23rd,30th:Continue Professional Development(CPD) ",
      ],
    },
    {
      date: "Jestha 2081 (May-Jun 2024)",
      event: [
        "10th:Buddha Jyanti",
        "14th:School Election",
        "15th:Gantantra Diwas",
        "23rd:World Environment Day", 
        "13rd & 27th: CPD",
      ],
    },
    {
      date: "Asar 2081 (Jun-July 2024)",
      event: [
        "5th:Elocution(G8-G10)","6th:Elocution(G4-G7)",
        "7th:Elocution(G1-G3)& Yog Diwas",
        "15th: Dhaan Diwas ",
        "19th: Parent-Teacher Meeting",
        "25th: Naag Panchami",
        "26th:Bhanu Jyanti Celebration (G1-G3 & Pre-School)",
        "27th:Bhanu Jyanti Celebration (G4-G7 & World Population Days)",
        "26th:Bhanu Jyanti Celebration (G8-G10 )",

        "29th: Bhanu Jyanti",
        "9th,23rd & 30th: CPD",
      ],
    },

    {
      date: "Shrawan 2081 (July- August 2024)",
      event: [
        "6th:Guru Purnima",
        "7th-10th:1st Diagnostic test (Grade 5-10",
        "15th: School Re-opens",
        "19th: Parent-Teacher Meeting",
        "25th: Naag Panchami",
        "30th:Quiz Contest (G8-G10)",
        "31th:Quiz Contest (G4-G5 & G6-G7)",
        "24th-27th:Quiz CPD",
      ],
    },
    {
      date: "Bhadra 2081 (Aug - Sept 2024)",
      event: [
        "	3rd : Janai Purnima (No School)",
        "	4th: Gaai Jatra",
        "7th-9th:Aksharaa Model United Nations(AMUN)",
        "	10th: krishna Janmashtami Day Celebration",
        "	17th: Father’s Day",
        "	21st: Teej Festival (No School)",
        "	23rd: ShreePanchami  ",
        "	29th: Baal Diwas",
        "	9th & 30th: CPD",
      ],
    },

    {
      date: "Asoj 2081 (Sep - Oct 2024)",
      event: [

        "1st: Bishwokarma Pooja",
        "3rd: sambidhan Diwas",
        "7th-15th: Half Yearly Exam (G 5-10)",
        "9th: Jitiya Parwa",
        "13th: CPD",
        "17th: Dashain Vacation begins (No School)",
      ],
    },
    {
      date: "Kartik 2081 (Oct - Nov 2024)",
      event: ["5th:School Reopens ", "10th: Parent Teacher meeting", 
        "14th:Kaag Tihar",
        "15th:Tihar Holidays Begins", 
        "16th:Gaai Tihar",
        "17th:Mah:puja",
        "18th:Bhai Tikawa",
        "19th:Tihar Holiday",
        "20th:School Reopens",
        "22nd:Chhath Parwa",
        "4th & 25th:CPD"
      ],
    },
    {
      date: "Mangsir 2081 (Nov - Dec 2024)",
      event: [
        "15th: Bala Chaturthi",

        "24th: ICT Conference(Grade 5-7)",
        "30th: Yomari Punhi",
        "9th,23rd & 30th: CPD",
      ],
    },
    {
      date: "Poush 2081 (Dec 2024 - Jan 2025)",
      event: [
        "1st: Winter Break Begins (No School)",
        "10th: Christmas Day",
        "13th: Parent Teacher Meetings(PTM)",
        "15th: Winter Vacation Starts,Tamu Lhosar",
        "17th: New Year(English Date)/ Topi Diwas",
        "27th:Prithivi Jyanti"
      ],
    },

    {
      date: "Magh 2081 (Jan - Febr 2025)",
      event: [
        "1st:Maghe Sankranti",
        "7st:School Reopens",

        "16th:Rastriya Sahid Diwas",
        "17th: Sonam Lhosar",
        "21st: Saraswati Puja",
        "26th: Final Sports Day (G1 - G5)",
        "2nd-6th & 20th:CPD"
      ],
    },
    {
      date: "Falgun 2081 (Feb - Mar 2025)",
      event: ["7st: Prajatantra Diwas", 
        "14th: Mahashivaratri",
        "16th:Gyalpo Lhoshar",
        "24th :World Woman's Day",
        "29th :Falgu Purnima",
        "11th & 25th: CPD"

      ],
    },
    {
      date: "Chaitra 2081 (Mar - Apr 2025)",
      event: [
        "1th: Tarai Holi",
        "8th-18th: Annual examination (G 5,6,7 & 9)",
        "16th: Ghodey Jatra",
        "23th: Parent Teacher Meeting (PTM)",
        "10th ,25th & 26th: CPD",
      ],
    },
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const filteredBlogData = blogData.filter((item) => {
    if (filter === "Featured News") {
      return true;
    } else if (filter === "Upcoming Events") {
      return true;
    }
    return false;
  });

  const items = data.map((item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => navigate(`/newsactivity/${item._id}`)}
    >
      <article className="blog-card">
        <div className="blog-card__background">
          <div className="card__background--wrapper">
            <div
              className="card__background--main"
              style={{
                backgroundImage: `url(${
                  import.meta.env.VITE_SERVERAPI
                }/${item.image.replace(/\\/g, "/")})`,
              }}
            >
              <div className="card__background--layer" />
            </div>
          </div>
        </div>
        <div className="blog-card__head">
          <span className="date__box">
            {(() => {
              const date = new Date(item.createdAt);
              const day = date.getDate(); // Get day as number
              const month = date
                .toLocaleString("en-US", { month: "short" })
                .toUpperCase(); // Get month abbreviation in uppercase

              return (
                <>
                  <span className="date__day">{day}</span>
                  <span className="date__month">{month}</span>
                </>
              );
            })()}
          </span>
        </div>

        <div className="blog-card__info">
          <h6>{item.title}</h6>
          <p className="card-text  ">
            <SafeHTML htmlString={item.description.slice(0, 120)} />
          </p>
          <Link to={`/newsactivity/${index}`} className="btn btn--with-icon">
            <i className="btn-icon fa fa-long-arrow-right" />
            READ MORE
          </Link>
        </div>
      </article>
    </div>
  ));

  return (
    <>
      <Helmet>
        <title>Blog | Aksharaa</title>
        <meta
          name="description"
          content="Learn more Blog our company and team at Western Australia Care Pvt. Ltd., an NDIS provider organization committed to serving the community with respect and equality. Our core goals include providing assistance to individuals with disabilities, integrating them within the community, and helping them achieve their goals."
        />
        <meta
          name="keywords"
          content="Blog, Blogus, case, blog company, team, mission, vision, services, review, values, Western Australia Care Pvt. Ltd., NDIS, disabilities, community, respect, equality"
        />
      </Helmet>

      <div className="demo">
        <div className="container">
          <h2 className="text-center pt-5   fs-2  border-bottom-title w-100  head-color">
            {" "}
            <span className="addcolor">Aksharaa</span> Highlights
          </h2>

          <div className="d-flex flex-row pt-4 gap-2 justify-content-center align-items-center flex-wrap">
            <h6
              className={`border rounded-pill px-4 py-1 flex-wrap d-flex border-info text-center fw-semibold ${
                filter === "Featured News" ? "text-danger" : "text-dark"
              } fs-6 fs-md-5 fs-lg-4`}
              onClick={() => setFilter("Featured News")}
            >
              Activities
            </h6>
            <h6
              className={`border rounded-pill px-4 py-1 border-info flex-wrap d-flex text-center fw-semibold ${
                filter === "Upcoming Events" ? "text-danger" : "text-dark"
              } fs-6 fs-md-5 fs-lg-4`}
              onClick={() => setFilter("Upcoming Events")}
            >
              Upcoming Events
            </h6>

            <h6
              className={`border rounded-pill px-4 py-1 border-info flex-wrap d-flex text-center fw-semibold ${
                filter === "Calendar" ? "text-danger" : "text-dark"
              } fs-6 fs-md-5 fs-lg-4`}
              onClick={() => setFilter("Calendar")}
            >
              Calendar
            </h6>

            {/* Akshara Highlights */}
            <h6
              className={`border rounded-pill px-4 py-1 border-info flex-wrap d-flex text-center fw-semibold ${
                filter === "longtermProject" ? "text-danger" : "text-dark"
              } fs-6 fs-md-5 fs-lg-4`}
              onClick={() => setFilter("longtermProject")}
            >
              Our LongTerm Projects
            </h6>
          </div>
        </div>

        <div className="">
          {filter === "Featured News" && (
            <div className="container py-5">
              <div className="row">
                <AliceCarousel
                  mouseTracking
                  items={items}
                  infinite={true}
                  autoPlay={true}
                  animationDuration={1500}
                  responsive={responsive}
                  disableButtonsControls
                  disableDotsControls
                  controlsStrategy="responsive"
                />
              </div>
            </div>
          )}

          {filter === "Upcoming Events" && (
            <div className="container blog-container py-4">
              <div className="row py-4">
                <h4 className="text-center my-4  border-bottom-title">
                  School Events Schedule
                </h4>
                {filteredBlogData.map((item) => (
                  <div className="col-md-6 mb-4" key={item.id}>
                    <div className="d-flex justify-content-center align-items-center p-3 border">
                      <div className="calenderBox d-flex justify-content-center align-items-center flex-column">
                        <span className="fs-1">{item.date.slice(11, 15)}</span>
                        <span className="calen-date">
                          {item.date.slice(5, 10)}
                        </span>
                      </div>
                      <div className="calender-text d-flex flex-column justify-content-center align-items-start ms-3 flex-fill">
                        <h6>{item.title}</h6>
                        <p className="calen-p">{item.des}</p>
                        <p className="calen-p">{item.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filter === "Calendar" && (
            <div className="container py-4">
              <div className="row py-4">
                <h4 className="text-center my-5  border-bottom-title">
                  Calender Schedule
                </h4>

                {scheduleData.map((item, index) => (
                  <div key={index} className="col-md-3 mb-2">
                    <div className="p-3 border">
                      <h6 className="text-success">{item.date}</h6>
                      <div className="d-flex flex-column align-items-start gap-2">
                        {item.event.map((event, eventIndex) => (
                          <div
                            key={eventIndex}
                            className="d-flex align-items-center"
                          >
                            <i className="fa-regular fa-calendar text-danger me-2"></i>
                            <p className="card-text mb-0">{event}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Akshara Highlights */}
          {filter === "longtermProject" && (
            <div className="container py-4">
              <div className="row py-4">
                <h4 className="text-center my-4 border-bottom-title">
                  Our Long Term Projects
                </h4>
                <p>Projects that stretch from three months to one year fall under 'Long-Term Projects'. These initiatives usually have integration with all subjects to achieve the learning objective of the National Curriculum. Every project end with a culmination for the display of the learning where parents and other students are invited. In addition to academic learning, students get an opportunity to experience hands on learning. These projects help sharpen thinking skills, time management, organization, collaboration, endurance, communication and leadership skills.</p>

                <div className="row">
                  {longtermProjectsdata.map((project, id) => (
                    <div className="col-md-3" key={project.id}>
                      <Link to={`/newsactivity/longterm-project/${id + 1}`}>
                        <div className="card shadow-lg rounded border-0 h-100">
                          <img
                            src={project.image[0]}
                            className="card-img-top"
                            alt={project.title}
                            style={{ height: "200px", objectFit: "cover" }}
                          />
                          <div className="card-body">
                            <h5 className="card-title text-dark text-center">
                              {project.title}
                            </h5>
                            {/* <p className="card-text">
                              {project.description.slice(0,60)}
                            </p> */}
                            <button className="border-0 px-4 btn bg-success text-light">View More</button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
