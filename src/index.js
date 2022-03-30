import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import env from "react-dotenv";
import App from "./App";

console.log(process.env, "KEY");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
