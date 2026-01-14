import React from "react";
import { motion } from "framer-motion";
import TypedText from "./TypedText";
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedBackground from "./AnimatedBackground";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20 scroll-mt-20 relative overflow-hidden"
    >
      <AnimatedBackground />
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left max-w-3xl order-2 lg:order-1"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block px-6 py-3 glass text-purple-600 dark:text-purple-300 rounded-full text-sm font-medium mb-8 neon-glow"
            >
              Crafting Digital Experiences ✨
            </motion.div>

            <motion.h3
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-900 dark:text-gray-100 mb-6"
            >
              Hello, It's Me 👋🏻
            </motion.h3>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-8 leading-tight"
            >
              Nabilah Aulia <span className="neon-text">Zahra</span>
            </motion.h1>

            <motion.h3
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-100 mb-8"
            >
              And I'm a{" "}
              <TypedText
                strings={[
                  "Web & App Development Learner",
                  "Technology Enthusiast",
                  "Informatics Engineering Student",
                ]}
                typeSpeed={100}
                backSpeed={100}
                backDelay={1000}
                loop={true}
              />
            </motion.h3>

            <motion.div
              variants={itemVariants}
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-8"
            ></motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-800 dark:text-gray-100 mb-10 max-w-2xl leading-relaxed"
            >
              A frontend-focused Informatics Engineering student passionate
              about crafting responsive, accessible, and intuitive web
              interfaces that enhance user experience and bring ideas to life.
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-6 mb-8"
            >
              {[
                {
                  Icon: FaWhatsapp,
                  href: "https://wa.me/6289648790443",
                  color: "hover:text-green-400",
                },
                {
                  Icon: FaInstagram,
                  href: "https://www.instagram.com/bbillbil_?igsh=b2UzbWFrcGFpMDBi&utm_source=qr",
                  color: "hover:text-pink-400",
                },
                {
                  Icon: FaGithub,
                  href: "https://github.com/d3athloop0x",
                  color: "hover:text-white",
                },
                {
                  Icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/nabilah-aulia-zahra/",
                  color: "hover:text-blue-400",
                },
              ].map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className={`w-12 h-12 glass rounded-full flex items-center justify-center text-purple-600 dark:text-purple-300 transition-all duration-300 ${color} hover:scale-110 hover:neon-glow`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            <motion.a
              variants={itemVariants}
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block glass px-8 py-4 rounded-xl text-gray-900 dark:text-gray-100 font-semibold hover:neon-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              More About Me
            </motion.a>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-shrink-0 order-1 lg:order-2"
          >
            <div className="relative">
              <div className="glass p-8 rounded-3xl">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/pp.jpg"
                    alt="Nabilah Aulia Zahra"
                    className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full glass rounded-3xl -z-10"></div>
              <div className="absolute inset-0 rounded-3xl border border-purple-500/30 animate-pulse-glow"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
