import React, { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./MyProjects.css";

const images = {
  project_1: require("../../Images/project_1.png"),
  project_2: require("../../Images/project_2.png"),
  project_3: require("../../Images/project_3.png"),
  project_4: require("../../Images/project_4.png"),
};

const MyProjects = () => {
  const [activeTab, setActiveTab] = useState("publications");

  const publications = [
    {
      title: "Deep Learning Assessment of Monkeypox Detection from Lesion Images",
      category: "Research",
      type: "publication",
      year: "2024",
      subtitle: "Published in AIP Conference Proceedings",
      conference: "2nd International Conference on Robotics, Automation and Intelligent Computing",
      conferenceShort: "ICRAIC 2024",
      publisher: "AIP Publishing",
      indexing: "Scopus Indexed",
      skills: ["CNN", "AlexNet", "ResNet50", "EfficientNet B0", "Transfer Learning", "Medical Imaging"],
      description: "This study dives through the foundations of deep learning and Image Processing alongside assessing the multimodal analysis of various CNN architectures on Monkeypox Skin Lesion Image Dataset. Achieved state-of-the-art results in disease detection accuracy.",
      image: images.project_2,
      publicationLink: "https://pubs.aip.org/aip/acp/article/3255/1/020009/3333230/Deep-learning-assessment-of-monkeypox-detection",
      pptLink: "https://drive.google.com/file/d/1glbIspUGi2VEHBFUPqKtItrmRxpdTc2s/view?usp=sharing",
    },
    {
      title: "Efficient Models for Detecting Monkeypox Using Skin Lesion Images",
      category: "Research",
      type: "publication",
      year: "2023",
      subtitle: "Published in IEEE Xplore",
      conference: "3rd International Conference on Innovative Mechanisms for Industry Applications",
      conferenceShort: "ICIMIA 2023",
      publisher: "IEEE",
      indexing: "Scopus Indexed",
      skills: ["CNN", "EfficientNet B0", "ResNet50", "Normalization", "Medical Imaging", "Multimodal Analysis"],
      description: "Explaining the background work done in this research gap. Implementation of Multimodal analysis for detecting monkeypox using Convolutional Neural Network architectures from skin lesions. Obtained best accuracy among thirty relevant research papers.",
      image: images.project_1,
      publicationLink: "https://ieeexplore.ieee.org/document/10426230",
      pptLink: "https://drive.google.com/file/d/1glbIspUGi2VEHBFUPqKtItrmRxpdTc2s/view?usp=sharing",
    },
    {
      title: "Bike Sharing Count Prediction using Machine Learning",
      category: "Research",
      type: "publication",
      year: "2023",
      subtitle: "Published in IJARESM Journal",
      conference: "International Journal of All Research Education and Scientific Methods",
      conferenceShort: "IJARESM 2023",
      publisher: "IJARESM",
      indexing: "UGC Approved",
      skills: ["Machine Learning", "Data Processing", "Regression", "Predictive Analytics"],
      description: "This study explores the latest trend in bike-sharing systems, supplanting traditional bike rental methods. These innovative systems streamline the bike rental process, enabling customers to effortlessly rent a bike using predictive machine learning algorithms.",
      image: images.project_4,
      publicationLink: "https://www.ijaresm.com/uploaded_files/document_file/Vedant_FitterfUDN.pdf",
    },
  ];

  const projects = [
    {
      title: "Crop Recommendation System based on Soil and Weather Properties",
      category: "Academic",
      type: "project",
      year: "2025",
      subtitle: "Machine Learning Project",
      skills: ["Machine Learning", "Decision Trees", "Random Forest", "Agriculture Analytics", "Python"],
      description: "Developed an intelligent crop recommendation decision-making system using machine learning algorithms to enable agricultural stakeholders to make the most suitable selection of crops, considering soil profiles, weather patterns, and other environmental conditions.",
      image: images.project_3,
      codeLink: "https://github.com/larry6683/ML_Project",
      reportLink:"https://ml-leml98nl2-sujithb6s-projects.vercel.app/"
    },
    {
      title: "GameVerse: Insights of Video Game Analysis",
      category: "Academic",
      type: "project",
      year: "2024",
      subtitle: "Data Mining Project",
      skills: ["Tableau", "SteamDB", "Data Mining", "Association Rules", "CLIP Model", "NLP", "Review Analysis"],
      description: "This study presents comprehensive trends and patterns in the video game industry sourcing user reviews from SteamDB. Performed developer/publisher analysis, genre prediction, and sentiment analysis to understand gaming market dynamics.",
      image: images.project_3,
      codeLink: "https://github.com/larry6683/Data-Mining-Project",
      reportLink: "https://drive.google.com/file/d/1QKEbtejZsTwvLT-iJWprRZS8TxsoaZ7J/view?usp=sharing",
     },
     {
      title: "Real World Dashboard Evaluation",
      category: "Academic",
      type: "presentation",
      year: "2025",
      subtitle: "InfoVIZ Project",
      skills: [ "Excel", "Power BI", "Data Analysis", "Dashboard Design"],
      description: "Transformed bad charts into good charts by following the principles of information visualization. Evaluated various real-world charts and Every After chart can be a Before chart again. Designed a real world live dashboard for the Power BI project with stunning visuals.",
      image: images.project_5,
      pptLink:"https://docs.google.com/presentation/d/1G3evlC_CvDXkIRjP5HNIFzM2qb9gyS-3/edit?usp=sharing&ouid=104511946301613108341&rtpof=true&sd=true",
      reportLink:"https://app.powerbi.com/groups/me/reports/4bd550c1-6b67-485b-9c04-5ff00e503332/5b9b7a2fc49d49d403fd?experience=power-bi",
    },
     {
      title: "Deepfake Detection System using Neural Networks",
      category: "Academic",
      type: "project",
      year: "2023",
      subtitle: "Deep Learning Project",
      skills: ["CNN", "Deep Learning", "Computer Vision", "TensorFlow", "Image Classification"],
      description: "Built a comprehensive deepfake detection application using Convolutional Neural Networks to detect deepfake images which are rapidly spreading online. Implemented transfer learning techniques for improved accuracy.",
      image: images.project_1,
    },
    {
      title: "University Application Manager",
      category: "Academic",
      type: "project",
      year: "2022",
      subtitle: "Software Testing Project",
      skills: ["Full-Stack Development", "Software Testing", "Performance Metrics", "Quality Assurance"],
      description: "Built a complete full-stack application manager from scratch to run software testing and performance evaluation metrics. Created comprehensive test reports with clear documentation of testing procedures and results.",
      image: images.project_2,
    },
    {
      title: "Dynamic Portfolio Maker",
      category: "Academic",
      type: "project",
      year: "2022",
      subtitle: "Web Technology Project",
      skills: ["MERN Stack", "React", "Node.js", "MongoDB", "UI/UX Design", "Database Management"],
      description: "Developed a proper MERN stack Portfolio application with multiple features like dynamic placing and customization. Database management and UI/UX design principles were clearly addressed throughout the development process.",
      image: images.project_4,
    },
  ];


  const getFilteredItems = () => {
    if (activeTab === "publications") return publications;
    if (activeTab === "projects") return projects;
    return publications;
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="projects-page-wrapper">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="hero-content-projects">
          <h1 className="hero-title-projects">Publications & Projects</h1>
          <p className="hero-subtitle-projects">
            Showcasing my research contributions and academic projects in Data Science, Medical Imaging, and Software Engineering
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="filter-section">
        <div className="filter-container">
          <div className="filter-tabs">
  
            <button
              className={`filter-tab ${activeTab === "publications" ? "active" : ""}`}
              onClick={() => setActiveTab("publications")}
            >
              <span className="tab-icon">📄</span>
              Research Publications ({publications.length})
            </button>
            <button
              className={`filter-tab ${activeTab === "projects" ? "active" : ""}`}
              onClick={() => setActiveTab("projects")}
            >
              <span className="tab-icon">💻</span>
              Academic Projects ({projects.length})
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="projects-container">
          <div className="projects-grid">
            {filteredItems.map((item, index) => (
              <ProjectCard
                key={index}
                title={item.title}
                year={item.year}
                category={item.category}
                type={item.type}
                subtitle={item.subtitle}
                skills={item.skills}
                description={item.description}
                image={item.image}
                codeLink={item.codeLink}
                videoLink={item.videoLink}
                reportLink={item.reportLink}
                conference={item.conference}
                conferenceShort={item.conferenceShort}
                publisher={item.publisher}
                indexing={item.indexing}
                publicationLink={item.publicationLink}
                pptLink={item.pptLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">{publications.length}</div>
            <div className="stat-label">Research Publications</div>
            <div className="stat-detail">Scopus & UGC Indexed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{projects.length}</div>
            <div className="stat-label">Academic Projects</div>
            <div className="stat-detail">Machine Learning & Web Dev</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">2</div>
            <div className="stat-label">Conference Presentations</div>
            <div className="stat-detail">IEEE & AIP</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProjects;