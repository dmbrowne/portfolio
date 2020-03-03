import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.scss";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ light, short }) => {
  return (
    <footer className={`footer pb-6 pt-6 pt-md-8 ${light ? "footer_light" : "bg-primary text-white"}`}>
      <div className="container">
        {!short && (
          <div className="row">
            <div className="col-sm-7">
              <h2>Have a question, get in touch.</h2>
              <h5 className="mb-5 mb-md-7">No question is silly, I reply no matter what.</h5>
            </div>
            <div className="col-sm-5 pt-3 mb-5 mb-md-0">
              <p className={`small mb-1 ${!light ? "text-light" : "text-muted"}`}>FOR WORK, OR JUST TO SAY HI!</p>
              <p className="mb-4 pb-2 h5">
                <a className={!light ? "text-white" : "text-black"} href="">
                  daryl.browne@fluxionlabs.io
                </a>
              </p>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-md-7 mb-3">© Fluxion labs ltd. {new Date().getFullYear()}</div>
          <div className="col-md-5 mb-3 text-white">
            <Link className={`mr-4 ${!light && "text-white"}`} to="https://www.linkedin.com/in/daryl-browne-b441964a/">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </Link>
            <Link className={`mr-4 ${!light && "text-white"}`} to="https://github.com/dmbrowne/">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
