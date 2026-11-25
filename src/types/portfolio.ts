export interface HighlightCard {
  icon: string;
  category: string;
  title: string;
  detail: string;
  badge: string;
  accent: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  color: string;
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  pillarsTitle?: string;
  pillars?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export interface MilestoneItem {
  period: string;
  tag: string;
  title: string;
  description: string;
  location: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  facebook?: string;
  whatsapp: string;
  email: string;
}

export interface PortfolioData {
  name: string;
  roleTitle: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  location: string;
  aboutIntro1: string;
  aboutIntro2: string;
  socials: SocialLinks;
  highlights: HighlightCard[];
  projects: ProjectItem[];
  milestones: MilestoneItem[];
  faqs: FAQItem[];
  skills: Array<{
    category: string;
    items: string[];
  }>;
  systemTelemetry: {
    publishedDateString: string;
    deviceName: string;
    deviceType: string;
    os: string;
    osVersion: string;
    location: string;
    isp: string;
    ip: string;
  };
}
