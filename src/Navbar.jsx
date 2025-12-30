import { Link, useLocation } from "react-router-dom";
import logo from "./Assets/Copilot_20251230_151301.png";

function Navbar() {
  const location = useLocation();

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      // go to landing page and scroll
      window.location.href = `/#${id}`;
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="navbar">
      <div className="logo-box">
        <img src={logo} alt="Upturn Logo" className="logo-img" />
        <h2 className="logo-text">RISING</h2>
      </div>

      <nav>
        <a onClick={() => goToSection("home")}>Home</a>
        <a onClick={() => goToSection("about")}>About</a>
        <a onClick={() => goToSection("services")}>Services</a>
        <a onClick={() => goToSection("contact")}>Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
