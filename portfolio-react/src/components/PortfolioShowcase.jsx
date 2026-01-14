import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaAward,
  FaTools,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaBootstrap,
  FaPhp,
  FaPython,
  FaCogs,
  FaUsers,
  FaLanguage,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";
import { SiTailwindcss, SiCplusplus, SiArduino } from "react-icons/si";
import { projects, certificates } from "../data/projects";
import { skills } from "../data/skills";

const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [projectFilter, setProjectFilter] = useState("All");
  const [certificateFilter, setCertificateFilter] = useState("All");

  const tabs = [
    { id: "projects", label: "Projects", icon: FaCode },
    { id: "certificates", label: "Certificates", icon: FaAward },
    { id: "skills", label: "Skills", icon: FaTools },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const ProjectCard = ({ project }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className="glass p-4 sm:p-6 rounded-2xl hover:neon-glow transition-all duration-300"
    >
      <div className="relative overflow-hidden rounded-xl mb-3 sm:mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
      </div>

      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {project.title}
      </h3>
      <p className="text-gray-800 dark:text-gray-200 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-600 dark:text-purple-300 rounded-full text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        {project.liveLink !== "#" && (
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:justify-start space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xs sm:text-sm">Live Demo</span>
          </motion.a>
        )}

        {project.codeLink !== "#" && (
          <motion.a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:justify-start space-x-2 text-gray-800 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xs sm:text-sm">Code</span>
          </motion.a>
        )}
      </div>
    </motion.div>
  );

  const CertificateCard = ({ certificate }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -10 }}
      className="glass p-4 sm:p-6 rounded-2xl hover:neon-glow transition-all duration-300 text-center"
    >
      <div className="relative overflow-hidden rounded-xl mb-3 sm:mb-4">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-24 sm:h-32 object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
      </div>

      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {certificate.title}
      </h3>
      <p className="text-purple-300 text-xs sm:text-sm mb-2">
        {certificate.issuer}
      </p>
      <p className="text-gray-800 dark:text-gray-100 text-xs">
        {certificate.date}
      </p>
    </motion.div>
  );

  const getIconComponent = (iconName) => {
    const iconMap = {
      FaHtml5: FaHtml5,
      FaCss3: FaCss3,
      FaJs: FaJs,
      FaReact: FaReact,
      SiTailwindcss: SiTailwindcss,
      FaFigma: FaFigma,
      FaBootstrap: FaBootstrap,
      FaPhp: FaPhp,
      SiCplusplus: SiCplusplus,
      FaPython: FaPython,
      SiArduino: SiArduino,
    };

    const IconComponent = iconMap[iconName];
    if (!IconComponent) return null;

    return <IconComponent className="text-4xl" />;
  };

  const SkillCard = ({ skill }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className="glass p-6 rounded-2xl hover:neon-glow transition-all duration-300 text-center relative group"
    >
      <div className="text-purple-400 mb-4 flex justify-center">
        {getIconComponent(skill.icon)}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {skill.name}
      </h3>
      <p className="text-gray-800 dark:text-gray-200 text-sm">
        {skill.description}
      </p>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-gray-100 dark:text-gray-100 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        {skill.description}
      </div>
    </motion.div>
  );

  const SkillCategory = ({ category }) => {
    const getCategoryIcon = (title) => {
      switch (title) {
        case "TECHNICAL ABILITIES":
          return <FaCogs className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />;
        case "PERSONAL ABILITIES":
          return <FaUsers className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />;
        case "LANGUAGES":
          return (
            <FaLanguage className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
          );
        default:
          return <FaStar className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />;
      }
    };

    const getSkillLevel = (skill) => {
      // Simple logic to determine skill level based on keywords
      if (
        skill.includes("Native") ||
        skill.includes("Expert") ||
        skill.includes("Advanced")
      )
        return 100;
      if (skill.includes("Intermediate")) return 75;
      if (skill.includes("Basic")) return 50;
      return 80; // Default good level
    };

    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -10, scale: 1.02 }}
        className="glass p-4 sm:p-6 lg:p-8 rounded-3xl hover:neon-glow transition-all duration-300 relative overflow-hidden group"
      >
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-3xl"></div>

        {/* Header with icon */}
        <div className="relative z-10 flex items-center justify-center mb-4 sm:mb-6">
          <div className="p-3 sm:p-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl mr-3 sm:mr-4">
            {getCategoryIcon(category.title)}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {category.title}
          </h3>
        </div>

        {/* Skills list with enhanced styling */}
        <div className="relative z-10 space-y-3 sm:space-y-4">
          {category.items.map((item, index) => {
            const level = getSkillLevel(item);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group/item"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <FaCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                  <span className="text-xs text-purple-400 font-semibold">
                    {level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-12 h-12 sm:w-20 sm:h-20 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all duration-300"></div>
        <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-10 h-10 sm:w-16 sm:h-16 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-300"></div>
      </motion.div>
    );
  };

  const filterProjects = (projects, filter) => {
    if (filter === "All") return projects;
    return projects.filter((project) =>
      project.techStack.some((tech) =>
        tech.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  const filterCertificates = (certificates, filter) => {
    if (filter === "All") {
      return Object.values(certificates).flat();
    }
    return certificates[filter] || [];
  };

  const renderContent = () => {
    switch (activeTab) {
      case "projects":
        const filteredProjects = filterProjects(projects, projectFilter);
        return (
          <>
            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-8"
            >
              <div className="glass p-2 rounded-2xl flex flex-wrap gap-2">
                {["All", "React", "HTML", "IOT"].map((filter) => (
                  <motion.button
                    key={filter}
                    onClick={() => setProjectFilter(filter)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-medium transition-all duration-300 text-xs sm:text-base ${
                      projectFilter === filter
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-gray-900 dark:text-gray-100 neon-glow"
                        : "text-gray-800 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-100 hover:neon-glow"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {filter}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </>
        );
      case "certificates":
        const filteredCertificates = filterCertificates(
          certificates,
          certificateFilter
        );
        return (
          <>
            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-8"
            >
              <div className="glass p-2 rounded-2xl flex flex-wrap gap-2 justify-center">
                {[
                  "All",
                  "technology",
                  "workshop_organization",
                  "supporting_skills",
                ].map((filter) => (
                  <motion.button
                    key={filter}
                    onClick={() => setCertificateFilter(filter)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-medium transition-all duration-300 text-xs sm:text-base ${
                      certificateFilter === filter
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-gray-900 dark:text-gray-100 neon-glow"
                        : "text-gray-800 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-100 hover:neon-glow"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {filter === "technology"
                      ? "Tech"
                      : filter === "workshop_organization"
                      ? "Org"
                      : filter === "supporting_skills"
                      ? "Skills"
                      : filter}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div
              key="certificates"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredCertificates.map((certificate) => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                />
              ))}
            </motion.div>
          </>
        );
      case "skills":
        return (
          <motion.div
            key="skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {Object.values(skills).map((category, index) => (
              <SkillCategory key={index} category={category} />
            ))}
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="portfolio"
      className="py-16 sm:py-20 lg:py-32 relative overflow-hidden scroll-mt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-purple-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/5 to-pink-900/10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
            My <span className="neon-text">Portfolio</span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mb-4 sm:mb-6"
        >
          <div className="glass p-1 rounded-2xl w-full max-w-full overflow-x-auto sm:w-auto sm:overflow-visible">
            <div className="flex space-x-1 min-w-max sm:min-w-0 justify-center">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  variants={itemVariants}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center space-x-1 px-2 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium transition-all duration-300 text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? "text-purple-600 dark:text-purple-300"
                      : "text-gray-800 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-100"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div>{renderContent()}</div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
