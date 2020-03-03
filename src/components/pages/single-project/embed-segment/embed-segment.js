import React from "react";
import SideBySide from "../side-by-side/side-by-side";

const EmbedSegment = ({ title, text, media, reverse }) => {
  const IFrameContent = ({ src }) => (
    <div style={{ padding: "56.22% 0 0 0", position: "relative" }}>
      <iframe
        src={src}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      />
    </div>
  );
  const textContent = (
    <>
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
    </>
  );
  return (
    <SideBySide
      reverse
      mediaContent={media && media.src ? <IFrameContent src={media.src} /> : undefined}
      textContent={title || text ? textContent : undefined}
    />
  );
};

export default EmbedSegment;
