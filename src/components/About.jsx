import React from "react";
import img_about1 from "/imghero.png";
import img_about2 from "/imghero.png";
import img_about from "/imghero.png";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center p-4  text-white sm:px-6 md:p-12 lg:m-0"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-5 relative"
        >
          <div
            className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-l
                from-[#6d2897] vai-[#6c95f5] to-[#bb61c5] absolute transform rotate-12 z-0 right-5 -top-2
                md:top-10 rounded-full md:w-[700px] lg:-left-1"
          ></div>
          <img
            src={img_about1}
            alt="image about 1"
            className="absolute top-2 left-5 sm:left-10 transform -translate-y-12 z-20 w-24 h-24 sm:w-32 sm:h-32
                rounded-3xl shadow-lg md:w-40 md:h-40 lg:-left-3 md:top-1 md:left-1"
          />
          <img
            src={img_about2}
            alt="image about 2"
            className="relative z-10 w-36 h-44 sm:w-40 sm:h-40
          md:w-72 md:h-96 rounded-lg shadow-lg "
          />
          <img
            src={img_about}
            alt=" about image "
            className="absolute bottom-0 right-5 sm:right-10 transform translate-y-12 z-10 w-20 h-20 sm:w-32
          sm:h-32 rounded-3xl shadow-lg"
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
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            dolorem sint accusamus repudiandae dolorum alias consequuntur quod
            tempora nesciunt veniam, neque, atque id dolores quia libero fuga
            adipisci expedita eos natus? Maiores laboriosam similique architecto
            quas et modi accusamus nemo.
          </p>
          <footer>
            <button
              className="inline-flextext-white border-2 py-2 px-4 sm:px-6 focus:outline-none
                hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm sm:text-lg hover:cursor-pointer"
            >
              Learn More
            </button>
          </footer>
        </article>
      </div>
    </section>
  );
}
