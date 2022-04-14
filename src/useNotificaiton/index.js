import React, { useRef, StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { useNotification } from "./useNotification";

import "./styles.css";

const App = () => {
  const triggerNotif = useNotification("Can I use your phone?", {
    body: "I forgot to bring my phone"
  });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>Hello</button>
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
