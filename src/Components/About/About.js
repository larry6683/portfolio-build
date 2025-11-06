import React, { useState, useEffect } from "react";
import "./About.css";
import ProfileImage from "../../Images/profile.jpeg";
import CV from "./Sujith Battu CV.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faDownload,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  const [jobTitle, setJobTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const jobTitles = ["Geospatial Research", "Remote Sensing Data", "Spatial Data Science"];

  useEffect(() => {
    const updateJobTitle = () => {
      setJobTitle(jobTitles[currentIndex]);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
      }, 2000);
    };

    updateJobTitle();
    return () => clearTimeout();
  }, [currentIndex]);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Battu Sujith Resume.pdf";
    link.click();
  };

  const copyEmail = () => {
    const email = "Sujith.Battu@colorado.edu";
    navigator.clipboard.writeText(email).then(() => {
      alert("Email address copied to clipboard");
    });
  };

  return (
    <div className="about-page-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hello">Hi, I am</div>
            <h1 className="hero-name">Sujith Battu</h1>
            <div className="hero-title">{jobTitle}</div>
            <p className="hero-description">
              Master's student in Data Science at CU Boulder, aspiring to pursue a PhD in Geography with specialization in GIS, Remote Sensing, and Spatial Analytics.
            </p>

            <div className="hero-actions">
              <div className="social-links">
                <a
                  href="https://linkedin.com/in/battu-sujith"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="mailto:Sujith.Battu@colorado.edu" title="Email">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a
                  href="https://github.com/larry6683"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>

              <div className="hero-buttons">
                <button onClick={downloadCV} className="btn-primary">
                  <FontAwesomeIcon icon={faDownload} /> Download CV
                </button>
                <button onClick={copyEmail} className="btn-secondary">
                  <FontAwesomeIcon icon={faCopy} /> Copy Email
                </button>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-decoration"></div>
            <img src={ProfileImage} alt="Sujith Battu" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <div className="title-underline"></div>
          </div>

          <div className="about-intro">
            <div className="intro-card">
              <div className="card-icon">🎓</div>
              <p>
                I am a passionate researcher with a strong foundation in software engineering and over a year of research experience in <span className="highlight">Medical Imaging and Disease Detection Systems</span>. I am now channeling my expertise toward <span className="highlight">Geospatial Technologies</span>.
              </p>
              <p>
                My goal is to leverage spatial data science to address critical challenges in environmental monitoring, urban planning, and sustainable development through advanced GIS and remote sensing techniques.
              </p>
            </div>
          </div>

          {/* Research Interests */}
          <div className="interests-container">
            <h3 className="subsection-title">
              <span className="title-icon">🔬</span> Research Interests
            </h3>
            <div className="interests-grid">
              <div className="interest-card">
                <div className="interest-icon">🌍</div>
                <h4>GIS & Remote Sensing</h4>
                <p>Spatial data analysis, satellite imagery processing, and environmental monitoring</p>
              </div>
              <div className="interest-card">
                <div className="interest-icon">📊</div>
                <h4>Spatial Analytics</h4>
                <p>Geospatial modeling, urban planning, and location intelligence</p>
              </div>
              <div className="interest-card">
                <div className="interest-icon">🏥</div>
                <h4>Medical Imaging</h4>
                <p>Deep learning for disease detection and diagnostic systems</p>
              </div>
              <div className="interest-card">
                <div className="interest-icon">💻</div>
                <h4>Web Applications</h4>
                <p>Full-stack development, databases, and cloud technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Skills</h2>
            <div className="title-underline"></div>
          </div>

          <div className="skills-content">
            {/* Technical Skills */}
            <div className="skill-category">
              <div className="skill-items">
                <div className="skill-item">
                  <div className="skill-name">
                    <strong>Programming</strong>
                  </div>
                  <div className="skill-tags">
                    <span className="skill-badge">Python</span>
                    <span className="skill-badge">R</span>
                    <span className="skill-badge">SQL</span>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-name">
                    <strong>Technologies</strong>
                  </div>
                  <div className="skill-tags">
                    <span className="skill-badge">Data Wrangling & Visualisation</span>
                    <span className="skill-badge">Remote Sensing</span>
                    <span className="skill-badge">Machine Learning</span>
                    <span className="skill-badge">EDA</span>
                    <span className="skill-badge">API's</span>
                    <span className="skill-badge">TensorFlow</span>
                    <span className="skill-badge">Numpy</span>
                    <span className="skill-badge">Pandas</span>
                    <span className="skill-badge">Matplotlib</span>
                    <span className="skill-badge">Spatial Analytics</span>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-name">
                    <strong>Developer Tools</strong>
                  </div>
                  <div className="skill-tags">
                    <span className="skill-badge">Git</span>
                    <span className="skill-badge">VSCode</span>
                    <span className="skill-badge">Jupyter</span>
                    <span className="skill-badge">ArcGIS</span>
                    <span className="skill-badge">GEE</span>
                    <span className="skill-badge">PostGIS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="credentials-section">
        <div className="section-container">
          <div className="credentials-grid">
            {/* Education */}
            <div className="credential-block">
              <div className="block-header">
                <span className="header-icon">🎓</span>
                <h3>Education</h3>
              </div>

              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="content-header">
                      <h4>Master's in Data Science</h4>
                      <span className="year-badge">2024 - Present</span>
                    </div>
                    <p className="institution">University of Colorado Boulder</p>
                    <div className="detail-item">
                      <span className="label">GPA:</span>
                      <span className="value">3.60/4.0</span>
                    </div>
                    <div className="tags-container">
                      <strong>Coursework:</strong>
                      <div className="tags">
                        <span>Statistics</span>
                        <span>Machine Learning</span>
                        <span>GIS</span>
                        <span>Info Visualization</span>
                        <span>Data Ethics</span>
                        <span>Data Mining</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="content-header">
                      <h4>Bachelor of Technology</h4>
                      <span className="year-badge">2020 - 2024</span>
                    </div>
                    <p className="institution">Delhi Technological University</p>
                    <p className="department">Software Engineering</p>
                    <div className="detail-item">
                      <span className="label">GPA:</span>
                      <span className="value">3.70/4.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="credential-block">
              <div className="block-header">
                <span className="header-icon">💼</span>
                <h3>Experience</h3>
              </div>

              <div className="experience-list">
                <div className="experience-item">
                  <div className="content-header">
                    <h4>Data Intern</h4>
                    <span className="duration-badge">May - Aug 2025</span>
                  </div>
                  <p className="company">DMEConnected, Boulder, USA</p>
                  <ul className="bullet-list">
                    <li>Assisted CEO and marketing team in pricing strategy through data analysis</li>
                    <li>Analyzed search patterns to identify high-demand products</li>
                    <li>Created visualizations for stakeholders and investors</li>
                  </ul>
                </div>

                <div className="experience-item">
                  <div className="content-header">
                    <h4>Research Trainee</h4>
                    <span className="duration-badge">June - July 2023</span>
                  </div>
                  <p className="company">CAIR, Defence Research Organisation, India</p>
                  <ul className="bullet-list">
                    <li>Researched vehicle automation using LIDAR, ROS & Autoware</li>
                    <li>Worked in Intelligence, Surveillance & Reconnaissance division</li>
                  </ul>
                </div>

                <div className="experience-item">
                  <div className="content-header">
                    <h4>Research Assistant</h4>
                    <span className="duration-badge">June 2023 - Feb 2024</span>
                  </div>
                  <p className="company">Delhi Technological University</p>
                  <ul className="bullet-list">
                    <li>Developed deep learning models for monkeypox detection</li>
                    <li>Achieved best accuracy among 30 research papers</li>
                    <li>Published 2 papers in IEEE and AIP conferences</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <p>
            <em>I am always eager to learn new technologies and take on challenging research projects. Feel free to browse through my portfolio and let's connect to explore collaboration opportunities!</em>
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;