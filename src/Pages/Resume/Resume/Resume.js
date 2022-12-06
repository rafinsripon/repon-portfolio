import React from "react";
import "../Resume/Resume.css";

const Resume = () => {
  return (
    <div className="resume pt-10">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="text-center">
        <p className="text-primary text-lg font-bold">Check out my Resume</p>
        <h2 className="font-[900] lg:text-6xl md:text-4xl text-4xl  text-white opacity-[0.8] mt-2 mb-4">My Resume</h2>
           <div class="animated-bar animatedbar_service"></div>
        </div>
        <div className="p-4 mt-20">
          
          <div className="grid lg:grid-cols-2 gap-6">
            <ul className="pl-6 relative d_timeline">
            <h3 className="text-4xl text-white font-bold mb-4">Experiences</h3>
              <li className="d_timeline-item">
                <h3 className="text-white text-base font-medium m-0 d_timeline-title">
                  2021 - Now
                </h3>
                <div className="pb-10 pl-10 m-0">
                  <h2 className="text-white block text-lg mt-6 mb-0 font-bold tracking-wider">
                    Front-End  Development
                  </h2>
                  <span className="block text-base mb-3 text-primary">
                    Repon Rafins
                  </span>
                  <p className="text-[#c6c6c6]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  tempora perferendis vero officia enim impedit voluptatem
                  dignissimos, veniam ratione est alias rerum aperiam, nam
                  aliquam reprehenderit iste dolor.</p>
                </div>
              </li>
              <li className="d_timeline-item">
                <h3 className="text-white text-base font-medium m-0 d_timeline-title">
                  2022 - Now
                </h3>
                <div className="pb-10 pl-10 m-0">
                  <h2 className="text-white block text-lg mt-6 mb-0 font-bold tracking-wider">
                    React.JS  Development
                  </h2>
                  <span className="block text-base mb-3 text-primary">
                    Repon Rafins
                  </span>
                  <p className="text-[#c6c6c6]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  tempora perferendis vero officia enim impedit voluptatem
                  dignissimos, veniam ratione est alias rerum aperiam, nam
                  aliquam reprehenderit iste dolor.</p>
                </div>
              </li>
              <li className="d_timeline-item">
                <h3 className="text-white text-base font-medium m-0 d_timeline-title">
                  2023 - Now
                </h3>
                <div className="pb-10 pl-10 m-0">
                  <h2 className="text-white block text-lg mt-6 mb-0 font-bold tracking-wider">
                    Creative Web Designer
                  </h2>
                  <span className="block text-base mb-3 text-primary">
                    Repon Rafins
                  </span>
                  <p className="text-[#c6c6c6]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  tempora perferendis vero officia enim impedit voluptatem
                  dignissimos, veniam ratione est alias rerum aperiam, nam
                  aliquam reprehenderit iste dolor.</p>
                </div>
              </li>
            </ul>
            <ul className="pl-6 relative d_timeline">
                <h2 className="text-4xl text-white font-bold mb-4">Education</h2>
                <li className="d_timeline-item">
                <h3 className="text-white text-base font-medium m-0 d_timeline-title">
                  2015 - 2017
                </h3>
                <div className="pb-10 pl-10 m-0">
                  <h2 className="text-white block text-lg mt-6 mb-0 font-bold tracking-wider">
                  Secondary School - XI
                  </h2>
                  <span className="block text-base mb-3 text-primary">
                    Zilla School, Mymensingh
                  </span>
                  <p className="text-[#c6c6c6]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  tempora perferendis vero officia enim impedit voluptatem
                  dignissimos, veniam ratione est alias rerum aperiam, nam
                  aliquam reprehenderit iste dolor.</p>
                </div>
              </li>
              <li className="d_timeline-item">
                <h3 className="text-white text-base font-medium m-0 d_timeline-title">
                  2017 - 2021
                </h3>
                <div className="pb-10 pl-10 m-0">
                <h2 className="text-white block text-lg mt-6 mb-0 font-bold tracking-wider">
                  Diploma in Engineering - EEE
                  </h2>
                  <span className="block text-base mb-3 text-primary">
                  Mymensingh Polytechnic
                  </span>
                  <p className="text-[#c6c6c6]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  tempora perferendis vero officia enim impedit voluptatem
                  dignissimos, veniam ratione est alias rerum aperiam, nam
                  aliquam reprehenderit iste dolor.</p>
                </div>
              </li>
              <li className="d_timeline-item">
                <h3 className="text-white text-base font-medium m-0 d_timeline-title">
                  2021 - Now
                </h3>
                <div className="pb-10 pl-10 m-0">
                  <h2 className="text-white block text-lg mt-6 mb-0 font-bold tracking-wider">
                  Bachelor of Science - CSC
                  </h2>
                  <span className="block text-base mb-3 text-primary">
                  Northern University,Bangladesh
                  </span>
                  <p className="text-[#c6c6c6]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  tempora perferendis vero officia enim impedit voluptatem
                  dignissimos, veniam ratione est alias rerum aperiam, nam
                  aliquam reprehenderit iste dolor.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
