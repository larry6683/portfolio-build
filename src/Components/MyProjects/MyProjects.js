import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./MyProjects.css";

const images = {
  project_1: require("../../Images/project_1.png"),
  project_2: require("../../Images/project_2.png"),
  project_3: require("../../Images/project_3.png"),
  project_4: require("../../Images/project_4.png"),
};
const MyProjects = () => {
  const projects = [
 
    {
      title: "Efficient Models for detecting Monkeypox",
      category:"Research",
      year:"2023",
      subtitle: "Published in IEEE",
      skills: ["CNN's","EfficientNet B0", "ResNet50", "Normalization","Medical  Imaging"],
      description:"Explaining the background work done in this research gap. Its implementation of Multimodal analysis for detecting monkeypox using Convoluotional Neural Network architectures from skin lesions.",
      conference: "3rd International Conference on Innovative Mechanisms for Industry Applications",
      image:images.project_1,
      publicationLink:"https://ieeexplore.ieee.org/document/10426230",
      pptLink: "https://drive.google.com/file/d/1glbIspUGi2VEHBFUPqKtItrmRxpdTc2s/view?usp=sharing",
    },

    {
      title: "Deep Learning Assessment of Monkeypox segmentation",
      category:"Research",
      year:"2024",
      subtitle: "Published in AIP",
      skills: ["CNN's","Alexnet", "ResNet50",  "EfficientNet B0","Image Processing","Transfer Learning"],
      description:"This study dives through the foundations of deep learning and Image Processing alongside assessing the multimodal analysis of various CNN architectures on Monkeypox Skin Lesion Image Dataset",
      conference:"2nd International Conference on Robotics, Automation and Intelligent Computing",
      image:images.project_2,
      publicationLink: "https://pubs.aip.org/aip/acp/article/3255/1/020009/3333230/Deep-learning-assessment-of-monkeypox-detection?searchresult=1"
    },
    {
      title: "GameVerse",
      category:"Academic",
      year:"2023",
      subtitle: "Professional Data Mining",
      skills: ["Tableau","SteamDB","Game trend analysis","Developer/Publisher analysis","Association Rule","CLIP model","Genre prediction","Review analysis"],
      description:"This study presents the trends and patterns in the video game industry sourcing and user reviews in SteamDB.",
      image:images.project_3,
      codeLink: "https://github.com/larry6683/Data-Mining-Project",
      reportLink: "https://drive.google.com/file/d/1QKEbtejZsTwvLT-iJWprRZS8TxsoaZ7J/view?usp=sharing",
      pptLink: "https://drive.google.com/file/d/1QnlSGiZECGyv26eDcgsFcMtmzx5Phokf/view?usp=sharing"
    },
    {
      title: "Bike Sharing Count Prediction using Machine Learning",
      category:"Academic",
      year:"2023",
      subtitle: "Published in UGC Journal",
      skills: ["Machine Learning","Data Processing"],
      description:"This study dives through the latest trend in the market, supplanting traditional bike rental methods. These innovative systems streamline the bike rental process, enabling customers to effortlessly rent a bike.",
      conference:"International Journal of All Research Education and Scientific Methods",
      image:images.project_4,
      publicationLink: "https://www.ijaresm.com/uploaded_files/document_file/Vedant_FitterfUDN.pdf"
    },
    
  
    // Add more project objects as needed
  ];

  return (
    <div>
      <h2 className="myprojectsh2"> My Projects</h2>
    <div className="main">
      <div className="angry-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            year={project.year}
            category={project.category}
            subtitle={project.subtitle}
            skills={project.skills}
            description={project.description}
            image={project.image}
            codeLink={project.codeLink}
            videoLink={project.videoLink}
            reportLink={project.reportLink}
            conference={project.conference}
            publicationLink={project.publicationLink}
            pptLink={project.pptLink}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default MyProjects;
