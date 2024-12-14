import { Link } from 'react-router-dom';
import logo1 from '../../assets/logo1.png';
import './NavbarStyle.css';

export default function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="logoImage">
        <img className="logoI" src={logo1} alt="Logo" />
      </ul>
      <ul className="Navbar-items">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/terms">Terms</Link></li>
      </ul>
    </nav>
  );
}
