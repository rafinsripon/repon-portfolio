import React from "react";
import { SData } from "../../../data/ServiceData";
import '../Services/Services.css'
import Service from "./Service";
import service1 from '../../../Assets/Images/s1.png'
import service2 from '../../../Assets/Images/s6.png'

const Services = () => {
  return (
    <div className="mt-32 bg-[#191f22d0]">
        <div className="bg-[#151c1f] lg:p-24 py-20 px-8">
            <div>
            <p className="text-primary text-lg font-bold">Services i offer to my clients</p>
            <h2 className="capitalize lg:text-4xl text-3xl font-extrabold w-[50%] leading-tight text-white mt-4 mb-3">SERVICES AND SOLUTIONS</h2>
            <div class=" animated-bar inherit"></div>
            </div>
        </div>
        <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
    <div class="single-service active">
        <div class="service-icon">
          <img src={service1} alt="" />
        </div>
        <div class="service-text">
          <h4>React Js Development</h4>
          <p>Need a project completed by an expert? Let’s go! Access a Human Resources Consultant to answer questions</p>
        </div>
        <div class="circles-wrap">
          <div class="circles">
            <span class="circle circle-1"></span>
            <span class="circle circle-2"></span>
            <span class="circle circle-3"></span>
            <span class="circle circle-4"></span>
          </div>
        </div>
      </div>
        {
            SData.map(service => <Service 
            key={service.id}
            service={service}/>)
        }
        <div class="single-service active">
        <div class="service-icon">
          <img className="rotate-45" src={service2} alt="" />
        </div>
        <div class="service-text">
          <h4>PSD Design</h4>
          <p>Need a project completed by an expert? Let’s go! Access a Human Resources Consultant to answer questions</p>
        </div>
        <div class="circles-wrap">
          <div class="circles">
            <span class="circle circle-1"></span>
            <span class="circle circle-2"></span>
            <span class="circle circle-3"></span>
            <span class="circle circle-4"></span>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    
  );
};

export default Services;
