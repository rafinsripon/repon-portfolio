import React from "react";
import "./Contact.css";
import { ImMap } from "react-icons/im";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhoneVolume, FaTelegramPlane } from "react-icons/fa";
import Button from "../../components/Button/Button/Button";
import { toast } from "react-hot-toast";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6ulobbd', 'template_h6qe4na', form.current, 'c-t78vxQfryZFhAqN')
          .then((result) => {
              toast.success('🚀Message Send Success Fully Done')
          }, (error) => {
            toast.error('oppos', error.text)
              console.log(error.text);
          });
          e.target.reset();
      };
  return (
    <div className="contact pt-12 pb-20">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="text-center">
          <p className="text-primary text-lg font-bold">
            Feel free to contact me anytimes?
          </p>
          <h2 className="font-[900] lg:text-6xl md:text-4xl text-4xl  text-white opacity-[0.8] mt-2 mb-4">
            Get in Touch
          </h2>
          <div class="animated-bar animatedbar_service"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mt-14">
          <form ref={form} onSubmit={sendEmail}>
          <div className="lg:flex gap-4 relative">
              <input
                class="form-controls w-full"
                id="contact-name"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <input
                class="form-controls w-full"
                id="contact-name"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <input
              class="form-controls w-full mt-10"
              id="contact-name"
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea
            name="massage"
            required
              className="form-controls textarea w-full mt-12"
              placeholder="Message"
            ></textarea>
            <Button classes={`buttons`}>
                CONTACT ME
            </Button>
          </form>
          <div>
            <h2 className="text-2xl font-extrabold text-white">Contact Info</h2>
            <div className="flex items-center mt-6">
              <span className="text-4xl mr-2 text-primary">
                <ImMap />
              </span>
              <div className="border-l-2 border-l-white px-4">
                <h2 className="text-2xl font-bold text-white">My Name</h2>
                <h2 className="font-bold text-primary">Repon Rafin</h2>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-4xl mr-2 text-primary">
                <FaMapMarkerAlt />
              </span>
              <div className="border-l-2 border-l-white px-4 py-6">
                <h2 className="text-2xl font-bold text-white">My Location</h2>
                <h2 className="font-bold text-primary">
                  Dhaka, Gazipur - 76A, Bangladesh
                </h2>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-4xl mr-2 text-primary">
                <FaPhoneVolume />
              </span>
              <div className="border-l-2 border-l-white px-4">
                <h2 className="text-2xl font-bold text-white">My Number</h2>
                <h2 className="font-bold text-primary">+8801990906128</h2>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-4xl mr-2 text-primary">
                <FaTelegramPlane />
              </span>
              <div className="border-l-2 border-l-white px-4 pt-6">
                <h2 className="text-2xl font-bold text-white">My Email</h2>
                <h2 className="font-bold text-primary">
                  rafinsripon@gmail.com
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
