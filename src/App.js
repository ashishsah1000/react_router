import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch></Switch>
        <h1>Hello CodeSandbox</h1>
        <h2>Edit to see some magic happen!</h2>
      </div>
    </Router>
  );
}
