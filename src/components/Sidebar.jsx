import React from 'react';
import SkillMatrixLogo from '../Icons/SkillMatrix.png';
import DashboardIcon from '../Icons/dashboard.png'; 
import ManageSkillsIcon from '../Icons/manage-skills.png'; 
import ManageUsersIcon from '../Icons/manage-users.png'; 
import DraftsIcon from '../Icons/draft.png';
import ApprovalsIcon from '../Icons/shared.png'
import ReportsIcon from '../Icons/shared.png';
import LeaderboardIcon from '../Icons/shared.png'; 
import NotificationsIcon from '../Icons/notification.png';
import HelpSupportIcon from '../Icons/help-support.png';
import SettingsIcon from '../Icons/setting-2.png';

function Sidebar({ setActiveSection }) {
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='sidebar'>
      <img className='skillMatrix-logo' src={SkillMatrixLogo} alt="SkillMatrix Logo" />
      <div className='dashboard-links'>
        <div className='links' onClick={() => handleSectionClick("dashboard")}>
          <img src={DashboardIcon} alt="Dashboard Icon" />
          <h3>Dashboard</h3>
        </div>
        <div className='links' onClick={() => handleSectionClick("manageSkills")}>
          <img src={ManageSkillsIcon} alt="Manage Skills Icon" />
          <h3>Manage Skills</h3>
        </div>
        <div className='links' onClick={() => handleSectionClick("manageUsers")}>
          <img src={ManageUsersIcon} alt="Manage Users Icon" />
          <h3>Manage Users</h3>
        </div>
        <div className='links' onClick={() => handleSectionClick("drafts")}>
          <img src={DraftsIcon} alt="Drafts Icon" />
          <h3>Drafts</h3>
        </div>
        <div className='links' onClick={() => handleSectionClick("approvals")}>
          <img src={ApprovalsIcon} alt="Approvals Icon" />
          <h3>Approvals</h3>
        </div>
        <div className='links' onClick={() => handleSectionClick("reports")}>
          <img src={ReportsIcon} alt="Reports Icon" />
          <h3>Reports</h3>
        </div>
        <div className='links' onClick={() => handleSectionClick("leaderboard")}>
          <img src={LeaderboardIcon} alt="Leaderboard Icon" />
          <h3>Leaderboard</h3>
        </div>
        <div className='links' onClick={() => handleSectionClick("notifications")}>
          <img src={NotificationsIcon} alt="Notifications Icon" />
          <h3>Notifications</h3>
        </div>
        <div className='links' onClick={() => handleSectionClick("help")}>
          <img src={HelpSupportIcon} alt="Help & Support Icon" />
          <h3>Help & Support</h3>
        </div>
        <div className='links' onClick={() => handleSectionClick("addSkills")}>
          <img src={SettingsIcon} alt="Settings Icon" />
          <h3>Settings</h3>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
