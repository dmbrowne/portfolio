import React from "react";
import { ReactComponent as SmartPension } from "../../../../assets/icons/smart-pension-mono.svg";
import { ReactComponent as Audi } from "../../../../assets/icons/audi-mono.svg";
import { ReactComponent as Cinch } from "../../../../assets/icons/cinch-mono.svg";
import { ReactComponent as Hsbc } from "../../../../assets/icons/hsbc-mini-mono.svg";
import { ReactComponent as Somo } from "../../../../assets/icons/somo-mono.svg";
import "./home-header.scss";

const HomeHeader = () => {
  return (
    <header className="container hero">
      <div className="my-auto">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="d-flex flex-row">
              <h1 style={{ fontFamily: "Playfair Display", letterSacing: 1.2 }}>fluxion</h1>
              <span>noun</span>
            </div>
            <h4>flux·​ion | \ ˈflək-shən</h4>
            {/* <h4 className="mt-5">Digital design studio</h4> */}
            <h3>1: the action of flowing or changing</h3>
            <h1>
              Intuity<span style={{ color: "#fff", opacity: 0.3 }}>.</span> Skill<span style={{ color: "#fff", opacity: 0.3 }}>.</span>{" "}
              Intelligence<span style={{ color: "#fff", opacity: 0.3 }}>.</span>
            </h1>
            <h2>We build websites, web apps, progressive web applications, native apps.</h2>
          </div>
        </div>
      </div>
      <div className="op-5 mb-5 home-brands">
        <h5 className="">Trusting clients</h5>
        <div className="row justify-content-md-center align-items-center overflow-x-auto">
          <div className="col-sm-4">
            <div className="mb-4" children={<SmartPension style={{ maxWidth: 280 }} />} />
          </div>
          <div className="col-sm-2">
            <div className="mb-4" children={<Audi style={{ maxWidth: 100 }} />} />
          </div>
          <div className="col-sm-2">
            <div className="mb-4" children={<Cinch style={{ maxWidth: 120 }} />} />
          </div>
          <div className="col-auto">
            <div className="mb-4" children={<Hsbc style={{ maxWidth: 60 }} />} />
          </div>
          <div className="col-sm-2">
            <div className="mb-4" children={<Somo />} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
