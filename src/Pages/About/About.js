import React from "react";
import about from '../../Assets/Images/about.png';
import sape from '../../Assets/Images/aboutSape.svg';
import PrimaryButton from "../../components/Button/PrimaryButton";
import "../About/About.css";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const About = () => {
  return (
    <div className="about pt-10 pb-20">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="text-center">
        <p className="text-primary text-lg font-bold">Who Am I?</p>
        <h2 className="font-[900] lg:text-6xl md:text-4xl text-4xl  text-white opacity-[0.8] mt-2 mb-4">About Me</h2>
           <div class="animated-bar animatedbar_service"></div>
        </div>
        <div className="lg:flex mt-20">
           <div className="relative z-10 lg:w-[50%] w-full">
           <img className="lg:w-[80%] w-full h-[510px] object-cover rounded-lg" src={about} alt="" />
            <img className="absolute -left-16 -bottom-20 w-[58%] z-[-1]" src={sape} alt="" />
           </div>
            <div className="flex-1 lg:mt-10 mt-24">
                <h2 className="text-3xl font-bold text-white">I'm Rafins Repon, a Creative Web Designer and Web Developer</h2>
                <p className="text-gray-500 mt-8 about_p">I am a Front-End Developer based in the Bangladesh and i have been building noteworthy Web Developer and websites for years, which comply with the latest develper trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and idia faster.</p>
                <div className="divider bg-gray-400 h-[2px]"></div> 
                <div className="lg:flex md:flex lg:justify-between justify-start">
                    <div className="mt-2">
                    <h4 className="text-lg font-[600] text-white">Name: <span className="text-gray-400">Rafins Repon</span></h4>
                    <h4 className="text-lg font-[600] text-white">Age: <span className="text-gray-400">22 Years</span></h4>
                    </div>
                    <div className="mt-2 mb-4">
                        <h4 className="text-lg font-[600] text-white">Email: <span className="text-gray-400">rafinsripon@gmail.com</span></h4>
                        <h4 className="text-lg font-[600] text-white">From: <span className="text-gray-400">Bangladesh, Dhaka</span></h4>
                    </div>
                </div>
                <div className="about-btn-wapper">
                <PrimaryButton classes='btn_About'>Download CV</PrimaryButton>
                </div>
            </div>
        </div>
      </div>
      <Services />
      <Testimonial />
    </div>
  );
};

export default About;
