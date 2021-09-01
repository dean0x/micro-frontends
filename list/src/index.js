import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./index.css";

if (!document.getElementById("List-container")) {
  const mockData = ["Item 1", "Item 2", "Item 3"];
  ReactDOM.render(
    <React.StrictMode>
      <App data={mockData} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

window.renderList = (containerId, data) => {
  ReactDOM.render(<App data={data} />, document.getElementById(containerId));
};

window.unmountList = (containerId) => {
  ReactDOM.render(<App />, document.getElementById(containerId));
};
