import React, { useEffect } from "react";
import "../css/Team.css";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import team1 from "../../src/assets/Teammember/GP4A7953 copy.jpg";
import team3 from "../../src/assets/Teammember/GP4A8358.jpg";
import executive from "../../src/assets/Team/Executive Team.jpg";
// import admin from "../../src/assets/Team/Administrator Team.jpg";
 import high from '../../src/assets/Team/High School Team.jpg'
 import middle from '../../src/assets/Team/Middle school Team.jpg'

// team photos
import ram from "../../src/assets/Team/Ram Kumar Adhikari IT Incharge.jpg";
import bimal from "../../src/assets/Team/Bimal Bhattarai Admin cum Transportation Incharge.jpg";
import sabin from "../../src/assets/Team/Sabin Nepal Operation Incharge.jpg";
import rashmila from "../../src/assets/Team/Rashmila Thapa Accountant.jpg";
import sabina from "../../src/assets/Team/Sabina Karanjeet Front Desk Officer.jpg";
import urmila from "../../src/assets/Team/Urmila Prasai School Nurse.jpg";
import shaiby from "../../src/assets/Team/Shaibya Chalise Accountant.jpg";
import samikksha from "../../src/assets/Team/SamiKshya Lawati Front Desk Officer.jpg";
import kaushila from "../../src/assets/Team/Kaushila Pokharel Financial Manager.jpg";
import ishwori from "../../src/assets/Team/Ishwori Dulal librarian.jpg";
import manika from "../../src/assets/Team/Manika Shrestha Front Desk Officer.jpg";
import sanchita from '../../src/assets/Team/Sanchita Adhikari.jpg'
import Rajan from '../../src/assets/Team/Rajan Dahal.jpg'

