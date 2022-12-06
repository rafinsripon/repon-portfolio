import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import PrimaryButton from '../../components/Button/PrimaryButton';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar';
import '../Home/Home.css'

const Home = () => {
  
    return (
      <div class="lg:pb-[49px] w-full bg-image">
        <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className='py-28 lg:w-[60%] w-full'>
            <p className='text-lg font-bold text-white'>WELCOME TO MY WORLD</p>
            <h2 className='lg:text-6xl md:text-5xl text-4xl font-bold text-white lg:pr-10 mt-4'>Hi, I'm Ripon Rafins</h2>
            <p className='text-white lg:mt-2 mt-6'>From Bangladesh, Dhaka.I have rich experience in web Development, also I am good at Web Design. I love to talk with you about our unique. I have a strong passion for learning & implementing new web technologies and standards.</p>
            <Link>
            <PrimaryButton>Learn More</PrimaryButton>
            </Link>
            </div>
        </div>
    </div>
    );
};

export default Home;