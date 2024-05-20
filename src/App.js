import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import '../src/styles.css';
import MainContent from '../src/components/MainContent';
import Sidebar from '../src/components/Sidebar';
import AddSkillsToSkillData from '../src/components/AddSkillsToSkillData';

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
        <div className="main-content">
          {activeSection === "drafts" && <MainContent drafts={drafts} onDeleteDraft={handleDeleteDraft} />}
          {activeSection === "addSkills" && <AddSkillsToSkillData />}
        </div>
      </div>
    </Router>
  );
};

export default App;