const TeamMember = ({ imgSrc, name, position, socialLinks }) => (
  <div className="col-md-3 col-sm-6  ">
    <div className="our-team">
      <div className="img-container">
        <img src={imgSrc} alt={name} className="img-fluid team-image" />
      </div>
      <div className="team-content">
        <h3 className="title">{name}</h3>
        <span className="post">{position}</span>
        <ul className="social-links">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>
                <i className={`fab fa-${link.icon}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const TeamSection = ({ title, imgSrc, members }) => (
  <div className=" mb-2 parent-container">
    {imgSrc && (
      <div className="row align-items-center">
        <div className="col-md-12 ">
          <img src={imgSrc} alt={title} className="img-fluid" />
        </div>
      </div>
    )}
    <h3 className="team-head text-center " style={{ marginTop: "1rem" }}>
      {title}
    </h3>

    {members && (
      <div className="row">
        {members.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    )}
  </div>
);
// Data for team sections
const teamSections = [
  {
    title: " Executive ",
    imgSrc: executive,
  },
  // {
  //   title: " Administration Team",
  //   imgSrc: admin,
  // },

  {
    title: " High School",
    imgSrc: high,
  },
  {
    title: " Middle School",
    imgSrc: middle,
  },
  {
    title: " Elementary School",
    imgSrc: team3,
  },
  {
    title: " Kindergarten School",
    imgSrc: team1,
  },
 
  {
    title: "Administrative & Operation",
    members: [
      {
        imgSrc: kaushila,
        name: "Kaushila Pokharel",
        position: "Financial Manager",
        socialLinks: [
          { href: "#", icon: "facebook" },
          { href: "#", icon: "instagram" },
          { href: "#", icon: "viber" },
          { href: "#", icon: "linkedin" },
          { href: "#", icon: "whatsapp" },
        ],
      },
      {
        imgSrc: shaiby,
        name: "Shaibya Chalise",
        position: "Accountant",
        socialLinks: [
          { href: "#", icon: "facebook" },
          { href: "#", icon: "instagram" },
          { href: "#", icon: "viber" },
          { href: "#", icon: "linkedin" },
          { href: "#", icon: "whatsapp" },
        ],
      },
      {
        imgSrc: rashmila,
        name: "Rashmila Thapa",
        position: "Accountant",
        socialLinks: [
          { href: "#", icon: "facebook" },
          { href: "#", icon: "instagram" },
          { href: "#", icon: "viber" },
          { href: "#", icon: "linkedin" },
          { href: "#", icon: "whatsapp" },
        ],
      },
      {
        imgSrc: ram,
        name: "Ram Kumar Adhikari",
        position: "IT Incharge",
        socialLinks: [
          { href: "#", icon: "facebook" },
          { href: "#", icon: "instagram" },
          { href: "#", icon: "viber" },
          { href: "#", icon: "linkedin" },
          { href: "#", icon: "whatsapp" },
        ],
      },
      {
        imgSrc: bimal,
        name: "Bimal Bhattarai",
        position: "Admin cum Transportation Incharge",
        socialLinks: [
          { href: "#", icon: "facebook" },
          { href: "#", icon: "instagram" },
          { href: "#", icon: "viber" },
          { href: "#", icon: "linkedin" },
          { href: "#", icon: "whatsapp" },
        ],
      },
      {
        imgSrc: sabin,
        name: "Sabin Nepal",
        position: "Operation Incharge",
        socialLinks: [
          { href: "#", icon: "facebook" },
          { href: "#", icon: "instagram" },
          { href: "#", icon: "viber" },
          { href: "#", icon: "linkedin" },
          { href: "#", icon: "whatsapp" },
        ],
      },
      {
        imgSrc: sanchita,
        name: "Sanchita Adhikari",
        position: "Executive Officer & Parent Coordinator",
        socialLinks: [
          { href: "#", icon: "facebook" },
          { href: "#", icon: "instagram" },
          { href: "#", icon: "viber" },
          { href: "#", icon: "linkedin" },
          { href: "#", icon: "whatsapp" },
        ],
      },
      {
        imgSrc: sabina,
        name: "Sabina Karanjeet",
        position: "Front Desk Officer",
        socialLinks: [
          { href: "#", icon: "facebook" },
          { href: "#", icon: "instagram" },
          { href: "#", icon: "viber" },
          { href: "#", icon: "linkedin" },
          { href: "#", icon: "whatsapp" },
        ],
      },
      {
        imgSrc: manika,
        name: "Manika Shrestha",
        position: "Front Desk Officer",
        socialLinks: [
          { href: "#", icon: "facebook" },
          { href: "#", icon: "instagram" },
          { href: "#", icon: "viber" },
          { href: "#", icon: "linkedin" },
          { href: "#", icon: "whatsapp" },
        ],
      },
      {
        imgSrc: samikksha,
        name: "Samikshya Lawati",
        position: "Front Desk Officer",
        socialLinks: [
          { href: "#", icon: "facebook" },
          { href: "#", icon: "instagram" },
          { href: "#", icon: "viber" },
          { href: "#", icon: "linkedin" },
          { href: "#", icon: "whatsapp" },
        ],
      },

      {
        imgSrc: urmila,
        name: "Urmila Prasai",
        position: "School Nurse",
        socialLinks: [
          { href: "#", icon: "facebook" },
          { href: "#", icon: "instagram" },
          { href: "#", icon: "viber" },
          { href: "#", icon: "linkedin" },
          { href: "#", icon: "whatsapp" },
        ],
      },
      {
        imgSrc: ishwori,
        name: "Ishwori Dulal",
        position: "Librarian",
        socialLinks: [
          { href: "#", icon: "facebook" },
          { href: "#", icon: "instagram" },
          { href: "#", icon: "viber" },
          { href: "#", icon: "linkedin" },
          { href: "#", icon: "whatsapp" },
        ],
      },
      {
        imgSrc: Rajan,
        name: "Rajan Dahal",
        position: "Store Incharge ",
        socialLinks: [
          { href: "#", icon: "facebook" },
          { href: "#", icon: "instagram" },
          { href: "#", icon: "viber" },
          { href: "#", icon: "linkedin" },
          { href: "#", icon: "whatsapp" },
        ],
      },
    ],
  },
];

const Team = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Team | Aksharaa</title>
        <meta
          name="description"
          content="Learn more about our team at Aksharaa School."
        />
        <meta
          name="keywords"
          content="team, staff, Aksharaa School, educators, administration"
        />
      </Helmet>

      <div className="container ">
        {teamSections.map((section, index) => (
          <TeamSection key={index} {...section} />
        ))}
      </div>
    </>
  );
};

export default Team;
