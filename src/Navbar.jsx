import logo from "./Assets/Copilot_20251230_151301.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-box">
        <img src={logo} alt="Upturn Logo" className="logo-img" />
        <h2 className="logo-text">RISING SUN</h2>
      </div>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
