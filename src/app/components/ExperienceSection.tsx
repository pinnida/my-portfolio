"use client";

import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { ViewMode, SectionId } from "../types";
import { WORK_EXPERIENCE, MENU_ITEMS, ANIMATION_CONFIG } from "../constants";

interface ExperienceSectionProps {
  viewMode: ViewMode;
  currentConfig: any;
  containerVariants: Variants;
  itemVariants: Variants;
}

export default function ExperienceSection({ 
  viewMode, 
  currentConfig, 
  containerVariants, 
  itemVariants 
}: ExperienceSectionProps) {
  return (
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
  );
}
