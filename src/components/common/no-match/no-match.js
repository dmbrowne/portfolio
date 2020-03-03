import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import './no-match.scss'

const NoMatch = (props) => {
  return (
    <React.Fragment>
      <Navbar/>
      <div className="contact">
        <div className="container py-5 mt-5">
          <h1 className="mb-0 no-match-header">404 Page <br/>not found</h1>
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  )
}

export default NoMatch