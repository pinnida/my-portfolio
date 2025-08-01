import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// Enums
export enum ViewMode {
  DESKTOP = "desktop",
  MOBILE = "mobile"
}

export enum SectionId {
  HOME = "home",
  ABOUT = "about",
  SKILLS = "skills",
  EXPERIENCE = "experience",
  PROJECTS = "projects"
}

// Interfaces
export interface MenuItem {
  id: SectionId;
  label: string;
  icon: IconDefinition;
  color: string;
}

export interface SocialLink {
  icon: IconDefinition;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface WorkExperience {
  title: string;
  permanent: boolean;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  tech?: string[];
  description: string;
  icon: IconDefinition;
}

export interface DeviceBreakpoints {
  text: {
    hero: string;
    section: string;
    subtitle: string;
    body: string;
    small?: string;
  };
  spacing: {
    nav: string;
    padding: string;
    gap: string;
  };
}

export interface DeviceConfig {
  width?: number;
  breakpoints: DeviceBreakpoints;
}

export interface AnimationConfig {
  duration: {
    fast: number;
    medium: number;
    slow: number;
  };
  delays: {
    short: number;
    medium: number;
    long: number;
  };
  scroll: {
    threshold: number;
  };
}

export interface Colors {
  gradient: string;
  glass: {
    background: string;
    border: string;
  };
}

export interface ResumeConfig {
  filename: string;
  downloadPrefix: string;
}
