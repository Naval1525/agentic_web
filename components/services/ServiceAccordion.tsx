import { motion } from "framer-motion";
import { ServiceItem } from "./ServiceItem";
import { services } from "./services";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const ServiceAccordion = () => {
  return (
    <>
      <motion.section 
        className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="space-y-6">
          {services.map((service, i) => (
            <ServiceItem key={i} {...service} />
          ))}
        </div>
      </motion.section>

      <motion.div 
        className="text-center mt-8 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          Still have doubts?
        </h3>
        <p className="text-zinc-400 text-base sm:text-lg mb-6">
          Let's talk it out — no pressure, just clarity.  
          Book a free 1:1 strategy call and see if we're the right fit to help you scale with AI.
        </p>
        <a 
          href="https://cal.com/devanshi-jaiswal-gjcdhl/discovery-call" 
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-black bg-white rounded-xl hover:scale-105 transition hover:bg-gray-100 mb-10"
          target="_blank"
          rel="noopener noreferrer"
        >
          📞 Book Your Free Call
        </a>
      </motion.div>
    </>
  );
}; 