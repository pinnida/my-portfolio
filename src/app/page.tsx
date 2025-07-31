"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCogs,
  faBriefcase,
  faProjectDiagram,
  faDownload,
  faCode,
  faCalendar,
  faDesktop,
  faMobileScreen
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faLine,
  faAngular
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

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

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const menuItems = [
    { id: "home", label: "Home", icon: faHome, color: "from-purple-600 to-blue-600" },
    { id: "about", label: "About", icon: faUser, color: "from-purple-600 to-blue-600" },
    { id: "skills", label: "Skills", icon: faCogs, color: "from-purple-600 to-blue-600" },
    { id: "experience", label: "Experience", icon: faBriefcase, color: "from-purple-600 to-blue-600" },
    { id: "projects", label: "Projects", icon: faProjectDiagram, color: "from-purple-600 to-blue-600" },
  ];

  const downloadResume = () => {
    const now = new Date();
    const timestamp = `${now.getDate().toString().padStart(2, "0")}-${(
      now.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${now.getFullYear()}_${now
      .getHours()
      .toString()
      .padStart(2, "0")}-${now.getMinutes().toString().padStart(2, "0")}`;

    const link = document.createElement("a");
    link.href = "/Pinnida_Sangsud_Resume_2025.pdf"; // ไฟล์ต้องอยู่ใน public/
    link.download = `Pinnida_Sangsud_Resume_${timestamp}.pdf`; // กำหนดชื่อไฟล์ที่จะโหลด
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen relative">
      {/* View Mode Toggle */}
      <motion.div
        className="fixed top-6 left-6 z-50 flex bg-black/30 backdrop-blur-md rounded-full p-1"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <button
          onClick={() => setViewMode("desktop")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            viewMode === "desktop"
              ? "bg-white text-black"
              : "text-white hover:bg-white/10"
          }`}
        >
          <FontAwesomeIcon icon={faDesktop} className="me-2"/>
          Desktop
        </button>
        <button
          onClick={() => setViewMode("mobile")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            viewMode === "mobile"
              ? "bg-white text-black"
              : "text-white hover:bg-white/10"
          }`}
        >
          <FontAwesomeIcon icon={faMobileScreen} className="me-2"/>
          Mobile
        </button>
      </motion.div>

      {/* Mobile View Wrapper */}
      <div className={`${viewMode === "mobile" ? "flex justify-center bg-gray-800" : ""} min-h-screen`}>
        <div className={`${viewMode === "mobile" ? "w-[375px] bg-gradient-to-br from-purple-600 to-blue-700" : "w-full"} min-h-screen relative`}>
          {/* Animated Floating Background Elements */}
          <motion.div
            className={`liquid-blob ${viewMode === "mobile" ? "w-32 h-32" : "w-72 h-72"} bg-blue-400 top-20 left-20`}
            style={{ y }}
            animate={{
              x: [0, viewMode === "mobile" ? 30 : 100, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          ></motion.div>
          <motion.div
            className={`liquid-blob ${viewMode === "mobile" ? "w-40 h-40" : "w-96 h-96"} bg-purple-400 top-1/2 right-20`}
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
            animate={{
              x: [0, viewMode === "mobile" ? -20 : -50, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          ></motion.div>
          <motion.div
            className={`liquid-blob ${viewMode === "mobile" ? "w-28 h-28" : "w-64 h-64"} bg-pink-400 bottom-20 left-1/3`}
            animate={{
              y: [0, viewMode === "mobile" ? -40 : -80, 0],
              x: [0, viewMode === "mobile" ? 20 : 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* Animated Navigation */}
          <motion.nav
            className={`fixed ${viewMode === "mobile" ? "top-5 left-1/2" : "top-6 left-1/2"} transform -translate-x-1/2 z-50`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={`bg-gradient-to-r ${menuItems.find(item => item.id === activeSection)?.color || "from-purple-600 to-blue-600"} backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-lg`}>
              <div className={`flex ${viewMode === "mobile" ? "space-x-2" : "space-x-6"}`}>
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`${viewMode === "mobile" ? "px-2 py-2" : "px-4 py-2"} rounded-full transition-all duration-300 flex items-center gap-2 ${
                      activeSection === item.id
                        ? "bg-white/30 text-white shadow-md"
                        : "text-white/80 hover:text-white hover:bg-white/20"
                    }`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                    <span className={`${viewMode === "mobile" ? "hidden" : "hidden md:inline"}`}>{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.nav>

          {/* Hero Section */}
          <section
            id="home"
            className="min-h-screen flex items-center justify-center px-6 pt-[100px]"
          >
            <motion.div
              className="text-center floating"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className={`${viewMode === "mobile" ? "text-4xl" : "text-6xl md:text-8xl"} font-bold mb-6 gradient-text`}
                variants={itemVariants}
              >
                Pinnida Sangsud
              </motion.h1>
              <motion.p
                className={`${viewMode === "mobile" ? "text-lg" : "text-2xl md:text-3xl"} text-white/80 mb-8`}
                variants={itemVariants}
              >
                <FontAwesomeIcon icon={faCode} className="mr-3" />
                Front-End Developer
              </motion.p>
              <motion.div
                onClick={downloadResume}
                className={`liquid-glass ${viewMode === "mobile" ? "px-6 py-3" : "px-8 py-4"} inline-block cursor-pointer hover:bg-white/20 transition-all duration-300`}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className={`${viewMode === "mobile" ? "text-base" : "text-lg"} text-white/90 flex items-center gap-2`}>
                  <FontAwesomeIcon icon={faDownload} />
                  Download Resume
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="mt-8 flex justify-center gap-6"
                variants={containerVariants}
              >
                {[
                  { icon: faGithub, href: "https://github.com/pinnida" },
                  {
                    icon: faLinkedin,
                    href: "https://www.linkedin.com/in/pinnida-s-782a1723a/",
                  },
                  { icon: faLine, href: "https://line.me/ti/p/aV0cNj1VKV" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liquid-glass p-3 hover:bg-white/20 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="w-6 h-6 text-white"
                    />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </section>

          {/* About Section */}
          <motion.section
            id="about"
            className="min-h-screen flex items-center justify-center px-6 pt-[100px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`${viewMode === "mobile" ? "max-w-sm" : "max-w-4xl"} mx-auto`}>
              <motion.h2
                className={`${viewMode === "mobile" ? "text-3xl" : "text-5xl"} font-bold gradient-text mb-12 text-center flex items-center justify-center gap-4`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <FontAwesomeIcon icon={faUser} />
                About Me
              </motion.h2>
              <motion.div
                className={`glass-card ${viewMode === "mobile" ? "p-6" : "p-8"}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.p
                  className={`${viewMode === "mobile" ? "text-base" : "text-lg"} text-white/90 leading-relaxed mb-6`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Front-End Developer with 4+ years of experience building
                  responsive, high-performance web applications, specializing in{" "}
                  <b className="gradient-text">Angular-based</b> enterprise
                  solutions.
                </motion.p>
                <motion.p
                  className={`${viewMode === "mobile" ? "text-base" : "text-lg"} text-white/90 leading-relaxed`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Proficient in{" "}
                  <b className="gradient-text">Micro Frontend architecture</b>, UI
                  component libraries{" "}
                  <b className="gradient-text">(PrimeNG, Kendo UI, Bootstrap4/5)</b>
                  , and CI/CD deployment pipelines. Passionate about creating
                  scalable front-end architectures and enhancing user experiences.
                </motion.p>
              </motion.div>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            id="skills"
            className="min-h-screen flex items-center justify-center px-6 pt-[100px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`${viewMode === "mobile" ? "max-w-sm" : "max-w-6xl"} mx-auto`}>
              <motion.h2
                className={`${viewMode === "mobile" ? "text-3xl" : "text-5xl"} font-bold gradient-text mb-12 text-center flex items-center justify-center gap-4`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <FontAwesomeIcon icon={faCogs} />
                Skills
              </motion.h2>
              <motion.div
                className={`grid ${viewMode === "mobile" ? "grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"} gap-6`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { name: "HTML", icon: "/skills/html.png" },
                  { name: "CSS/SCSS", icon: "/skills/css.png" },
                  { name: "JavaScript", icon: "/skills/javascript.png" },
                  { name: "TypeScript", icon: "/skills/typescript.png" },
                  { name: "Angular", icon: "/skills/angular.png" },
                  { name: "Git", icon: "/skills/git.png" },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="glass-card p-6"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={32}
                        height={32}
                      />
                      <h3 className={`${viewMode === "mobile" ? "text-sm" : "text-lg"} font-semibold text-white`}>
                        {skill.name}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            id="experience"
            className="min-h-screen flex items-center justify-center px-6 pt-[100px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`${viewMode === "mobile" ? "max-w-sm" : "max-w-4xl"} mx-auto`}>
              <motion.h2
                className={`${viewMode === "mobile" ? "text-3xl" : "text-5xl"} font-bold gradient-text mb-12 text-center flex items-center justify-center gap-4`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <FontAwesomeIcon icon={faBriefcase} />
                Job Experience
              </motion.h2>
              <motion.div
                className="relative"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Timeline Line */}
                <div className={`absolute ${viewMode === "mobile" ? "left-4" : "left-8"} top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-pink-400`}></div>
                
                <div className="space-y-8">
                  {[
                    {
                      title: "Angular Developer",
                      permanant: false,
                      company: "PP & P Advance Co.,Ltd (Onsite AP Thai)",
                      period: "Apr 2024 - Present",
                      description:
                        "Delivered 4 Angular projects; migrated Angular 7 to 18 with Micro Frontend, improving scalability and modular deployment.",
                    },
                    {
                      title: "Programmer (Assistant-Manager)",
                      permanant: true,
                      company: "Rabbit Life Insurance PCL.",
                      period: "Mar 2023 - Aug 2023",
                      description:
                        "Coordinated between vendors and users to align specs, led QA/testing with feedback, planned releases, and developed Angular-based reports for the tele-sales team",
                    },
                    {
                      title: "Angular Developer",
                      permanant: false,
                      company: "3i InfoTech Ltd. (Onsite AP Thai)",
                      period: "Aug 2021 - Feb 2023",
                      description:
                        "Built 2 Angular apps using Bootstrap 4/Kendo UI from mockups, integrated C# APIs, deployed via Jenkins.",
                    },
                    {
                      title: "Junior Front-End Developer",
                      permanant: true,
                      company: "PhillipLife Assurance PCL.",
                      period: "Jan 2018 - July 2021",
                      description:
                        "Developed insurance app from scratch with Angular, HTML/SCSS, Bootstrap; supported API integration and UAT.",
                    },
                    {
                      title: "Senior Operation Associate (Non-IT)",
                      permanant: true,
                      company: "Lazada Thailand",
                      period: "Mar 2016 – Nov 2017",
                      description:
                        "Solved logistics issues across teams; promoted to Senior and awarded 'Best Employee' (Dec 2016).",
                    },
                  ].map((job, index) => (
                    <motion.div
                      key={index}
                      className="relative flex items-start"
                      variants={itemVariants}
                    >
                      {/* Timeline Circle */}
                      <div className="relative z-10 flex-shrink-0">
                        <motion.div
                          className={`w-4 h-4 rounded-full border-2 ${
                            job.permanant 
                              ? 'bg-green-400 border-green-400' 
                              : 'bg-orange-400 border-orange-400'
                          } shadow-lg`}
                          whileHover={{ scale: 1.5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        ></motion.div>
                      </div>
                      
                      {/* Timeline Connector */}
                      <div className={`${viewMode === "mobile" ? "w-4" : "w-8"} h-0.5 bg-gradient-to-r from-purple-400 to-transparent mt-2 flex-shrink-0`}></div>
                      
                      {/* Job Card */}
                      <motion.div
                        className={`glass-card ${viewMode === "mobile" ? "p-4" : "p-6"} flex-1 ml-2`}
                        whileHover={{ scale: 1.02, x: 10 }}
                      >
                        <div className={`${viewMode === "mobile" ? "flex-col items-start" : "flex items-start justify-between"} mb-2`}>
                          <h3 className={`${viewMode === "mobile" ? "text-lg" : "text-2xl"} font-bold gradient-text`}>
                            {job.title}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            job.permanant 
                              ? 'bg-green-400/20 text-green-300' 
                              : 'bg-orange-400/20 text-orange-300'
                          } ${viewMode === "mobile" ? "mt-1" : ""}`}>
                            {job.permanant ? 'Permanent' : 'Contract'}
                          </span>
                        </div>
                        <h4 className={`text-sm font-semibold text-white mb-2 ${viewMode === "mobile" ? "flex-col" : "flex justify-between"}`}>
                          <span>{job.company}</span>
                          <span className={viewMode === "mobile" ? "text-xs" : ""}>
                            <FontAwesomeIcon icon={faCalendar} className="me-2"/>
                            {job.period}
                          </span>
                        </h4>
                        <p className="text-sm text-white/90">{job.description}</p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            id="projects"
            className="min-h-screen flex items-center justify-center px-6 pt-[100px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`${viewMode === "mobile" ? "max-w-sm" : "max-w-6xl"} mx-auto`}>
              <motion.h2
                className={`${viewMode === "mobile" ? "text-3xl" : "text-5xl"} font-bold gradient-text mb-12 text-center flex items-center justify-center gap-4`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <FontAwesomeIcon icon={faProjectDiagram} />
                Projects
              </motion.h2>
              <motion.div
                className={`grid ${viewMode === "mobile" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"} gap-8`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    title: "CRM (Upgrade to Micro-FrontEnd)",
                    tech: ["Angular", "PrimeNg", "ngx-bootstrap", "Bootstrap5", "oAuth2"],
                    description:
                      "Developed a core CRM platform with Micro-Frontend architecture, supporting end-to-end customer data management—from lead generation to post-sale services—enhancing engagement and operational efficiency.",
                    icon: faAngular,
                  },
                  {
                    title: "Advance Payment",
                    tech: ["Angular", "PrimeNg", "Bootstrap5", "oAuth2"],
                    description:
                      "Employee reimbursements and cash advance requests, enabling seamless submission and tracking through the Finance and Accounting workflow.",
                    icon: faAngular,
                  },
                  {
                    title: "MKT-Art work Process",
                    tech: ["Angular", "Angular Material", "Bootstrap5", "oAuth2"],
                    description:
                      "system to support marketing operations, enabling structured workflows for managing advertising materials such as billboards and digital artwork.",
                    icon: faAngular,
                  },
                  {
                    title: "Cash Out Flow Project",
                    tech: ["Angular", "PrimeNg", "Bootstrap5", "oAuth2"],
                    description:
                      "support proactive financial planning by allowing users to input and forecast income and expenses, improving budget control and cash flow visibility",
                    icon: faAngular,
                  },
                  {
                    title: "CS Report",
                    tech: ["Angular", "Bootstrap4", "oAuth2"],
                    description:
                      "reporting system that imports raw Excel files from third-party sources to generate summary reports for call center activities. It provides insights into inbound/outbound calls, call pickups, wait times, abandoned calls, and custom reports based on user requirements",
                    icon: faAngular,
                  },
                  {
                    title: "Site Service",
                    tech: ["Angular", "KendoUI" ],
                    description:
                      "system designed to calculate work hours and income for on-site personnel such as security guards, gardeners, pool staff, and third-party vendors contracted by residential or condominium projects. It tracks working schedules, calculates payments, and manages contract status efficiently",
                    icon: faAngular,
                  },
                  {
                    title: "Web Vendor",
                    tech: ["Angular", "KendoUI" ],
                    description:
                      "Developed the Web Vendor system to manage end-to-end vendor operations in construction projects, including quotation submission, milestone tracking, internal approvals, billing, and payment status monitoring.",
                    icon: faAngular,
                  },
                  {
                    title: "Agent Register",
                    description:
                      "online registration system for individuals applying to become life insurance agents. The platform allows users to fill in personal information, upload a valid agent license, and complete payment securely online.",
                    icon: faAngular,
                  },
                  {
                    title: "Unit Link",
                    description:
                      "Unit Link is a system developed to manage Unit-Linked Insurance Products, where in-house staff can record customer policy information and execute mutual fund transactions based on customer requests within the platform.",
                    icon: faAngular,
                  }
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-6 h-full"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <FontAwesomeIcon
                        icon={project.icon}
                        className="w-6 h-6 text-purple-400"
                      />
                      <h3 className={`${viewMode === "mobile" ? "text-lg" : "text-xl"} font-semibold text-white`}>
                        {project.title}
                      </h3>
                    </div>
                    <p className={`text-white/90 mb-6 ${viewMode === "mobile" ? "text-sm" : ""}`}>{project.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer
            className="py-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="liquid-glass px-8 py-4 inline-block">
              <p className="text-white/90">
                © 2025 Pinnida Sa. All rights reserved.
              </p>
            </div>
          </motion.footer>
        </div>
      </div>
    </div>
  );
}
