import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home/home";
import NoMatch from "./common/no-match/no-match";
import Projects from "./pages/projects/projects";
import SingleProject from "./pages/single-project/single-project";
import Contact from "./pages/contact/contact";

import "../assets/styles/main.scss";
import ScrollTop from "./common/scroll-top/scroll-top";
import ProjectsState from "../context/projects/projects-state";

const ProjectsRoute = ({ match }) => {
  return (
    <ProjectsState>
      <Route exact path={`${match.url}/`} component={Projects} />
      <Route path={`${match.url}/:projectId`} component={SingleProject} />
    </ProjectsState>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={ProjectsRoute} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </ScrollTop>
    </Router>
  );
};

export default App;
