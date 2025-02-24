import React, { useState, useEffect } from "react";
import "./ProjectCard.css";

const Project = ({ title, year,category,subtitle, skills, description,image,  codeLink, videoLink,reportLink,publicationLink,pptLink ,conference}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleReadMore = () => setIsReadMore(!isReadMore);

  return (
    <div className="griditem">
      <div className="keywords">
        <div className="year">{year}</div>/
      <div className="category">{category}</div>
      </div>
      <h3 className="title">{title}</h3>
      <h5 className="subtitle">{subtitle}</h5>
      {conference&& (
          <div className="conference-container">
              <p> {conference}</p>
        </div>
        )}
      <img className='project-image' src={image} alt="Image missing"/>
      <div className="project-details">
        <ul className="tags">
          {skills.map((skill, index) => (
            <li key={index} className="tags">{skill}</li>
          ))}
        </ul>
        <div className={`description-container ${isReadMore && !isSmallScreen ? 'collapsed' : 'expanded'}`}>
          <p>{description}</p>
        </div>
        {/* {!isSmallScreen && description.length > 50 && (
          <a href="#!" onClick={toggleReadMore}>
            {isReadMore ? "Read More" : " Show Less"}
          </a>
        )} */}
        {codeLink || videoLink || reportLink || publicationLink || pptLink? (
          <div className="project-links">
            {codeLink && (
              <button>
                <a href={codeLink} target="_blank" rel="noopener noreferrer">Code</a>
              </button>
            )}
            {videoLink && (
              <button>
                <a href={videoLink} target="_blank" rel="noopener noreferrer">Video</a>
              </button>
            )}
            {reportLink && (
              <button>
                <a href={reportLink} target="_blank" rel="noopener noreferrer">Report</a>
              </button>
            )}
            {publicationLink && (
              <button>
                <a href={publicationLink} target="_blank" rel="noopener noreferrer">Publication</a>
              </button>
            )}
            {pptLink && (
              <button>
                <a href={pptLink} target="_blank" rel="noopener noreferrer">PPT</a>
              </button>
            )}
             
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Project;
