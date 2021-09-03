import React from "react";
import photo from "../../img/standing.JPEG"
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png"
import Interests from "./interests.js"

// The home page
// Is a flex box of informational items

// skills should be own component
const Home = () => {
  return (
  <div class="standard">
  <div class="flex-container">
      <img class="standing" src={photo} alt=""/>
      <div class="profile">
         <h1>
            Josh Bottelberghe
         </h1>
         <p>
            I am a current senior Computer Science Major at the University of
            Notre Dame, currently seeking job oppertunities. I am interested in
            working either backend or full stack, but am open to any oppertunity
            that is challenging and engaging.
         </p>
         <a href="https://docs.google.com/document/d/1Pn9mLPk-vw_ZWL7FWr7AQmqGVuHORJ_dFsjbeY7cZX0/edit?usp=sharing">
         <h4 class="link">RESUME</h4>
         </a>
         <h4>
            Email: jbottelb@nd.edu
         </h4>
         <a href="https://github.com/jbottelb">
            <img class="github2" src={github} alt="github"/>
         </a>
         <a href="https://www.linkedin.com/in/josh-bottelberghe-4a98a81a7/">
            <img class="linkedin" src={linkedin} alt="linkedin"/>
         </a>
      </div>

      <div class="skills">
        <h2>Skills</h2>
        <ul>
            <li>Python 3</li>
            <li>C/C++</li>
            <li>Java</li>
            <li>MySQL</li>
            <li>LAMP</li>
            <li>Linux/UNIX</li>
            <li>PHP</li>
            <li>React JS</li>
            <li>HTML/CSS</li>
            <li>Natural Language Processing</li>
            <li>Database Design</li>
            <li>Go</li>
            <li>Machine Learing</li>
        </ul>
      </div >
      <div class="interests">
          <Interests class="interests" />
          </div>

        </div>
    </div>
  );
};

export default Home;
