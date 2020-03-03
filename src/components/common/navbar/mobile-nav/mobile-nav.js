import React from 'react'
import {NavLink} from 'react-router-dom'
import './mobile-nav.scss'

const MobileNav = ({active, setActive}) => {

  return (
    <div className={`mobile-nav ${active === 'init' ? '' : active === 'active' ? 'active' : 'deactive'}`}>
      <div className="mobile-nav__backdrop" onClick={() => setActive('deactive')} />
      <div className="mobile-nav__body">
        <button className="navbar-toggler text-right" type="button" onClick={() => setActive('deactive')}>
          <span className="close-icon mr-4" />
        </button>
        <ul className="nav flex-column my-auto">
          <li className="nav-item">
            <NavLink exact activeClassName="active" className="nav-link text-uppercase text-right font-weight-normal mb-2"
                  to="/"><span>Home</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link text-uppercase text-right font-weight-normal mb-2"
                  to="/projects"><span>Projects</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link text-uppercase text-right font-weight-normal mb-2"
                  to="/team"><span>Team</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link text-uppercase text-right font-weight-normal mb-2"
                  to="/blog"><span>Blog</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link text-uppercase text-right font-weight-normal mb-2"
                  to="/contact"><span>Contact</span></NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileNav
