import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Navigation  from "./components/Navigation";
import About from "./components/About";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path="/about-us" element={<h1>Hello</h1>}>
        </Route>
        <Route  path="/movie/:id" element={<Detail/>}>
        </Route>
        <Route  path="/" element={<Home/>}>
        </Route>
        <Route  path="/about" element={<About/>}>
        </Route>
      </Routes>
    </Router>
  );
}
export default App;