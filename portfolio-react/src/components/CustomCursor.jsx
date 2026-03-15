import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is a touch device more aggressively for Android/Samsung
    const checkTouchDevice = () => {
      const isTouch = (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(hover: none)").matches
      );
      setIsTouchDevice(isTouch);
    };

    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);

    window.addEventListener("mousemove", updateMousePosition);

    // Delegated event listener for better performance in React
    const handleMouseOver = (e) => {
      // Check if the target or any of its parents is an interactive element
      if (e.target.closest("a, button, input, textarea, select, .interactive, [role='button'], .cursor-pointer")) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button, input, textarea, select, .interactive, [role='button'], .cursor-pointer")) {
        setIsHovered(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("resize", checkTouchDevice);
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  if (isTouchDevice) return null;

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: "transparent",
      mixBlendMode: "difference",
    },
    hovered: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 2.5,
      backgroundColor: "rgba(138, 43, 226, 0.15)", // Soft purple
      mixBlendMode: "normal",
      borderWidth: "1px",
      borderColor: "rgba(138, 43, 226, 0.5)",
    },
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1,
    },
    hovered: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 0.5,
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-purple-500 pointer-events-none z-[9999] transition-colors duration-300"
        variants={variants}
        animate={isHovered ? "hovered" : "default"}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-purple-500 rounded-full pointer-events-none z-[9999]"
        variants={dotVariants}
        animate={isHovered ? "hovered" : "default"}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.1,
        }}
      />
    </>
  );
};

export default CustomCursor;
