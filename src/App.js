import React from "react";
import Nav from "./Components/nav/Nav.js";
import About from "./Components/About.js";
import Home from "./Components/home/home.js";
import MessageBoard from "./Components/MessageBoard/MessageBoard.js";
import ProjectPage from "./Components/projects/ProjectPage.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/styles.css";
import Parse from "parse";
import * as Env from "./enviroment.js";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

// root of application
function App() {
  return (
      <Router >
    <div className="App">
      <header className="App-header">
        <Nav />
        <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={ProjectPage} />
            <Route path="/messages" exact component={MessageBoard} />
        </Switch>
      </header>
    </div>
    </ Router>
  );
}

export default App;
