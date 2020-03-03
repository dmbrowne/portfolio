import React, {useEffect, useState} from 'react'
import './testimonial-view.scss'


function TestimonialView({id}) {
  const [testimonial, setTestimonial] = useState([])

  const getTestimonial = async (id) => {
    const res = await fetch('/assets/data/testimonials.json')

    if (res) {
      const data = await res.json()
      return data.find(item => item.id === id)
    }
    return null
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTestimonial(id)
      setTestimonial(data)
    }
    fetchData()
  }, [])

  return (
    <div className="card border-0 testimonial mb-6">
      {testimonial && (
          <div className="card-body media">
            <img src={testimonial.imgUrl} width="64" className="mr-3 rounded-circle" alt="..."/>
            <div className="media-body text-left">
              <h6 className="mt-0">{testimonial.author} <span
                  className="font-weight-normal">{testimonial.authorPosition}</span></h6>
              <small>{testimonial.text}</small>
            </div>
          </div>
      )}
    </div>
  )
}

export default TestimonialView
