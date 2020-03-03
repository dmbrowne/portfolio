import React, {useReducer} from 'react'
import TestimonialsContext from './testimonials-context'
import TestimonialsReducer from './testimonials-reducer'
import {GET_TESTIMONIAL, GET_TESTIMONIALS, SET_LOADING} from '../types'

const TestimonialsState = props => {
  const initialState = {
    testimonial: {},
    testimonials: [],
    loading: false
  }

  const [state, dispatch] = useReducer(TestimonialsReducer, initialState)

  const getTestimonial = async (id) => {
    const res = await fetch('/assets/data/testimonials.json')

    if (res) {
      const data = await res.json()
      dispatch({
        type: GET_TESTIMONIAL,
        payload: data.find(item => item.id === id)
      })
    }
  }

  return <TestimonialsContext.Provider
    value={{
      testimonial: state.testimonial,
      testimonials: state.testimonials,
      loading: state.loading,
      getTestimonial
    }}
  >
    {props.children}
  </TestimonialsContext.Provider>
}

export default TestimonialsState
