import React from 'react'
import {Link} from 'react-router-dom'

const Offer = (props) => {
  return (
    <div className="container pb-7 pb-md-8">
      <div className="jumbotron img-shadow">
        <div className="row align-items-center">
          <div className="col-md-5">
            <img src="/assets/img/home/izzy-gerosa-80667-unsplash.jpg" alt="project1" className="img-fluid mb-4 mb-md-0" />
          </div>
          <div className="col-md-7 col-lg-6 offset-lg-1">
            <div className="h5">Dream design</div>
            <h2 className="h1">Special Offer</h2>
            <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloribus earum
              eum expedita ipsam maiores
              non obcaecati quos velit veniam? Dolorem eum exercitationem facere in nemo pariatur
              reprehenderit vero
              voluptas!</p>
            <Link to="/" className="btn btn-outline-light">Learn more</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer
