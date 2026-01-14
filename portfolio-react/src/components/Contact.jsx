import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

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

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "nabilah.aulia.zahra@gmail.com",
      href: "mailto:nabilah.aulia.zahra@gmail.com",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+62 896 4879 0443",
      href: "tel:+6289648790443",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Solo, Indonesia",
    },
  ];

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
    <section
      id="contact"
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Get In <span className="neon-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-purple-300 mb-6">
                Let's Talk
              </h3>
              <p className="text-gray-700 dark:text-gray-100 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology and design.
                Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href || "#"}
                  className="glass p-6 rounded-xl hover:neon-glow transition-all duration-300 flex items-center space-x-4 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-gray-900 dark:text-gray-100" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      {info.title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-100">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass p-8 rounded-2xl">
              <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-300 mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href, color }, index) => (
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
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-300 mb-6">
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 glass border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 transition-all duration-300"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 glass border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 transition-all duration-300"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 glass border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 transition-all duration-300"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 glass border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full glass px-8 py-4 rounded-xl text-gray-900 dark:text-white font-semibold hover:neon-glow transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
