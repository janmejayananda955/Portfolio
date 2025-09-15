import img_about from "/Janmejaya_Image.png";
import Hero from "./Hero";

import janmejaya from "/Janmejaya_resume_01.pdf";
import Journey from "./data/Jourrney";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex flex-col items-center justify-center p-4  text-white sm:px-6 md:p-12 lg:m-0"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-20 mt-20">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-5 relative"
        >
          {/* <div
            className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-l
                from-[#6d2897] vai-[#6c95f5] to-[#bb61c5] absolute transform rotate-12 z-0 right-5 -top-2
                md:top-10 rounded-full md:w-[700px] lg:-left-1"
          ></div> */}

          <img
            src={img_about}
            alt="image about 2"
            className="relative z-10 w-36 h-44 sm:w-40 sm:h-40
          md:w-72 md:h-96 rounded-lg  shadow-lg shadow-white/30 "
          />
        </figure>
        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg:text-left relative top-10 lg:ml-10"
        >
          <div className="absolute z-0 w-40 h-40 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About <span className="text-blue-600">Me</span>
            </h1>
          </header>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed relative z-10">
            Hi, I’m{" "}
            <span className="text-blue-400 font-semibold ">Janmejaya</span>, a
            passionate{" "}
            <span className="text-blue-400 font-bold">Backend Developer</span>{" "}
            who loves building scalable and efficient applications. I specialize
            in{" "}
            <span className="text-blue-400 font-bold">
              Java, Spring Boot, REST APIs, and Databases
            </span>
            . Alongside backend development, I also explore frontend
            technologies like
            <span className="text-green-400 font-bold"> React</span> to
            strengthen my full-stack skills. Always eager to learn, I enjoy
            turning ideas into reliable and impactful projects.
          </p>

          <footer className="flex flex-row gap-4 justify-center items-center">
            <a href={janmejaya} download={true}>
              <button
                className="inline-flextext-white border-2 py-2 px-4 sm:px-6 focus:outline-none
              
                hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm sm:text-lg hover:cursor-pointer"
              >
                Download CV
              </button>
            </a>
            <a href="#contact">
              <button
                className="inline-flextext-white border-2 py-2 px-4 sm:px-6 focus:outline-none
              
                hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm sm:text-lg hover:cursor-pointer"
              >
                Hire Me
              </button>
            </a>
          </footer>
        </article>
      </div>

      {/*  */}

      <Journey/>

    </section>
  );
}
