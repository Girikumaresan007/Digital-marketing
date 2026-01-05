import { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "./Assets/Copilot_20251230_151301.png";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const goToSection = (id) => {
    setMenuOpen(false); // close menu after click

    if (location.pathname !== "/") {
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
        <h2 className="logo-text">RISING SUN</h2>
      </div>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV LINKS */}
      <nav className={menuOpen ? "nav-open" : ""}>
        <a onClick={() => goToSection("home")}>Home</a>
        <a onClick={() => goToSection("about")}>About</a>
        <a onClick={() => goToSection("services")}>Services</a>
        <a onClick={() => goToSection("contact")}>Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
