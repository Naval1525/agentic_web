"use client"

import HeroTitle from "@/src/components/home/hero-title";
import AboutSection from "@/src/components/home/about-section";
import ServiceItem from "@/src/components/services/ServiceItem";
import CallToAction from "@/src/components/home/call-to-action";
import { 
  Zap,
  Bot,
  RotateCcw,
  TrendingUp,
  Rocket,
  Users,
  Target,
  Lightbulb,
  Handshake,
  Settings
} from "lucide-react";

const AboutPage = () => {
  return (
    <main className="min-h-screen relative">
      {/* Background image with dark overlay - same as services page */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/background.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center"
          style={{ minHeight: '100%', minWidth: '100%' }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* Additional atmospheric gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>
      
      {/* Subtle warm glow effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-blue-500/10 via-transparent to-slate-900/60"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-4xl relative z-10">
        <HeroTitle />
        <div className="space-y-6 sm:space-y-8">
          <AboutSection icon={<Rocket className="h-6 w-6 sm:h-7 sm:w-7" />} title="Who We Are" delay={0.1}>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-gray-300">We're not your traditional agency.</p>
              <p className="text-base sm:text-lg text-gray-300">We're a team of builders, designers, and automation architects focused on one thing:</p>
              <p className="text-blue-400 font-medium text-lg sm:text-xl mt-4 sm:mt-6">
                Helping businesses grow faster with AI-first systems.
              </p>
            </div>
          </AboutSection>

          <AboutSection icon={<Settings className="h-6 w-6 sm:h-7 sm:w-7" />} title="What Makes Us Different" delay={0.2}>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-gray-300">We don't just build websites — we build growth engines.</p>
              <p className="text-base sm:text-lg text-gray-300">We don't run ads — we automate lead machines.</p>
              <p className="text-base sm:text-lg text-gray-300">We don't use AI for the buzz — we use it to cut cost, time, and friction.</p>
            </div>
          </AboutSection>

          <AboutSection icon={<Target className="h-6 w-6 sm:h-7 sm:w-7" />} title="What We Build" delay={0.3}>
            <div className="space-y-3 sm:space-y-6">
              <ServiceItem 
                icon={<Zap className="h-5 w-5 sm:h-6 sm:w-6" />} 
                text="Lightning-fast websites (Next.js + Tailwind)" 
                delay={0.1}
              />
              <ServiceItem 
                icon={<Bot className="h-5 w-5 sm:h-6 sm:w-6" />} 
                text="Custom AI agents (sales, support, booking)" 
                delay={0.2}
              />
              <ServiceItem 
                icon={<RotateCcw className="h-5 w-5 sm:h-6 sm:w-6" />} 
                text="Automations that run your ops on autopilot" 
                delay={0.3}
              />
              <ServiceItem 
                icon={<TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />} 
                text="AI-powered marketing funnels & creative" 
                delay={0.4}
              />
            </div>
          </AboutSection>

          <AboutSection icon={<Users className="h-6 w-6 sm:h-7 sm:w-7" />} title="Who We Help" delay={0.4}>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-gray-300">Startups. Local brands. Creators. Service businesses.</p>
              <p className="text-blue-400 font-medium text-lg sm:text-xl mt-4 sm:mt-6">
                Anyone ready to level up — without hiring more people.
              </p>
            </div>
          </AboutSection>

          <AboutSection icon={<Lightbulb className="h-6 w-6 sm:h-7 sm:w-7" />} title="Why It Matters" delay={0.5}>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-gray-300">Because in 2025, scaling manually is a trap.</p>
              <p className="text-blue-400 font-medium text-lg sm:text-xl mt-4 sm:mt-6">
                We help you build systems that work for you — 24/7.
              </p>
            </div>
          </AboutSection>

          <AboutSection icon={<Handshake className="h-6 w-6 sm:h-7 sm:w-7" />} title="Built to Scale With You" delay={0.6}>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-gray-300">No cookie-cutter templates</p>
              <p className="text-base sm:text-lg text-gray-300">No bloated retainers</p>
              <p className="text-blue-400 font-medium text-lg sm:text-xl mt-4 sm:mt-6">Just fast, smart execution</p>
            </div>
          </AboutSection>
        </div>
        <CallToAction />
      </div>
    </main>
  );
};

export default AboutPage;
