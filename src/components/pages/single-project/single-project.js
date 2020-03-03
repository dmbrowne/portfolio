import React, { useContext, useEffect } from "react";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import "./single-project.scss";
import ProjectsContext from "../../../context/projects/projects-context";
import ImgListSegment from "./img-list-segment/img-list-segment";
import ImgSegment from "./img-segment/img-segment";
import EmbedSegment from "./embed-segment/embed-segment";
import VideoSegment from "./video-segment/video-segment";
import { Link } from "react-router-dom";

const renderSegment = (segment, extra) => {
  if (segment.imgList) {
    return <ImgListSegment {...segment} />;
  } else if (segment.media && segment.media.type === "image") {
    return <ImgSegment {...segment} reverse={extra.idx % 2} />;
  } else if (segment.media && segment.media.type === "embed") {
    return <EmbedSegment {...segment} reverse={extra.idx % 2} />;
  } else if (segment.media && segment.media.type === "video") {
    return <VideoSegment {...segment} reverse={extra.idx % 2} />;
  }
};

const SingleProject = ({ match }) => {
  const { projectsById, getProjects } = useContext(ProjectsContext);
  const project = projectsById[match.params.projectId];
  console.log(projectsById);
  useEffect(() => {
    getProjects();
  }, []);

  if (!project) {
    return null;
  }

  return (
    <div className="projects">
      <Navbar dark />

      <div className="project bg-dark text-light">
        {project.banner && <div className="bg-image" style={{ background: `url(${project.banner})` }}></div>}

        <div className="py-5 py-md-8 d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <h1>{project.title}</h1>
              </div>
              <div className="col-lg-7">
                <h5 className="mb-2">{project.projectDescription}</h5>
                <p className="mb-4 pt-4" style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: project.about }} />
                <h5 className="mb-2">Platforms:</h5>
                <h5 className="mb-2 mb-4">
                  {project.categories.map(category => (
                    <span class="badge badge-secondary mr-2" children={category} />
                  ))}
                </h5>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="btn btn-outline-primary btn-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    children={`Go to ${project.title}`}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          {project.segments.map((segment, idx) => (
            <div key={idx} className="pb-7 pb-md-8">
              {renderSegment(segment, { idx })}
            </div>
          ))}
        </div>
      </div>

      <Footer light />
    </div>
  );
};

export default SingleProject;
