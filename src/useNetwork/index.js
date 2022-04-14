import React, { useRef, StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { useNetwork } from "./useNetwork";

import "./styles.css";


const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are off line");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{onLine ? "OnLine" : "OffLine"}</h1>
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
