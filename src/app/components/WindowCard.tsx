"use client";

import { motion } from "framer-motion";
import { ViewMode } from "../types";

interface WindowCardProps {
  children: React.ReactNode;
  title: string;
  viewMode: ViewMode;
}

export default function WindowCard({ children, title, viewMode }: WindowCardProps) {
  return (
    <div
      className={`glass-card ${viewMode === ViewMode.MOBILE ? "mx-2 mb-6" : "mx-6 mb-8"} overflow-hidden`}
    
    >
      {/* macOS Window Header */}
      <div className="flex items-center justify-between bg-black/20 backdrop-blur-sm border-b border-white/10 px-4 py-3">
        {/* Window Controls */}
        <div className="flex items-center space-x-2">
          <motion.div
            className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.div
            className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.div
            className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
        
        {/* Window Title */}
        <div className="text-center flex-1">
          <span className={`text-white/80 font-medium ${viewMode === ViewMode.MOBILE ? "text-sm" : "text-base"}`}>
            {title}
          </span>
        </div>
        
        {/* Spacer for balance */}
        <div className="w-[68px]" />
      </div>
      
      {/* Window Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
