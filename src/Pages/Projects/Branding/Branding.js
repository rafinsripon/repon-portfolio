import React from "react";
import './Branding.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import brand1 from '../../../Assets/Images/white1.png'
import brand2 from '../../../Assets/Images/white2.png'
import brand3 from '../../../Assets/Images/white3.png'
import brand4 from '../../../Assets/Images/white4.png'
import brand5 from '../../../Assets/Images/white5.png'
import brand6 from '../../../Assets/Images/white6.png'
import Pricing from "../Pricing/Pricing";
import Ready from "../Ready/Ready";

const Branding = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 425,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div className="mt-32">
      <div className="section bg-[#151717d4]">
        <div className="portfolio-bottom-link">
          <h2 className="text-4xl font-bold">Work With Us</h2>
        </div>
      </div>
      <div className="branding bgtop bgbottom p-28">
      <Slider {...settings}>
        <img className="brand_width" src={brand1} alt="" />
        <img className="brand_width" src={brand2} alt="" />
        <img className="brand_width" src={brand3} alt="" />
        <img className="brand_width" src={brand4} alt="" />
        <img className="brand_width" src={brand5} alt="" />
        <img className="brand_width" src={brand6} alt="" />
      </Slider>
      </div>
      <Ready />
    </div>
  );
};

export default Branding;
