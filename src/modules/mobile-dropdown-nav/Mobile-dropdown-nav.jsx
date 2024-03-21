import React, {useState} from "react";
import PropTypes from 'prop-types';
import './mobile-dropdown-nav.css';

export default function MobileDropdownNav({scrollToSection}) {
  const [navExpand, setNavExpand] = useState(false);

  

return (
  <div className="dropdown-container">
    {navExpand ? (
    
    <nav className="dropdown-menu">
      <button className="exit" onClick={() => setNavExpand((prev) => !prev)}>X</button>
      <ul>
        <li><button className="button-light nav-button" onClick={() => scrollToSection('section-ceremony-reception-info')}>RSVP</button></li>
        <li><button className="button-light nav-button" onClick={() => scrollToSection('section-information')}>Details</button></li>
        <li><button className="button-light nav-button" onClick={() => scrollToSection('section-registry')}>Registry</button></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  
  )
  : (
    <button className="dropdown-button" onClick={() => setNavExpand((prev) => !prev)}>
      <hr />
      <hr />
      <hr />
    </button>
  )}
  </div>
);
}

MobileDropdownNav.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};
