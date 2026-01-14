import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaProjectDiagram, FaAward } from "react-icons/fa";

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

  return (
    <section id="about" className="py-32 relative overflow-hidden scroll-mt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* About Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="glass p-8 rounded-2xl">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/abttt.png"
                  alt="About Me"
                  className="w-full h-96 object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full glass rounded-2xl -z-10"></div>
          </motion.div>

          {/* About Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-300 mb-4">
                Frontend Developer & Informatics Engineering Student
              </h3>

              <p className="text-gray-700 dark:text-gray-100 leading-relaxed mb-6">
                I'm a frontend-focused Informatics Engineering student who
                builds responsive, user-centered web interfaces with an emphasis
                on clean UI, usability, and accessibility. I enjoy turning ideas
                into functional and visually engaging web experiences.
              </p>

              <p className="text-gray-700 dark:text-gray-100 leading-relaxed">
                Currently pursuing my degree while continuously improving my
                skills in React, JavaScript, and UI/UX design. I enjoy learning
                new technologies, solving problems, and writing clean,
                maintainable code.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
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
