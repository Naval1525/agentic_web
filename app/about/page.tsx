"use client";

import HeroTitle from "@/src/components/home/hero-title";
import AboutSection from "@/src/components/home/about-section";
import ServiceItem from "@/src/components/services/ServiceItem";
import CallToAction from "@/src/components/home/call-to-action";
import {
  Zap,
  Bot,
  RotateCcw,
  Cloud,
  Rocket,
  Users,
  Target,
  Lightbulb,
  Handshake,
  Settings,
  User,
  Github,
  Linkedin,
} from "lucide-react";

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Devanshi Jaiswal",
    role: "Lead Developer & AI Architect",
    description:
      "Passionate full-stack developer with 4+ years of experience crafting scalable web applications and intelligent AI solutions. Transforms complex business requirements into elegant, high-performance systems using cutting-edge technologies. Specializes in architecting robust Next.js applications, AWS cloud infrastructure, and seamless AI integrations that drive real business value.",
    image: "/images/team/dj.png",
    specialties: ["Next.js", "AWS", "AI Integration", "Automation"],
    github: "https://github.com/Devanshi-cloud",
    linkedin: "https://www.linkedin.com/in/devanshi-jaiswal-b83774217/",
  },
  {
    id: 2,
    name: "Naval Bihani",
    role: "Cloud Architect & DevOps Engineer",
    description:
      "Expert cloud architect and DevOps engineer with a proven track record of designing and implementing scalable, secure cloud infrastructures. Specializes in AWS services, serverless architectures, and CI/CD pipelines that ensure 99.9% uptime. Passionate about automating deployment processes and creating resilient systems that scale effortlessly with business growth.",
    image: "/images/team/naval.png",
    specialties: ["AWS", "Serverless", "DevOps", "Infrastructure"],
    github: "https://github.com/Naval1525",
    linkedin: "https://www.linkedin.com/in/navalbihani15/",
  },
  {
    id: 3,
    name: "Aditya Maurya",
    role: "Fullstack Developer",
    description:
      "Versatile fullstack developer with expertise in both frontend and backend technologies. Creates seamless user experiences with modern frameworks while building robust server-side architectures. Focuses on clean, maintainable code and agile development practices. Excels at translating business requirements into technical solutions that are both user-friendly and scalable.",
    image: "/images/team/adi.png",
    specialties: ["React", "Node.js", "Database Design", "API Development"],
    github: "https://github.com/STR7ANGER",
    linkedin: "https://www.linkedin.com/in/adimaurya/",
  },
  {
    id: 4,
    name: "Ansh Singhal",
    role: "AI Solutions & Developer",
    description:
      "AI engineer and automation specialist focused on building intelligent solutions that streamline business operations. Expert in developing custom chatbots, workflow automation systems, and AI-powered tools that reduce manual work and increase efficiency. Passionate about leveraging machine learning and AI to solve real-world business challenges and drive measurable results.",
    image: "/images/team/ansh.png",
    specialties: [
      "AI Agents",
      "Automation",
      "Process Optimization",
      "Chatbots",
    ],
    github: "https://github.com/singhalansh",
    linkedin: "https://www.linkedin.com/in/anshsinghal2005/",
  },
  {
    id: 5,
    name: "Komal Kumari",
    role: "Social Media Head",
    description:
      "Social Media Head with a focus on building strong online communities, managing engaging content strategies, and driving brand presence across platforms. Skilled in content planning, audience growth, and using analytics to optimize campaigns for maximum reach and impact. Passionate about storytelling and leveraging social media trends to enhance brand identity and audience connection.",
    image: "/images/team/komal.png",
    specialties: [
      "Content Strategy",
      "Community Building",
      "Analytics",
      "Social Media Marketing",
    ],
    github: "https://github.com/Komxxd",
    linkedin: "https://www.linkedin.com/in/komal-kumari-395309285/",
  },
];

