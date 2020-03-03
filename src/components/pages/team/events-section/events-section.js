import React from 'react'

const EventsSection = () => {
  return (
    <div className="mb-5 mb-lg-7">
      <h2 className="h1 mb-5">We on DevConf</h2>

      <div className="row mb-5">
        <div className="col-sm-4 col-lg-3 col-xl-2">
          <img src="/assets/img/team/alex-kotliarskyi-361099-unsplash.jpg" alt="" className="img-fluid mb-4" />
        </div>
        <div className="col-sm-8 col-xl-7 d-flex flex-column justify-content-center">
          <h4><b>The development process in a small company</b></h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eveniet, facilis id mollitia non
            numquam praesentium repudiandae sed temporibus vero? Deleniti dicta dolorum eaque, eius est excepturi
            nobis quidem unde?</p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4 col-lg-3 col-xl-2">
          <img src="/assets/img/team/ali-yahya-1103196-unsplash.jpg" alt="" className="img-fluid mb-4" />
        </div>
        <div className="col-sm-8 col-xl-7 d-flex flex-column justify-content-center">
          <h4><b>My team is my strength</b></h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eveniet, facilis id mollitia non
            numquam praesentium repudiandae sed temporibus vero? Deleniti dicta dolorum eaque, eius est excepturi
            nobis quidem unde?</p>
        </div>
      </div>
    </div>
  )
}

export default EventsSection