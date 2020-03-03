import React from "react";
import classNames from "classnames";

const SideBySide = ({ reverse, mediaContent, textContent }) => {
  const orderClass = reverse ? "order-lg-2" : "order-lg-0";
  const textWidthClass = !!mediaContent ? "col-lg-4" : "col-sm";
  const mediaWidthClass = !!textContent ? ["col-lg-8"] : ["col-lg-10 offset-lg-1"];
  const mediaClasses = classNames("order-1", orderClass, ...mediaWidthClass);
  const textClasses = classNames("order-0", "order-lg-1", "d-flex", "flex-column", "justify-content-center", textWidthClass);
  return (
    <div className="row">
      {!!mediaContent && <div className={mediaClasses}>{mediaContent}</div>}
      {textContent && <div className={textClasses}>{textContent}</div>}
    </div>
  );
};

export default SideBySide;
