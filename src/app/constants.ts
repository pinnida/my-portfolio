import {
  faHome,
  faUser,
  faCogs,
  faBriefcase,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faLine,
  faAngular
} from "@fortawesome/free-brands-svg-icons";
import {
  Colors,
  AnimationConfig,
  DeviceConfig,
  SocialLink,
  Skill,
  MenuItem,
  WorkExperience,
  Project,
  ResumeConfig,
  SectionId
} from "./types";

// Color Configuration
export const COLORS: Colors = {
  gradient: "from-purple-500 to-emerald-600",
  glass: {
    background: "rgba(255, 255, 255, 0.05)",
    border: "rgba(255, 255, 255, 0.1)"
  }
} as const;

// Animation Configuration
export const ANIMATION_CONFIG: AnimationConfig = {
  duration: {
    fast: 0.6,
    medium: 0.8,
    slow: 1.0
  },
  delays: {
    short: 0.1,
    medium: 0.2,
    long: 0.4
  },
  scroll: {
    threshold: 100
  }
} as const;

// Device Configuration
export const DEVICE_CONFIG = {
  mobile: {
    width: 375,
    breakpoints: {
      text: {
        hero: "text-4xl",
        section: "text-3xl",
        subtitle: "text-lg",
        body: "text-base",
        small: "text-sm"
      },
      spacing: {
        nav: "top-5",
        padding: "p-4",
        gap: "space-x-2"
      }
    }
  } as DeviceConfig,
  desktop: {
    breakpoints: {
      text: {
        hero: "text-6xl md:text-6xl",
        section: "text-5xl",
        subtitle: "text-2xl md:text-3xl",
        body: "text-lg"
      },
      spacing: {
        nav: "top-6",
        padding: "p-6",
        gap: "space-x-6"
      }
    }
  } as DeviceConfig
} as const;

// Social Links
export const SOCIAL_LINKS: readonly SocialLink[] = [
  { icon: faGithub, href: "https://github.com/pinnida" },
  { icon: faLinkedin, href: "https://www.linkedin.com/in/pinnida/" },
  { icon: faLine, href: "https://line.me/ti/p/aV0cNj1VKV" }
] as const;

// Skills
export const SKILLS: readonly Skill[] = [
  { name: "Angular", icon: "/skills/angular.png" },
  { name: "TypeScript", icon: "/skills/typescript.png" },
  { name: "Git", icon: "/skills/git.png" },
  { name: "HTML", icon: "/skills/html.png" },
  { name: "CSS/SCSS", icon: "/skills/css.png" },
  { name: "JavaScript", icon: "/skills/javascript.png" },
] as const;

// Menu Items
export const MENU_ITEMS: readonly MenuItem[] = [
  { id: SectionId.HOME, label: "Home", icon: faHome, color: COLORS.gradient },
  { id: SectionId.ABOUT, label: "About", icon: faUser, color: COLORS.gradient },
  { id: SectionId.SKILLS, label: "Skills", icon: faCogs, color: COLORS.gradient },
  { id: SectionId.EXPERIENCE, label: "Experience", icon: faBriefcase, color: COLORS.gradient },
  { id: SectionId.PROJECTS, label: "Projects", icon: faProjectDiagram, color: COLORS.gradient }
] as const;

