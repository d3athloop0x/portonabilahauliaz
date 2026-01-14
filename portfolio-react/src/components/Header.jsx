import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { BsSun, BsMoon } from "react-icons/bs";

const Header = ({
  activeSection,
  scrollToSection,
  darkMode,
  toggleDarkMode,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-white/95 dark:bg-white/10 dark:backdrop-blur-md z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-2xl font-bold text-gray-900 dark:text-gray-100 neon-text"
          whileHover={{ scale: 1.05 }}
        >
          bbillbil_
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className={`text-lg font-medium transition-colors duration-300 relative ${
                activeSection === item.id
                  ? "text-purple-400 neon-text"
                  : "text-gray-700 dark:text-gray-100 hover:text-purple-400 hover:neon-text"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </nav>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-white dark:bg-white/10 dark:hover:neon-glow hover:shadow-md transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {darkMode ? (
              <BsSun className="w-6 h-6 text-yellow-400" />
            ) : (
              <BsMoon className="w-6 h-6 text-purple-600 dark:text-purple-300" />
            )}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full glass hover:neon-glow transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6 text-gray-900 dark:text-gray-100" />
            ) : (
              <HiMenu className="w-6 h-6 text-gray-900 dark:text-gray-100" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-white/10 dark:backdrop-blur-md border-t border-gray-200 dark:border-white/10"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`text-lg font-medium py-2 transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-purple-400 neon-text"
                    : "text-gray-900 dark:text-gray-100 hover:text-purple-400 hover:neon-text"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
