import React, { useState } from "react";
import "./Projects.css";
import Branding from "../Branding/Branding";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { projectsData } from "../../../data/ProjectData";
import SingleProject from "./SingleProject";
import Modal from "../../../components/Modal/Modal";

const Projects = () => {
  const [pModal, setPModal] = useState(null)
  const settings = {
    dots: false,
    infinite: true,
    // autoplay: true,
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
            {
              projectsData.map(project => <SingleProject 
              key={project.id}
              project={project}
              setPModal={setPModal}
              />)
            }
          </Slider>
            {
              pModal && <Modal 
              setPModal={setPModal}
              pModal={pModal}
              />
            }
        </div>
      </div>
      <Branding />
    </div>
  );
};

export default Projects;