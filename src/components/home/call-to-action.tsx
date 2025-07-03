import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mt-20"
    >
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-bold text-white mb-4">🔥 WebNexa AI</h2>
        <p className="text-xl text-gray-300">
          Your Website. Your AI Agents. Your Business — on Autopilot.
        </p>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Button 
          asChild
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <a href="https://calendly.com/webnexaai/30min" target="_blank" rel="noopener noreferrer">
            Book Free Strategy Call
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.div>
          </a>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default CallToAction; 