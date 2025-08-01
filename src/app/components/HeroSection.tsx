"use client";

import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faCode } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { ViewMode, SectionId } from "../types";
import { SOCIAL_LINKS, RESUME_CONFIG, ANIMATION_CONFIG } from "../constants";

interface HeroSectionProps {
  viewMode: ViewMode;
  currentConfig: any;
  containerVariants: Variants;
  itemVariants: Variants;
}

export default function HeroSection({
  viewMode,
  currentConfig,
  containerVariants,
  itemVariants,
}: HeroSectionProps) {
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
        {/* Profile Image */}
        <div
          className={`${
            viewMode === ViewMode.MOBILE ? "w-32 h-32" : "w-48 h-48"
          } mx-auto mb-8 relative`}
        >
          <div className="w-full h-full rounded-full overflow-hidden aspect-square">
            <Image
              src="/img/me-umbrella.jpeg"
              alt="Pinnida Sangsud"
              width={viewMode === ViewMode.MOBILE ? 128 : 192}
              height={viewMode === ViewMode.MOBILE ? 128 : 192}
              className="w-full h-full object-cover object-center"
              style={{ aspectRatio: "1/1" }}
              priority
            />
          </div>
        </div>

        <motion.h1
          className={`${currentConfig.breakpoints.text.hero} font-bold mb-6 gradient-text`}
          variants={itemVariants}
        >
          Pinnida Sangsud
        </motion.h1>
        <motion.p
          className={`${currentConfig.breakpoints.text.subtitle} text-white/80 mb-8 glow-text reflective-text`}
          variants={itemVariants}
        >
          <FontAwesomeIcon icon={faCode} className="mr-3" />
          Front-End Developer
        </motion.p>
        <motion.div
          onClick={downloadResume}
          className={`liquid-glass ${
            viewMode === ViewMode.MOBILE ? "px-6 py-3" : "px-8 py-4"
          } inline-block cursor-pointer hover:bg-white/20 transition-all duration-300`}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <p
            className={`${currentConfig.breakpoints.text.body} text-white/90 flex items-center gap-2`}
          >
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
  );
}
