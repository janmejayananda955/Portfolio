import PROJECT_IMG_1 from "/PROJECT_IMG_1.png"
import PROJECT_IMG_2 from "/PROJECT_IMG_2.png"
import PROJECT_IMG_3 from "/PROJECT_IMG_3.png"
import PROJECT_IMG_4 from "/PROJECT_IMG_4.png"
import PROJECT_IMG_5 from "/PROJECT_IMG_5.png"
import PROJECT_IMG_6 from "/PROJECT_IMG_6.png"

export const PROJECTS = [
  {
    id: 1,
    title: "Placement Automation System",
    description:
      "Full-stack placement management app with role-based dashboards for Students and Recruiters, JWT authentication, job application tracking, and real-time updates. Backend on Render, frontend on Netlify with Neon DB.",
    image: PROJECT_IMG_1,
    tags: ["Spring Boot", "React", "JWT", "NeonDB"],
    liveUrl: "https://janmejaya-placement-automation-system.netlify.app",
    githubUrl: "https://github.com/janmejayananda955/Placement_Automation_and_Student_Requirement_System",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Developer Portfolio",
    description:
      "Personal portfolio website built with React and Tailwind CSS, showcasing projects, skills, and experience with smooth animations and a fully responsive design.",
    image: PROJECT_IMG_2,
    tags: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "https://janmejaya-portfolio.netlify.app/",
    githubUrl: "https://github.com/janmejayananda955/Portfolio",
    featured: true,
    category: "Web App",
  },
  {
    id: 3,
    title: "Hospital Management System",
    description:
      "Java-based hospital management web app using Servlet and JSP for managing patient records, doctor assignments, and hospital operations with a MySQL database.",
    image: PROJECT_IMG_3,
    tags: ["Java", "Servlet", "JSP", "MySQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/janmejayananda955/Hospital_mgmt",
    featured: false,
    category: "Web App",
  },
  {
    id: 4,
    title: "Freshers Party – Event Website",
    description:
      "A live event landing page built for a friend using React and Vite, featuring event details, schedule, and a responsive UI deployed on Netlify.",
    image: PROJECT_IMG_1,
    tags: ["React", "Vite", "CSS", "HTML"],
    liveUrl: "https://freshersparty.netlify.app/",
    githubUrl: "https://github.com/janmejayananda955/project",
    featured: false,
    category: "Frontend",
  },
  {
    id: 5,
    title: "Student Management System",
    description:
      "A beginner-level Spring Boot REST API project for managing student records — built during learning phase to understand Spring Boot fundamentals, CRUD operations, and JPA.",
    image: PROJECT_IMG_2,
    tags: ["Spring Boot", "Java", "REST API", "JPA"],
    liveUrl: "#",
    githubUrl: "https://github.com/janmejayananda955/SpringBoot-Projects",
    featured: false,
    category: "Backend",
  },
  {
    id: 6,
    title: "Coffee Web Page",
    description:
      "A static coffee shop landing page — my first HTML and CSS project. Clean layout with product sections, built to learn web fundamentals from scratch.",
    image: PROJECT_IMG_3,
    tags: ["HTML", "CSS"],
    liveUrl: "https://janmejayananda955.github.io/Coffee-Web-Page/",
    githubUrl: "https://github.com/janmejayananda955/Coffee-Web-Page",
    featured: false,
    category: "Frontend",
  },
];


export const timelineData = [
  {
    year: "2021",
    title: "Started BCA",
    description: "Learned C, Java basics, DBMS.",
    color: "bg-purple-500",
  },
  {
    year: "2022",
    title: "Web Development",
    description: "HTML, CSS, JS, React basics.",
    color: "bg-blue-500",
  },
  {
    year: "2023",
    title: "Java & Backend",
    description: "Core Java, JDBC, Servlets, REST APIs.",
    color: "bg-green-500",
  },
  {
    year: "2024",
    title: "Spring Boot & Full Stack",
    description: "Spring Boot, MySQL, Angular basics.",
    color: "bg-pink-500",
  },
];
