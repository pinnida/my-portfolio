"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ViewMode, SectionId } from "../types";
import { MENU_ITEMS, ANIMATION_CONFIG } from "../constants";

interface AboutSectionProps {
  viewMode: ViewMode;
  currentConfig: any;
}

export default function AboutSection({ viewMode, currentConfig }: AboutSectionProps) {
  return (
    <section
      id={SectionId.ABOUT}
      className="px-6 py-8"
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
        <div
          // className={`glass-card ${viewMode === ViewMode.MOBILE ? "p-6" : "p-8"}`}
          className={`${viewMode === ViewMode.MOBILE ? "p-6" : "p-8"}`}

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
        </div>
      </div>
    </section>
  );
}
