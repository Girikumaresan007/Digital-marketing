import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Consultation from "./Consultation";
import Footer from "./Footer";
import Preloader from "./Preloader"; // 👈 make sure this path is correct

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // ⏳ 2.5 seconds loader

    return () => clearTimeout(timer);
  }, []);

  // 👇 Show preloader first
  if (loading) {
    return <Preloader />;
  }

  // 👇 After loading, show your app
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
        <Route path="/consultation" element={<Consultation />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
