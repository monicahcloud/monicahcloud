import React from "react";
import { Link } from "react-router-dom";
import design from "./../images/web_design.png";
import developer from "./../images/web_dev.png";

const Main = () => {

  return (
    <>
      <main className="grid-container">
        <h2 className="text-center mb-20">Projects</h2>
        <div className="li-project">
          <div>
            <Link to="/design" target={"_self"}>
              <img
                id="designImage"
                className="btn"
                src={design}
                alt="web design"
              />
              <h3>Design Projects</h3>
            </Link>
          </div>

          <div>
            <Link to="/develop" target={"_self"}>
              <img
                id="developerImage"
                className="btn"
                src={developer}
                alt="web developer"
              />
              <h3>Developer Projects</h3>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
