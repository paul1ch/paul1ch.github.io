import React from 'react';
import { FaLinkedin, FaGithub, FaPlus } from 'react-icons/fa';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="sidebar-icon">
        <FaLinkedin />
      </a>
      <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="sidebar-icon">
        <FaGithub />
      </a>
      <div className="sidebar-icon">
        <FaPlus />
      </div>
    </div>
  );
};

export default Sidebar;