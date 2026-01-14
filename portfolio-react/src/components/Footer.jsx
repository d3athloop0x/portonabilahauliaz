import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
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
  ];

  return (
    <footer className="py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
            Nabilah Aulia <span className="neon-text">Zahra</span>
          </h3>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-200 leading-relaxed">
              Frontend Developer passionate about creating beautiful and
              functional web experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center sm:text-center lg:text-center"
          >
            <h4 className="text-base sm:text-lg font-semibold text-purple-600 dark:text-purple-300 mb-4 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#contact", label: "Contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-600 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 hover:neon-text transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center sm:text-center lg:text-right"
          >
            <h4 className="text-base sm:text-lg font-semibold text-purple-600 dark:text-purple-300 mb-4 sm:mb-6">
              Follow Me
            </h4>
            <div className="flex justify-center sm:justify-center lg:justify-end space-x-3 sm:space-x-4">
              {socialLinks.map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className={`w-10 h-10 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center text-purple-300 transition-all duration-300 ${color} hover:scale-110 hover:neon-glow`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="glass p-4 sm:p-6 rounded-2xl text-center"
        >
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-200">
            © {currentYear} Nabilah Aulia Zahra. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