// Work Experience
export const WORK_EXPERIENCE: readonly WorkExperience[] = [
  {
    title: "Angular Developer",
    permanent: false,
    company: "PP & P Advance Co.,Ltd (Onsite AP Thai)",
    period: "Apr 2024 - Present",
    description: "Delivered 4 Angular projects; migrated Angular 7 to 18 with Micro Frontend, improving scalability and modular deployment."
  },
  {
    title: "Programmer (Assistant-Manager)",
    permanent: true,
    company: "Rabbit Life Insurance PCL.",
    period: "Mar 2023 - Aug 2023",
    description: "Coordinated between vendors and users to align specs, led QA/testing with feedback, planned releases, and developed Angular-based reports for the tele-sales team"
  },
  {
    title: "Angular Developer",
    permanent: false,
    company: "3i InfoTech Ltd. (Onsite AP Thai)",
    period: "Aug 2021 - Feb 2023",
    description: "Built 2 Angular apps using Bootstrap 4/Kendo UI from mockups, integrated C# APIs, deployed via Jenkins."
  },
  {
    title: "Junior Front-End Developer",
    permanent: true,
    company: "PhillipLife Assurance PCL.",
    period: "Jan 2018 - July 2021",
    description: "Developed insurance app from scratch with Angular, HTML/SCSS, Bootstrap; supported API integration and UAT."
  },
  {
    title: "Senior Operation Associate (Non-IT)",
    permanent: true,
    company: "Lazada Thailand",
    period: "Mar 2016 – Nov 2017",
    description: "Solved logistics issues across teams; promoted to Senior and awarded 'Best Employee' (Dec 2016)."
  }
] as const;

// Projects
export const PROJECTS: readonly Project[] = [
  {
    title: "CRM (Upgrade to Micro-FrontEnd)",
    tech: ["Angular", "PrimeNg", "ngx-bootstrap", "Bootstrap5", "oAuth2"],
    description: "Developed a core CRM platform with Micro-Frontend architecture, supporting end-to-end customer data management—from lead generation to post-sale services—enhancing engagement and operational efficiency.",
    icon: faAngular
  },
  {
    title: "Advance Payment",
    tech: ["Angular", "PrimeNg", "Bootstrap5", "oAuth2"],
    description: "Employee reimbursements and cash advance requests, enabling seamless submission and tracking through the Finance and Accounting workflow.",
    icon: faAngular
  },
  {
    title: "MKT-Art work Process",
    tech: ["Angular", "Angular Material", "Bootstrap5", "oAuth2"],
    description: "system to support marketing operations, enabling structured workflows for managing advertising materials such as billboards and digital artwork.",
    icon: faAngular
  },
  {
    title: "Cash Out Flow Project",
    tech: ["Angular", "PrimeNg", "Bootstrap5", "oAuth2"],
    description: "support proactive financial planning by allowing users to input and forecast income and expenses, improving budget control and cash flow visibility",
    icon: faAngular
  },
  {
    title: "CS Report",
    tech: ["Angular", "Bootstrap4", "oAuth2"],
    description: "reporting system that imports raw Excel files from third-party sources to generate summary reports for call center activities. It provides insights into inbound/outbound calls, call pickups, wait times, abandoned calls, and custom reports based on user requirements",
    icon: faAngular
  },
  {
    title: "Site Service",
    tech: ["Angular", "KendoUI"],
    description: "system designed to calculate work hours and income for on-site personnel such as security guards, gardeners, pool staff, and third-party vendors contracted by residential or condominium projects. It tracks working schedules, calculates payments, and manages contract status efficiently",
    icon: faAngular
  },
  {
    title: "Web Vendor",
    tech: ["Angular", "KendoUI"],
    description: "Developed the Web Vendor system to manage end-to-end vendor operations in construction projects, including quotation submission, milestone tracking, internal approvals, billing, and payment status monitoring.",
    icon: faAngular
  },
  {
    title: "Agent Register",
    description: "online registration system for individuals applying to become life insurance agents. The platform allows users to fill in personal information, upload a valid agent license, and complete payment securely online.",
    icon: faAngular
  },
  {
    title: "Unit Link",
    description: "Unit Link is a system developed to manage Unit-Linked Insurance Products, where in-house staff can record customer policy information and execute mutual fund transactions based on customer requests within the platform.",
    icon: faAngular
  }
] as const;

// Resume Configuration
export const RESUME_CONFIG: ResumeConfig = {
  filename: "/Pinnida_Sangsud_Resume_2025_noneContact.pdf",
  downloadPrefix: "Pinnida_Sangsud_Resume"
} as const;
