"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import * as THREE from "three"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

// Extend the Window interface to include VectorShift properties
declare global {
  interface Window {
    vectorShiftChatWidget?: any;
  }
}

export default function HeroSection() {
  useEffect(() => {
    // Function to load the VectorShift chat widget
    const loadVectorShiftWidget = () => {
      // Check if script is already loaded
      if (document.getElementById('vectorshift-chat-widget')) {
        return;
      }

      // Create and configure the script element
      const script = document.createElement('script');
      script.id = 'vectorshift-chat-widget';
      script.src = 'https://app.vectorshift.ai/chatWidget.js';
      script.async = true;
      script.setAttribute('chatbot-id', '686ac9892b05bf83774dc2f8');
      script.setAttribute('chatbot-height', '600px');
      script.setAttribute('chatbot-width', '400px');

      // Optional: Add error handling
      script.onerror = () => {
        console.error('Failed to load VectorShift chat widget');
      };

      // Optional: Add load success handler
      script.onload = () => {
        console.log('VectorShift chat widget loaded successfully');
      };

      // Append script to document head
      document.head.appendChild(script);
    };

    // Load the widget when component mounts
    loadVectorShiftWidget();

    // Cleanup function to remove script when component unmounts
    return () => {
      const script = document.getElementById('vectorshift-chat-widget');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-10 md:py-28 lg:py-32 min-h-[80vh] md:min-h-screen flex items-center justify-center" style={{ minHeight: '80vh' }}>
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/background.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center scale-105 animate-heroBgZoom"
          style={{ minHeight: '100%', minWidth: '100%' }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl" aria-hidden="true">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-accent opacity-30 animate-gradientMove"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="w-full max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, type: 'spring' }}
            className="mb-4 text-xs md:text-sm font-semibold uppercase tracking-widest text-gray-300"
          >
            AI Automation & AWS Cloud Solutions
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-textShine drop-shadow-lg"
          >
            We help businesses scale and automate with AI.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeInUp font-semibold drop-shadow"
          >
            From high-performance websites to custom AI agents and AWS cloud infrastructure — we build everything you need to scale on autopilot.
          </motion.p>
          {/* Social Proof Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, type: 'spring' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
          >
              <div className="flex items-center gap-2">
                {/* Avatars */}
                {/* <div className="flex -space-x-2">
                  <img src="/images/team/avatar1.png" alt="Avatar 1" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white" />
                  <img src="/images/team/avatar2.png" alt="Avatar 2" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white" />
                  <img src="/images/team/avatar3.png" alt="Avatar 3" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white" />
                  <img src="/images/team/avatar4.png" alt="Avatar 4" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white" />
                  <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs sm:text-sm font-semibold border-2 border-white">+65</span>
                </div> */}
              </div>
              <div className="flex items-center gap-2">
                {/* Stars */}
                <span className="flex text-yellow-400 text-xl">
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 sm:w-5 sm:h-5"><polygon points="9.9,1.1 7.6,6.6 1.6,7.6 6,11.9 4.8,17.8 9.9,14.7 15,17.8 13.8,11.9 18.2,7.6 12.2,6.6 "/></svg>
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 sm:w-5 sm:h-5"><polygon points="9.9,1.1 7.6,6.6 1.6,7.6 6,11.9 4.8,17.8 9.9,14.7 15,17.8 13.8,11.9 18.2,7.6 12.2,6.6 "/></svg>
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 sm:w-5 sm:h-5"><polygon points="9.9,1.1 7.6,6.6 1.6,7.6 6,11.9 4.8,17.8 9.9,14.7 15,17.8 13.8,11.9 18.2,7.6 12.2,6.6 "/></svg>
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 sm:w-5 sm:h-5"><polygon points="9.9,1.1 7.6,6.6 1.6,7.6 6,11.9 4.8,17.8 9.9,14.7 15,17.8 13.8,11.9 18.2,7.6 12.2,6.6 "/></svg>
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 sm:w-5 sm:h-5"><polygon points="9.9,1.1 7.6,6.6 1.6,7.6 6,11.9 4.8,17.8 9.9,14.7 15,17.8 13.8,11.9 18.2,7.6 12.2,6.6 "/></svg>
                </span>
                <span className="font-semibold text-white ml-2">+65 happy clients</span>
              </div>
          </motion.div>
            {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, type: 'spring' }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button asChild size="lg" className="rounded-full shadow-lg shadow-blue-400/20 animate-bounceOnce">
              <a href="https://cal.com/devanshi-jaiswal-gjcdhl/discovery-call" target="_blank" rel="noopener noreferrer">
                Book a Call <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/40 text-white bg-white/10 hover:bg-white/20">
              <Link href="https://www.youtube.com/shorts/WLK8vLaf6KY" target="_blank">
                Watch Video
              </Link>
            </Button>
          </motion.div>
            {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, type: 'spring' }}
            className="flex justify-center mt-8"
          >
              <span className="animate-bounce inline-block">
                <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="22" height="38" rx="11" stroke="#fff" strokeWidth="2" fill="none" />
                  <circle cx="12" cy="12" r="3" fill="#fff" />
                </svg>
              </span>
          </motion.div>
          </motion.div>
      </div>
    </section>
  )
}