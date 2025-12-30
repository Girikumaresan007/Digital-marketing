function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p className="contact-sub">
        Let’s discuss how we can grow your business online.
      </p>

      <div className="contact-wrapper">

        {/* LEFT – CONTACT DETAILS */}
        <div className="contact-info">
          <div className="info-box">
            <h4>📞 Phone</h4>
            <p>+91 9342622161</p>
          </div>

          <div className="info-box">
            <h4>✉️ Email</h4>
            <p>info@upturnmarketing.com</p>
          </div>

          <div className="info-box">
            <h4>📍 Location</h4>
            <p>
              60,Ayyanar Kovil Street, <br />
             Puvalur,Trichy - 621712
            </p>
          </div>

          {/* <div className="info-box">
            <h4>⏰ Working Hours</h4>
            <p>Mon – Fri : 9:00 AM – 6:00 PM</p>
          </div> */}
        </div>

        {/* RIGHT – FORM (UI only) */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </form>

      </div>
    </section>
  );
}

export default Contact;
