"use client"

import { motion } from "framer-motion"
import { Rocket, Bot, BrainCog, MessageSquare, TrendingUp, GalleryHorizontal, ExternalLink, Users } from "lucide-react"
import Link from "next/link"
import AboutSection from "@/src/components/home/about-section"
import { Button } from "@/src/components/ui/button"

const projects = [
  // Web Design & Development
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Design & Development",
    tags: ["React", "Node.js", "MongoDB"],
    description:
      "A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking.",
    image: "/placeholder.jpg",
    link: "/portfolio/e-commerce-platform",
    url: "https://themajesticpeacock.com",
  },
  {
    id: 2,
    title: "Financial Dashboard",
    category: "Web Design & Development",
    tags: ["Figma", "Adobe XD", "Prototyping"],
    description:
      "A comprehensive financial dashboard design for a fintech startup, featuring intuitive data visualization and user-friendly interface.",
    image: "/placeholder.jpg",
    link: "/portfolio/financial-dashboard",
    url: "https://raisspices.com",
  },
  {
    id: 3,
    title: "Healthcare Mobile App",
    category: "Web Design & Development",
    tags: ["React Native", "Firebase", "Health API"],
    description:
      "A mobile application for healthcare providers to manage patient records, appointments, and communication.",
    image: "/placeholder.jpg",
    link: "/portfolio/healthcare-app",
    url: "https://sanurrirugs.com",
  },
  {
    id: 4,
    title: "Real Estate Website",
    category: "Web Design & Development",
    tags: ["Next.js", "Tailwind CSS", "Supabase"],
    description: "A modern real estate website with property listings, search functionality, and agent profiles.",
    image: "/placeholder.jpg",
    link: "/portfolio/real-estate-website",
    url: "",
  },
  // AI Automation
  {
    id: 5,
    title: "Email Automation",
    category: "AI Automation",
    tags: ["Zapier", "Gmail API", "Workflows"],
    description:
      "Automate your email campaigns, follow-ups, and notifications with smart triggers and personalized content.",
    image: "/placeholder.jpg",
    link: "/portfolio/email-automation",
    url: "",
  },
  {
    id: 6,
    title: "Lead Generation Automation",
    category: "AI Automation",
    tags: ["Lead Forms", "CRM", "AI Qualification"],
    description: "Capture, qualify, and route leads automatically from your website and ads to your CRM.",
    image: "/placeholder.jpg",
    link: "/portfolio/lead-generation-automation",
    url: "",
  },
  // AI Agents-as-a-Service
  {
    id: 7,
    title: "AI Sales Agent",
    category: "AI Agents-as-a-Service",
    tags: ["OpenAI", "Zapier", "CRM Integration"],
    description: "An AI-powered sales agent that automatically qualifies leads, books meetings, and updates your CRM.",
    image: "/placeholder.jpg",
    link: "/portfolio/ai-sales-agent",
    url: "",
  },
  {
    id: 8,
    title: "AI Receptionist",
    category: "AI Agents-as-a-Service",
    tags: ["OpenAI", "Twilio", "Voice"],
    description: "A virtual AI receptionist that answers calls, schedules appointments, and provides information 24/7.",
    image: "/placeholder.jpg",
    link: "/portfolio/ai-receptionist",
    url: "",
  },
  {
    id: 9,
    title: "AI Lead Qualifier",
    category: "AI Agents-as-a-Service",
    tags: ["LangChain", "OpenAI", "Automation"],
    description: "A smart agent that qualifies leads in real-time and routes them to the right sales rep.",
    image: "/placeholder.jpg",
    link: "/portfolio/ai-lead-qualifier",
    url: "",
  },
  {
    id: 10,
    title: "AI Booking Agent",
    category: "AI Agents-as-a-Service",
    tags: ["OpenAI", "Calendly", "Integration"],
    description: "An AI agent that handles bookings and calendar invites for your business automatically.",
    image: "/placeholder.jpg",
    link: "/portfolio/ai-booking-agent",
    url: "",
  },
  // AI Chatbots
  {
    id: 11,
    title: "Custom Support Chatbot",
    category: "AI Chatbots",
    tags: ["GPT-4", "Custom Data", "Slack"],
    description: "A chatbot trained on your business data, integrated with Slack and WhatsApp for instant support.",
    image: "/placeholder.jpg",
    link: "/portfolio/custom-support-chatbot",
    url: "",
  },
  // AI-Powered Digital Marketing
  {
    id: 12,
    title: "AI Content Generator",
    category: "AI-Powered Digital Marketing",
    tags: ["Python", "TensorFlow", "NLP"],
    description:
      "An AI-powered content generation tool that creates high-quality, SEO-optimized content for various industries.",
    image: "/placeholder.jpg",
    link: "/portfolio/ai-content-generator",
    url: "",
  },
  {
    id: 13,
    title: "Automated Ad Campaigns",
    category: "AI-Powered Digital Marketing",
    tags: ["Meta Ads", "Google Ads", "Automation"],
    description: "Automated ad campaign management with AI-driven creative testing and budget optimization.",
    image: "/placeholder.jpg",
    link: "/portfolio/automated-ad-campaigns",
    url: "",
  },
  // AI-Generated Product Ads
  {
    id: 14,
    title: "AI Product Visuals",
    category: "AI-Generated Product Ads",
    tags: ["AI Visuals", "Ad Copy", "UGC Scripts"],
    description: "Instantly generate product visuals, captions, and UGC-style video scripts for your brand.",
    image: "/placeholder.jpg",
    link: "/portfolio/ai-product-visuals",
    url: "",
  },
]

