import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import useInput from "./useInput";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
    // const maxLen = (value) => value.length < 10;
    const exceptAt = (value) => !value.includes("@");
    const name = useInput("Mr.", exceptAt);
    return (
      <div className="App">
        <h1>Hello</h1>
        <input placeholder="Name" {...name} />
      </div>
    );
  };

root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  