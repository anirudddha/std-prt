import React, { useState } from 'react';
import './nav.css';

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(selectedMenu === menu ? null : menu);
  };

  const renderDropdownOptions = (menu) => {
    if (selectedMenu === menu) {
      return (
        <ul className="additional-options-menu">
          <li>
            <a href={`#${menu}-option1`}>Option 1</a>
          </li>
          <li>
            <a href={`#${menu}-option2`}>Option 2</a>
          </li>
        </ul>
      );
    }
    return null;
  };

  return (
    <div>
      <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
        {/* Expand button */}
        <button onClick={toggleExpand} className={`expand-button ${expanded ? 'expanded' : ''}`}>
          {expanded ? '<<' : '>>'}
        </button>

        {/* Sidebar content */}
        <ul className="sidebar-menu">
          <li>
            <div onClick={() => handleMenuClick('home')}>
              <span role="img" aria-label="Home">&#127968;</span>
              {expanded && <span>Home</span>}
              <span className={`arrow ${selectedMenu === 'home' && 'arrow-expanded'}`}></span>
            </div>
            {renderDropdownOptions('home')}
          </li>
          <li>
            <div onClick={() => handleMenuClick('about')}>
              <span role="img" aria-label="About">&#128218;</span>
              {expanded && <span>About</span>}
              <span className={`arrow ${selectedMenu === 'about' && 'arrow-expanded'}`}></span>
            </div>
            {renderDropdownOptions('about')}
          </li>
          <li>
            <div onClick={() => handleMenuClick('contact')}>
              <span role="img" aria-label="Contact">&#128222;</span>
              {expanded && <span>Contact</span>}
              <span className={`arrow ${selectedMenu === 'contact' && 'arrow-expanded'}`}></span>
            </div>
            {renderDropdownOptions('contact')}
          </li>
        </ul>
      </div>

      <div className="main-content">
        Main Content
      </div>
    </div>
  );
}

export default Navbar;
