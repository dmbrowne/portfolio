import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import MobileNav from "./mobile-nav/mobile-nav";
import { ReactComponent as LightLogo } from "./assets/light_theme.svg";
import { ReactComponent as DarkLogo } from "./assets/dark_theme.svg";
import "./navbar.scss";

function Navbar({ light, dark }) {
  const [active, setActive] = useState("init");
  const [navbar, setNavbar] = useState(null);

  useEffect(() => {
    setNavbar(document.querySelector(".navbar"));
  }, []);

  if (navbar) {
    window.onscroll = function() {
      if (window.scrollY > 100) {
        navbar.classList.add("short");
      } else {
        navbar.classList.remove("short");
      }
    };
  }

  return (
    <React.Fragment>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${dark ? "navbar-dark bg-dark" : !light ? "bg-primary" : "navbar-light bg-white"}`}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <div style={{ width: 100 }}>{light ? <LightLogo /> : <DarkLogo />}</div>
          </Link>
          <button className="navbar-toggler" type="button" onClick={() => setActive("active")}>
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects" activeClassName="active">
                  Projects
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/team" activeClassName="active">
                  Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog" activeClassName="active">
                  Blog
                </NavLink>
              </li> */}
            </ul>

            <Link className={`btn btn-primary py-2 ml-5 ${!light ? "btn-warning" : "btn-primary"}`} to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <MobileNav active={active} setActive={value => setActive(value)} />
    </React.Fragment>
  );
}

export default Navbar;
