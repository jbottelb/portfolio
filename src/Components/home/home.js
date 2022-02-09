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
            Notre Dame. I recently accepted an offer to work as a Software Engineer at 
         </p>
         <a href="https://www.alkira.com/cloud-dmz/">
         Alkira
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
            <li>Go</li>
            <li>PHP</li>
            <li>React JS</li>
            <li>HTML/CSS</li>
            <li>Natural Language Processing</li>
            <li>Computer Networking</li>
            <li>Database Design</li>
            <li>Machine Learning</li>
        </ul>
        <h2>Elective CS Classes</h2>
        <ul>
            <li>Natural Language Processing</li>
            <li>Distributed Systems (IP)</li>
            <li>Database Concepts</li>
            <li>Programming Challenges</li>
            <li>Machine Learning (IP)</li>
            <li>Operating Systems</li>
            <li>Data Science</li>
            <li>Modern Web Development</li>
            <li>Computer Security</li>
            <li>Computer Networks</li>
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
