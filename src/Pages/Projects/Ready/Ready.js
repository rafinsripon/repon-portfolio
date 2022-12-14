import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../components/Button/PrimaryButton';

const Ready = () => {
    return (
        <div className="">
      <div className="section bg-[#141717]">
        <div className="portfolio-bottom-link">
          <h2 className="text-4xl font-extrabold">Are You Ready?</h2>
          <Link to='/contact'>
          <PrimaryButton>Contact Me</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default Ready;