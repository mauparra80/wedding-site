import './Navbar.css'

export default function Navbar({scrollToSection}) {

  return (
    <nav className="desktop-navbar">
      <ul>
        <li><button className="button-light nav-button" onClick={() => scrollToSection('section-ceremony-reception-info')}>RSVP</button></li>
        <li><button className="button-light nav-button" onClick={() => scrollToSection('section-information')}>Details</button></li>
        <li><button className="button-light nav-button" onClick={() => scrollToSection('section-registry')}>Registry</button></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  )
}