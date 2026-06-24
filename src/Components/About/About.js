import React, { useState, useEffect } from "react";
import "./About.css";
import ProfileImage from "../../Images/profile.jpeg";
import CV from "./Sujith_Battu_CV.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faDownload,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

const jobTitles = ["Spatial Data Analyst", "Data Scientist", "AI Researcher"];

function About() {
  const [jobTitle, setJobTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateJobTitle = () => {
      setJobTitle(jobTitles[currentIndex]);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
      }, 2000);
    };

    updateJobTitle();
    return () => clearTimeout();
  }, [currentIndex, jobTitles]);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Sujith_Battu_CV.pdf";
    link.click();
  };

  const copyEmail = () => {
    const email = "battusujith2525@gmail.com";
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
            <p className="hero-description" style={{ maxWidth: "100%", wordWrap: "break-word" }}>
              Strategic Data Scientist and Master's student in Data Science at CU Boulder. I specialize in analyzing large datasets, building end-to-end data pipelines, and translating data into clear visualizations to optimize business processes.
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
                <a href="mailto:battusujith2525@gmail.com" title="Email">
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
                I am a passionate data professional with a strong foundation in software engineering and research experience in <span className="highlight">Machine Learning and Cloud Data Pipelines</span>. 
              </p>
              <p>
                My goal is to leverage advanced data analytics, big data technologies, and spatial analytics (GIS) to address critical business challenges and drive data-driven decision-making.
              </p>
            </div>
          </div>

          {/* Research Interests */}
          <div className="interests-container">
            <h3 className="subsection-title">
              <span className="title-icon">🔬</span> Core Competencies
            </h3>
            <div className="interests-grid">
              <div className="interest-card">
                <div className="interest-icon">📊</div>
                <h4>Data Analytics & BI</h4>
                <p>Translating complex data into actionable KPI dashboards and visualizations.</p>
              </div>
              <div className="interest-card">
                <div className="interest-icon">☁️</div>
                <h4>Big Data & Cloud</h4>
                <p>Architecting scalable data pipelines using AWS, GCP, Kafka, and Docker.</p>
              </div>
              <div className="interest-card">
                <div className="interest-icon">🧠</div>
                <h4>Machine Learning</h4>
                <p>Developing predictive models, deep learning networks, and AI chatbots.</p>
              </div>
              <div className="interest-card">
                <div className="interest-icon">🌍</div>
                <h4>GIS & Spatial Analytics</h4>
                <p>ESRI Certified in spatial data analysis and geographic mapping.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Technical Skills</h2>
            <div className="title-underline"></div>
          </div>

          <div className="skills-content">
            <div className="skill-category">
              <div className="skill-items">
                <div className="skill-item">
                  <div className="skill-name">
                    <strong>Programming & Databases</strong>
                  </div>
                  <div className="skill-tags">
                    <span className="skill-badge">Python</span>
                    <span className="skill-badge">SQL (PostgreSQL)</span>
                    <span className="skill-badge">R</span>
                    <span className="skill-badge">JavaScript</span>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-name">
                    <strong>Data Analysis & Machine Learning</strong>
                  </div>
                  <div className="skill-tags">
                    <span className="skill-badge">Pandas</span>
                    <span className="skill-badge">NumPy</span>
                    <span className="skill-badge">Scikit-learn</span>
                    <span className="skill-badge">PySpark</span>
                    <span className="skill-badge">Matplotlib</span>
                    <span className="skill-badge">Seaborn</span>
                    <span className="skill-badge">Excel</span>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-name">
                    <strong>Big Data, Cloud & Tools</strong>
                  </div>
                  <div className="skill-tags">
                    <span className="skill-badge">AWS (EC2, S3)</span>
                    <span className="skill-badge">GCP</span>
                    <span className="skill-badge">Kafka</span>
                    <span className="skill-badge">Docker</span>
                    <span className="skill-badge">Redis</span>
                    <span className="skill-badge">Power BI</span>
                    <span className="skill-badge">Tableau</span>
                    <span className="skill-badge">GA4</span>
                    <span className="skill-badge">ArcGIS</span>
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
          {/* Changed grid layout via inline flexbox to expand Experience width */}
          <div className="credentials-grid" style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
            
            {/* Education Block - 35% width */}
            <div className="credential-block" style={{ flex: "1 1 35%" }}>
              <div className="block-header">
                <span className="header-icon">🎓</span>
                <h3>Education</h3>
              </div>

              {/* Removed timeline classes, using list format instead to remove the line */}
              <div className="experience-list">
                <div className="experience-item" style={{ marginBottom: "1.5rem" }}>
                  <div className="content-header">
                    <h4>Master's in Data Science</h4>
                    <span className="duration-badge">Aug 2024 - May 2026</span>
                  </div>
                  <p className="company">University of Colorado Boulder</p>
                  <div className="detail-item" style={{ marginTop: "0.5rem" }}>
                    <span className="label">GPA: </span>
                    <span className="value">3.75/4.00</span>
                  </div>
                </div>

                <div className="experience-item">
                  <div className="content-header">
                    <h4>Bachelor of Engineering</h4>
                    <span className="duration-badge">Aug 2020 - Jun 2024</span>
                  </div>
                  <p className="company">Delhi Technological University</p>
                  <p className="department" style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: "0.2rem" }}>
                    Software Engineering
                  </p>
                  <div className="detail-item" style={{ marginTop: "0.5rem" }}>
                    <span className="label">GPA: </span>
                    <span className="value">3.70/4.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Block - 60% width */}
            <div className="credential-block" style={{ flex: "1 1 60%" }}>
              <div className="block-header">
                <span className="header-icon">💼</span>
                <h3>Professional Experience</h3>
              </div>

              <div className="experience-list">
                <div className="experience-item">
                  <div className="content-header">
                    <h4>Data Analyst Intern - Marketing</h4>
                    <span className="duration-badge">May 2025 - Aug 2025</span>
                  </div>
                  <p className="company">DME Connected, Atlanta, USA</p>
                  <ul className="bullet-list">
                    <li>Evaluated 10,000+ patient search requests by synthesizing EHR records using Python, Pandas, and SQL, increasing sales by 40%.</li>
                    <li>Unified marketing metrics using LinkedIn Sales Navigator, Apollo, and HubSpot, improving lead identification by 25%.</li>
                    <li>Constructed automated scraping pipelines, designed Power BI dashboards, and performed GA4 mapping, lifting conversions by 18%.</li>
                  </ul>
                </div>

                <div className="experience-item">
                  <div className="content-header">
                    <h4>AI Researcher - Image Processing</h4>
                    <span className="duration-badge">Aug 2023 - May 2024</span>
                  </div>
                  <p className="company">Delhi Technological University, India</p>
                  <ul className="bullet-list">
                    <li>Processed 5,000+ MRI images using Python, OpenCV, and NumPy for monkeypox detection.</li>
                    <li>Achieved 97% accuracy with research published in Scopus-indexed IEEE conferences.</li>
                    <li>Executed deep learning model assessments, reducing false negatives by 15%.</li>
                  </ul>
                </div>

                <div className="experience-item">
                  <div className="content-header">
                    <h4>Research & Development Trainee</h4>
                    <span className="duration-badge">Jun 2023 - Jul 2023</span>
                  </div>
                  <p className="company">Centre for Artificial Intelligence & Robotics, DRDO</p>
                  <ul className="bullet-list">
                    <li>Researched vehicle automation using LIDAR, ROS & Autoware.</li>
                    <li>Worked in the Intelligence, Surveillance & Reconnaissance division.</li>
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
            <em>I am always eager to learn new technologies and take on challenging data projects. Feel free to browse through my portfolio and let's connect!</em>
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;