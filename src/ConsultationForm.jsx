// import { useState } from "react";
// import emailjs from "@emailjs/browser";

// const ConsultationForm = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     website: "",
//     goal: "",                                                                                                     
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.phone) {
//       alert("Please fill required fields");
//       return;
//     }

//     emailjs
//       .send(
//         "service_mddciej",
//         "template_pquaopd",
//         {
//           from_name: form.name,
//           reply_to: form.email,
//           phone: form.phone,
//           website: form.website,
//           goal: form.goal,
//         },
//         "mUjJCuJsqo7MMuqux" // ✅ public key directly
//       )
//       .then(() => {
//         alert("Consultation booked successfully!");
//         setForm({
//           name: "",
//           email: "",
//           phone: "",
//           website: "",
//           goal: "",
//         });
//       })
//       .catch((error) => {
//         console.error("EmailJS error:", error);
//         alert("Email failed to send");
//       });
//   };

//   return (
//     <form className="consultation-form" onSubmit={handleSubmit}>
//       <h3>Book Free Consultation</h3>

//       <input
//         type="text"
//         name="name"
//         placeholder="Full Name*"
//         value={form.name}
//         onChange={handleChange}
//         required
//       />

//       <input
//         type="email"
//         name="email"
//         placeholder="Email Address*"
//         value={form.email}
//         onChange={handleChange}
//         required
//       />

//       <input
//         type="tel"
//         name="phone"
//         placeholder="Phone / WhatsApp*"
//         value={form.phone}
//         onChange={handleChange}
//         required
//       />

//       <input
//         type="url"
//         name="website"
//         placeholder="Website (optional)"
//         value={form.website}
//         onChange={handleChange}
//       />

//       <select name="goal" value={form.goal} onChange={handleChange}>
//         <option value="">What do you want to improve?</option>
//         <option>More Leads</option>
//         <option>More Sales</option>
//         <option>Brand Awareness</option>
//         <option>Website Traffic</option>
//       </select>

//       <button type="submit" className="primary-btn">
//         Book Free Consultation
//       </button>

//       <p className="privacy">🔒 Your information is 100% secure</p>
//     </form>
//   );
// };

// export default ConsultationForm;
