import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import ContactMe from "./Components/ContactMe/ContactMe";
import Homepage from "./Components/Homepage/Homepage";
import Skills from "./Components/Skills/Skills";
import MyProjects from "./Components/MyProjects/MyProjects";
import About from "./Components/About/About";
import "./App.css"; // Import global styles

const App = () => {
  const [activeComponent, setActiveComponent] = useState("home"); // State to manage active component

  const handleNavClick = (component) => {
    setActiveComponent(component);
  };

  // Render different components based on activeComponent state
  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <Homepage />;
      case "introduction":
        return <About />;
      case "skills":
        return <Skills />;
      case "myprojects":
        {
          console.log("case");
        }
        return <MyProjects />;

      case "contact":
        return <ContactMe/>;

      default:
        return <Homepage />;
    }
  };

  return (
    <div className="App">
      <NavBar onNavClick={handleNavClick} /> {/* Pass handleNavClick as prop */}
      {renderComponent()}
      <footer className="footer">
      <p>Larry6683.</p>
    </footer>
    </div>
  );
};

export default App;
