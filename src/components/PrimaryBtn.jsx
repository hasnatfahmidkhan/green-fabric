import React from "react";

const PrimaryBtn = ({ children, className }) => {
  return <button className={`btn btn-primary ${className}`}>{children}</button>;
};

export default PrimaryBtn;
