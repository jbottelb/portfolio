import React from "react";
import Nav from "./Components/nav/Nav.js";
import About from "./Components/About.js";
import Home from "./Components/home.js"
import ProjectPage from "./Components/projects/ProjectPage.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
      <Router >
    <div className="App">
      <header className="App-header">
        <Nav />
        <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/home" exact component={Home} />
            <Route path="/projects" exact component={ProjectPage} />
        </Switch>
      </header>
    </div>
    </ Router>
  );
}

export default App;
