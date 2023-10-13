import React, { useState } from 'react';
import './nav.css';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isHomeClicked, setHomeClicked] = useState(false);
  const [isAboutClicked, setAboutClicked] = useState(false);


  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleHomeClick = () => {
    setHomeClicked(!isHomeClicked);
    setAboutClicked(false);
  };

  const handleAboutClick = () => {
    setAboutClicked(!isAboutClicked);
    setHomeClicked(false);
  };

  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <div className="expand-button" onClick={handleExpand}>
        {expanded ? '➖' : '➕'}
      </div>
      <div className={`sidebar-icon`}>
        <span role="img" aria-label="Home Icon">
          <i class="fa-solid fa-house" data-bs-toggle="dropdown" aria-expanded="false"></i>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"><Link to="/">Home</Link></a></li>
            <li><a class="dropdown-item"><Link to="/about ">about</Link></a></li>
          </ul>
          {expanded && <span className="icon-name" onClick={handleHomeClick}> Home</span>}
          {expanded && (
            <div className={`dropdown-options ${isHomeClicked ? 'big' : ''}`}>
              <li className="nav-item"><Link to="/">Home</Link></li>
              <li className="nav-item"><Link to="/about">About</Link></li>
            </div>
          )}
        </span>
      </div>
      <div className={`sidebar-icon`} onClick={handleAboutClick}>
        <span role="img" aria-label="About Icon">
          <i class="fa-solid fa-address-card"></i>
          {expanded && <span className="icon-name" onClick={handleHomeClick}>  About</span>}
          {expanded && (
            <div className={`dropdown-options ${isAboutClicked ? 'big' : ''}`}>
              <div >Option A</div>
              <div >Option B</div>
              <div >Option C</div>
            </div>
          )}
        </span>

      </div>

    </div>
  );
};

export default Sidebar;
