import React from "react";
import projectData from "./projectData.json"
import ProjectTile from "./projectTile.js";

// The project page
// loads project infor from json file. Very convinient
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
        <div class="flex-container">
        {
            projectData.map(p => (
                <div class="ProjectTile">
                <ProjectTile title={p.title} image={p.image}
                description={p.description} link={p.link} github={p.github}/>
                </div>
            ))
        }
        </div>

    </div>
  );
};

export default ProjectPage;