const AboutPage = () => {
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-4xl relative z-10">
        <HeroTitle />
        <div className="space-y-6 sm:space-y-8">
          <AboutSection
            icon={<Rocket className="h-6 w-6 sm:h-7 sm:w-7" />}
            title="Who We Are"
            delay={0}
          >
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-gray-300">
                We're not your traditional agency.
              </p>
              <p className="text-base sm:text-lg text-gray-300">
                We're a team of builders, designers, and automation architects
                focused on one thing:
              </p>
              <p className="text-blue-400 font-medium text-lg sm:text-xl mt-4 sm:mt-6">
                Helping businesses grow faster with AI-first systems.
              </p>
            </div>
          </AboutSection>

          {/* Meet Our Team Section */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <AboutSection
              icon={<User className="h-6 w-6 sm:h-7 sm:w-7" />}
              title="Meet Our Team"
              delay={0}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {teamMembers.map((member, idx) => (
                  <div
                    key={member.id}
                    className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-6 shadow-lg hover:bg-blue-500/10 transition-colors duration-300 relative"
                  >
                    {/* Social Icons */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-200 text-blue-400 hover:text-blue-300"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-200 text-blue-400 hover:text-blue-300"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 mb-4 rounded-full overflow-hidden border-2 border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        {/* Fallback avatar */}
                        <div
                          className="w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-blue-300 text-2xl font-bold"
                          style={{ display: "none" }}
                        >
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-300">
                        {member.name}
                      </h3>
                      <p className="text-blue-400 font-medium mb-3 sm:mb-4">
                        {member.role}
                      </p>
                      <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                        {member.description}
                      </p>
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
                  </div>
                ))}
              </div>
            </AboutSection>
          </div>

          <AboutSection
            icon={<Settings className="h-6 w-6 sm:h-7 sm:w-7" />}
            title="What Makes Us Different"
            delay={0}
          >
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-gray-300">
                We don't just build websites — we build scalable cloud
                solutions.
              </p>
              <p className="text-base sm:text-lg text-gray-300">
                We don't just deploy apps — we architect AWS infrastructure.
              </p>
              <p className="text-base sm:text-lg text-gray-300">
                We don't use AI for the buzz — we use it to cut cost, time, and
                friction.
              </p>
            </div>
          </AboutSection>

          <AboutSection
            icon={<Target className="h-6 w-6 sm:h-7 sm:w-7" />}
            title="What We Build"
            delay={0}
          >
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
                icon={<Cloud className="h-5 w-5 sm:h-6 sm:w-6" />}
                text="AWS cloud infrastructure & serverless solutions"
                delay={0.4}
              />
            </div>
          </AboutSection>

          <AboutSection
            icon={<Users className="h-6 w-6 sm:h-7 sm:w-7" />}
            title="Who We Help"
            delay={0}
          >
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-gray-300">
                Startups. Local brands. Creators. Service businesses.
              </p>
              <p className="text-blue-400 font-medium text-lg sm:text-xl mt-4 sm:mt-6">
                Anyone ready to level up — without hiring more people.
              </p>
            </div>
          </AboutSection>

          <AboutSection
            icon={<Lightbulb className="h-6 w-6 sm:h-7 sm:w-7" />}
            title="Why It Matters"
            delay={0}
          >
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-gray-300">
                Because in 2025, scaling manually is a trap.
              </p>
              <p className="text-blue-400 font-medium text-lg sm:text-xl mt-4 sm:mt-6">
                We help you build systems that work for you — 24/7.
              </p>
            </div>
          </AboutSection>

          <AboutSection
            icon={<Handshake className="h-6 w-6 sm:h-7 sm:w-7" />}
            title="Built to Scale With You"
            delay={0}
          >
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-gray-300">
                No cookie-cutter templates
              </p>
              <p className="text-base sm:text-lg text-gray-300">
                No bloated retainers
              </p>
              <p className="text-blue-400 font-medium text-lg sm:text-xl mt-4 sm:mt-6">
                Just fast, smart execution
              </p>
            </div>
          </AboutSection>
        </div>
        <CallToAction />
      </div>
    </main>
  );
};

export default AboutPage;
