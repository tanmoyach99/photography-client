import React from "react";
import "./TopBanner.css";
import banner from "../../images/bannerphoto.jpg";
import Slider from "react-slick";
import { travelPhotos } from "../../data";

const TopBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    verticalSwiping: true,
  };
  return (
    <div className="top-banner d-flex row justify-content-center align-items-center img-fluid container-fluid">
      {/* <img src={banner} alt="" className="img-fluid banner-img" /> */}
      <div className="banner-text text-white  col-md-6 col-sm-12 col-xm-12 ">
        <div>
          <h1 className="heading-text">Your Desired photography</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            atque.
          </p>
        </div>
      </div>
      <div className="col-md-4 col-sm-12 col-xm-12  py-5">
        <Slider {...settings}>
          {travelPhotos.map((trphoto) => (
            <div className="banner-slider">
              <img
                src={trphoto.img}
                alt=""
                className="banner-slider-img img-fluid"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopBanner;
