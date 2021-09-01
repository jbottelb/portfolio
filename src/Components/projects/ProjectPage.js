import React from "react";
import projectData from "./projectData.json"

import ProjectTile from "./projectTile.js";

// The project page
const ProjectPage = () => {
  return (
      <div>
        <h1>
            My projects
        </h1>
        <a href="github.com/jbottelb">
          My github profile
        </a>
        {
            projectData.map(p => (
                <div>
                <ProjectTile title={p.title} image={p.image}
                description={p.description} link={p.link} github={p.github}/>
                <br />
                </div>
            ))
        }
    </div>
  );
};

export default ProjectPage;
