import React, { useEffect, useState } from "react";
import { timelineData } from "./Helper";

export default function Journey() {
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get how much user has scrolled
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // Progress in % of page
      const progress = Math.min(scrollTop / docHeight, 1);

      // Increase line height based on scroll progress (in %)
      setLineHeight(progress * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="journey"
      className="w-full relative text-white py-20 px-6"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-purple-400">Journey</span>
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Background line (full height) */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 
                        w-1 h-full bg-gray-700"
        ></div>

        {/* Animated line (grows on scroll) */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 
                     w-1 bg-gradient-to-b from-purple-500 to-blue-500 transition-all duration-300"
          style={{ height: `${lineHeight}%` }}
        ></div>

         <div className="max-w-6xl mx-auto space-y-16 relative">
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={index} className="relative flex md:justify-between items-center w-full">
              {/* Left side */}
              {isLeft ? (
                <>
                  <div 
                  className="w-full md:w-5/12 flex justify-end"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  >
                    <div className="bg-gray-800 p-3 sm:p-6 rounded-xl shadow-md w-[150px] lg:w-full md:w-[450px]">
                      <h3 className="text-xl font-semibold">
                        {item.year} – {item.title}
                      </h3>
                      <p className="text-gray-400 mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div 
                  className="absolute left-1/2 w-6 h-6 rounded-full border-2 border-white transform -translate-x-1/2 z-10"
                    data-aos="fade-right"
                  data-aos-delay="200"
                  >
                    <div className={`w-full h-full rounded-full ${item.color}`} />
                  </div>
                  <div className="w-0 md:w-5/12" />
                </>
              ) : (
                <>
                  <div className="w-0 md:w-5/12" />
                  <div 
                  className="absolute left-1/2 w-6 h-6 rounded-full border-2 border-white transform -translate-x-1/2 z-10"
                    data-aos="fade-left"
                  data-aos-delay="200"
                  >
                    <div className={`w-full h-full rounded-full ${item.color}`} />
                  </div>
                  <div className="w-full md:w-5/12 flex justify-start" 
                    data-aos="fade-left"
                  data-aos-delay="300"
                  >
                    <div className="bg-gray-800 p-3 sm:p-6 rounded-xl shadow-md w-[150px] lg:w-full md:w-[450px]">
                      <h3 className="text-xl font-semibold">
                        {item.year} – {item.title}
                      </h3>
                      <p className="text-gray-400 mt-2">{item.description}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
