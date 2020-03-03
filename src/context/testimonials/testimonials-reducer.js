import {GET_TESTIMONIAL, GET_TESTIMONIALS, SET_LOADING} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_TESTIMONIAL:
      return {
        ...state,
        testimonial: action.payload,
        loading: false
      }
    case GET_TESTIMONIALS:
      return {
        ...state,
        testimonials: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
