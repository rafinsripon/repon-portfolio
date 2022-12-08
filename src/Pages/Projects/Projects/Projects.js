import React from "react";
import "./Projects.css";
import developer from "../../../Assets/Images/developer.png";
import cyber from "../../../Assets/Images/cyber.png";
import business from "../../../Assets/Images/business.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="project pt-10 pb-20">
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-20">
          <div className="project_grid">
            <div className="inner">
              <img src={business} alt="" />
            </div>
            <a className="p-url text-2xl font-bold text-white font-['syne']" href="https://rafinsripon.github.io/2.Agency-mega-one-HTML5-template/" target='_blank' rel="noreferrer">
            Bizup - Business HTML5 Template
            </a>
            <p className="text-primary mt-2">Web dedign / Business</p>
          </div>
          <div className="project_grid">
            <div className="inner">
              <img src={developer} alt="" />
            </div>
            <a className="p-url text-2xl font-bold text-white font-['syne']" href="https://rafinsripon.github.io/2.Agency-mega-one-HTML5-template/" target='_blank' rel="noreferrer">
            Rafs - Developer portfolio Template
            </a>
            <p className="text-primary mt-2">Web dedign / portfolio</p>
          </div>
          <div className="project_grid">
            <div className="inner">
              <img src={cyber} alt="" />
            </div>
            <a className="p-url text-2xl font-bold text-white font-['syne']" href="https://rafinsripon.github.io/2.Agency-mega-one-HTML5-template/" target='_blank' rel="noreferrer">
            Cyber - Developer portfolio Template
            </a>
            <p className="text-primary mt-2">Web dedign / portfolio</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Projects;
