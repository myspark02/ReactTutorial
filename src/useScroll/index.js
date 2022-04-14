import React, { useRef, StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { useScroll } from "./useScroll";

import "./styles.css";

const App = () => {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 1000 ? "red" : "blue" }}>
        Hi
      </h1>
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
