import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import ContactMe from "./Components/ContactMe/ContactMe";
import MyProjects from "./Components/MyProjects/MyProjects";
import About from "./Components/About/About";
import "./App.css";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("about");

  const handleNavClick = (component) => {
    setActiveComponent(component);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "about":
        return <About />;
      case "myprojects":
        return <MyProjects />;
      case "contact":
        return <ContactMe />;
      default:
        return <About />;
    }
  };

  return (
    <div className="App">
      <NavBar onNavClick={handleNavClick} />
      {renderComponent()}
      <footer className="footer">
        <p>© 2025 - Sujith Battu</p>
      </footer>
    </div>
  );
};

export default App;