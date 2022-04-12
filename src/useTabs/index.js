import React, { useState, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import useTabs from "./useTabs";


const contents = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];

const App = () => {
    const { currentItem, changeItem } = useTabs(0, contents);
    return (
      <div className="App">
        {contents.map((section, index) => (
          <button key={index} onClick={() => changeItem(index)}>
            {section.tab}
          </button>
        ))}
        <div>{currentItem.content}</div>
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
  