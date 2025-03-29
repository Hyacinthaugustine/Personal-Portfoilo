import React from "react";

const Button = ({ ButtonText, className }) => {
  return <div className={`${className}`}>{ButtonText}</div>;
};

export default Button;
