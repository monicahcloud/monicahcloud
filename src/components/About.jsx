import React, {useState} from "react";
import NavBar from "./NavBar";
import Carousel from './Carosuel';

const About = () => {
 
  return (
    <section id="about">
        <NavBar fixed="top" />
          <div className="column">
            <h2 className="greeting">Designer + Developer</h2>
            <h5 className="description">Hi! I'm Monicah. Nice to meet you.</h5>
            <p className="narrative">
              As a UI/UX Designer, I have a passion for designing beautiful and user
              friendly applications.
            </p>
            <p className="narrative">
              As a Front End Developer, I am focused on writing clean, and efficient code.
            </p>
            <p className="narrative">
              Aside from designing and coding, I enjoy painting, traveling and
              enjoying life.
            </p>
          </div>
          <div className="column">
            <h2>Certificates and Degrees</h2>
            <Carousel />
          </div>
         </section>
  );
};
export default About;