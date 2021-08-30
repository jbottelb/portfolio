import React from "react";
import Nav from "./Components/nav/Nav.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
      <Router >
    <div className="App">
      <header className="App-header">
      <Nav />
        <p>
          Everything is working, surprisingly
        </p>
      </header>
    </div>
    </ Router>
  );
}

export default App;
