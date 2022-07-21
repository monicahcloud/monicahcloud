import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Hire from "./components/Contact";
import DesignProjects from './components/DesignProjects';
import DeveloperProjects from "./components/DeveloperProjects";

function App() {
  return (
    <Router>
      {/* 
        
        */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/design" element={<DesignProjects />} />
        <Route path="/develop" element={<DeveloperProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
