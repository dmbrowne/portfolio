import React, { useReducer } from "react";
import { GET_PROJECTS, SET_LOADING, SET_PROJECT_ORDER } from "../types";
import ProjectsReducer from "./projects-reducer";
import ProjectsContext from "./projects-context";

const ProjectsState = props => {
  const initialState = {
    projectsById: {},
    projectsOrder: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(ProjectsReducer, initialState);

  const getProjects = async () => {
    dispatch({ type: SET_LOADING });
    const resp = await fetch("/assets/data/projects.json");
    if (resp.ok) {
      const projects = await resp.json();
      dispatch({
        type: SET_PROJECT_ORDER,
        payload: projects.map(({ id }) => id),
      });
      dispatch({
        type: GET_PROJECTS,
        payload: projects.reduce((accum, project) => ({ ...accum, [project.id]: project }), {}),
      });
    }
  };
  return (
    <ProjectsContext.Provider
      value={{
        projectsById: state.projectsById,
        projects: state.projectsOrder.map(id => state.projectsById[id]),
        loading: state.loading,
        getProjects,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsState;
