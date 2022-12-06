import React from "react";


const Service = ({ service }) => {
  return (
    <div>
      <div class="single-service">
        <div class="service-icon">
          <img src={service.image} alt="" />
        </div>
        <div class="service-text">
          <h4>{service.title}</h4>
          <p>{service.pera}</p>
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
  );
};

export default Service;
