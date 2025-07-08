"use client";
import React, { useState } from "react";
import {
  Code,
  Globe,
  Database,
  ChevronDown,
  ChevronRight,
  Eye,
  Bot,
  DollarSign,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  liveUrl: string;
  techStack: string[];
  featured?: boolean;
}

interface Category {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface CollapsibleSectionProps {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
  color: string;
  isOpen: boolean;
  onToggle: () => void;
}

interface ProjectCardProps {
  project: Project;
}

interface OpenSections {
  [key: string]: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Financial Forecaster",
    category: "AI & Machine Learning",
    tags: ["Python", "Streamlit", "ML", "Finance"],
    description:
      "AI-powered financial forecasting platform that analyzes market trends and provides investment insights using machine learning algorithms.",
    image: "/images/portfolio/fina.png",
    liveUrl: "https://diva-agent2.streamlit.app/",
    techStack: ["Python", "Streamlit", "Pandas", "Scikit-learn", "NumPy"],
    featured: true,
  },
  {
    id: 2,
    title: "Lawyer Up",
    category: "Web Development",
    tags: ["Next.js", "Tailwind CSS", "Legal Tech"],
    description:
      "Modern legal services platform connecting clients with lawyers, featuring case management and consultation booking.",
    image: "/images/portfolio/law.png",
    liveUrl: "https://lawyerupapp.vercel.app/",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel", "TypeScript"],
  },
  {
    id: 3,
    title: "VitalsView - Fitness Tracker",
    category: "Web Development",
    tags: ["React", "Health", "Analytics"],
    description:
      "Comprehensive fitness tracking application with workout plans, progress monitoring, and health analytics dashboard.",
    image: "/images/portfolio/fit.png",
    liveUrl: "https://vitalsview.vercel.app/",
    techStack: ["React", "Chart.js", "Firebase", "Tailwind CSS", "PWA"],
  },
  {
    id: 4,
    title: "AI x Email",
    category: "AI & Machine Learning",
    tags: ["AI", "Email", "Automation", "NLP"],
    description:
      "Intelligent email management system powered by AI for automated responses, categorization, and productivity enhancement.",
    image: "/images/portfolio/aiml.png",
    liveUrl: "https://ai-email-frontend-taupe.vercel.app/",
    techStack: ["React", "Node.js", "OpenAI API", "Gmail", "MongoDB"],
  },
  {
    id: 5,
    title: "Virtual Venture",
    category: "Fintech",
    tags: ["Trading", "NSE", "BSE", "Finance"],
    description:
      "Virtual trading platform for learning stock market trading with real-time NSE and BSE data integration.",
    image: "/images/portfolio/vv.png",
    liveUrl: "https://virtual-ventures.netlify.app/",
    techStack: ["React", "Node.js", "Yahoo Finance", "Recharts", "Express"],
  },
  {
    id: 6,
    title: "Hirees",
    category: "Web Development",
    tags: ["Recruitment", "HR", "Job Board"],
    description:
      "Modern hiring platform connecting employers with talent through advanced matching algorithms and streamlined recruitment process.",
    image: "/images/portfolio/hire.png",
    liveUrl: "https://hirees.com/",
    techStack: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    featured: true,
  },
  {
    id: 7,
    title: "Chatbot Agent",
    category: "Ai Agents",
    tags: ["Chatbot","Voicebot", "AI", "Agent", "NLP"],
    description:
      "Intelligent cost efficient chatbot & voicebot agent that can handle customer queries, provide information, save previous chats and assist with various tasks using natural language processing. No hidden costs, no API keys required.",
    image: "/images/portfolio/chat.jpeg",
    liveUrl: "",
    techStack: ["Agentic Ai", "Rag"],
    featured: false,
  },
  {
    id: 8,
    title: "Linkedin Scraper",
    category: "Ai Agents",
    tags: ["Linkedin", "NLP"],
    description:
      "For HR, these solutions allow you to find candidate profiles efficiently across platforms, with no ongoing API fees, and are adaptable as your sourcing needs grow",
    image: "/images/portfolio/Scraper.jpeg",
    liveUrl: "",
    techStack: ["Agentic Ai", "n8n"],
    featured: false,
  },
  {
    id: 9,
    title: "Marketing agent",
    category: "Ai Agents",
    tags: ["Client", "Linkedn", "NLP", "Notion", "Voice call", "Research"],
    description:
      "A one-stop marketing agent can handle company research, update Notion, research client LinkedIn profiles, make voice calls, and send emails to clients—all in an integrated workflow.",
    image: "/images/portfolio/client.jpeg",
    liveUrl: "https://www.linkedin.com/posts/devanshi-jaiswal-b83774217_aiinsales-salesautomation-futureofoutreach-activity-7296915013691195392-7Xjq?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbAnJMB6L7n9WfYupSHXDDuz_zW4l8Lxa0",
    techStack: ["Agentic Ai", "Make.com"],
    featured: false,
  },
  {
    id: 10,
    title: "Email agent",
    category: "Ai Agents",
    tags: ["Gmail"],
    description:
      "Automate your entire Gmail workflow 100% locally: send and draft emails, analyze threads, manage mass campaigns via Google Sheets, and summarize long messages — all without exposing your Gmail API keys to third-party services. Everything runs on your own machine, keeping your data private and secure while eliminating repetitive manual tasks.",
    image: "/images/portfolio/email.jpeg",
    liveUrl: "https://www.linkedin.com/posts/devanshi-jaiswal-b83774217_langchain-automation-datasecurity-activity-7329486872466849792-uh8F?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbAnJMB6L7n9WfYupSHXDDuz_zW4l8Lxa0",
    techStack: ["Agentic Ai", "langchain"],
    featured: false,
  },
  {
    id: 11,
    title: "Navigate AI - Object Tracker",
    category: "AI & Machine Learning",
    tags: [
      "YOLO",
      "OpenCV",
      "Python",
      "Computer Vision",
      "Hackathon Winner"
    ],
    description:
      "Real-time YOLO + OpenCV-based vehicle detection and multi-object tracker with timestamping and counting.",
    image: "/images/portfolio/navigateai.png",
    liveUrl: "https://navigateai.streamlit.app/",
    techStack: ["YOLO", "OpenCV", "Python", "Computer Vision"],
  },
];

