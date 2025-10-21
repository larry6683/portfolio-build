import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({
  title,
  year,
  category,
  type,
  subtitle,
  skills,
  description,
  image,
  codeLink,
  videoLink,
  reportLink,
  publicationLink,
  pptLink,
  conference,
  conferenceShort,
  publisher,
  indexing,
}) => {
  const isPublication = type === "publication";

  // Publication Card UI (Original Design)
  if (isPublication) {
    return (
      <div className="project-card publication-card">
        {/* Card Header */}
        <div className="card-header">
          <div className="card-badges">
            <span className="year-badge">{year}</span>
            <span className="type-badge publication">
              📄 Publication
            </span>
          </div>
          {indexing && (
            <div className="indexing-badge">{indexing}</div>
          )}
        </div>

        {/* Card Image */}
        <div className="card-image-container">
          <img className="card-image" src={image} alt={title} />
          <div className="image-overlay">
            <span className="category-tag">{category}</span>
          </div>
        </div>

        {/* Card Content */}
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-subtitle">{subtitle}</p>

          {/* Conference Info */}
          {conference && (
            <div className="conference-info">
              <div className="conference-icon">🎓</div>
              <div className="conference-details">
                <div className="conference-name">{conferenceShort}</div>
                <div className="conference-full">{conference}</div>
                
              </div>
            </div>
          )}

          {/* Skills Tags */}
          <div className="skills-tags">
            {skills.slice(0, 6).map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
            {skills.length > 6 && (
              <span className="skill-tag more-tag">+{skills.length - 6}</span>
            )}
          </div>

          {/* Description */}
          <p className="card-description">{description}</p>
        </div>

        {/* Card Footer with Links */}
        <div className="card-footer">
          {publicationLink && (
            <a
              href={publicationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link primary"
            >
              📖 View Publication
            </a>
          )}
          {pptLink && (
            <a
              href={pptLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link secondary"
            >
              📊 Presentation
            </a>
          )}
        </div>
      </div>
    );
  }

  // Academic Project Card UI (New Compact Design)
  return (
    <div className="project-card academic-card">
      <div className="academic-header">
        <div className="academic-icon">💻</div>
        <div className="academic-meta">
          <span className="academic-year">{year}</span>
          <span className="academic-category">{category}</span>
        </div>
      </div>

      <div className="academic-content">
        <h3 className="academic-title">{title}</h3>
        <p className="academic-subtitle">{subtitle}</p>
        
        <p className="academic-description">{description}</p>

        {/* Skills */}
        <div className="academic-skills">
          {skills.map((skill, index) => (
            <span key={index} className="academic-skill-tag">
              {skill}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="academic-links">
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="academic-link"
              title="View Code"
            >
              <span className="link-icon">💻</span>
              Code
            </a>
          )}
          {reportLink && (
            <a
              href={reportLink}
              target="_blank"
              rel="noopener noreferrer"
              className="academic-link"
              title="View Report"
            >
              <span className="link-icon">📄</span>
              Report
            </a>
          )}
          {pptLink && (
            <a
              href={pptLink}
              target="_blank"
              rel="noopener noreferrer"
              className="academic-link"
              title="View Presentation"
            >
              <span className="link-icon">📊</span>
              PPT
            </a>
          )}
          {videoLink && (
            <a
              href={videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="academic-link"
              title="Watch Video"
            >
              <span className="link-icon">🎥</span>
              Video
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;