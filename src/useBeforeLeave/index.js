import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useBeforeLeave } from "./useBeforeLeave";
import "./styles.css";



const App = () => {
  const beforeLeave = () => console.log("Please don't leave");
  useBeforeLeave(beforeLeave);
  return <div className="App"></div>;
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
