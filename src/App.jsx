import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Project from "./routes/Project";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