const categories: Category[] = [
  {
    name: "Web Development",
    icon: <Globe className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "AI & Machine Learning",
    icon: <Bot className="w-5 h-5" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Fintech",
    icon: <DollarSign className="w-5 h-5" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Ai Agents",
    icon: <Code className="w-5 h-5" />,
    color: "from-yellow-500 to-orange-500",
  },
];

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  children,
  title,
  icon,
  color,
  isOpen,
  onToggle,
}) => (
  <div className="mb-8">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
    >
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${color} text-white`}>
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">
          {title}
        </h2>
        <span className="text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
          {projects.filter((p) => p.category === title).length} projects
        </span>
      </div>
      <div className="text-white transition-transform duration-300">
        {isOpen ? (
          <ChevronDown className="w-6 h-6" />
        ) : (
          <ChevronRight className="w-6 h-6" />
        )}
      </div>
    </button>

    {isOpen && <div className="mt-6 space-y-6">{children}</div>}
  </div>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300 group">
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {project.featured && (
        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Featured
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack Section */}
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Tags Section */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex space-x-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
        >
          <Eye className="w-4 h-4" />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  </div>
);

export default function PortfolioShowcase(): React.JSX.Element {
  const [openSections, setOpenSections] = useState<OpenSections>({
    "Web Development": false,
    "AI & Machine Learning": false,
    Fintech: false,
    "Ai Agents": false,
  });

  const toggleSection = (categoryName: string): void => {
    setOpenSections((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const featuredProjects = projects.filter((p) => p.featured);
  const totalProjects = projects.length;

  return (
    <main className="min-h-screen relative">
      <div className="absolute inset-0 -z-20">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Project Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore my latest projects spanning AI, web development, and fintech
            solutions. Each project showcases different technologies and
            problem-solving approaches.
          </p>

          {/* Stats */}
          <div className="flex justify-center space-x-8 text-center">
            <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">
                {totalProjects}
              </div>
              <div className="text-sm text-gray-400">Total Projects</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">
                {featuredProjects.length}
              </div>
              <div className="text-sm text-gray-400">Featured</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">
                {categories.length}
              </div>
              <div className="text-sm text-gray-400">Categories</div>
            </div>
          </div>
        </div>

        {/* Categorized Projects */}
        <div className="mb-16">
          {categories.map((category) => {
            const categoryProjects = projects.filter(
              (p) => p.category === category.name
            );
            if (categoryProjects.length === 0) return null;

            return (
              <CollapsibleSection
                key={category.name}
                title={category.name}
                icon={category.icon}
                color={category.color}
                isOpen={openSections[category.name]}
                onToggle={() => toggleSection(category.name)}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </CollapsibleSection>
            );
          })}
        </div>

        {/* Technology Summary */}
        <div className="mb-16 bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Technologies Used Across Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-blue-400 mb-2">
                <Globe className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-white font-semibold">Frontend</h3>
              <p className="text-gray-300 text-sm">
                React, Next.js, Tailwind CSS, TypeScript
              </p>
            </div>
            <div className="text-center">
              <div className="text-green-400 mb-2">
                <Database className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-white font-semibold">Backend</h3>
              <p className="text-gray-300 text-sm">
                Node.js, Python, Express, APIs
              </p>
            </div>
            <div className="text-center">
              <div className="text-purple-400 mb-2">
                <Bot className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-white font-semibold">AI/ML</h3>
              <p className="text-gray-300 text-sm">
                OpenAI API, Streamlit, NLP, ML
              </p>
            </div>
            <div className="text-center">
              <div className="text-orange-400 mb-2">
                <Code className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-white font-semibold">Deployment</h3>
              <p className="text-gray-300 text-sm">
                Vercel, Netlify, AWS, Firebase
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next project and create something amazing
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
              Get In Touch
            </button>
            <button className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors">
              View Resume
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}