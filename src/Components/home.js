import React from "react";
import photo from "../img/standing.JPEG"

// The home page.
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
            Notre Dame, currently seeking job oppertunities.  
         </p>
      </div>
    </div>
    </div>
  );
};

export default Home;
