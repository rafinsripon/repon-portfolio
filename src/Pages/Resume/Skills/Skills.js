import React from "react";
import "./Skills.css";
import skill from "../../../Assets/Images/skills.jpg";

const Skills = () => {
  return (
    <div>
      <div className="section back-dark">
        <div className="portfolio-bottom-link">
          <h2 className="text-4xl font-bold">My Skills</h2>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="relative iamges">
          <div className="backgeound">
            <img src={skill} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-y-[27px] mr-4 mt-4 lg:p-0 px-4">
          <div className="flex justify-between">
            <h3 className="text-white font-bold">HTML/CSS</h3>
            <h3 className="text-white font-bold">95%</h3>
          </div>
          <progress
            className="progress progress-primary"
            value="95"
            max="100"
          ></progress>
          <div className="flex justify-between">
            <h3 className="text-white font-bold">Web Design</h3>
            <h3 className="text-white font-bold">86%</h3>
          </div>
          <progress
            className="progress progress-primary"
            value="86"
            max="100"
          ></progress>
          <div className="flex justify-between">
            <h3 className="text-white font-bold">React JS</h3>
            <h3 className="text-white font-bold">80%</h3>
          </div>
          <progress
            className="progress progress-primary"
            value="80"
            max="100"
          ></progress>
          <div className="flex justify-between">
            <h3 className="text-white font-bold">Javascript</h3>
            <h3 className="text-white font-bold">70%</h3>
          </div>
          <progress
            className="progress progress-primary"
            value="70"
            max="100"
          ></progress>
          <div className="flex justify-between">
            <h3 className="text-white font-bold">Node JS</h3>
            <h3 className="text-white font-bold">60%</h3>
          </div>
          <progress
            className="progress progress-primary"
            value="60"
            max="100"
          ></progress>
          <div className="flex justify-between">
            <h3 className="text-white font-bold">Typescript</h3>
            <h3 className="text-white font-bold">67%</h3>
          </div>
          <progress
            className="progress progress-primary"
            value="67"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Skills;
