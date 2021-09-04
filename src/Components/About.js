import React from "react";

// Description about the webpage
const About = () => {
  return (
      <div class="standard">
      <h1>
        About this Website
      </h1>
      <p>
        I started building this late August 2021 to showcase
        my projects, class code, and of course the ability to make a website in React.js.
        It is a work in progress and I am adding more every day. Go to projects and code to see my work.
      </p>
      <p> The backend is being run in heroku by a python3 flask API. Code found on the projects page.
      </p>
      <a href="https://jbottelb.netlify.app/CHANGELOG.md">
      Change Log
      </a>
      <h2>
          Current TODO list
      </h2>
      <ul>
          <li style={{color: "grey", textDecorationLine: 'line-through'}}>
              Create TODO list
          </li>
          <li style={{color: "grey", textDecorationLine: 'line-through'}}>
              Get styling for strikethrough to check off TODO list
          </li>
          <li style={{color: "grey", textDecorationLine: 'line-through'}}>
              Styling, everywhere
          </li>
          <li style={{color: "grey", textDecorationLine: 'line-through'}}>
              Style project tiles
          </li>
          <li style={{color: "grey", textDecorationLine: 'line-through'}}>
              Move detailed information about this site to own page
          </li>
          <li style={{color: "grey", textDecorationLine: 'line-through'}}>
              Add personal information
          </li>
          <li style={{color: "grey", textDecorationLine: 'line-through'}}>
              Add projects
          </li>
          <li style={{color: "grey", textDecorationLine: 'line-through'}}>
              All (current) relivant projects
          </li>
          <li style={{color: "grey", textDecorationLine: 'line-through'}}>
              Add appropriate content to home page
          </li>
          <li style={{color: "grey", textDecorationLine: 'line-through'}}>
              Style navbar
          </li>
          <li style={{color: "grey", textDecorationLine: 'line-through'}}>
            add interests
          </li>
          <li style={{color: "grey", textDecorationLine: 'line-through'}}>
              Create a message board
          </li>
          <li style={{color: "grey", textDecorationLine: 'line-through'}}>
              Launch Heroku API
          </li>
          <li>
              Pull out skills into component. Load each skill from json instead
          </li>
          <li>
              Put each interest in json and load into components
          </li>
          <li>
              Add more interests, as I am interesting.
          </li>
          <li>
              add photos to interests
          </li>
          <li>
              Finish adding skills
          </li>
          <li>
              Add more personal info
          </li>
          <li>
              Add favorite programming concepts
          </li>
          <li>
              Add a personal Style Guide
          </li>
          <li>
              Finish this page right here
          </li>
          <li>
              Create protected mode where I can add more projects
          </li>

          <li>
              Add portal for me to add projects
          </li>
          <li>
              Move data to heroku api
          </li>
          <li>
              Decorate
          </li>
          <li>
              Add a blog section
          </li>
      </ul>
      </div>
  );
};

export default About;
