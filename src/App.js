import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Hire from "./components/Contact";
import DesignProjects from './components/DesignProjects';
import DeveloperProjects from "./components/DeveloperProjects";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import Error from "./components/Error";

function App() {
  return (
    <Router>
     <nav><NavBar/></nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="*" element={<Error />} />
        <Route path="/design" element={<DesignProjects />} />
        <Route path="/develop" element={<DeveloperProjects />} />
      </Routes>
      <footer><Footer/></footer>
    </Router>
  );
}

export default App;