const categories = [
  {
    name: "AI Automation",
    icon: <Bot />,
  },
  {
    name: "AI Agents-as-a-Service",
    icon: <BrainCog />,
  },
  {
    name: "Web Design & Development",
    icon: <Rocket />,
  },
  {
    name: "AI Chatbots",
    icon: <MessageSquare />,
  },
  {
    name: "AI-Powered Digital Marketing",
    icon: <TrendingUp />,
  },
  {
    name: "AI-Generated Product Ads",
    icon: <GalleryHorizontal />,
  },
]

const teamMembers = [
  {
    id: 1,
    name: "Devanshi Jaiswal",
    role: "AI Strategist",
    description:
      "Leading AI transformation with 2+ years in machine learning and business automation. Expert in developing custom AI solutions for enterprise clients.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["AI Strategy", "Machine Learning", "Business Automation"],
  },
  {
    id: 2,
    name: "Naval Bihani",
    role: "Lead Developer",
    description:
      "Full-stack developer specializing in React, Node.js, and AI integrations. Passionate about creating scalable web applications with cutting-edge technology.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["React", "Node.js", "AI Integration"],
  },
  {
    id: 3,
    name: "Marcus Rodriguez",
    role: "AI Engineer",
    description:
      "AI engineer with expertise in natural language processing and computer vision. Builds intelligent systems that understand and interact with human language.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["NLP", "Computer Vision", "Deep Learning"],
  },
  {
    id: 4,
    name: "Aditya Singh",
    role: "UX/UI Designer",
    description:
      "Creative designer focused on user-centered design and creating intuitive interfaces. Specializes in designing AI-powered applications that are both beautiful and functional.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["UI/UX Design", "Prototyping", "User Research"],
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen relative">
      {/* Background image with dark overlay - same as services page */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/background.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center"
          style={{ minHeight: "100%", minWidth: "100%" }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Additional atmospheric gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>

      {/* Subtle warm glow effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-blue-500/10 via-transparent to-slate-900/60"></div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-4xl relative z-10"
      >
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Explore our latest projects and see how we help businesses transform their digital presence.
          </p>
        </div>

        {/* Collapsible Sections by Category */}
        <div className="space-y-8 sm:space-y-10">
          {categories.map((cat, idx) => {
            const catProjects = projects.filter((p) => p.category === cat.name)
            if (catProjects.length === 0) return null

            return (
              <AboutSection key={cat.name} icon={cat.icon} title={cat.name} delay={0.1 * (idx + 1)}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  {catProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                      className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4 sm:p-6 flex flex-col justify-between shadow-lg hover:bg-blue-500/10 transition-colors duration-300"
                    >
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-blue-300">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 sm:px-3 py-1 text-xs bg-blue-500/20 text-blue-200 rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2 sm:mt-3">
                        <Button asChild size="sm" variant="outline" className="text-xs sm:text-sm bg-transparent">
                          <Link href={project.link}>Details</Link>
                        </Button>
                        {project.url && (
                          <Button asChild size="sm" variant="secondary" className="text-xs sm:text-sm">
                            <Link href={project.url} target="_blank" rel="noopener noreferrer">
                              Live <ExternalLink className="ml-1 h-3 w-3 sm:h-4 sm:w-4 inline" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AboutSection>
            )
          })}
        </div>

        {/* Meet Our Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 sm:mt-20 lg:mt-24"
        >
          <AboutSection icon={<Users />} title="Meet Our Team" delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-6 shadow-lg hover:bg-blue-500/10 transition-colors duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 mb-4 rounded-full overflow-hidden border-2 border-blue-400/30">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-300">{member.name}</h3>
                    <p className="text-blue-400 font-medium mb-3 sm:mb-4">{member.role}</p>
                    <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">{member.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="px-3 py-1 text-xs bg-blue-500/20 text-blue-200 rounded-full font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AboutSection>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Ready to start your project?</h2>
            <p className="text-base sm:text-lg text-gray-300 px-4">
              {"Let's build something amazing together. Book a free strategy call today!"}
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold"
          >
            <a href="https://calendly.com/webnexaai/30min" target="_blank" rel="noopener noreferrer">
              Book a Free Call
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </main>
  )
}
