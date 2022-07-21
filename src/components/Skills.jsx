import React from "react";
import { techskills } from "./../data/data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="text-center mb-20">
        <h2>Skills &amp; Technologies</h2>
      </div>
      <ul className="li-tech">
        {techskills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
     </section>
  );
}
