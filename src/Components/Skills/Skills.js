import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2  className="Skillsh2">Skills</h2>

      <section className="skills-section">
        <h3 className="Skillsh3">Theoretical Knowledge</h3>
        <ul>
          <li>
            <strong>Data:</strong> Data Mining and Warehouse, Data analysis, Database Management, Machine Learning
          </li>
          <li>
            <strong>Software:</strong> Software testing, Software Quality Metrics, Empirical Software Engineering
          </li>
          <li>
            <strong>Others:</strong> Image processing, Computer vision, Medical Imaging, Vehicle Automation
          </li>
        </ul>
      </section>

      <section className="skills-section">
        <h3 className="Skillsh3">Technical Skills</h3>
        <ul>
          <li>
            <strong>Language:</strong>  Python (Adv), C, R
          </li>
          <li>
            <strong>ML & AI: </strong> Tensorflow, Pytorch, OpenCV, Tableau
          </li>
          <li>
            <strong>Web Development:</strong> React, Express, Node.js, AWS, Wordpress
          </li>
          <li>
            <strong>Database Management:</strong> MySQL, MongoDB, NoSQL
          </li>
          <li>
            <strong>Tools & Platforms:</strong> Git
          </li>
          <li>
            <strong>Design & UX/UI:</strong> Figma, Illustrator
          </li>
         
        </ul>
      </section>

      <section className="skills-section">
        <h3  className="Skillsh3">Soft Skills</h3>
        <ul className="soft-skills-list">
          <li>Problem Ideation ✅</li>
          <li>Team Work ✅</li>
          <li>Patience ✅</li>
          <li>Communication ✅</li>
          <li>Work Ethics ✅</li>
          <li>Observation skill ❌</li>
          <li>Negotiation ❌</li>
          <li>Leadership ❌ </li>
        </ul>
      </section>
    </div>
  );
};

export default Skills;
