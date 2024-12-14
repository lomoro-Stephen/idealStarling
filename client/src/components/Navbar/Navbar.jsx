import logo1 from "../../assets/logo1.png"
import "../Navbar/NavbarStyle.css";
export default function Navbar() {
  return (
      <div>
          <nav className="Navbar">
              <ul className="logoImage">
                  <img className="logoI" src={logo1} alt="" />
              </ul>
              <ul className="Navbar-items">
                  <li>Home</li>
                  <li>About</li>
                  <li>Service</li>
                  <li>Courses</li>
                  <li>Contact</li>
              </ul>
          </nav>
    </div>
  )
}
