"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Rocket, Bot, BrainCog, MessageSquare, Cloud, Database, Shield, Server, Cpu, ExternalLink,User } from "lucide-react";
import Link from "next/link";
import AboutSection from "@/src/components/home/about-section";
import { Button } from "@/src/components/ui/button";

const projects = [
  // AI Automation
  {
    id: 1,
    title: 'Email Automation',
    category: 'AI Automation',
    tags: ['Zapier', 'Gmail API', 'Workflows'],
    description: 'Automate your email campaigns, follow-ups, and notifications with smart triggers and personalized content.',
    image: '/placeholder.jpg',
    link: '/portfolio/email-automation',
    url: '',
  },
  {
    id: 2,
    title: 'Lead Generation Automation',
    category: 'AI Automation',
    tags: ['Lead Forms', 'CRM', 'AI Qualification'],
    description: 'Capture, qualify, and route leads automatically from your website and ads to your CRM.',
    image: '/placeholder.jpg',
    link: '/portfolio/lead-generation-automation',
    url: '',
  },
  // AI Agents-as-a-Service
  {
    id: 3,
    title: 'AI Sales Agent',
    category: 'AI Agents-as-a-Service',
    tags: ['OpenAI', 'Zapier', 'CRM Integration'],
    description: 'An AI-powered sales agent that automatically qualifies leads, books meetings, and updates your CRM.',
    image: '/placeholder.jpg',
    link: '/portfolio/ai-sales-agent',
    url: '',
  },
  {
    id: 4,
    title: 'AI Receptionist',
    category: 'AI Agents-as-a-Service',
    tags: ['OpenAI', 'Twilio', 'Voice'],
    description: 'A virtual AI receptionist that answers calls, schedules appointments, and provides information 24/7.',
    image: '/placeholder.jpg',
    link: '/portfolio/ai-receptionist',
    url: '',
  },
  {
    id: 5,
    title: 'AI Lead Qualifier',
    category: 'AI Agents-as-a-Service',
    tags: ['LangChain', 'OpenAI', 'Automation'],
    description: 'A smart agent that qualifies leads in real-time and routes them to the right sales rep.',
    image: '/placeholder.jpg',
    link: '/portfolio/ai-lead-qualifier',
    url: '',
  },
  {
    id: 6,
    title: 'AI Booking Agent',
    category: 'AI Agents-as-a-Service',
    tags: ['OpenAI', 'Calendly', 'Integration'],
    description: 'An AI agent that handles bookings and calendar invites for your business automatically.',
    image: '/placeholder.jpg',
    link: '/portfolio/ai-booking-agent',
    url: '',
  },
  // AI Chatbots
  {
    id: 7,
    title: 'Custom Support Chatbot',
    category: 'AI Chatbots',
    tags: ['GPT-4', 'Custom Data', 'Slack'],
    description: 'A chatbot trained on your business data, integrated with Slack and WhatsApp for instant support.',
    image: '/placeholder.jpg',
    link: '/portfolio/custom-support-chatbot',
    url: '',
  },
  // Web Design & Development
  {
    id: 8,
    title: 'E-Commerce Platform',
    category: 'Web Design & Development',
    tags: ['React', 'Node.js', 'MongoDB'],
    description: 'A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking.',
    image: '/placeholder.jpg',
    link: '/portfolio/e-commerce-platform',
    url: 'https://themajesticpeacock.com',
  },
  {
    id: 9,
    title: 'Financial Dashboard',
    category: 'Web Design & Development',
    tags: ['Figma', 'Adobe XD', 'Prototyping'],
    description: 'A comprehensive financial dashboard design for a fintech startup, featuring intuitive data visualization and user-friendly interface.',
    image: '/placeholder.jpg',
    link: '/portfolio/financial-dashboard',
    url: 'https://virtual-ventures.netlify.app/',
  },
  {
    id: 10,
    title: 'Healthcare Mobile App',
    category: 'Web Design & Development',
    tags: ['React Native', 'Firebase', 'Health API'],
    description: 'A mobile application for healthcare providers to manage patient records, appointments, and communication.',
    image: '/placeholder.jpg',
    link: '/portfolio/healthcare-app',
    
  },
  {
    id: 11,
    title: 'Real Estate Website',
    category: 'Web Design & Development',
    tags: ['Next.js', 'Tailwind CSS', 'Supabase'],
    description: 'A modern real estate website with property listings, search functionality, and agent profiles.',
    image: '/placeholder.jpg',
    link: '/portfolio/real-estate-website',
    url: '',
  },
  // AWS Services (Consolidated)
  {
    id: 12,
    title: 'Multi-Region Cloud Architecture',
    category: 'AWS Services',
    tags: ['EC2', 'CloudFormation', 'Auto-scaling', 'Load Balancer'],
    description: 'A scalable cloud infrastructure designed for high availability and performance across multiple regions.',
    image: '/placeholder.jpg',
    link: '/portfolio/multi-region-cloud',
    url: '',
  },
  {
    id: 13,
    title: 'Serverless E-commerce Platform',
    category: 'AWS Services',
    tags: ['Lambda', 'API Gateway', 'DynamoDB', 'CloudFront'],
    description: 'A fully serverless e-commerce platform built on AWS with auto-scaling and global content delivery.',
    image: '/placeholder.jpg',
    link: '/portfolio/serverless-ecommerce',
    url: '',
  },
  {
    id: 14,
    title: 'Database Migration & Optimization',
    category: 'AWS Services',
    tags: ['RDS', 'Aurora', 'DMS', 'Performance Tuning'],
    description: 'Comprehensive database migration from on-premise to AWS with performance optimization and monitoring.',
    image: '/placeholder.jpg',
    link: '/portfolio/database-migration',
    url: '',
  },
  {
    id: 15,
    title: 'NoSQL Data Architecture',
    category: 'AWS Services',
    tags: ['DynamoDB', 'ElastiCache', 'Data Modeling', 'Caching'],
    description: 'High-performance NoSQL database architecture with Redis caching for real-time applications.',
    image: '/placeholder.jpg',
    link: '/portfolio/nosql-architecture',
    url: '',
  },
  {
    id: 16,
    title: 'Enterprise Security Framework',
    category: 'AWS Services',
    tags: ['IAM', 'VPC', 'CloudTrail', 'Compliance'],
    description: 'Comprehensive security framework with IAM policies, VPC configuration, and compliance monitoring.',
    image: '/placeholder.jpg',
    link: '/portfolio/enterprise-security',
    url: '',
  },
  {
    id: 17,
    title: 'Automated CI/CD Pipeline',
    category: 'AWS Services',
    tags: ['CodePipeline', 'CodeBuild', 'ECS', 'Docker'],
    description: 'End-to-end CI/CD pipeline with automated testing, building, and deployment to AWS ECS.',
    image: '/placeholder.jpg',
    link: '/portfolio/cicd-pipeline',
    url: '',
  },
  {
    id: 18,
    title: 'ML Model Training Platform',
    category: 'AWS Services',
    tags: ['SageMaker', 'Lambda', 'S3', 'API Gateway'],
    description: 'Machine learning model training and deployment platform using Amazon SageMaker and serverless architecture.',
    image: '/placeholder.jpg',
    link: '/portfolio/ml-platform',
    url: '',
  },
];

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
    name: "AI Chatbots",
    icon: <MessageSquare />,
  },
  {
    name: 'Web Design & Development',
    icon: <Rocket />,
  },
  {
    name: 'AWS Services',
    icon: <Cloud />,
  },
];

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
    role: "FULLSTACK Developer",
    description:
      "Full-stack developer specializing in React, Node.js, and AI integrations. Passionate about creating scalable web applications with cutting-edge technology.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["React", "Node.js", "AI Integration"],
  },
  {
    id: 3,
    name: "Ansh Singhal",
    role: "AI Engineer/Developer",
    description:
      "AI engineer with expertise in natural language processing and computer vision. Builds intelligent systems that understand and interact with human language.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["NLP", "Computer Vision", "Deep Learning"],
  },
  {
    id: 4,
    name: "Aditya Maurya",
    role: "FULLSTACK Developer",
    description:
      "Creative designer focused on user-centered design and creating intuitive interfaces. Specializes in designing AI-powered applications that are both beautiful and functional.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["UI/UX Design", "Prototyping", "User Research"],
  },
];

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
            Explore our latest projects and see how we help businesses transform
            their digital presence.
          </p>
        </div>

        {/* Collapsible Sections by Category */}
        <div className="space-y-8 sm:space-y-10">
          {categories.map((cat, idx) => {
            const catProjects = projects.filter((p) => p.category === cat.name);
            if (catProjects.length === 0) return null;

            return (
              <AboutSection
                key={cat.name}
                icon={cat.icon}
                title={cat.name}
                delay={0.1 * (idx + 1)}
              >
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
                        <Button asChild size="sm" variant="outline" className="text-xs sm:text-sm">
                          {/* <Link href={project.link}>
                            Details
                          </Link> */}
                        </Button>
                        {project.url && (
                          <Button
                            asChild
                            size="sm"
                            variant="secondary"
                            className="text-xs sm:text-sm"
                          >
                            <Link
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live{" "}
                              <ExternalLink className="ml-1 h-3 w-3 sm:h-4 sm:w-4 inline" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AboutSection>
            );
          })}
        </div>

        

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
              Ready to start your project?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 px-4">
              {
                "Let's build something amazing together. Book a free strategy call today!"
              }
            </p>
          </div>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold">
            <a href="https://cal.com/devanshi-jaiswal-gjcdhl/discovery-call" target="_blank" rel="noopener noreferrer">Book a Free Call</a>
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
}
