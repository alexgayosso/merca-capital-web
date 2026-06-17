// ============================================
// MERCA CAPITAL — TIPOS DE DATOS COMPARTIDOS
// ============================================

export interface HeroContent {
  tagline: string;
  headline1: string;
  headline2: string;
  headline3: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaSecondary: string;
  pillars: {
    title: string;
    items: { name: string; description: string }[];
  };
}

export interface StatItem {
  value: string;
  label: string;
  highlight?: boolean;
}

export interface StatsContent {
  title: string;
  description: string;
  items: StatItem[];
}

export interface InsightContent {
  title: string;
  content: string;
  highlight: string;
  subtext: string;
  stats: { value: string; label: string }[];
}

export interface FooterContent {
  tagline: string;
  rights: string;
  privacy: string;
}

export interface FormContent {
  name: string;
  email: string;
  company: string;
  message: string;
  submit: string;
  success: string;
  error: string;
  formTitle: string;
  successTitle: string;
  successMessage: string;
  sendAnother: string;
}

export interface ContactInfoContent {
  phone: string;
  email: string;
  locations: string;
}

export interface ContactContent {
  title: string;
  subtitle: string;
  form: FormContent;
  info: ContactInfoContent;
}

export interface ContentStructure {
  hero: HeroContent;
  stats: StatsContent;
  insight: InsightContent;
  contact: ContactContent;
  footer: FooterContent;
}

export interface TeamMember {
  initials: string;
  name: string;
  title: string;
  bio: string;
  credentials: string[];
  roles: string[];
  color: string;
}
