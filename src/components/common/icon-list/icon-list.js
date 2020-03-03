import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./icon-list.scss";

const IconList = ({ icons, size, children }) => {
  return (
    <div className="icon-list">
      {icons.map((icon, i) => (
        <FontAwesomeIcon key={i} icon={icon} size={size} />
      ))}
      {children}
    </div>
  );
};
export default IconList;
