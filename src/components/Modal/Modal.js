import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiCheckDoubleLine } from "react-icons/ri";
import pic1 from "../../Assets/Images/slideImg/p1.jpg";
import pic2 from "../../Assets/Images/slideImg/p2.jpg";
import Button from "../Button/Button/Button";
import './Modal.css'
import { Link } from "react-router-dom";

const Modal = ({ setPModal, pModal }) => {
  const { name, techno, slideImg, details, client, server, link } = pModal;
  console.log("pmodal", details.mainDetail);
  // console.log(mainDetail)
  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-[#0f1316] max-w-4xl rounded-none">
          <label
            htmlFor="my-modal-3"
            className="btn btn-md btn-circle absolute right-2 top-2 text-primary z-20"
          >
            ✕
          </label>
          <h2 className="text-3xl font-bold text-white pb-4">{name}</h2>
          <p className="text-white pb-8">{details?.mainDetail}</p>
          <Slider {...settings}>
            <div>
              <img src={slideImg[0]} alt="" />
            </div>
            <div>
              <img src={slideImg[1]} alt="" />
            </div>
            <div>
              <img src={slideImg[2]} alt="" />
            </div>
          </Slider>
          <div className="mt-12">
            <div className="flex gap-3 flex-wrap mt-4">
              {techno &&
                techno?.map((icons) => (
                  <img
                    className="h-10"
                    src={icons?.icon}
                    alt="icon"
                    height="32"
                    border-radius="none"
                  />
                ))}
            </div>
            <div className="mt-6">
              <div className="flex gap-2 mt-4">
                <span className="text-primary text-2xl">
                  <RiCheckDoubleLine />
                </span>
                <li className="text-gray-300 list-none">{details?.pera1}</li>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="text-primary text-2xl">
                  <RiCheckDoubleLine />
                </span>
                <li className="text-gray-300 list-none">{details?.pera2}</li>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="text-primary text-2xl">
                  <RiCheckDoubleLine />
                </span>
                <li className="text-gray-300 list-none">{details?.pera3}</li>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="text-primary text-2xl">
                  <RiCheckDoubleLine />
                </span>
                <li className="text-gray-300 list-none">{details?.pera4}</li>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-white font-bold text-3xl">My Approach</h2>
              <p className="text-gray-300 mt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
                est neque impedit odio voluptate temporibus tempora inventore
                cum beatae voluptatibus quaerat voluptates quae soluta pariatur!
                Vitae laboriosam eveniet ut pariatur.
              </p>
              <div className="flex items-center gap-14">
              <a href={link} target="_blank" rel="noreferrer">
              <Button classes='modalBtn'>Live Link</Button>
              </a>
              <a href={client} target="_blank" rel="noreferrer">
              <Button classes=''>client site Code</Button>
              </a>
              <a href={server} target="_blank" rel="noreferrer">
              <Button classes=''>server site code</Button>
              </a>
              </div>
              <div className="flex justify-between w-full mt-12">
                <img
                  className="lg:w-[45%] lg:block hidden rounded-sm"
                  src={pic1}
                  alt=""
                />
                <img
                  className="lg:w-[45%] w-full rounded-sm"
                  src={pic2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
