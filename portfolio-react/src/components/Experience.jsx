import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
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

  const experiences = [
    {
      id: 1,
      title: "Internship – Codelines UNNES",
      position: "Divisi IT Development | Oktober – Desember 2025",
      period: "",
      description: [
        "Mengikuti program internship pengembangan software melalui pembelajaran terstruktur dan praktik.",
        "Mengerjakan studi kasus dan mini project terkait pemrograman dan pengembangan sistem.",
        "Melatih kemampuan analisis, problem solving, dan kerja tim di bidang teknologi.",
      ],
      image: "/codelines.png", // Placeholder for photo
      location: "UNNES",
    },
    {
      id: 2,
      title: "HIMA Ilmu Komputer UNNES",
      position: "Staff Ahli Divisi Sosial Masyarakat | Januari – Desember 2025",
      period: "",
      description: [
        "Penanggung jawab agenda Kata Mereka 2025.",
        "Sie Sponsor Workshop 2025.",
        "Koordinator Bendahara Lentera Kasih 2025.",
        "Koordinator Sekretaris Ilkom Mengajar 2025.",
        "Koordinator Konsumsi Interface 2025.",
      ],
      image: "/himaa.jpeg", // Placeholder for photo
      location: "UNNES",
    },
    {
      id: 3,
      title: "Magang HIMA ILKOM UNNES",
      position: "Divisi Sosial Masyarakat | Oktober – Desember 2024",
      period: "",
      description: [
        "Berpartisipasi dalam Ilkom Jumat Bahagia (IJB) 2024.",
        "Sie PDD Ilkom Mengajar 2024.",
        "Sie Keamanan Tecnofest 2024.",
      ],
      image: "/magangg.jpeg", // Placeholder for photo
      location: "UNNES",
    },
  ];

  return (
    <section
      id="experience"
      className="py-32 relative overflow-hidden scroll-mt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            My <span className="neon-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0"
              >
                <div className="glass p-6 rounded-2xl">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-64 h-64 object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="flex-1 glass p-8 rounded-2xl hover:neon-glow transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {exp.title}
                    </h3>
                    {exp.position && (
                      <p className="text-lg text-purple-600 dark:text-purple-300 mb-2">
                        {exp.position}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-700 dark:text-gray-100">
                    <div className="flex items-center space-x-1">
                      <FaMapMarkerAlt className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <FaBriefcase className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-100 leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
