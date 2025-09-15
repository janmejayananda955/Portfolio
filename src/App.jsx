import { React, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <main className="bg-gray-950">
      <Hero />
      <Skills />
      <Project />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
