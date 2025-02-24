import React, { useState, useEffect } from "react";
import "./Homepage.css"; // Ensure this has the appropriate styles
import ProfileImage from "../../Images/profile.jpeg"; // Import the image
import CV from "./Battu Sujith Compact Resume.pdf"; // Import the CV PDF
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faDownload,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const jobTitles = ["Research","Medical Imaging", "Data Science"];

  useEffect(() => {
    const updateJobTitle = () => {
      setJobTitle(jobTitles[currentIndex]);
      setTimeout(() => {
        // Move to the next job title
        setCurrentIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
      }, 2000); // Display each title for 2 seconds
    };

    updateJobTitle(); // Start updating job titles

    // Cleanup function to clear timeout
    return () => clearTimeout();
  }, [currentIndex]); // Depend on currentIndex

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Battu Sujith Resume.pdf";
    link.click();
  };

  const copyEmail = () => {
    const email = "battusujith2525@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("Email address copied to clipboard");
    });
  };

  return (
    <div className="main infocontainor">
      <div className="devinfo">
        <div className="hello">Hi, I am</div>
        <div className="name"><b>Sujith Battu</b></div>
        <br/>
        <div className="about">{jobTitle}</div>
        <div className="moreabout">
          <br/>
          I am an emerging data science research student looking for opportunities in the field of Medical Imaging, Informatics and Health systems.
          <br />
          <br />I  also Love to work on Web Applications, Databases and Image processing.
        </div>
        <div className="icon-buttons">
          <a
            href="https://linkedin.com/in/battu-sujith"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:battusujith2525@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="tel:+1 7208690684">
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <a
            href="https://github.com/larry6683"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <div className="buttons">
          <button onClick={downloadCV}>
            <FontAwesomeIcon icon={faDownload} className="icon" /> Download CV
          </button>
          <button onClick={copyEmail}>
            <FontAwesomeIcon icon={faCopy} className="icon" /> Copy Email
            Address
          </button>
        </div>
      </div>
      <div className="devpic">
        <img src={ProfileImage} alt="Sujith Battu pic here" />
      </div>
    </div>
  );
};

export default Homepage;
