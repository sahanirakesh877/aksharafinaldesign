import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Learning from "../components/Learning";
import Blog from "./Blog";
import Brand from "../components/Brand";
import Testimonial from "../components/Testimonial";
import Banner from "../components/Banner";
import Contact from "./Contact";
import Counter from "../components/Counter";
import About from "./About";
import CreativeWeek from "../components/CreativeWeek";
import HomeBlog from "../components/HomeBlog";
import Mission from "./../components/Mission";
import Infochek from "../components/Infochek";
import Pic from "../components/HomePicRotate";
import Mobilecheck from "../components/Mobilecheck";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Helmet titleTemplate="Aksharaa School | The Best School in Kathmandu " />
      <Banner />
      <Mission />
      {isMobile ? <Mobilecheck /> : <Learning />}
      <Infochek />
      <About />
      <Blog />
      <Counter />
      <Testimonial />
      <HomeBlog />
      <CreativeWeek />
      <Pic />
      <Contact />
      <Brand />
    </>
  );
};

export default Home;
