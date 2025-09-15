import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  return (
    <section className="group relative" data-aos="fade-up" data-aos-delay={index * 100}>
      <div
        className="rounded-2xl overflow-hidden h-[100%] border transition-all duration-500
      bg-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10
      backdrop-blur-sm"
      >
        {/* Project Image Wrapper */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                Featured
              </span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="text-xs px-3 py-1 rounded-full font-medium bg-gray-800/80 text-gray-300 backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* Overlay (only covers image area) */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 
                  bg-black/60 backdrop-blur-sm flex items-center justify-center space-x-4 "
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500 text-white 
                 hover:bg-blue-600 text-sm font-medium hover:-translate-y-[10px] transition-all duration-300"
            >
              <FiExternalLink className="text-2xl" />
              <span>Live Demo</span>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-800 text-white 
                 hover:bg-gray-700 text-sm font-medium hover:-translate-y-[10px] transition-all duration-300"
            >
              <FiGithub className="text-lg" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Project Content (separate, below image) */}
        <div className="p-6">
          <h3 className="text-xl font-medium mb-3 group-hover:text-blue-500 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed mb-4 text-gray-400">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
