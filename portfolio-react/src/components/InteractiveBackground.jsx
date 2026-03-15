import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const InteractiveBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"
        animate={{
          x: mousePos.x - 250,
          y: mousePos.y - 250,
        }}
        transition={{ type: "tween", ease: "circOut", duration: 1.5 }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px]"
        animate={{
          x: mousePos.x - 100,
          y: mousePos.y - 100,
        }}
        transition={{ type: "tween", ease: "circOut", duration: 2.5 }}
      />
    </div>
  );
};

export default InteractiveBackground;
