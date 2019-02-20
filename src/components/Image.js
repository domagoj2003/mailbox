import React from "react";
const Image = ({ img }) => {
  return (
    <div className="inbox__sender-photo">
      <img src={img} alt="sender photo" className="inbox__sender-photo" />
    </div>
  );
};

export default Image;
