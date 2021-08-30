import React from "react";
import Nav from "./Components/nav/Nav.js";
import About from "./Components/About.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
      <Router >
    <div className="App">
      <header className="App-header">
        <Nav />
        <Switch>
            <Route path="/about" exact component={About} />
        </Switch>
        <p>
          Everything is working, surprisingly
        </p>
      </header>
    </div>
    </ Router>
  );
}

export default App;
