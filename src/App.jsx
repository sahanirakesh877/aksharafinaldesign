import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Head from "./components/Head";
import About from "./pages/About";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Kindegarten from "./pages/Kindergarten";
import SideIcon from "./components/SideIcon";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Elementryschool from "./pages/Elementryschool";
import Highschool from "./pages/Highschool";
import Middleschool from "./pages/Middleschool";
import Admissionpolicy from "./pages/Admissionpolicy";
import AdmissionProcedure from "./pages/AdmissionProcedure";
import Photos from "./components/Photos";
import ApplyOnline from "./pages/ApplyOnline";
import ChairmanMsg from "./components/ChairmanMsg";
import LRPA from "./pages/LRPA";
import Infrastructure from "./pages/Infrastructure";
import LatestBlogDetails from "./pages/LatestBlogDetails";
import CategoryBlogs from "./pages/categoryBlogs";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotices } from "./redux/Notice/NoticeSlice";
import Download from "./pages/Download";
import Error from "./components/Error";
import InfraDetails from "./pages/InfraDetails";
import AksharaMUN from "./pages/AksharaMUN";
import LongTermProject from "./pages/LongTermProject";
import EnquiryModel from "./components/EnquiryModel";

const App = () => {
  const dispatch = useDispatch();
  const { notices } = useSelector((state) => state.notices);
  useEffect(() => {
    dispatch(fetchNotices());
  }, [dispatch]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [popupVisible, setPopupVisible] = useState(true);

  const handleClose = () => {
    if (currentImageIndex < notices.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setPopupVisible(false);
    }
  };

  return (
    <>
      {popupVisible && notices && notices.length ? (
        <div id="popoupContainer">
          <div className="imageContainer">
            <img
              src={`${import.meta.env.VITE_SERVERAPI}/${notices[
                currentImageIndex
              ].images.replace(/\\/g, "/")}`}
              alt=""
              className="popupimg img-fluid"
            />
            <button className="pop_btn rounded-circle" onClick={handleClose}>
              X
            </button>
          </div>
        </div>
      ) : ("")}

      <TopBar />
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/akshara-mun" element={<AksharaMUN />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/infrastructure/:id" element={<InfraDetails />} />
        <Route path="/academics/kindergarten" element={<Kindegarten />} />
        <Route path="/academics/elementary" element={<Elementryschool />} />
        <Route path="/academics/middle" element={<Middleschool />} />
        <Route path="/academics/high" element={<Highschool />} />
        <Route path="/admission/policy" element={<Admissionpolicy />} />
        <Route path="/admission/procedure" element={<AdmissionProcedure />} />
        <Route path="/apply-online" element={<ApplyOnline />} />
        <Route path="/about/chairman" element={<ChairmanMsg />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/getinquiry" element={<EnquiryModel />} />
        <Route path="/about/lrpa" element={<LRPA />} />
        <Route path="/newsactivity" element={<Blog />} />
        <Route
          path="/newsactivity/longterm-project/:id"
          element={<LongTermProject />}
        />
        <Route
          path="/newsactivity/:id"
          element={<LatestBlogDetails news={true} />}
        />
        <Route
          path="/newsactivitycategory/:categoryId"
          element={<CategoryBlogs news={true} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Photos />} />
        <Route path="/gallery/:id" element={<Gallery />} />
        <Route path="/blog/:id" element={<LatestBlogDetails />} />
        <Route path="/category/:categoryId" element={<CategoryBlogs />} />
        <Route path="/downloads" element={<Download />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <SideIcon />

      <Footer />
    </>
  );
};

export default App;
