import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaProjectDiagram,
  FaAward,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import {
  FiMonitor,
  FiCode,
  FiDatabase,
  FiSmartphone,
  FiCloud,
  FiZap,
  FiGlobe,
} from "react-icons/fi";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stats = [
    { icon: FaCode, value: "Ongoing", label: "Learning Journey" },
    { icon: FaProjectDiagram, value: "5+", label: "Projects Completed" },
    { icon: FaAward, value: "15+", label: "Certificates" },
  ];

  const skills = [
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3, name: "CSS3" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaReact, name: "React" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: FaFigma, name: "Figma" },
  ];

  const backgroundIcons = [
    {
      Icon: FaHtml5,
      pos: "top-32 left-4",
      size: 60,
      color: "text-orange-400",
      delay: 0,
    },
    {
      Icon: FaCss3,
      pos: "top-1/4 right-4",
      size: 55,
      color: "text-blue-400",
      delay: 3,
    },
    {
      Icon: FaJs,
      pos: "bottom-1/3 left-4",
      size: 65,
      color: "text-yellow-400",
      delay: 6,
    },
    {
      Icon: FaReact,
      pos: "bottom-32 right-4",
      size: 50,
      color: "text-cyan-400",
      delay: 1.5,
    },
    {
      Icon: FaNodeJs,
      pos: "top-16 right-1/4",
      size: 70,
      color: "text-green-400",
      delay: 4.5,
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden scroll-mt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        {/* Animated Skill Icons */}
        {backgroundIcons.map(({ Icon, pos, size, color, delay }, i) => (
          <motion.div
            key={i}
            className={`absolute ${pos} pointer-events-none`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 0.4,
              scale: [0.8, 1, 0.9, 1],
              rotate: [0, 5, -5, 0],
              y: [-15, 15, -15],
            }}
            transition={{
              opacity: { duration: 2, delay },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 12, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 10 + delay, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <div className="bg-white/5 rounded-full p-2 backdrop-blur-sm border border-white/10">
              <Icon
                size={size}
                className={`${color} opacity-70 dark:neon-glow`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About <span className="neon-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-16 items-center"
        >
          {/* About Content */}
          <motion.div variants={itemVariants} className="space-y-8 text-center">
            <div className="glass p-8 rounded-2xl mx-auto max-w-2xl">
              <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-300 mb-4">
                Frontend Developer & Informatics Engineering Student
              </h3>

              <p className="text-gray-700 dark:text-gray-100 leading-relaxed mb-6">
                I'm a frontend-focused Informatics Engineering student who
                builds responsive, user-centered web interfaces with an emphasis
                on clean UI, usability, and accessibility. I enjoy turning ideas
                into functional and visually engaging web experiences.
              </p>

              <p className="text-gray-700 dark:text-gray-100 leading-relaxed mb-8">
                Currently pursuing my degree while continuously improving my
                skills in React, JavaScript, and UI/UX design. I enjoy learning
                new technologies, solving problems, and writing clean,
                maintainable code.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 justify-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass p-4 sm:p-6 rounded-xl text-center hover:neon-glow transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mx-auto mb-2 sm:mb-3" />
                  <div className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-100 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("portfolio")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block glass px-8 py-4 rounded-xl text-gray-900 dark:text-gray-100 font-semibold hover:neon-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
