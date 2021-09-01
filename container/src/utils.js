import React from "react";
import WidgetContainer from "./components/widget-container";

export function withWidgetWrapper(Component, props) {
  return () => (
    <WidgetContainer>
      <Component {...props} />
    </WidgetContainer>
  );
}
