function Services() {
  return (
    <section className="services" id="services">
      <h2 className="section-title">Our Services</h2>
      <p className="section-sub">
        We deliver result-oriented digital marketing solutions designed to
        grow your business.
      </p>

      <div className="services-grid">

        {/* SEO */}
        {/* WEBSITE DESIGN & DEVELOPMENT */}
<div className="service-card">
  <img
    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    alt="Website Design and Development"
  />
  <h3>Website Design & Development</h3>
  <p>
    We design and develop modern, responsive, and high-performance websites
    that strengthen your brand, deliver excellent user experience, and
    convert visitors into customers.
  </p>
  <button>Learn more</button>
</div>


        {/* SOCIAL MEDIA */}
        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1611162616475-46b635cb6868"
            alt="Social Media Marketing"
          />
          <h3>Social Media Marketing</h3>
          <p>
          Build brand awareness and engage your audience across social media platforms.
          We help grow your community and turn followers into loyal customers.
          </p>
          <button>Learn more</button>
        </div>

        {/* CONTENT */}
        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Content Marketing"
          />
          <h3>Content Marketing</h3>
          <p>
            Create valuable and engaging content that captures audience attention.
           Our content strategies attract customers and drive consistent business growth.
          </p>
          <button>Learn more</button>
        </div>

      </div>
    </section>
  );
}

export default Services;
