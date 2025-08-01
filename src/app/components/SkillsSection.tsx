"use client";

import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { ViewMode, SectionId } from "../types";
import { SKILLS, MENU_ITEMS, ANIMATION_CONFIG } from "../constants";

interface SkillsSectionProps {
  viewMode: ViewMode;
  currentConfig: any;
  containerVariants: Variants;
  itemVariants: Variants;
}

export default function SkillsSection({ 
  viewMode, 
  currentConfig, 
  containerVariants, 
  itemVariants 
}: SkillsSectionProps) {
  return (
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
  );
}
