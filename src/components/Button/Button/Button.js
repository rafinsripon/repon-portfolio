import React from "react";
import './Button.css'

const Button = ({children, classes}) => {
  return (
    <div className="relative">
      <button class={`button ${classes}`}>
        <span class={`line block font-['syne'] ${classes}`}></span>
        <h2 class="text mt-2">{children}</h2>
      </button>
    </div>
  );
};

export default Button;
