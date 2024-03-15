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
        <li><button className="button-light" onClick={() => scrollToSection('section1')}>RSVP</button></li>
        <li><button className="button-light" onClick={() => scrollToSection('section2')}>About Us</button></li>
        <li><button className="button-light" onClick={() => scrollToSection('section3')}>Registry</button></li>
        <li><button className="button-light" onClick={() => scrollToSection('section3')}>FAQs</button></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  
  )
  : (
    <button className="dropdown-button" onClick={() => setNavExpand((prev) => !prev)}>
      open nav
    </button>
  )}
  </div>
);
}

MobileDropdownNav.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};
