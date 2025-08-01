"use client";

import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ViewMode, SectionId } from "../types";
import { PROJECTS, MENU_ITEMS, ANIMATION_CONFIG } from "../constants";

interface ProjectsSectionProps {
  viewMode: ViewMode;
  currentConfig: any;
  containerVariants: Variants;
  itemVariants: Variants;
}

export default function ProjectsSection({ 
  viewMode, 
  currentConfig, 
  containerVariants, 
  itemVariants 
}: ProjectsSectionProps) {
  return (
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
  );
}
