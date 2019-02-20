import React from "react";

const Text = ({ text }) => {
  return (
    <div className="inbox__text">
      <p className="inbox__text">{text.slice(0, 150)}</p>
    </div>
  );
};

export default Text;
