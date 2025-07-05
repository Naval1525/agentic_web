"use client";
import React, { useState } from "react";
import {
  Code,
  Smartphone,
  Globe,
  Database,
  PaintBucket,
  ShoppingCart,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Github,
  Eye,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string | null;
  featured: boolean;
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

const projects: Project[] = [
  // Web Development
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    description:
      "A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking.",
    image: "/api/placeholder/400/250",
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Web Development",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    description:
      "A modern, responsive portfolio website with smooth animations and optimized performance.",
    image: "/api/placeholder/400/250",
    liveUrl: "https://example-portfolio.com",
    githubUrl: "https://github.com/yourusername/portfolio",
    featured: false,
  },
  {
    id: 3,
    title: "Task Management App",
    category: "Web Development",
    tags: ["Vue.js", "Express", "PostgreSQL"],
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/api/placeholder/400/250",
    liveUrl: "https://example-taskmanager.com",
    githubUrl: "https://github.com/yourusername/task-manager",
    featured: false,
  },
  // Mobile Development
  {
    id: 4,
    title: "Fitness Tracker App",
    category: "Mobile Development",
    tags: ["React Native", "Redux", "Firebase"],
    description:
      "A comprehensive fitness tracking app with workout plans, progress tracking, and social features.",
    image: "/api/placeholder/400/250",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.example.fitness",
    githubUrl: "https://github.com/yourusername/fitness-tracker",
    featured: true,
  },
  {
    id: 5,
    title: "Weather App",
    category: "Mobile Development",
    tags: ["Flutter", "Dart", "OpenWeather API"],
    description:
      "A beautiful weather app with detailed forecasts, location-based weather, and customizable widgets.",
    image: "/api/placeholder/400/250",
    liveUrl: "https://apps.apple.com/us/app/example-weather/id123456789",
    githubUrl: "https://github.com/yourusername/weather-app",
    featured: false,
  },
  // UI/UX Design
  {
    id: 6,
    title: "Banking App Redesign",
    category: "UI/UX Design",
    tags: ["Figma", "User Research", "Prototyping"],
    description:
      "A complete redesign of a banking app focusing on user experience and accessibility.",
    image: "/api/placeholder/400/250",
    liveUrl: "https://www.figma.com/file/example-banking-redesign",
    githubUrl: null,
    featured: true,
  },
  {
    id: 7,
    title: "Food Delivery Interface",
    category: "UI/UX Design",
    tags: ["Adobe XD", "Wireframing", "User Testing"],
    description:
      "Modern food delivery app interface with intuitive navigation and engaging visuals.",
    image: "/api/placeholder/400/250",
    liveUrl: "https://xd.adobe.com/view/example-food-delivery",
    githubUrl: null,
    featured: false,
  },
  // Data Science
  {
    id: 8,
    title: "Sales Prediction Model",
    category: "Data Science",
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    description:
      "Machine learning model to predict sales trends and optimize inventory management.",
    image: "/api/placeholder/400/250",
    liveUrl: "https://example-sales-dashboard.com",
    githubUrl: "https://github.com/yourusername/sales-prediction",
    featured: false,
  },
  {
    id: 9,
    title: "Customer Sentiment Analysis",
    category: "Data Science",
    tags: ["Python", "NLTK", "TensorFlow", "Streamlit"],
    description:
      "NLP-powered sentiment analysis tool for customer feedback and social media monitoring.",
    image: "/api/placeholder/400/250",
    liveUrl: "https://example-sentiment-analysis.streamlit.app",
    githubUrl: "https://github.com/yourusername/sentiment-analysis",
    featured: false,
  },
];

const categories: Category[] = [
  {
    name: "Web Development",
    icon: <Globe className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Mobile Development",
    icon: <Smartphone className="w-5 h-5" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "UI/UX Design",
    icon: <PaintBucket className="w-5 h-5" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Data Science",
    icon: <Database className="w-5 h-5" />,
    color: "from-orange-500 to-red-500",
  },
];

const CollapsibleSection = ({
  children,
  title,
  icon,
  color,
  isOpen,
  onToggle,
}: CollapsibleSectionProps) => (
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

const ProjectCard = ({ project }: ProjectCardProps) => (
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

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag: string, index: number) => (
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
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
        )}
      </div>
    </div>
  </div>
);

export default function PortfolioShowcase() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "Web Development": true,
    "Mobile Development": false,
    "UI/UX Design": false,
    "Data Science": false,
  });

  const toggleSection = (categoryName: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <main className="min-h-screen relative">
       <div className="absolute inset-0 -z-20">
        <img
          src="/background.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center"
          style={{ minHeight: "100%", minWidth: "100%" }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      

        <div className="relative z-10 container mx-auto px-4 py-16 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore my latest projects and see how I bring ideas to life
              through code, design, and innovation.
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((p) => p.featured)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </div>

          {/* Categorized Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              All Projects
            </h2>

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

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project and create something
              amazing together.
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
