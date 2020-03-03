import React from "react";
import SideBySide from "../side-by-side/side-by-side";

const ImgSegment = ({ title, text, media, reverse }) => {
  return (
    <SideBySide
      reverse
      mediaContent={media && media.src ? <img src={media.src} alt="" className="img-fluid mt-3 mt-lg-0" /> : undefined}
      textContent={
        title || text ? (
          <>
            {title && <h2>{title}</h2>}
            {text && <p>{text}</p>}
          </>
        ) : (
          undefined
        )
      }
    />
  );
};

export default ImgSegment;
