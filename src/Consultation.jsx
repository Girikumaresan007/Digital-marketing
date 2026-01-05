import "./Consultation.css";

const Consultation = () => {
  return (
    <section className="consultation">
      <div className="consultation-container center-only">

        <div className="consultation-left">
          <h1>
            Book Your <span>FREE</span><br />
            Digital Marketing Consultation
          </h1>

          <p className="subtitle">
            Get expert insights to grow your business online.
            No cost. No pressure. Just results.
          </p>

          <ul className="benefits">
            <li>✔ Free Website & Social Media Audit</li>
            <li>✔ Personalized Growth Strategy</li>
            <li>✔ Lead & Sales Improvement Tips</li>
            <li>✔ 30-Minute 1-on-1 Call</li>
          </ul>

        <div className="cta-row">

  {/* CALL – works in mobile */}
  <a href="tel:+919342622161" className="cta-btn call">
    📞 Call Now
  </a>

  {/* EMAIL – works in desktop */}
<button
  className="cta-btn mail"
  onClick={() => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=risingsun.techs@gmail.com&su=Free Digital Marketing Consultation&body=Hi Team,%0A%0AI would like to book a FREE digital marketing consultation.%0A%0AName:%0APhone:%0ABusiness Type:%0APreferred Contact Time:%0AKey Challenge:%0A%0AThanks",
      "_blank"
    );
  }}
>
  ✉️ Email Us
</button>




</div>

        </div>

      </div>
    </section>
  );
};

export default Consultation;
