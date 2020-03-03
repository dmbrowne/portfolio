import {GET_PEOPLE, GET_PERSON, SET_LOADING} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_PERSON:
      return {
        ...state,
        person: action.payload,
        loading: false
      }
    case GET_PEOPLE:
      return {
        ...state,
        people: action.payload,
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
