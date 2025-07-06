import { motion } from "framer-motion";

const HeroTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12 sm:mb-16 lg:mb-20"
    >
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="text-white">About</span>
        <br />
        <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">AstraFlow</span>
      </motion.h1>
      <motion.p 
        className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        We are a team of passionate developers, designers, and digital strategists dedicated to transforming ideas into powerful digital experiences.
      </motion.p>
    </motion.div>
  );
};

export default HeroTitle; 