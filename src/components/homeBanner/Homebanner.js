import React, { useState } from "react";
import Slider from "react-slick";
import { photos } from "../../data";

const HomeBanner = () => {
  const [picture, setPicture] = useState(photos);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div
      className="mt-1 homeSlider px-3
    "
    >
      <div>
        <Slider {...settings}>
          {picture.map((pic) => (
            <div className="container">
              <img
                src={pic.img}
                alt=""
                style={{ width: "500px", height: "600px", objectFit: "cover" }}
                className="img-fluid"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeBanner;
