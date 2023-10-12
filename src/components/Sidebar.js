import React, { useState } from 'react';
import './nav.css';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <div className="sidebar-icon">
      <div className="expand-button" onClick={handleExpand}>
        {expanded ? '➖' : '➕'}
      </div>
        <span role="img" aria-label="Home Icon">
          🏠
          {expanded && <span className="icon-name">Home</span>}
        </span>
        
      </div>
      <div className="sidebar-icon">
        <span role="img" aria-label="About Icon">
          ℹ️ 
          {expanded && <span className="icon-name">  About</span>}
        </span>
        
      </div>
      
    </div>
  );
};

export default Sidebar;
