import React from "react";
import SideBySide from "../side-by-side/side-by-side";

const VideoSegment = ({ title, text, media, reverse }) => {
  const VideoContent = ({ src }) => (
    <video controls width="100%" controlslist="nodownload">
      <source src={src} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
  const textContent = (
    <>
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
    </>
  );
  return (
    <SideBySide
      reverse={reverse}
      mediaContent={media && media.src ? <VideoContent src={media.src} /> : undefined}
      textContent={title || text ? textContent : undefined}
    />
  );
};

export default VideoSegment;
