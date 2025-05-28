import React from 'react';
import { FaLinkedin, FaGithub, FaPlus } from 'react-icons/fa';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="https://www.linkedin.com/in/paulin-chardigny-92b55a227" target="_blank" rel="noopener noreferrer" className="sidebar-icon">
        <FaLinkedin />
      </a>
      <a href="https://github.com/paul1ch" target="_blank" rel="noopener noreferrer" className="sidebar-icon">
        <FaGithub />
      </a>
      <a href="#contact" className="sidebar-icon">
        <FaPlus />
      </a>
    </div>
  );
};

export default Sidebar;