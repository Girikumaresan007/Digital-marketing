import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";          // if exists
import Services from "./Services";
import Testimonial from "./Testimonial";
import Instagram from "./Instagram";
import Contact from "./Contact";
import Footer from "./Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <Testimonial /> */}
      {/* <Instagram /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
