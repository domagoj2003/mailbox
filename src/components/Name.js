import React from "react";

const Name = ({ name }) => {
  return (
    <div className="inbox__sender-name">
      <p className="inbox__sender-name inbox__sender-name--1">{name}</p>
    </div>
  );
};

export default Name;
