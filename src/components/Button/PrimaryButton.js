import React from "react";
import '../Button/PrimaryButton.css'

const PrimaryButton = ({ classes, children }) => {
  return (
    <div to="/" className={`primary_btn_link ${classes}`}>
      <button className={`primary_btn roted ${classes}`}>{children}</button>
    </div>
  );
};

export default PrimaryButton;
