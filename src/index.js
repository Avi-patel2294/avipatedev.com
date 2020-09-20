import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-snapshot";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,

  document.getElementById("root")
);
// );
