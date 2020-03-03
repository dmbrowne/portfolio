import React from "react";

const ImgList = ({ imgSrcs }) => {
  const columWidth = imgSrcs.length === 2 ? "col-lg-6" : imgSrcs.length === 3 ? "col-lg-4" : "col-lg-3";
  return (
    <div className="row">
      {imgSrcs.map(imgSrc => (
        <div className={`col-sm-6 ${columWidth} align-items-center d-flex`}>
          {imgSrc && <img src={imgSrc} style={{ maxWidth: "100%" }} />}
        </div>
      ))}
    </div>
  );
};

export default ImgList;
