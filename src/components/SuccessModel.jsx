import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CiCircleCheck } from "react-icons/ci";
import { GoX } from "react-icons/go";
import { LuSparkles } from "react-icons/lu";

const SuccessModal = ({ showSuccess, setShowSuccess }) => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  if (!showSuccess) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        className="relative bg-gray-900 text-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md"
        data-aos="zoom-in"
      >
        {/* Close Button */}
        <button
          onClick={() => setShowSuccess(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          <GoX size={22} />
        </button>

        {/* Check Icon */}
        <div className="flex justify-center mb-4" data-aos="fade-down">
          <CiCircleCheck size={60} className="text-green-400" />
        </div>

        {/* Title */}
        <h2
          className="text-2xl font-bold text-center mb-2"
          data-aos="fade-up"
        >
          Message Sent!
        </h2>

        {/* Message */}
        <p
          className="text-center text-gray-300 mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Thank you for reaching out! I'll get back to you within 24 hours!
        </p>

        {/* Sparkles Icon */}
        <div className="flex justify-center" data-aos="fade-up" data-aos-delay="400">
          <LuSparkles size={30} className="text-yellow-400" />
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
