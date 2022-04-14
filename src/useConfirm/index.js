import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useConfirm } from "./useConfirm";
import "./styles.css";

const App = () => {
  const deleteWord = () => console.log("Deleting the word");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWord, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the word</button>
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
