import ConsultationForm from "./ConsultationForm";
import "./Consultation.css";

const Consultation = () => {
  return (
    <section className="consultation">
      <div className="consultation-container">

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
        </div>

        <div className="consultation-right">
          <ConsultationForm />
        </div>

      </div>
    </section>
  );
};

export default Consultation;
