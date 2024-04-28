import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FaHome, FaCog, FaListAlt, FaEnvelope, FaQuestionCircle } from 'react-icons/fa';
import './App.css';
import MainContent from './MainContent';

const Sidebar = ({ setActiveSection }) => {
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        Skillmatrix
      </div>
      <ul className="sidebar-menu">
        <li onClick={() => handleSectionClick("dashboard")}><FaHome /> Dashboard</li>
        <li onClick={() => handleSectionClick("manageSkills")}><FaCog /> Manage Skills</li>
        <li onClick={() => handleSectionClick("submissions")}><FaListAlt /> Submissions</li>
        <li onClick={() => handleSectionClick("drafts")}><FaListAlt /> Drafts</li>
        <li onClick={() => handleSectionClick("notifications")}><FaEnvelope /> Notifications & Support</li>
        <li onClick={() => handleSectionClick("help")}><FaQuestionCircle /> Help & Support</li>
        <li onClick={() => handleSectionClick("settings")}><FaCog /> Settings</li>
      </ul>
    </div>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [drafts, setDrafts] = useState([
    {
      topic: "Microsoft Azure Active Directory",
      domain: "Integration",
      subDomain: "Identity Management"
    },
    {
      topic: "Amazon Elastic Kubernetes Service (EKS)",
      domain: "Cloud-AWS",
      subDomain: "Compute - Containers"
    },
    {
      topic: "API Gateway",
      domain: "Cloud - GCP",
      subDomain: "API management"
    }
  ]);

  const handleDeleteDraft = (deletedDraft) => {
    const updatedDrafts = drafts.filter(draft => draft !== deletedDraft);
    setDrafts(updatedDrafts);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar setActiveSection={setActiveSection} />
        {activeSection === "drafts" && <MainContent drafts={drafts} onDeleteDraft={handleDeleteDraft} />}
      </div>
    </Router>
  );
};

export default App;
