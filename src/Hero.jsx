import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="one">Get More Visibility. Generate More</h1>

        <h1 className="two">
          Leads. <span className="grow">Grow Faster</span>
        </h1>
<br></br>
        <p className="hero-sub">
          We design and develop high-performance websites that help businesses grow online.
          Our focus is on clean UI/UX, responsive design, and conversion-driven results.
        </p>
<br></br>

        <button
          className="btn-primary"
          onClick={() => navigate("/consultation")}
        >
          Book a Free Consultation
        </button>
      </div>
    </section>
  );
}

export default Hero;
