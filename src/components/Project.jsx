import React, { useState } from "react";
import ProjectCard from "./data/ProjectCard";
import { PROJECTS } from "./data/Helper.js";
import { MdOutlineArrowOutward } from "react-icons/md";


export default function Project() {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleProjects = PROJECTS.slice(0, visibleCount);

  return (
    <section
      id="projects"
      className="min-h-screen overflow-hidden  gap-6 p-4 py-20 text-white sm:px-6 md:p-12 lg:m-0"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="max-w-5xl mx-auto px-6">
        <>
          <h4 className="text-center mb-4">FEATURED WORK</h4>
          <div className="absolute z-0 w-40 h-40 sm:h-60 right-20 bottom-96 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 "></div>
          {/* <div className="absolute z-0 w-40 h-40 sm:h-60 left-20 top -20 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 "></div> */}
          <div className="absolute z-0 w-40 h-40 sm:h-60 left-30 bottom-0 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 "></div>
          <h2 className="text-3xl font-bold text-center mb-4 z-10">
            Recent <span className="text-blue-600 "> Projects</span>
          </h2>
          <p className="text-center mb-10 max-w-2xl mx-auto font-light">
            A collection of projects that showcase my skills and expertise in
            building modern, responsive web applications and solving real-world
            complex problems.
          </p>
        </>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="absolute z-0 w-40 h-40 sm:h-60 right-20 sm:hidden bg-[#cd3cf5] rounded-full blur-3xl opacity-50 "></div>
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        {/* Show More Projects */}

        {/* {visibleCount < PROJECTS.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((prev)=>prev+3)} // 👉 show all at once
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Show More Projects
            </button>
          </div>
        )} */}

        {/* View All Projects Button */}
        {visibleCount < PROJECTS.length && (
          <div className="text-center mt-16">
            <p className="text-lg text-gray-300 mb-4">
              Want to see more of my work?
            </p>
            <button
              onClick={() => setVisibleCount(PROJECTS.length)}
              className="inline-flex flex-row justify-center items-center w-[200px] px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                         font-medium rounded-full shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 
                         transition-all duration-300"
            >
              View All Projects
                <MdOutlineArrowOutward className="text-white text-3xl"/>
              
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
