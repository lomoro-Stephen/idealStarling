import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavbarStyle.css';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMobileNavOpen]);

  return (
    <nav className="Navbar">
      <ul className="logoImage">
        <span><img className="logoI" src={logo1} alt="Logo" /></span>
        <span>Stephix Edu</span>
      </ul>

      <ul className="Navbar-items">
        <Link to="/"><li>Home</li></Link>
        <Link to="/About"><li>About</li></Link>
        <Link to="/courses"><li>Courses</li></Link>
        <Link to="/Services"><li>Services</li></Link>
        <Link to="/teams"><li>Teams</li></Link>
        <Link to="/terms"><li>Terms</li></Link>
      </ul>
      <ul className="Navbar-items">
        <Link to="/Contact"><li>Contact</li></Link>
        <Link to="/login"><li>Login</li></Link>
      </ul>
      <span className='mobileBars' onClick={handleMobileNavToggle}>
        <FontAwesomeIcon icon={isMobileNavOpen ? faTimes : faBars} />
      </span>
      {isMobileNavOpen && (
        <div className="MobileNavbar">
          <Link to="/"><li>Home</li></Link>
          <Link to="/About"><li>About</li></Link>
          <Link to="/courses"><li>Courses</li></Link>
          <Link to="/Services"><li>Services</li></Link>
          <Link to="/teams"><li>Teams</li></Link>
          <Link to="/terms"><li>Terms</li></Link>
          <Link to="/Contact"><li>Contact</li></Link>
          <Link to="/login"><li>Login</li></Link>
        </div>
      )}
    </nav>
  );
}
