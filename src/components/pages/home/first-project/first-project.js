import React from "react";
import { Link } from "react-router-dom";
import TestimonialView from "../../../common/testimonial-view/testimonial-view";

const FirstProject = () => {
  return (
    <div className="py-7 py-md-8 overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-3 order-1 order-lg-0 text-left text-sm-center text-lg-left">
            <h2 className="mr-lg-5">Intelligently applied web development</h2>
            <div className="d-flex justify-content-start justify-content-sm-center justify-content-lg-start">
              <TestimonialView id={1} />
            </div>
            <Link to={"/projects/1"} className="btn btn-outline-light">
              View project
            </Link>
          </div>
          <div className="col-lg-7 pt-5 order-0 order-lg-1">
            <img src="/assets/img/home/cinch-macbook-home.png" alt="cinch" className="img-fluid scale-13 mb-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstProject;
