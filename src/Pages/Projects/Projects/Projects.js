import React from "react";
import "./Projects.css";
import mega from "../../../Assets/Images/mega.png";
import doctors from "../../../Assets/Images/doctors.png";
import business from "../../../Assets/Images/business.png";
import useMarket from "../../../Assets/Images/usedMarket.jpg";
import foods from "../../../Assets/Images/foods.png";
import news from "../../../Assets/Images/news.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Branding from "../Branding/Branding";

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className="project pt-10 pb-2">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="text-center">
          <p className="text-primary text-lg font-bold">
            Showcasing some of my best work
          </p>
          <h2 className="font-[900] lg:text-6xl md:text-4xl text-4xl  text-white opacity-[0.8] mt-2 mb-4">
            Recent Work.
          </h2>
          <div class="animated-bar animatedbar_service"></div>
        </div>
        <div className="mt-20">
          <Slider {...settings}>
            <div className="project_grid px-4">
              <div className="inner">
                <img src={useMarket} alt="" />
              </div>
              <a
                className="p-url text-2xl font-bold text-white font-['Jost']"
                href="https://used-car-market-37ca6.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                Used Car Resale Market - ReactJS Template
              </a>
              <p className="text-primary mt-2">ReactJS / NodeJS / MongoDB / Firebase</p>
            </div>
            <div className="project_grid px-4">
              <div className="inner">
                <img src={doctors} alt="" />
              </div>
              <a
                className="p-url text-2xl font-bold text-white font-['Jost']"
                href="https://doctors-portal-78482.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                Dainties Doctors portal - ReactJS Template
              </a>
              <p className="text-primary mt-2">ReactJS / NodeJS / MongoDB / Firebase</p>
            </div>
            <div className="project_grid px-4">
              <div className="inner">
                <img src={mega} alt="" />
              </div>
              <a
                className="p-url text-2xl font-bold text-white font-['Jost']"
                href="https://rafinsripon.github.io/2.Agency-mega-one-HTML5-template/"
                target="_blank"
                rel="noreferrer"
              >
                Agency Mega One - HTML5 Template
              </a>
              <p className="text-primary mt-2">Javascript / HTML5 / Bootstrap / Jquery </p>
            </div>
            <div className="project_grid px-4">
              <div className="inner">
                <img src={business} alt="" />
              </div>
              <a
                className="p-url text-2xl font-bold text-white font-['Jost']"
                href="https://rafinsripon.github.io/1.Bizup-Business-website/"
                target="_blank"
                rel="noreferrer"
              >
                Bizup - Business HTML5 Template
              </a>
              <p className="text-primary mt-2">
                HTML5 / Bootstrap / Javascript / Jquery 
              </p>
            </div>
            <div className="project_grid px-4">
              <div className="inner">
                <img src={foods} alt="" />
              </div>
              <a
                className="p-url text-2xl font-bold text-white font-['Jost']"
                href="https://quick-food-fc463.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                Quick Foods - Online ReactJS Template
              </a>
              <p className="text-primary mt-2">ReactJS / NodeJS / Javascript / Tailwindcss / MongoDB</p>
            </div>
            <div className="project_grid px-4">
              <div className="inner">
                <img src={news} alt="" />
              </div>
              <a
                className="p-url text-2xl font-bold text-white font-['Jost']"
                href="https://dragon-news-b5430.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                Dragon Top News - ReactJS Template
              </a>
              <p className="text-primary mt-2">ReactJS / Javascript / Tailwindcss / Firebase</p>
            </div>
          </Slider>
        </div>
      </div>
      <Branding />
    </div>
  );
};

export default Projects;
