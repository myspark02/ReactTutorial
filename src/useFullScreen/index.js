import React, { useRef, StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { useFullScreen } from "./useFullScreen";

import "./styles.css";

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "Full Screen" : "Not full screen");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          ref={element}
          src="https://img.huffingtonpost.com/asset/5d80980c3b00002efad50afe.jpeg?ops=scalefit_630_noupscale"
          alt="A Korean Film: Assasin"
        />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Full Screen</button>
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
