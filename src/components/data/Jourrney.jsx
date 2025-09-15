import { useEffect, useState } from "react";

export default function Journey() {
  const [lineHeight, setLineHeight] = useState("0%");

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("journey");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // How much of section is visible
      const visible = Math.min(windowHeight, Math.max(0, windowHeight - rect.top));
      const total = rect.height;
      const progress = Math.min(100, (visible / total) * 100);

      setLineHeight(`${progress}%`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-950 text-white flex items-center justify-center py-16 px-6"
    >
      <div className="max-w-5xl mx-auto w-full relative">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-purple-500">Journey</span>
        </h2>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Background line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-700 transform -translate-x-1/2"></div>

          {/* Progress line (grows with scroll) */}
          <div
            className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 transform -translate-x-1/2 transition-all duration-300"
            style={{ height: lineHeight }}
          ></div>

          {/* === Milestones === */}
          <div data-aos="fade-left" className="mb-12 flex justify-start">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-xl font-semibold">2021 – Started BCA</h3>
              <p className="text-gray-400">Learned C, Java basics, DBMS.</p>
            </div>
            <div className="relative">
              <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white absolute left-1/2 transform -translate-x-1/2"></div>
            </div>
            <div className="w-1/2"></div>
          </div>

          <div data-aos="fade-right" className="mb-12 flex justify-end">
            <div className="w-1/2"></div>
            <div className="relative">
              <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white absolute left-1/2 transform -translate-x-1/2"></div>
            </div>
            <div className="w-1/2 pl-8 text-left">
              <h3 className="text-xl font-semibold">2022 – Web Development</h3>
              <p className="text-gray-400">HTML, CSS, JS, React basics.</p>
            </div>
          </div>
        
        <div data-aos="fade-left" className="mb-12 flex justify-start">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-xl font-semibold">2021 – Started BCA</h3>
              <p className="text-gray-400">Learned C, Java basics, DBMS.</p>
            </div>
            <div className="relative">
              <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white absolute left-1/2 transform -translate-x-1/2"></div>
            </div>
            <div className="w-1/2"></div>
          </div>

          

          {/* ...continue same for 2023, 2024, 2025 */}
        </div>
      </div>
    </div>
  );
}
