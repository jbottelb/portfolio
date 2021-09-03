import React from "react";
import projectData from "./projectData.json"

import ProjectTile from "./projectTile.js";

// The project page
const ProjectPage = () => {
  return (
      <div class="standard">
      <br/>
        <h1>
            My projects
        </h1>
        <h3>
            (click images to go to projects)
        </h3>

        {
            projectData.map(p => (
                <div class="ProjectTile">
                <ProjectTile title={p.title} image={p.image}
                description={p.description} link={p.link} github={p.github}/>
                </div>
            ))
        }

    </div>
  );
};

export default ProjectPage;
