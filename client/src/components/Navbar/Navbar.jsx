import { Link } from 'react-router-dom';
import logo1 from '../../assets/logo1.png';
import './NavbarStyle.css';

export default function Navbar() {
  return (
    <nav className="Navbar">
      
      <ul className="logoImage">
        <span><img className="logoI" src={logo1} alt="Logo" /></span>
        <span>Stephix Edu</span>
      </ul>

      <ul className="Navbar-items">
        <Link to="/"><li>Home</li></Link>
        <Link to="/About"><li>About</li></Link>
        <Link to="/Services"><li>Services</li></Link>
        <Link to="/Contact"><li>Contact</li></Link>
        <Link to="/teams"><li>Teams</li></Link>
        <Link to="/terms"><li>Terms</li></Link>
      </ul>
    </nav>
  );
}
