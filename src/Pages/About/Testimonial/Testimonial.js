import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "../Testimonial/Testimonial.css";


const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    arrows:false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <section>
      <div className="bg-[#151c1f] lg:p-24 py-20 px-8">
        <div>
          <p className="text-primary text-lg font-bold">
            What my clients think about me
          </p>
          <h2 className="capitalize lg:text-4xl text-3xl font-extrabold w-[50%] leading-tight text-white mt-4 mb-3">
            Testimonials
          </h2>
          <div class=" animated-bar inherit"></div>
        </div>
      </div>
      <div class="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:pt-0 sm:pb-24 lg:mr-0 lg:pl-8 lg:pr-0">
        
      <Slider {...settings}>
      <div class="w-full max-w-[35rem] px-8 py-4 mt-16 rounded-lg shadow-lg dark:bg-[#162127]">
              <div class="flex justify-center -mt-16 md:justify-end">
                <img
                  class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                  alt="Testimonial avatar"
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                />
              </div>

              <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
                Design Tools
              </h2>

              <p class="mt-2 text-gray-600 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>

              <div class="flex justify-end mt-4">
                <a
                  href="#"
                  class="text-xl font-medium text-blue-600 dark:text-blue-300"
                  tabindex="0"
                  role="link"
                >
                  John Doe
                </a>
              </div>
            </div>
            <div class="w-full max-w-[35rem] px-8 py-4 mt-16 rounded-lg shadow-lg dark:bg-[#162127]">
              <div class="flex justify-center -mt-16 md:justify-end">
                <img
                  class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                  alt="Testimonial avatar"
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                />
              </div>

              <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
                Design Tools
              </h2>

              <p class="mt-2 text-gray-600 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>

              <div class="flex justify-end mt-4">
                <a
                  href="#"
                  class="text-xl font-medium text-blue-600 dark:text-blue-300"
                  tabindex="0"
                  role="link"
                >
                  John Doe
                </a>
              </div>
            </div>
            <div class="w-full max-w-[35rem] px-8 py-4 mt-16 rounded-lg shadow-lg dark:bg-[#162127]">
              <div class="flex justify-center -mt-16 md:justify-end">
                <img
                  class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                  alt="Testimonial avatar"
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                />
              </div>

              <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
                Design Tools
              </h2>

              <p class="mt-2 text-gray-600 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>

              <div class="flex justify-end mt-4">
                <a
                  href="#"
                  class="text-xl font-medium text-blue-600 dark:text-blue-300"
                  tabindex="0"
                  role="link"
                >
                  John Doe
                </a>
              </div>
            </div>
            <div class="w-full max-w-[35rem] px-8 py-4 mt-16 rounded-lg shadow-lg dark:bg-[#162127]">
              <div class="flex justify-center -mt-16 md:justify-end">
                <img
                  class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                  alt="Testimonial avatar"
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                />
              </div>

              <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
                Design Tools
              </h2>

              <p class="mt-2 text-gray-600 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>

              <div class="flex justify-end mt-4">
                <a
                  href="#"
                  class="text-xl font-medium text-blue-600 dark:text-blue-300"
                  tabindex="0"
                  role="link"
                >
                  John Doe
                </a>
              </div>
            </div>
      </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
