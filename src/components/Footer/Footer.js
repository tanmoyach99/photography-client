import React from "react";
import "./footer.css";
import fb from "../../images/fb-logo.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import copyright from "../../images/copyright.png";

const Footer = () => {
  return (
    <div className="footer container-fluid">
      <h3 className="text-center footer-text">Marys photography</h3>
      <div className="row container-fluid  d-flex justify-content-center align-items-center ">
        <div className=" col-md-4 col-sm-6 col-xm-12 d-flex justify-content-center align-items-center">
          <img src={fb} alt="" className="img-fluid logo-img" />
          <img src={twitter} alt="" className="img-fluid logo-img" />
          <img src={instagram} alt="" className="img-fluid logo-img" />
        </div>

        <p className="text-center">
          All rights reserved{" "}
          <img src={copyright} alt="" className="img-fluid copyright-img" />
          marys photography
        </p>
      </div>
    </div>
  );
};

export default Footer;
