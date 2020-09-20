import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
//import "./index.css";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Work from "./Work";
import Skills from "./Skills";
import Contact from "./Contact";
import Navbar from "./Navbar";

import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
        <Home />
      </Switch>
    </>
  );
};

export default App;
