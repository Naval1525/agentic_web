"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Globe,
  Code,
  Palette,
  Shield,
  TrendingUp,
  Terminal,
  Smartphone,
  Bitcoin,
  MessageSquare,
  LayoutDashboard,
  ArrowRight
} from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Terminal className="h-5 w-5" />,
    title: "AI Automation",
    description: "Automate operations & save time with AI agents and backend workflows.",
    stat: "25+ AI agents deployed",
    href: "/ourportfolio",
    features: ["AI Agents", "Workflow Automation", "Backend Systems", "Process Optimization"]
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "AI Chatbots & Agents",
    description: "24/7 support that actually talks with GPT-powered bots.",
    stat: "Used by 20+ brands",
    href: "/ourportfolio",
    features: ["GPT Integration", "24/7 Support", "Lead Qualification", "Booking Systems"]
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "AI Marketing Funnels",
    description: "Scale your reach on autopilot with Meta ads and AI copy.",
    stat: "30% average increase in ROAS",
    href: "/ourportfolio",
    features: ["Meta Ads", "AI Copywriting", "Automated Follow-ups", "ROAS Optimization"]
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Web Design & Development",
    description: "Lightning-fast Next.js sites optimized for SEO and conversion.",
    stat: "50+ websites launched",
    href: "/ourportfolio",
    features: ["Next.js Development", "SEO Optimization", "Mobile Responsive", "Performance"]
  },
  {
    icon: <LayoutDashboard className="h-5 w-5" />,
    title: "Custom CRM & Dashboards",
    description: "All-in-one growth control panels for tracking and automation.",
    stat: "10+ businesses scaled",
    href: "/ourportfolio",
    features: ["Custom CRM", "Analytics Dashboards", "Lead Tracking", "Workflow Automation"]
  }
]

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

export default function ServicesSection() {
  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Services</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive suite of digital solutions designed to transform your business
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemFadeIn}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Card className="h-full border-blue-500/20 bg-blue-500/5 backdrop-blur-sm hover:bg-blue-500/10 hover:border-blue-500/40 transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + index * 0.1, type: "spring" }}
                      >
                        {service.icon}
                      </motion.div>
                    </div>
                    <div>
                      <CardTitle className="text-base font-semibold text-white">{service.title}</CardTitle>
                      <p className="text-xs text-blue-300 opacity-80">{service.stat}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm text-gray-300 mb-3">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-1 mb-4">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center text-xs text-gray-400">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
