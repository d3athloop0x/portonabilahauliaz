import { motion } from "framer-motion";
import {
  FiMonitor,
  FiCpu,
  FiCode,
  FiDatabase,
  FiSmartphone,
  FiCloud,
  FiZap,
  FiGlobe,
  FiCodepen,
} from "react-icons/fi";

const icons = [
  {
    Icon: FiMonitor,
    pos: "top-32 left-8",
    size: 60,
    color: "text-blue-400",
    delay: 0,
  },
  {
    Icon: FiCode,
    pos: "top-1/4 right-8",
    size: 55,
    color: "text-purple-300",
    delay: 3,
  },
  {
    Icon: FiCloud,
    pos: "bottom-1/3 left-8",
    size: 65,
    color: "text-blue-300",
    delay: 6,
  },
  {
    Icon: FiZap,
    pos: "bottom-32 right-8",
    size: 50,
    color: "text-cyan-400",
    delay: 1.5,
  },
  {
    Icon: FiGlobe,
    pos: "top-16 left-1/2 transform -translate-x-1/2",
    size: 70,
    color: "text-cyan-200",
    delay: 4.5,
  },
];

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {icons.map(({ Icon, pos, size, color, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute ${pos}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 0.6,
            scale: [0.8, 1, 0.9, 1],
            rotate: [0, 5, -5, 0],
            y: [-20, 20, -20],
          }}
          transition={{
            opacity: { duration: 2, delay },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 10 + delay, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="bg-white/5 rounded-full p-3 backdrop-blur-sm border border-white/10">
            <Icon
              size={size}
              className={`${color} opacity-80 dark:neon-glow`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
