import { useRef } from "react";

import { IoMailOutline } from "react-icons/io5";
import { FaArrowUp, FaCode, FaHeart } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

function Footer() {
  const footerRef = useRef(null);

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FiGithub />,
      url: "https://github.com",
      color: "text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      url: "https://linkdin.com",
      color: "text-blue-400",
    },
    {
      name: "Twiter",
      icon: <FiTwitter />,
      url: "https://twitter.com",
      color: "text-sky-400",
    },
    {
      name: "Email",
      icon: <IoMailOutline />,
      url: "test@gmail.com",
      color: "text-green-400",
    },
  ];
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pb-15" data-aos="zoom-in" data-aos-delay="300">
      {/* Gradiant Line */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      ></div>

      <div>
        <div className="flex flex-col justify-center items-center">
          {/* Animated logo with Name */}
          <div className="flex flex-row gap-5 justify-center items-center p-5 mt-3">
            <FaCode
              className="text-2xl sm:text-3xl text-blue-500 animate-spin "
              style={{ animationDuration: "3s" }}
            />
            <span className="text-2xl sm:text-3xl text-gray-300 font-bold">
              JANMEJAYA NANDA
            </span>
          </div>
          {/* Little description About me */}
          <p className="text-sm sm:text-[1.1rem] text-white max-w-2xl mx-auto font-light text-center">
            Crafting digital expriences with passion, precision and a touch of
            magic
          </p>
          {/* socialIcons */}
          <div className=" p-3 rounded-2xl flex space-x-6 mt-10">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                name={link.name}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300
                     bg-white/10 `}
              >
                <span className={`text-2xl hover:${link.color} text-white`}>
                  {link.icon}
                </span>
              </a>
            ))}
          </div>

          {/* Line with icon */}
          <div className="flex flex-row justify-center items-center gap-5 m-10">
            <div className="w-20 h-[1px] bg-gray-500"></div>
            <span className="text-sm text-red-500">
              <FaHeart />
            </span>
            <div className="w-20 h-[1px] bg-gray-500"></div>
          </div>
          {/* copyright */}
          <p className="text-white/30 mb-15">
            &copy; 2025 Time To Program. All rights reserved.
          </p>

          {/* Back to Top Botton */}
          <button className="border border-white/30 rounded-3xl bg-white/10 backdrop-blur-2xl p-1"
          onClick={()=>scrollToTop()}>
            <div className="flex flex-row justify-center items-center gap-2 p-2">
              <span className="text-white/50 font-mono text-[.9rem]">
                <FaArrowUp />
              </span>
              <span className="text-white/50 font-mono text-[.9rem]">
                Back to top
              </span>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
