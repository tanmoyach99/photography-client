import React from "react";
import "./IntroDuction.css";
import borderArt from "../../images/border.png";
import Slider from "react-slick";
import { introPhoto } from "../../data";

const Introduction = () => {
  const settings = {
    fade: true,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
  };
  return (
    <div className="introduction row p-5 container-fluid">
      <div className="col-md-6 col-sm-12 col-xm-12">
        <h1 className="intro-title text-center">Who We Are</h1>
        <img src={borderArt} alt="" className="img-fluid intro-border-img" />
        <p className="mt-2 intro-info text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum tenetur
          odit a, maxime quo quasi soluta ipsum doloribus, quis recusandae odio
          voluptatem eos inventore iste fugit incidunt ipsam nesciunt enim
          repudiandae, molestiae laborum. Impedit et eius alias obcaecati ipsum
          a corrupti id, deserunt laborum ipsa, illo incidunt maxime! Incidunt
          quod at officiis deleniti, maxime tempora facere ab saepe. Vel quo
          aliquid maiores vero sequi quos nostrum ipsum nesciunt iste! Totam.
        </p>
      </div>
      <div className="col-md-6 col-sm-12 col-xm-12">
        <Slider {...settings}>
          {introPhoto.map((intro) => (
            <div class="container-fluid">
              <img src={intro.img} alt="" className="img-fluid intro-img" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Introduction;
