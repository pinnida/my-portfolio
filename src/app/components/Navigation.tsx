"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ViewMode, SectionId } from "../types";
import { MENU_ITEMS, COLORS, ANIMATION_CONFIG } from "../constants";

interface NavigationProps {
  viewMode: ViewMode;
  activeSection: SectionId;
  currentConfig: any;
}

export default function Navigation({ viewMode, activeSection, currentConfig }: NavigationProps) {
  return (
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
  );
}
