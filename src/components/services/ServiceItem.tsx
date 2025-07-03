import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceItemProps {
  icon: ReactNode;
  text: string;
  delay?: number;
}

const ServiceItem = ({ icon, text, delay = 0 }: ServiceItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        x: 12,
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg transition-all duration-200 cursor-pointer group"
    >
      <motion.span
        className="text-blue-400 flex-shrink-0 group-hover:text-blue-300"
        whileHover={{ scale: 1.3, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.span>
      <motion.span
        className="text-gray-300 text-base sm:text-lg group-hover:text-white transition-colors duration-200 leading-relaxed"
        whileHover={{ x: 4 }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

export default ServiceItem; 