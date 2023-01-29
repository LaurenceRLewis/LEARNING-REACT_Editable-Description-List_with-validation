import React from "react";
import { createRoot } from "react-dom";
import DescriptionList from "./DescriptionList";

const App = () => {
  return (
    <div>
      <DescriptionList />
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
