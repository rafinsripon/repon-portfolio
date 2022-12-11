import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetail.css";
import img from '../../../Assets/Images/skills.jpg'
import { FaSearch } from "react-icons/fa";

const ProjectDetail = () => {
  const { id } = useParams();
  console.log("params id", id);
  const [projects, setProjects] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/services.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          console.log("data", data);
          const currentProject = data.find((pt) => pt._id === id);
          setProjects(currentProject);
        }
      });
  }, [id]);
  return (
    <div className="detials pb-14">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="text-center mt-20">
          <h2 className="font-[900] lg:text-5xl md:text-4xl text-4xl  text-white opacity-[0.8] mt-2 mb-4">
            Project Details
          </h2>
          <p className="text-2xl font-bold text-white mb-4">
            Explore <span className="text-primary"> // </span> project
          </p>
          <div class="animated-bar animatedbar_service"></div>
        </div>
        <div className="lg:flex gap-10 mt-14">
          <div className="lg:w-96">
            <div className="relative bg-[#282b33] p-12 rounded-xl">
                <h2 className="text-2xl font-bold text-white">Search Here</h2>
            <input
              className="bg-transparent border-b-2 border-b-[#ffffff] h-[50px] w-full text-white mt-12"
              type="text"
              name="search"
              placeholder="Search your keyword"
            />
            <button className="absolute right-14 text-[#BAC1D4] bg-transparent border-none top-36 text-xl"><FaSearch /></button>
            </div>
            <div className="p-12 bg-[#282b33] mt-14 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-6">project gallary</h2>
                <div className="flex justify-center gap-4 w-full">
                <img className="w-[80px] rounded-lg" src={img} alt="" />
                <img className="w-[80px] rounded-lg" src={img} alt="" />
                <img className="w-[80px] rounded-lg" src={img} alt="" />
                </div>
                <div className="flex justify-center gap-4 mt-4 w-full">
                <img className="w-[80px] rounded-lg" src={img} alt="" />
                <img className="w-[80px] rounded-lg" src={img} alt="" />
                <img className="w-[80px] rounded-lg" src={img} alt="" />
                </div>
                <div className="flex justify-center gap-4 mt-4">
                <img className="w-[80px] rounded-lg" src={img} alt="" />
                <img className="w-[80px] rounded-lg" src={img} alt="" />
                <img className="w-[80px] rounded-lg" src={img} alt="" />
                </div>
                <div className="flex justify-center gap-4 mt-4">
                <img className="w-[80px] rounded-lg" src={img} alt="" />
                <img className="w-[80px] rounded-lg" src={img} alt="" />
                <img className="w-[80px] rounded-lg" src={img} alt="" />
                </div>
            </div>
          </div>
          <div className="flex-1 lg:mt-0 mt-4">
            <img className="w-full h-[500px] object-cover rounded-xl" src={projects.img} alt="" />
            <div className="px-6">
                <h2 className="text-2xl font-bold text-white mt-4">{projects.name}</h2>
                <h2 className="text-primary font-bold">{projects.pera}</h2>
                <p className="text-white mt-4">{projects?.details?.common}</p>
                <ul className="mt-4">
                    <li className="list-disc text-white text-lg">{projects?.details?.detail1}</li>
                    <li className="list-disc text-white text-lg">{projects?.details?.detail2}</li>
                    <li className="list-disc text-white text-lg">{projects?.details?.detail3}</li>
                    <li className="list-disc text-white text-lg">{projects?.details?.detail4}</li>
                </ul>
               <div className="mt-6">
               <a href={projects.livesite} target="_blank" rel="noreferrer">
               <button className="text-white bg-primary px-8 py-2 mt-2">Live Link</button>
               </a>
               <a className="ml-4" href={projects.client} target="_blank" rel="noreferrer">
               <button className="text-white bg-primary px-8 py-2 mt-2">Client site code</button>
               </a>
               <a className="ml-4" href={projects.server} target="_blank" rel="noreferrer">
               <button className="text-white bg-primary px-8 py-2 mt-2">Server site code</button>
               </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
