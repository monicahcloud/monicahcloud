import React from 'react';
import NavBar from './NavBar';
import { developerProjects } from "./../data/data";

function DeveloperProjects() {
  return (
    <>
      <NavBar />
      <div id="content">
        <main className="home">
          <div className="vizbox-container">
            <h2 className="center">Featured projects</h2>
            <div className="vizbox">
              {developerProjects.map((project) => (
                <div className="viz">
                  <div className="container">
                    <a
                      href={project.link}
                      key={project.image}
                      className="designlist"
                    >
                      <img
                        alt="gallery"
                        className="flex relative"
                        src={project.image}
                      />
                      <h5 className="">{project.title}</h5>
                      <h6 className="">{project.subtitle}</h6>
                      <p className="">{project.description}</p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default DeveloperProjects