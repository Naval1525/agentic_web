"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { ReactNode, useState } from "react"

interface AboutSectionProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  delay?: number;
}

const AboutSection = ({ icon, title, children, delay = 0 }: AboutSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="mb-8"
    >
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 cursor-pointer group p-4 rounded-lg"
        whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-2xl flex-shrink-0 text-blue-400 transition-colors duration-300">
          {icon}
        </span>
        <h2 className="text-xl md:text-2xl font-semibold text-white flex-grow group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </h2>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-blue-400"
        >
          <ChevronRight className="h-5 w-5" />
        </motion.div>
      </motion.div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="ml-16 text-gray-300 leading-relaxed pl-4 border-l-2 border-blue-400/30 mt-2"
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AboutSection;