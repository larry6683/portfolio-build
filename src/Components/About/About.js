import React from "react";
import "./About.css";

function Introduction() {
  return (
    <div className="intro-container">
      <h1 className="Introsh2">Introduction</h1>
      <p>
        Hello! I am Sujith an aspiring researcher pursuing Master’s in Data Science and one year of college research experience in Medical Imaging and Disease detection systems. 
        Seeking to pursue a PhD in BioMedical Imaging and Smart health systems. 
        Passionate about contributing my time and effort for progressive medical research and web applications.
      </p>

      <h2>Education</h2>
      <ul>
        <li>
          <strong>University:</strong> University of Colorado Boulder
          <p>
            I am currently in my second semester of Master's in Data Science with GPA: <span className="highlight">3.75</span>. I will
            be graduated in <span className="highlight">2026</span>.
          </p>
        </li>
        <li>
          <strong>College:</strong> Delhi Technological University
          <p>
          I pursued my BS (Software Engineering) with CGPA: <span className="highlight">8.17</span> in <span className="highlight">2024</span>.
          </p>
        </li>
        <li>
          <strong>High School:</strong> Narayana Junior College
          <p>
            I passed my matriculation with <span className="highlight">9.7</span> in
            <span className="highlight">2019</span>.
          </p>
        </li>
      </ul>

      <h2>Experience</h2>
      <p>
        I have experience in working with computer vision, imaging and web technologies.
      </p>
      <ul>
        <li>
          <strong>Research Intern:</strong> Assisted a DRDo scienctist in studying advance Autonomous vehicle technologies using technologies like ROS2, CARLA, Autoware.
        </li>
        <li>
          <strong>Undergrad Research:</strong> Worked in college lab to work on medical diagnostic systems and informatics.
        </li>
        <li>
          <strong>Fullstack Development:</strong> Built a color picker for website named seo-horizon to a israeli client.
        </li>
        
      </ul>

      <p>
        <i>I am always eager to learn new technologies and take on challenging
        projects. Feel free to browse through my portfolio to see some of the
        exciting work I’ve been involved in. Let’s connect and explore how we
        can collaborate on your next project!</i>
      </p>
    </div>
  );
}

export default Introduction;
