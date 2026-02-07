import { MessageCircle, Instagram, Facebook } from "lucide-react";
function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value || "Contact Form Message";
    const message = e.target.message.value;

    const gmailURL =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      "&to=risingsun.techs@gmail.com" +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(
        `Hi Team,

You have received a new message from your website.

Name: ${name}
Email: ${email}

Message:
${message}

Thanks`
      )}`;

    window.open(gmailURL, "_blank");
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p className="contact-sub">
        Let’s discuss how we can grow your business online.
      </p>

      <div className="contact-wrapper">

        {/* LEFT */}
        <div className="contact-info">
          <div className="info-box">
            <h4>📞 Phone</h4>
            <p>+91 9342622161</p>
          </div>

          <div className="info-box">
            <h4>✉️ Email</h4>
            <p>risingsun.techs@gmail.com</p>
          </div>

          <div className="info-box">
            <h4>📍 Location</h4>
            <p>
              60, Ayyanar Kovil Street <br />
              Puvalur, Trichy - 621712
            </p>
          </div>
            <div className="social-icons">
  <a
    href="https://wa.me/919342622161"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon whatsapp"
    aria-label="WhatsApp"
  >
    <MessageCircle size={22} />
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61586530404253"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon facebook"
    aria-label="Facebook"
  >
    <Facebook size={22} />
  </a>

    <a
    href="https://www.instagram.com/risingsun.techs/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon instagram"
    aria-label="Instagram"
  >
    <Instagram size={22} />
  </a>
</div>

        </div>

        {/* RIGHT – FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <input name="subject" type="text" placeholder="Subject" />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}

export default Contact;
