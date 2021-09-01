import React from "react";
import Layout from "./components/layout";
import MicroFrontend from "./components/micro-frontend";
import { withWidgetWrapper } from "./utils.js";

function ContainerApp() {
  const apps = JSON.parse(document.getElementById("apps").textContent);
  return (
    <Layout>
      {apps
        .map(({ name, host, data }) =>
          withWidgetWrapper(MicroFrontend, { name, host, data })
        )
        .map((Widget, index) => (
          <Widget key={index} />
        ))}
    </Layout>
  );
}

export default ContainerApp;
