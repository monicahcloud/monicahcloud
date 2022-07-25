import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import PageHero from "./PageHero";
import Skills from "./Skills";
import Footer from "./Footer";
import Main from "./Main";
import Hire from "./Contact";

function Home() {

  return (
    <div>
      <PageHero />
      <div className="center nav-btn">
        <Link to="/about" target={"_self"}>
          <Button variant="warning" size="lg">
            About Me
          </Button>
        </Link>
      </div>
      <div className="center nav-btn">
        <Link to="/hire" target={"_self"}>
          <Button variant="warning" size="lg">
            Hire Me
          </Button>
        </Link>
      </div>
      <Skills />
      <Main />
    </div>
  );
}

export default Home;
