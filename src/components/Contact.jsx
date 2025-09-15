import React from "react";
import { useState, useRef } from "react";

import { LuSend } from "react-icons/lu";
import { CONTACT_INFO, SOCIAL_LINKS } from "./data/Data";

import TextInput from "./input/TextInput";
import SuccessModel from "./SuccessModel";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef(null);

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API all
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    //Auto hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen overflow-hidden py-20 sm:px-6 text-white relative"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 bg-blue-500" />

        <div className="absolute bottom-40 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 bg-purple-500" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="text-sm uppercase tracking-widest text-gray-500">
            Let's Connect
          </div>
          <h2 className="text-3xl md:text-5xl font-light mb-6">
            Get In <span className="text-blue-500 font-medium"> Touch</span>
          </h2>

          <p className="text-xl max-w-2xl mx-auto text-gray-400">
            Ready to start your next project? Let's discuss how we can bring
            your ideas to life.
          </p>
        </div>

        <div
          className="grid lg:grid-cols-2 gap-16 items-start p-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Contact From */}
          <div data-aos="zoom-in-right" data-aos-delay="300">
            <div
              className="
                    p-8 rounded-2xl border bg-gray-800/50 border-gray-700 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-medium mb-8">Send me a message</h3>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6 ">
                  <TextInput
                    value={formData.name}
                    handleInputChange={(text) =>
                      handleInputChange("name", text)
                    }
                    label="Your Name"
                  />

                  <TextInput
                    label="Email Address"
                    value={formData.email}
                    handleInputChange={(text) =>
                      handleInputChange("email", text)
                    }
                  />
                </div>

                <TextInput
                  label="Your Message"
                  value={formData.message}
                  textarea
                  handleInputChange={(text) =>
                    handleInputChange("message", text)
                  }
                />

                <button
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-400
                  text-white py-4 rounded-xl text-sm uppercase tracking-wider font-medium transition-all duration-300 flex justify-center items-center space-x-2"
                  onClick={handleSubmit}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin transition-all w-4 h-4 border-white border-t-transparent rounded-full" />
                      {/* className="" */}
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <LuSend size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-10" data-aos="fade-left" data-aos-delay="300">
            <div>
              <h3 className="text-2xl font-medium mb-8">Contact Information</h3>
              <div className="space-y-6 ml-5">
                {CONTACT_INFO.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-blue-500 text-xl">{item.icon}</div>
                    <div>
                      <div className="text-gray-400 text-sm">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-medium mb-6 ">Connect with me</h3>
              <div className="grid grid-cols-2  gap-2 sm:ml-">
                {SOCIAL_LINKS.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
            flex items-center justify-center w-40 sm:w-60 md:w-80 lg:w-50  xl:w-60 h-12 rounded-xl text-2xl
            transition-all duration-300 text-gray-400 bg-gray-800/40 
            ${link.color} ${link.bgColor}
          `}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Avaliablity message */}
            <div className="p-6 rounded-xl border bg-green-500/10 border-green-500/20">
              <div className="flex items-center space-x-3 mb-2">
                <div className="rounded-full w-5 h-5 bg-green-500 animate-pulse"></div>
                <span className="font-medium text-green-500">
                  Available for work
                </span>
              </div>
              <p className="text-sm">
                I'm currently available for freelance projects and full-time
                opertuinties.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20" data-aos="fade-up-right" data-aos-delay="300">
                <div className="max-w-2xl mx-auto p-8 rounded-2xl border 
                bg-gray-800/30 border-gray-700">
                  <h3 className="text-xl font-medium mb-4">Prefer a quick call?</h3>
                  <p className="text-gray-400 mb-6">
                    Somthing a conversation is worth a thousand messages. Fell free
                    to schedule a call to discuss your project.
                  </p>
                  <button className="px-6 py-3 rounded-full border
                  font-medium transition-all duration-300 border-gray-600 hover:border-blue-500
                  hover:text-blue-400">Schedule a Call</button>
                </div>
        </div>

      </div>

      <SuccessModel showSuccess={showSuccess} setShowSuccess={setShowSuccess} />
    </section>
  );
}
