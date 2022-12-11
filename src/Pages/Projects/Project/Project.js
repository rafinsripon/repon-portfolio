import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button/Button';

const Project = ({pDetail}) => {
  
    return (
        <div className="project_grid px-4">
              <div className="inner">
                <img className='w-full' src={pDetail.img} alt="" />
              </div>
              <Link
                className="p-url text-2xl font-bold text-white font-['Jost']"
              >
                {pDetail.name}
              </Link>
              <p className="text-primary mt-2">{pDetail.pera}</p>
              <Link to={`/projectDetails/${pDetail._id}`}>
                <Button>Explore More</Button>
              </Link>
        </div>
    );
};

export default Project;