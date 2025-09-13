import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiAngular,
  SiC,
  SiJirasoftware,
  SiDatabricks,
  SiSpringboot,
  SiApachesolr,
  SiMysql,
  SiPostman,
  SiEclipseide,
  SiIntellijidea,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { FaCode } from "react-icons/fa6";
import { IoServerOutline } from "react-icons/io5";
import { FiServer } from "react-icons/fi";
import { LiaToolsSolid } from "react-icons/lia";
export const skills = {
  Frontend: {
    catagoryicon: <FaCode className="  text-blue-700" />,
    description: "Crafting Beautiful and Responsive Websites",
    items: [
      {
        id: 1,
        name: "HTML",
        level: "90%",
        icon: <FaHtml5 className="text-orange-500 text-2xl" />,
        color: "bg-orange-500",
      },
      {
        id: 2,
        name: "CSS",
        level: "80%",
        icon: <FaCss3Alt className="text-blue-500 text-2xl" />,
        color: "bg-blue-500",
      },
      {
        id: 3,
        name: "JavaScript",
        level: "70%",
        icon: <FaJs className="text-yellow-400 text-2xl" />,
        color: "bg-yellow-400",
      },
      {
        id: 4,
        name: "React",
        level: "60%",
        icon: <FaReact className="text-cyan-400 text-2xl" />,
        color: "bg-cyan-400",
      },
      {
        id: 5,
        name: "Angular (Basic)",
        level: "40%",
        icon: <SiAngular className="text-red-600 text-2xl" />,
        color: "bg-red-600",
      },
      {
        id: 6,
        name: "Tailwind CSS",
        level: "60%",
        icon: <SiTailwindcss className="text-sky-500 text-2xl" />,
        color: "bg-sky-500",
      },
      {
        id: 7,
        name: "Bootstrap",
        level: "50%",
        icon: <FaBootstrap className="text-purple-600 text-2xl" />,
        color: "bg-purple-600",
      },
    ],
  },
  Backend: {
    catagoryicon: <FiServer className=" text-blue-700" />,
    description: "Building Robust Server-Side solutions",
    items: [
      {
        id: 8,
        name: "Java",
        level: "85%",
        icon: <FaJava className="text-red-500 text-2xl" />,
        color: "bg-red-500",
      },
      {
        id: 9,
        name: "C",
        level: "65%",
        icon: <SiC className="text-blue-600 text-2xl" />,
        color: "bg-blue-600",
      },
      {
        id: 10,
        name: "JSP / Servlet",
        level: "70%",
        icon: <SiJirasoftware className="text-blue-500 text-2xl" />,
        color: "bg-blue-500",
      },
      {
        id: 11,
        name: "JDBC",
        level: "65%",
        icon: <SiDatabricks className="text-green-700 text-2xl" />,
        color: "bg-green-700",
      },
      {
        id: 12,
        name: "Spring Boot (Learning)",
        level: "40%",
        icon: <SiSpringboot className="text-green-500 text-2xl" />,
        color: "bg-green-500",
      },
      {
        id: 13,
        name: "REST APIs (Basic)",
        level: "40%",
        icon: <SiApachesolr className="text-gray-600 text-2xl" />,
        color: "bg-gray-600",
      },
    ],
  },
  Databases: {
    catagoryicon: <IoServerOutline className="  text-blue-700" />,
    description: "Managing and optimizing data storage ",
    items: [
      {
        id: 14,
        name: "MySQL",
        level: "70%",
        icon: (
          <SiMysql className="text-blue-600 text-2xl  bg-white rounded-full" />
        ),
        color: "bg-blue-600",
      },
    ],
  },
  Tools: {
    catagoryicon: <LiaToolsSolid className=" text-blue-700" />,
    description: "Commonly used tools in development workflow",
    items: [
      {
        id: 15,
        name: "Git",
        level: "80%",
        icon: <FaGitAlt className="text-red-500 text-2xl" />,
        color: "bg-red-500",
      },
      {
        id: 16,
        name: "GitHub",
        level: "70%",
        icon: (
          <FaGithub className="text-gray-800 text-2xl bg-white rounded-full" />
        ),
        color: "bg-gray-800",
      },
      {
        id: 17,
        name: "Postman",
        level: "60%",
        icon: (
          <SiPostman className="text-orange-600 text-2xl  bg-white rounded-full overflow-hidden" />
        ),
        color: "bg-orange-600",
      },
      {
        id: 18,
        name: "Eclipse",
        level: "70%",
        icon: <SiEclipseide className="text-indigo-700 text-2xl" />,
        color: "bg-indigo-500",
      },
      {
        id: 19,
        name: "IntelliJ IDEA",
        level: "65%",
        icon: <SiIntellijidea className="text-black bg-white text-2xl" />,
        color: "bg-[#1A1A1A]",
      },
      {
        id: 20,
        name: "VS Code",
        level: "75%",
        icon: <VscVscode className="text-blue-500 text-2xl" />,
        color: "bg-blue-500",
      },
    ],
  },
};
