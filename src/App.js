import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
// import Testimonial from "./Testimonial";
// import Instagram from "./Instagram";
import Contact from "./Contact";
import Consultation from "./Consultation";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Contact />
            </>
          }
        />

        {/* Consultation Page */}
        <Route
          path="/consultation"
          element={<Consultation />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
