"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ServiceItemProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  content: string[];
}

export const ServiceItem = ({
  title,
  subtitle,
  icon: Icon,
  content,
}: ServiceItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Show content on hover (desktop) or when expanded (mobile)
  const shouldShowContent = isHovered || isExpanded;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smoother motion
      }}
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={handleMouseEnter}
      onHoverEnd={handleMouseLeave}
      onClick={handleToggle}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
      className={cn(
        "w-full rounded-2xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm px-4 py-4 sm:px-5 shadow-md transition-all duration-500 ease-out hover:bg-blue-500/10 hover:shadow-lg hover:border-blue-500/40 cursor-pointer"
      )}
    >
      <div className="flex w-full items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
          <motion.div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0"
            whileHover={{ 
              scale: 1.15, 
              rotate: 8,
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 15,
                duration: 0.3
              }
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20 
            }}
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </motion.div>
          <div className="min-w-0 flex-1">
            <motion.h3
              layout
              className="text-lg sm:text-xl font-semibold text-white truncate"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {title}
            </motion.h3>
            <motion.p 
              className="text-xs sm:text-sm font-medium text-gray-300 line-clamp-2"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {subtitle}
            </motion.p>
          </div>
        </div>
        <motion.div
          animate={{ 
            rotate: shouldShowContent ? 180 : 0,
            scale: shouldShowContent ? 1.1 : 1
          }}
          transition={{ 
            duration: 0.4, 
            ease: [0.25, 0.46, 0.45, 0.94],
            scale: { duration: 0.2 }
          }}
          className="text-blue-400 flex-shrink-0"
        >
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {shouldShowContent && (
          <motion.div
            layout
            initial={{ 
              opacity: 0, 
              height: 0,
              y: -10
            }}
            animate={{ 
              opacity: 1, 
              height: "auto",
              y: 0
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              y: -10
            }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94],
              height: { duration: 0.4 },
              opacity: { duration: 0.3, delay: 0.1 }
            }}
            className="overflow-hidden pt-4 text-gray-300"
          >
            <ul className="space-y-2 sm:space-y-3 pl-2 text-xs sm:text-sm font-medium">
              {content.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -15, y: 5 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: -15, y: 5 }}
                  transition={{ 
                    delay: idx * 0.08,
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="flex items-start gap-2"
                >
                  {item.startsWith("📌") ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.08 + 0.1, duration: 0.3 }}
                    >
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/20 text-xs">
                        {item.replace("📌", "").trim()}
                      </Badge>
                    </motion.div>
                  ) : item.startsWith("🛠") ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.08 + 0.1, duration: 0.3 }}
                      className="text-xs bg-blue-500/10 px-2 py-1 rounded-md border border-blue-500/20 text-blue-300"
                    >
                      {item.replace("🛠", "").trim()}
                    </motion.div>
                  ) : item.startsWith("📦") ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.08 + 0.1, duration: 0.3 }}
                      className="text-xs bg-indigo-500/10 px-2 py-1 rounded-md border border-indigo-500/20 text-indigo-300"
                    >
                      {item.replace("📦", "").trim()}
                    </motion.div>
                  ) : (
                    <span className="flex items-center gap-2 break-words">
                      <motion.div 
                        className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 mt-1.5"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: idx * 0.08 + 0.15, duration: 0.3 }}
                      />
                      <span className="leading-relaxed">{item}</span>
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}; 