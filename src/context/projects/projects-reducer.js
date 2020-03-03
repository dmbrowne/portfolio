import { GET_PROJECTS, SET_LOADING, SET_PROJECT_ORDER } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_PROJECT_ORDER:
      return {
        ...state,
        projectsOrder: action.payload,
      };
    case GET_PROJECTS:
      return {
        ...state,
        projectsById: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
