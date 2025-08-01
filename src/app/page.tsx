"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faCode,
  faCalendar,
  faDesktop,
  faMobileScreen
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

// Import types and constants
import { ViewMode, SectionId } from "./types";
import {
  COLORS,
  ANIMATION_CONFIG,
  DEVICE_CONFIG,
  SOCIAL_LINKS,
  SKILLS,
  MENU_ITEMS,
  WORK_EXPERIENCE,
  PROJECTS,
  RESUME_CONFIG
} from "./constants";

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HOME);
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.DESKTOP);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const sections = Object.values(SectionId);
  const currentConfig = viewMode === ViewMode.MOBILE ? DEVICE_CONFIG.mobile : DEVICE_CONFIG.desktop;

  useEffect(() => {
    const handleScroll = () => {
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= ANIMATION_CONFIG.scroll.threshold && rect.bottom >= ANIMATION_CONFIG.scroll.threshold;
        }
        return false;
      });
      if (current) setActiveSection(current as SectionId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: ANIMATION_CONFIG.duration.fast,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_CONFIG.duration.fast,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

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
    link.href = RESUME_CONFIG.filename;
    link.download = `${RESUME_CONFIG.downloadPrefix}_${timestamp}.pdf`;
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
        transition={{ duration: ANIMATION_CONFIG.duration.medium, delay: ANIMATION_CONFIG.delays.short }}
      >
        <button
          onClick={() => setViewMode(ViewMode.DESKTOP)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            viewMode === ViewMode.DESKTOP
              ? "bg-white text-black"
              : "text-white hover:bg-white/10"
          }`}
        >
          <FontAwesomeIcon icon={faDesktop} className="me-2"/>
          Desktop
        </button>
        <button
          onClick={() => setViewMode(ViewMode.MOBILE)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            viewMode === ViewMode.MOBILE
              ? "bg-white text-black"
              : "text-white hover:bg-white/10"
          }`}
        >
          <FontAwesomeIcon icon={faMobileScreen} className="me-2"/>
          Mobile
        </button>
      </motion.div>

      {/* Mobile View Wrapper */}
      <div className={`${viewMode === ViewMode.MOBILE ? "flex justify-center bg-gray-800" : ""} min-h-screen`}>
        <div className={`${viewMode === ViewMode.MOBILE ? `w-[${DEVICE_CONFIG.mobile.width}px] bg-gradient-to-br from-purple-600 to-blue-700` : "w-full"} min-h-screen relative`}>
          {/* Animated Floating Background Elements */}
          <motion.div
            className={`liquid-blob ${viewMode === ViewMode.MOBILE ? "w-32 h-32" : "w-72 h-72"} bg-blue-400 top-20 left-20`}
            style={{ y }}
            animate={{
              x: [0, viewMode === ViewMode.MOBILE ? 30 : 100, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          ></motion.div>
          <motion.div
            className={`liquid-blob ${viewMode === ViewMode.MOBILE ? "w-40 h-40" : "w-96 h-96"} bg-purple-400 top-1/2 right-20`}
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
            animate={{
              x: [0, viewMode === ViewMode.MOBILE ? -20 : -50, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          ></motion.div>
          <motion.div
            className={`liquid-blob ${viewMode === ViewMode.MOBILE ? "w-28 h-28" : "w-64 h-64"} bg-pink-400 bottom-20 left-1/3`}
            animate={{
              y: [0, viewMode === ViewMode.MOBILE ? -40 : -80, 0],
              x: [0, viewMode === ViewMode.MOBILE ? 20 : 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* Animated Navigation */}
          <motion.nav
            className={`fixed ${currentConfig.breakpoints.spacing.nav} left-1/2 transform -translate-x-1/2 z-50`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: ANIMATION_CONFIG.duration.medium, delay: ANIMATION_CONFIG.delays.medium }}
          >
            <div className={`bg-gradient-to-r ${MENU_ITEMS.find(item => item.id === activeSection)?.color || COLORS.gradient} backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-lg`}>
              <div className={`flex ${currentConfig.breakpoints.spacing.gap}`}>
                {MENU_ITEMS.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`${viewMode === ViewMode.MOBILE ? "px-2 py-2" : "px-4 py-2"} rounded-full transition-all duration-300 flex items-center gap-2 ${
                      activeSection === item.id
                        ? "bg-white/30 text-white shadow-md"
                        : "text-white/80 hover:text-white hover:bg-white/20"
                    }`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * ANIMATION_CONFIG.delays.short }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                    <span className={`${
                      viewMode === ViewMode.MOBILE 
                        ? (activeSection === item.id ? "inline" : "hidden") 
                        : "hidden md:inline"
                    }`}>
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.nav>

          {/* Hero Section */}
          <section
            id={SectionId.HOME}
            className="min-h-screen flex items-center justify-center px-6 pt-[100px]"
          >
            <motion.div
              className="text-center floating"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className={`${currentConfig.breakpoints.text.hero} font-bold mb-6 gradient-text`}
                variants={itemVariants}
              >
                Pinnida Sangsud
              </motion.h1>
              <motion.p
                className={`${currentConfig.breakpoints.text.subtitle} text-white/80 mb-8  glow-text reflective-text`}
                variants={itemVariants}
              >
                <FontAwesomeIcon icon={faCode} className="mr-3" />
                Front-End Developer
              </motion.p>
              <motion.div
                onClick={downloadResume}
                className={`liquid-glass ${viewMode === ViewMode.MOBILE ? "px-6 py-3" : "px-8 py-4"} inline-block cursor-pointer hover:bg-white/20 transition-all duration-300`}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className={`${currentConfig.breakpoints.text.body} text-white/90 flex items-center gap-2`}>
                  <FontAwesomeIcon icon={faDownload} />
                  Download Resume
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="mt-8 flex justify-center gap-6"
                variants={containerVariants}
              >
                {SOCIAL_LINKS.map((social, index) => (
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
            id={SectionId.ABOUT}
            className="min-h-screen flex items-center justify-center px-6 pt-[100px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: ANIMATION_CONFIG.duration.medium }}
            viewport={{ once: true }}
          >
            <div className={`${viewMode === ViewMode.MOBILE ? "max-w-sm" : "max-w-4xl"} mx-auto`}>
              <motion.h2
                className={`${currentConfig.breakpoints.text.section} font-bold glow-text reflective-text mb-12 text-center flex items-center justify-center gap-4`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: ANIMATION_CONFIG.duration.fast }}
                viewport={{ once: true }}
              >
                <FontAwesomeIcon icon={MENU_ITEMS[1].icon} />
                About Me
              </motion.h2>
              <motion.div
                className={`glass-card ${viewMode === ViewMode.MOBILE ? "p-6" : "p-8"}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: ANIMATION_CONFIG.duration.medium, delay: ANIMATION_CONFIG.delays.long }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.p
                  className={`${currentConfig.breakpoints.text.body} text-white/90 leading-relaxed mb-6`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: ANIMATION_CONFIG.duration.fast, delay: ANIMATION_CONFIG.delays.long }}
                  viewport={{ once: true }}
                >
                  Front-End Developer with 4+ years of experience building
                  responsive, high-performance web applications, specializing in{" "}
                  <b className="gradient-text">Angular-based</b> enterprise
                  solutions.
                </motion.p>
                <motion.p
                  className={`${currentConfig.breakpoints.text.body} text-white/90 leading-relaxed`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: ANIMATION_CONFIG.duration.fast, delay: ANIMATION_CONFIG.delays.long }}
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
            id={SectionId.SKILLS}
            className="min-h-screen flex items-center justify-center px-6 pt-[100px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: ANIMATION_CONFIG.duration.medium }}
            viewport={{ once: true }}
          >
            <div className={`${viewMode === ViewMode.MOBILE ? "max-w-sm" : "max-w-6xl"} mx-auto`}>
              <motion.h2
                className={`${currentConfig.breakpoints.text.section} font-bold glow-text reflective-text mb-12 text-center flex items-center justify-center gap-4`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: ANIMATION_CONFIG.duration.fast }}
                viewport={{ once: true }}
              >
                <FontAwesomeIcon icon={MENU_ITEMS[2].icon} />
                Skills
              </motion.h2>
              <motion.div
                className={`grid ${viewMode === ViewMode.MOBILE ? "grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"} gap-6`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {SKILLS.map((skill, index) => (
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
                      <h3 className={`${currentConfig.breakpoints.text.body} font-semibold text-white`}>
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
            id={SectionId.EXPERIENCE}
            className="min-h-screen flex items-center justify-center px-6 pt-[100px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: ANIMATION_CONFIG.duration.medium }}
            viewport={{ once: true }}
          >
            <div className={`${viewMode === ViewMode.MOBILE ? "max-w-sm" : "max-w-4xl"} mx-auto`}>
              <motion.h2
                className={`${currentConfig.breakpoints.text.section} font-bold glow-text reflective-text mb-12 text-center flex items-center justify-center gap-4`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: ANIMATION_CONFIG.duration.fast }}
                viewport={{ once: true }}
              >
                <FontAwesomeIcon icon={MENU_ITEMS[3].icon} />
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
                <div className={`absolute ${viewMode === ViewMode.MOBILE ? "left-4" : "left-8"} top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-pink-400`}></div>
                
                <div className="space-y-8">
                  {WORK_EXPERIENCE.map((job, index) => (
                    <motion.div
                      key={index}
                      className="relative flex items-start"
                      variants={itemVariants}
                    >
                      {/* Timeline Circle */}
                      <div className="relative z-10 flex-shrink-0">
                        <motion.div
                          className={`w-4 h-4 rounded-full border-2 ${
                            job.permanent 
                              ? 'bg-green-400 border-green-400' 
                              : 'bg-orange-400 border-orange-400'
                          } shadow-lg`}
                          whileHover={{ scale: 1.5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        ></motion.div>
                      </div>
                      
                      {/* Timeline Connector */}
                      <div className={`${viewMode === ViewMode.MOBILE ? "w-4" : "w-8"} h-0.5 bg-gradient-to-r from-purple-400 to-transparent mt-2 flex-shrink-0`}></div>
                      
                      {/* Job Card */}
                      <motion.div
                        className={`glass-card ${currentConfig.breakpoints.spacing.padding} flex-1 ml-2`}
                        whileHover={{ scale: 1.02, x: 10 }}
                      >
                        <div className={`${viewMode === ViewMode.MOBILE ? "mb-2" : "flex items-start justify-between mb-2"}`}>
                          <h3 className={`${viewMode === ViewMode.MOBILE ? "text-lg mb-2" : "text-2xl"} font-bold gradient-text`}>
                            {job.title}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            job.permanent 
                              ? 'bg-green-400/20 text-green-300' 
                              : 'bg-orange-400/20 text-orange-300'
                          } ${viewMode === ViewMode.MOBILE ? "mb-2 inline-block" : ""}`}>
                            {job.permanent ? 'Permanent' : 'Contract'}
                          </span>
                        </div>
                        <h4 className={`text-sm font-semibold text-white mb-2 ${viewMode === ViewMode.MOBILE ? "" : "flex justify-between"}`}>
                          <span className={viewMode === ViewMode.MOBILE ? "block mb-1" : ""}>{job.company}</span>
                          <span className={`${viewMode === ViewMode.MOBILE ? "text-xs block" : ""}`}>
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
            id={SectionId.PROJECTS}
            className="min-h-screen flex items-center justify-center px-6 pt-[100px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: ANIMATION_CONFIG.duration.medium }}
            viewport={{ once: true }}
          >
            <div className={`${viewMode === ViewMode.MOBILE ? "max-w-sm" : "max-w-6xl"} mx-auto`}>
              <motion.h2
                className={`${currentConfig.breakpoints.text.section} font-bold glow-text reflective-text mb-12 text-center flex items-center justify-center gap-4`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: ANIMATION_CONFIG.duration.fast }}
                viewport={{ once: true }}
              >
                <FontAwesomeIcon icon={MENU_ITEMS[4].icon} />
                Projects
              </motion.h2>
              <motion.div
                className={`grid ${viewMode === ViewMode.MOBILE ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"} gap-8`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {PROJECTS.map((project, index) => (
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
                        className="w-10 h-10 text-red-600 text-3xl icon-glow"
                      />
                      <h3 className={`${viewMode === ViewMode.MOBILE ? "text-lg" : "text-xl"} font-semibold text-white`}>
                        {project.title}
                      </h3>
                    </div>
                    <p className={`text-white/90 mb-6 ${viewMode === ViewMode.MOBILE ? "text-sm" : ""}`}>{project.description}</p>
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
            transition={{ duration: ANIMATION_CONFIG.duration.fast }}
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
