import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { RiCheckDoubleLine } from "react-icons/ri";

const Modal = ({setPModal, pModal}) => {
    const {img, name, techno, link, slideImg , details, mainDetail} = pModal;
    console.log('pmodal', details.mainDetail)
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
      }
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
          <Slider {...settings}>
                <div>
                    <img src={slideImg[0]} alt="" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={slideImg[1]} alt="" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={slideImg[2]} alt="" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
          </Slider>
          <div className="">
            <h2 className="text-3xl font-bold text-white mt-14">{name}</h2>
            <p className="text-white">{details?.mainDetail}</p>
            <div className="mt-6">
                <div className="flex gap-2 mt-4">
                <span className="text-primary text-2xl"><RiCheckDoubleLine /></span>
                <li className="text-gray-300 list-none">{details?.pera1}</li>
                </div>
                <div className="flex gap-2 mt-4">
                <span className="text-primary text-2xl"><RiCheckDoubleLine /></span>
                <li className="text-gray-300 list-none">{details?.pera2}</li>
                </div>
                <div className="flex gap-2 mt-4">
                <span className="text-primary text-2xl"><RiCheckDoubleLine /></span>
                <li className="text-gray-300 list-none">{details?.pera3}</li>
                </div>
                <div className="flex gap-2 mt-4">
                <span className="text-primary text-2xl"><RiCheckDoubleLine /></span>
                <li className="text-gray-300 list-none">{details?.pera4}</li>
                </div>
            </div>
            <div>
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
