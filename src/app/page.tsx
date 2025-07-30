"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faUser, 
  faCogs, 
  faBriefcase, 
  faProjectDiagram,
  faDownload,
  faCode,
  faDatabase,
  faCloud,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import { 
  faReact, 
  faNodeJs, 
  faPython, 
  faAws, 
  faDocker,
  faGithub,
  faLinkedin,
  faTwitter,
  faLine
} from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "home", label: "Home", icon: faHome },
    { id: "about", label: "About", icon: faUser },
    { id: "skills", label: "Skills", icon: faCogs },
    { id: "experience", label: "Experience", icon: faBriefcase },
    { id: "projects", label: "Projects", icon: faProjectDiagram },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Floating Background Elements */}
      <div className="liquid-blob w-72 h-72 bg-blue-400 top-20 left-20"></div>
      <div className="liquid-blob w-96 h-96 bg-purple-400 top-1/2 right-20"></div>
      <div className="liquid-blob w-64 h-64 bg-pink-400 bottom-20 left-1/3"></div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 liquid-glass px-6 py-3">
        <div className="flex space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeSection === item.id
                  ? "bg-white/20 text-white"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
              <span className="hidden md:inline">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="text-center floating">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Pinnida Sangsud
          </h1>
          <p className="text-2xl md:text-3xl text-white/80 mb-8">
            <FontAwesomeIcon icon={faCode} className="mr-3" />
            Front-End Developer
          </p>
          <div className="liquid-glass px-8 py-4 inline-block cursor-pointer hover:bg-white/20 transition-all duration-300">
            <p className="text-lg text-white/90 flex items-center gap-2">
              <FontAwesomeIcon icon={faDownload} />
              Download Resume
            </p>
          </div>
          
          {/* Social Links */}
          <div className="mt-8 flex justify-center gap-6">
            {[
              { icon: faGithub, href: "https://github.com/pinnida" },
              { icon: faLinkedin, href: "https://www.linkedin.com/in/pinnida-s-782a1723a/" },
              { icon: faLine, href: "https://line.me/ti/p/aV0cNj1VKV" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass p-3 hover:bg-white/20 transition-all duration-300"
              >
                <FontAwesomeIcon icon={social.icon} className="w-6 h-6 text-white" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold gradient-text mb-12 text-center flex items-center justify-center gap-4">
            <FontAwesomeIcon icon={faUser} />
            About Me
          </h2>
          <div className="glass-card p-8">
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              I'm a passionate full-stack developer with 5+ years of experience
              creating innovative web applications. I love turning complex
              problems into simple, beautiful designs.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              My expertise spans across modern web technologies, and I'm always
              eager to learn new tools and frameworks to deliver exceptional
              user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold gradient-text mb-12 text-center flex items-center justify-center gap-4">
            <FontAwesomeIcon icon={faCogs} />
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "React/Next.js", level: 90, icon: faReact },
              { name: "TypeScript", level: 85, icon: faCode },
              { name: "Node.js", level: 80, icon: faNodeJs },
              { name: "Python", level: 75, icon: faPython },
              { name: "AWS", level: 70, icon: faAws },
              { name: "Docker", level: 75, icon: faDocker },
            ].map((skill, index) => (
              <div key={skill.name} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FontAwesomeIcon icon={skill.icon} className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">
                    {skill.name}
                  </h3>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-white/70 text-sm mt-2 block">
                  {skill.level}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold gradient-text mb-12 text-center flex items-center justify-center gap-4">
            <FontAwesomeIcon icon={faBriefcase} />
            Job Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "Senior Full Stack Developer",
                company: "Tech Corp",
                period: "2022 - Present",
                description:
                  "Led development of microservices architecture serving 1M+ users",
              },
              {
                title: "Frontend Developer",
                company: "StartupXYZ",
                period: "2020 - 2022",
                description:
                  "Built responsive web applications using React and TypeScript",
              },
              {
                title: "Junior Developer",
                company: "Digital Agency",
                period: "2019 - 2020",
                description: "Developed custom WordPress themes and plugins",
              },
            ].map((job, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {job.title}
                </h3>
                <h4 className="text-lg gradient-text mb-2">{job.company}</h4>
                <p className="text-white/70 mb-4">{job.period}</p>
                <p className="text-white/90">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold gradient-text mb-12 text-center flex items-center justify-center gap-4">
            <FontAwesomeIcon icon={faProjectDiagram} />
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description:
                  "Full-stack e-commerce solution with payment integration",
                tech: ["React", "Node.js", "MongoDB"],
                icon: faCode
              },
              {
                title: "Task Management App",
                description:
                  "Collaborative task management with real-time updates",
                tech: ["Next.js", "Socket.io", "PostgreSQL"],
                icon: faTools
              },
              {
                title: "AI Chat Bot",
                description:
                  "Intelligent chatbot with natural language processing",
                tech: ["Python", "TensorFlow", "FastAPI"],
                icon: faDatabase
              },
            ].map((project, index) => (
              <div key={index} className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <FontAwesomeIcon icon={project.icon} className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
                <p className="text-white/90 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm text-white/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <div className="liquid-glass px-8 py-4 inline-block">
          <p className="text-white/90">
            © 2024 Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
