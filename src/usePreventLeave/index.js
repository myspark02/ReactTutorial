import React, { useState, StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { usePreventLeave } from "./usePreventLeave";
import "./styles.css";

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
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
