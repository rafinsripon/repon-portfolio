import React from "react";
import PrimaryButton from "../../components/Button/PrimaryButton";
import "../Home/Home.css";
import TypeWriterEffect from "react-typewriter-effect";
import resume from '../../Assets/Images/Repon_Mia_Resume.pdf'

const Home = () => {
  return (
    <div class="lg:pb-[49px] w-full bg-image">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="py-[94px] lg:w-[60%] w-full">
          <p className="text-lg font-bold text-white">WELCOME TO MY WORLD</p>
          <h2 className="lg:text-6xl md:text-5xl text-4xl font-bold text-white lg:pr-10 mt-4">
            Hi, I'm Ripon Rafins <br />
          </h2>
          <h2 className="flex text-3xl text-white font-extrabold gap-4">
            A
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Syne",
              color: "#FF0080",
              fontWeight: 800,
              fontSize: "30px",
            }}
            startDelay={2000}
            cursorColor="#fff"
            multiText={[
              "Front End Developer",
              "React.JS Developer",
              "Web Developer",
              "Web Designer",
            ]}
            multiTextDelay={1000}
            typeSpeed={30}
            multiTextLoop
          />
          </h2>
          <p className="text-white lg:mt-2 mt-6">
            From Bangladesh, Dhaka.I have rich experience in web Development,
            also I am good at Web Design. I love to talk with you about our
            unique. I have a strong passion for learning & implementing web
            technologies and standards.
          </p>
          <a href={resume} download='Repon_Mia_Resume'>
            <PrimaryButton>Download Resume</PrimaryButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
