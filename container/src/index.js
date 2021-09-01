import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ContainerApp from "./app";

ReactDOM.render(
  <React.StrictMode>
    <ContainerApp />
  </React.StrictMode>,
  document.getElementById("root")
);
