import React from "react";
import Navbar from "./Navbar";
import facebook from "/facebook.png";
import instagram from "/instagram.png";
import linkdin from "/linkdin.png";
import github from "/github.png";
import twitter from "/twitter.png";
import imghero from "/Janmejaya_Image.png";
import janmejaya from "/Janmejaya_resume_01.pdf";
import { Typewriter } from "react-simple-typewriter";
import { FaDev } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col items-center">
      <div
        className="md:h-[550px] h-[550px] w-[450px] bg-gradient-to-r absolute from-[#6d2897] via-[#8e6cf5]
        to-[#bb61c4] transform rotate-45 z-0 right-3 top-28 rounded-3xl"
      ></div>
      <Navbar />
      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 
      md:px-52 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10"
      >
        {/* Left Section */}
        <section
          className="flex-1 mr-28 md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>
          <header>
            <h1 className="text-4xl mb-2 mx-auto sm:text-4xl md:text-5xl font-bold text-white mb4">
              Janmejaya Nanda
            </h1>
            <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-white mb-2">
              I'm{" "}
              <span className="text-[#3e0f4a] md:text-[#c744ec] font-semibol ">
                <Typewriter
                  words={[
                    `Web Developer`,
                    "Backend Developer",
                    "FullStack Developer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>
          </header>
          <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-6 mx-auto font-serif">
            I’m a passionate developer who loves building impactful digital
            experiences. With a strong foundation in{" "}
            <span className="text-purple-400">Java</span>,
            <span className="text-blue-400"> Spring Boot</span>, and modern web
            technologies, I enjoy crafting clean, scalable, and user-friendly
            solutions. Always curious and eager to learn, I turn ideas into
            reality through code.
          </p>

          <div className="flex items-center space-x-4 mb-6">
            <a href="#">
              <img
                src={github}
                alt="github"
                className="w-11 h-11 drop-shadow-lg drop-shadow-white"
              />
            </a>
            <a href="#">
              <img
                src={linkdin}
                alt="linkdin"
                className="w-11 h-11 drop-shadow-lg drop-shadow-blue-400"
              />
            </a>
            <a href="#">
              <img
                src={twitter}
                alt="twitter"
                className="w-11 h-11 drop-shadow-lg drop-shadow-white"
              />
            </a>
            <a href="#">
              <img
                src={facebook}
                alt="facebook"
                className="w-11 h-11 drop-shadow-lg drop-shadow-blue-400"
              />
            </a>
            <a href="#">
              <img
                src={instagram}
                alt="instagram"
                className="w-11 h-11 drop-shadow-lg drop-shadow-orange-400"
              />
            </a>
          </div>
          <a href={janmejaya} download>
            <button
              className="inline-flex text-white border-2 py-2 px-6 focus:outline-none
                hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg"
            >
              Download CV
            </button>
          </a>
        </section>
        <figure
          data-aos="zoom-in"
          data-aos-delay="500"
          className="flex-1 flex justify-center md:justify-end mt-0"
        >
          <img
            src={imghero}
            alt="Hero Image"
            className="w-[250px] sm:w-[400px] md:h-[485px] object-center rounded-lg md:ml-70 "
          />
        </figure>
      </main>
    </div>
  );
}
