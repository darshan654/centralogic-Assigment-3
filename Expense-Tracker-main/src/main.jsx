// Example of correct import in src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Check this line
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
