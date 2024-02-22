import React from "react";
import Slider from "react-slick";
import { bannerData } from "../../../constants/Constants";

const HeroSection = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        {bannerData.map((item, index) => {
          return (
            <div className="w-full" key={index}>
              <img key={index} src={item?.bannerImg} alt={`slider-${index}`} className="block" />
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default HeroSection;
