import { React, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "./components/Skills";
import Project from "./components/Project";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <main className="bg-gray-950">
      <Hero />
      <About />
      <Skills />
      <Project />
    </main>
  );
}

export default App;
