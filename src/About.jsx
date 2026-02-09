function About() {
  return (
    <section className="about" id="about">

      {/* CENTER HEADING */}
      <div className="about-heading">
        <span className="about-tag">About Us</span>

      </div>

      <div className="about-container">

        {/* LEFT – TEXT */}
        <div className="about-text">
            <p> <h2>Driving Digital Growth With Strategy & Innovation</h2></p>
            <br></br>
          <p>
           We are a website-focused digital agency helping businesses build a strong
           online presence through modern, high-performance website design and
           development. Our team combines strategy, creativity, and clean code to
            deliver reliable and scalable digital solutions.
          </p>

         <p>
          From responsive business websites to conversion-optimized platforms,
          we create custom web solutions that reflect your brand, engage users,
          and support long-term business growth.
        </p>


        <div className="about-section">
  <div className="about-content">
    {/* heading + paragraph here */}

    <div className="about-stats">
      <div>
        <h3>100+</h3>
        <span>Clients Served</span>
      </div>
      <div>
        <h3>5+</h3>
        <span>Years Experience</span>
      </div>
      <div>
        <h3>250+</h3>
        <span>Projects Delivered</span>
      </div>
    </div>
  </div>
</div>

        </div>

        {/* RIGHT – IMAGE */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
            alt="Digital marketing team working"
          />
        </div>

      </div>
    </section>
  );
}

export default About;
