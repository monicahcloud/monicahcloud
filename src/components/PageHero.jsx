import React, {useState} from "react";
import logo from "./../images/Monicah_Logo.jpg";


function PageHero() {
 

  return (
    <div>
      <div className="navbar">
        <img className="logo center" src={logo} alt="logo" />
      </div>
      <h4>
        “You are essentially who you create yourself to be and all that occurs
        in your life is the result of your own making.” ― Stephen Richards
      </h4>
     </div>
  );
}

export default PageHero;
