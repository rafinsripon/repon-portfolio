import React from "react";

const SingleProject = ({ project, setPModal }) => {
  const { img, name, techno, link } = project;
  return (
    <>
    <div className="project_grid px-4">
      <div className="inner">
        <img src={img} alt="" />
      </div>
      <a
        className="p-url text-2xl font-bold text-white font-['Jost']"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {name}
      </a>
      <div className="flex gap-3 flex-wrap mt-2">
        {techno &&
          techno?.map((icons) => (
            <img src={icons?.icon} alt="icon" height="25" border-radius="none" />
          ))}
      </div>
      <label 
      htmlFor="my-modal-3" 
      onClick={() => setPModal(project)}
      class="button">
        <div class="button__text">Explore More</div>
        <div class="button__wrapper">
          <div class="button__arrow"></div>
          <div class="button__border-circle"></div>
          <div class="button__mask-circle">
            <div class="button__small-circle"></div>
          </div>
        </div>
      </label>
    </div>
     </>
  );
};

export default SingleProject;
