import React from "react";
// import facebook from './../images/facebook.png';
// import linkedin from "./../images/linkedin.png";
// import whatsapp from "./../images/whatsapp.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <h5>
          &copy; {new Date().getFullYear()}
          <span> Monicah Cloud</span>
        </h5>
        <h5> All rights reserved </h5>
        <div className="social-media-icon">
          {/* <img src={facebook} alt="facebook" />
          <img src={linkedin} alt="linkedin" />
          <img src={whatsapp} alt="whatsapp" /> */}
        </div>
      </div>
    </>
  );
}


export default Footer