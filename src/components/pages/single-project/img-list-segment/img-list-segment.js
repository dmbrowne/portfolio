import React from "react";
import ImgList from "../img-list/img-list";

const ImgListSegment = ({ title, text, imgList }) => {
  return (
    <div>
      <h2 className="text-center">{title}</h2>
      <p className="text-center">{text}</p>
      <ImgList imgSrcs={imgList} />
    </div>
  );
};

export default ImgListSegment;
