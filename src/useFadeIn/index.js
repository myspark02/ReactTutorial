import React, { useRef, StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { useFadeIn } from "./useFadeIn";

import "./styles.css";


const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem ipsum lorem ipsum lorem ipsum</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
