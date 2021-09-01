import React from "react";

// The home page.
const Home = () => {
  return (
      <div>
     <h1>
        Welcome to my Portfolio Website
     </h1>
    <p>
      I started building this late August 2021 to showcase
      my projects, class code, and of course the ability to make a website.
      It is a work in progress and I am adding more every day.
    </p>
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
        <li>
            Styling, everywhere
        </li>
        <li>
            Style project tiles
        </li>
        <li>
            Add portal for me to add projects
        </li>
        <li>
            Move data to heroku api
        </li>
        <li>
            Add personal information
        </li>
        <li style={{color: "grey", textDecorationLine: 'line-through'}}>
            Add projects
        </li>
        <li>
            All relivant projects
        </li>
        <li>
            Add appropriate content to home page
        </li>
        <li>
            Create protected mode where I can add more projects
        </li>
        <li>
            Create a message board
        </li>
        <li>
            Move detailed information about this site to own page
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

export default Home;
