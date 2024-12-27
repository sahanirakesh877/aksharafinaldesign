import React from "react";
import "../css/sideicon.css";

const SideIcon = () => {
  return (
    <div className="sideicon">
      <div className="d-flex flex-column justify-content-center align-items-center gap-2">



        <div className="iconBox text-white">
          <a href="tel:9845892346" classname="text-white text-decoration-none">
          <i class="fa fa-volume-control-phone text-white" aria-hidden="true"></i>
            <span>Call Us</span>
          </a>
        </div>




        <div className="iconBox text-white">
        <a href="https://wa.me/9845892346" className="text-white text-decoration-none">
            <i className="fa-brands fa-whatsapp"></i>
            <span>WhatsApp</span>
          </a>
        </div>



        <div className="iconBox text-white">
        <a href="mailto:sahanirakesh877@gmail.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20inquire%20about..." className="text-white text-decoration-none">
            <i className="fa-regular fa-message"></i>
            <span>Email Us</span>
          </a>
        </div>




      </div>
    </div>
  );
};

export default SideIcon;
