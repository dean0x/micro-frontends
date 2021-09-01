import React from "react";

function WidgetContainer({ children }) {
  return (
    <div className="flex-2/4 max-w-2/4 p-4 h-2/4">
      <div className="p-6 bg-white rounded-md shadow-sm h-full overflow-y-scroll">
        {children}
      </div>
    </div>
  );
}

export default WidgetContainer;
