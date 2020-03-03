import React from "react";

const SegmentText = ({ title, text }) => {
  return (
    <div className="col-lg-4 order-0 order-lg-1 d-flex flex-column justify-content-center">
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
    </div>
  );
};

export default SegmentText;
