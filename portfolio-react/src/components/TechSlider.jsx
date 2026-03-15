import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiVite, SiSupabase, SiFramer } from "react-icons/si";

const TechSlider = () => {
  // Array of technologies to display in the marquee
  const technologies = [
    { name: "React", Icon: FaReact, color: "group-hover:text-cyan-400" },
    { name: "JavaScript", Icon: FaJs, color: "group-hover:text-yellow-400" },
    { name: "Tailwind", Icon: SiTailwindcss, color: "group-hover:text-teal-400" },
    { name: "HTML5", Icon: FaHtml5, color: "group-hover:text-orange-500" },
    { name: "CSS3", Icon: FaCss3, color: "group-hover:text-blue-500" },
    { name: "Node.js", Icon: FaNodeJs, color: "group-hover:text-green-500" },
    { name: "Figma", Icon: FaFigma, color: "group-hover:text-pink-500" },
    { name: "Git", Icon: FaGitAlt, color: "group-hover:text-orange-600" },
    { name: "GitHub", Icon: FaGithub, color: "group-hover:text-gray-100" },
    { name: "Vite", Icon: SiVite, color: "group-hover:text-purple-500" },
    { name: "Framer Motion", Icon: SiFramer, color: "group-hover:text-blue-600" },
  ];

  // We duplicate the array to create a seamless infinite loop
  const duplicatedTech = [...technologies, ...technologies, ...technologies];

  return (
    <div className="w-full relative overflow-hidden py-10 bg-transparent border-t border-b border-white/5">
      {/* Gradient fading effect on the left and right edges */}
      <div className="absolute top-0 left-0 w-32 h-[110%] bg-gradient-to-r from-[#f9fafb] dark:from-[#170933] to-transparent z-10 pointer-events-none transition-colors duration-500"></div>
      <div className="absolute top-0 right-0 w-32 h-[110%] bg-gradient-to-l from-[#f9fafb] dark:from-[#170933] to-transparent z-10 pointer-events-none transition-colors duration-500"></div>

      {/* Scrolling Track */}
      <div className="flex w-max animate-scroll">
        {duplicatedTech.map((tech, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 px-8 group cursor-pointer"
          >
            <tech.Icon
              className={`w-8 h-8 md:w-12 md:h-12 text-gray-500 transition-colors duration-300 ${tech.color}`}
            />
            <span className="text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200 font-semibold text-lg md:text-2xl transition-colors duration-300">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSlider;
