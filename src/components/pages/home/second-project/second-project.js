import React from "react";
import { Link } from "react-router-dom";
import TestimonialView from "../../../common/testimonial-view/testimonial-view";

const SecondProject = props => {
  return (
    <div className="pb-7 position-relative">
      <div className="rellax fly-shape fly-shape_left" data-rellax-speed="-1.5">
        <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMCwwbDUxMiw1MTJIMFYweiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 col-xl-6">
            <div style={{ padding: "56.22% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/383648887?autoplay=1&loop=1&color=c09999&title=0&byline=0&portrait=0"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="col-md-5 col-xl-5 offset-xl-1">
            <div className="h5">HSBC TeD</div>
            <h2 className="mr-lg-5">Intuitive applications that facilitate changes to the norm</h2>

            <TestimonialView id={3} />

            <Link to="/projects/3" className="btn btn-outline-light">
              View project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondProject;
