import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import * as tinyColor from "tinycolor2";
import "./project-preview.scss";

const ProjectPreview = ({ project }) => {
  const { brand, title, category, imgPreviewUrl, textColorClass, bgColorClass, bgHexColor } = project;
  const classes = classnames("row", { [textColorClass]: !!textColorClass, [bgColorClass]: !!bgColorClass });
  const color = tinyColor(bgHexColor).toRgbString();
  const firstStop = tinyColor(color).setAlpha(0.8);
  const secondStop = tinyColor(color).setAlpha(0.5);
  const transparent = tinyColor(color)
    .setAlpha(0.3)
    .toRgbString();

  const containerClasses = classnames("project-preview", "mb-5", "mb-md-7", "block-link", { pointer: !project.noPortfolio });
  const Container = !project.noPortfolio
    ? ({ children }) => <Link className={containerClasses} to={`/projects/${project.id}`} children={children} />
    : ({ children }) => <div className={containerClasses} children={children} />;
  const gradientAndImageBg = `
    linear-gradient(90deg, ${color}, ${color} 40%, ${firstStop} 50%, ${secondStop}60%, ${transparent} 70%, ${transparent}),
    url(${imgPreviewUrl}) center right / cover no-repeat
  `;

  return (
    <Container>
      <div className="container ">
        <div className={classes} style={{ background: imgPreviewUrl ? gradientAndImageBg : bgHexColor }}>
          <div className="col-md-6 p-5 project-preview__text">
            <div className="brand-logo h5 row">
              {[project.clientLogo, project.brandLogo].map(
                logoSrc => logoSrc && <img className="m-1" style={{ width: 50 }} src={logoSrc} />
              )}
            </div>
            <header>
              <h2 className="ml-4" children={title} />
              {project.noPortfolio && project.liveUrl && (
                <div className="ml-4">
                  View at <a href={project.liveUrl}>{project.liveUrl}</a>
                </div>
              )}
            </header>
            <div className="project-category">{category}</div>
          </div>
          {project.thumbnail && (
            <div className="col-md-6 text-center">
              <img src={project.thumbnail} className="img-fluid" style={{ maxHeight: "590px", height: "60vh" }} />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ProjectPreview;
