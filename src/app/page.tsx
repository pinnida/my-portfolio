"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faMobileScreen
} from "@fortawesome/free-solid-svg-icons";


// Import types and constants
import { ViewMode, SectionId } from "./types";
import { ANIMATION_CONFIG, DEVICE_CONFIG } from "./constants";

// Import components
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HOME);
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.DESKTOP);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const sections = Object.values(SectionId);
  const currentConfig = viewMode === ViewMode.MOBILE ? DEVICE_CONFIG.mobile : DEVICE_CONFIG.desktop;

  useEffect(() => {
    // Console introduction message
    console.clear();
    console.log(
      "%c🚀 Welcome to Pinnida's Portfolio! 🚀",
      "color: #a855f7; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);"
    );
    console.log(
      "%c👋 Hi there, fellow developer!",
      "color: #3b82f6; font-size: 18px; font-weight: bold;"
    );
    console.log(
      "%cI see you're checking out my code! 👀",
      "color: #ec4899; font-size: 16px;"
    );
    console.log(
      "%c💼 About Me:",
      "color: #8b5cf6; font-size: 16px; font-weight: bold;"
    );
    console.log(
      "%c   • Front-End Developer with 4+ years experience\n   • Angular specialist & Micro Frontend expert\n   • Passionate about clean code & user experience",
      "color: #10b981; font-size: 14px;"
    );
    console.log(
      "%c📧 Let's connect:",
      "color: #f59e0b; font-size: 16px; font-weight: bold;"
    );
    console.log(
      "%c   • GitHub: https://github.com/pinnida\n   • LinkedIn: https://www.linkedin.com/in/pinnida/\n   • Email: pinnida.sa@gmail.com",
      "color: #6366f1; font-size: 14px;"
    );
    console.log(
      "%c🛠️ This portfolio is built with:",
      "color: #ef4444; font-size: 16px; font-weight: bold;"
    );
    console.log(
      "%c   • Next.js 15 + TypeScript\n   • Tailwind CSS + Framer Motion\n   • FontAwesome Icons",
      "color: #059669; font-size: 14px;"
    );
    console.log(
      "%c✨ Fun fact: I love creating liquid glass effects and smooth animations!",
      "color: #d946ef; font-size: 14px; font-style: italic;"
    );
    console.log(
      "%c💡 Interested in collaboration? Feel free to reach out!",
      "color: #0ea5e9; font-size: 16px; font-weight: bold;"
    );
    console.log(
      "%c" + "=".repeat(60),
      "color: #64748b; font-size: 12px;"
    );
    console.log(
      "%c" + "=".repeat(60),
      "color: #64748b; font-size: 12px;"
    );

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

          {/* Navigation */}
          <Navigation 
            viewMode={viewMode} 
            activeSection={activeSection} 
            currentConfig={currentConfig} 
          />

          {/* Sections */}
          <HeroSection 
            viewMode={viewMode} 
            currentConfig={currentConfig} 
            containerVariants={containerVariants} 
            itemVariants={itemVariants} 
          />

          <AboutSection 
            viewMode={viewMode} 
            currentConfig={currentConfig} 
          />

          <SkillsSection 
            viewMode={viewMode} 
            currentConfig={currentConfig} 
            containerVariants={containerVariants} 
            itemVariants={itemVariants} 
          />

          <ExperienceSection 
            viewMode={viewMode} 
            currentConfig={currentConfig} 
            containerVariants={containerVariants} 
            itemVariants={itemVariants} 
          />

          <ProjectsSection 
            viewMode={viewMode} 
            currentConfig={currentConfig} 
            containerVariants={containerVariants} 
            itemVariants={itemVariants} 
          />

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
