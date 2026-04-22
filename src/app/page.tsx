'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// ============================================
// MERCA CAPITAL - INSTITUTIONAL INVESTMENT FUND
// "The Blackstone of Agri-Food Infrastructure in LATAM"
// v2.0 — Abril 2026 — Sprint 1 completo
// ============================================

// ============================================
// 1. TIPOS DE DATOS
// ============================================

interface NavContent {
  portfolio: string;
  thesis: string;
  model: string;
  contact: string;
}

interface HeroContent {
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

interface StatItem {
  value: string;
  label: string;
  highlight?: boolean;
}

interface StatsContent {
  title: string;
  description: string;
  items: StatItem[];
}

interface InsightContent {
  title: string;
  content: string;
  highlight: string;
  subtext: string;
  stats: { value: string; label: string }[];
}

interface ProjectItem {
  name: string;
  sqm: string;
  status: string;
  city: string;
  description: string;
  year: string;
  image: string;
}

interface PortfolioContent {
  title: string;
  subtitle: string;
  projects: ProjectItem[];
}

interface ThesisItem {
  title: string;
  description: string;
  icon: string;
}

interface AntiCyclicalContent {
  title: string;
  description: string;
  points: string[];
}

interface ThesisContent {
  title: string;
  subtitle: string;
  antiCyclical: AntiCyclicalContent;
  items: ThesisItem[];
}

interface ModelStep {
  number: string;
  title: string;
  description: string;
}

interface ModelContent {
  title: string;
  subtitle: string;
  description: string;
  steps: ModelStep[];
}

interface LeadershipContent {
  title: string;
  name: string;
  role: string;
  bio: string;
  proofOfConcept: string;
  proofLabel: string;
}

interface CtaContent {
  title: string;
  description: string;
  button: string;
}

interface FormContent {
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

interface ContactInfoContent {
  phone: string;
  email: string;
  locations: string;
}

interface ContactContent {
  title: string;
  subtitle: string;
  form: FormContent;
  info: ContactInfoContent;
}

interface FooterContent {
  tagline: string;
  rights: string;
  privacy: string;
}

interface ContentStructure {
  nav: NavContent;
  hero: HeroContent;
  stats: StatsContent;
  insight: InsightContent;
  portfolio: PortfolioContent;
  thesis: ThesisContent;
  model: ModelContent;
  leadership: LeadershipContent;
  cta: CtaContent;
  contact: ContactContent;
  footer: FooterContent;
}

// ============================================
// 2. DICCIONARIO BILINGÜE
// ============================================

const content: Record<'es' | 'en', ContentStructure> = {
  es: {
    nav: {
      portfolio: 'PORTAFOLIO',
      thesis: 'TESIS',
      model: 'MODELO',
      contact: 'CONTACTO'
    },
    hero: {
      tagline: 'PRIVATE EQUITY · INFRASTRUCTURE · LATAM',
      headline1: 'The Blackstone of',
      headline2: 'Agri-Food',
      headline3: 'Infrastructure',
      subtitle: 'El activo real no son los metros cuadrados. Es el control del punto estratégico donde México come.',
      description: 'Consolidamos la infraestructura de distribución alimentaria más fragmentada de América Latina. Financiarizamos activos que otros no ven. Operamos donde otros no llegan.',
      cta: 'VER PORTAFOLIO',
      ctaSecondary: 'TESIS DE INVERSIÓN',
      pillars: {
        title: 'PILARES ESTRATÉGICOS',
        items: [
          { name: 'Nodos Estratégicos: Norte · Bajío · Centro', description: 'Infraestructura crítica en los corredores de mayor flujo comercial de México' },
          { name: 'Infraestructura Crítica', description: 'Mercados · Abasto · Distribución' },
          { name: 'Flujos Anticíclicos', description: 'Demanda Inelástica · Cap Rates 8-10%' },
          { name: 'Control Operativo', description: 'Originación · Operación · Exit' }
        ]
      }
    },
    stats: {
      title: 'Track Record Institucional',
      description: 'Más de una década consolidando infraestructura esencial en el centro-norte de México.',
      items: [
        { value: '$100M', label: 'USD Fund Target', highlight: true },
        { value: '41,000', label: 'm² bajo gestión', highlight: true },
        { value: '15', label: 'años operando', highlight: false },
        { value: '8-10%', label: 'Cap Rate promedio', highlight: false },
        { value: '90%', label: 'ocupación histórica', highlight: false }
      ]
    },
    insight: {
      title: 'EL INSIGHT QUE NADIE VE',
      content: 'México tiene 329 Centrales de Abasto que mueven',
      highlight: '~$80B USD anuales',
      subtext: 'en alimentos. El 78% opera en infraestructura obsoleta (pre-2000). Nadie los ha consolidado. Nadie los ha digitalizado. Nadie los ha financiarizado.',
      stats: [
        { value: '329', label: 'Centrales de Abasto' },
        { value: '$80B', label: 'USD Flow Anual' },
        { value: '78%', label: 'Infraestructura Obsoleta' }
      ]
    },
    portfolio: {
      title: 'Activos Bajo Gestión',
      subtitle: 'Portafolio de infraestructura alimentaria en operación y desarrollo',
      projects: [
        { name: 'Mercahorro Torreón', sqm: '16,000 m²', status: 'Operando', city: 'Torreón, Coahuila', description: 'Flagship asset. Centro de abasto regional con flujos estabilizados y ocupación del 95%.', year: '2021', image: '/projects/mercahorro-torreon.jpg' },
        { name: 'Plaza Abastos Torreón', sqm: '9,000 m²', status: 'Operando', city: 'Torreón, Coahuila', description: 'Activo core con infraestructura moderna. NOI estabilizado desde 2018.', year: '2013', image: '/projects/plaza-abastos-torreon.jpg' },
        { name: 'Mercahorro Gómez Palacio', sqm: '8,000 m²', status: 'Value-Add', city: 'Gómez Palacio, Durango', description: 'Desarrollo en fase final. Pre-arrendado 70%. Estabilización Q4 2025.', year: '2025', image: '/projects/mercahorro-gomez.jpg' },
        { name: 'Mercahorro Silao', sqm: '8,000 m²', status: 'Development', city: 'Silao, Guanajuato', description: 'Pipeline estratégico en corredor del Bajío. LOIs firmadas con off-takers.', year: '2026', image: '/projects/mercahorro-silao.jpg' }
      ]
    },
    thesis: {
      title: 'Tesis de Inversión',
      subtitle: '¿Por qué infraestructura de abasto?',
      antiCyclical: {
        title: 'Strategic Digital Infrastructure — Asset Class Anticíclico',
        description: 'La infraestructura alimentaria es el único asset class inmobiliario con demanda verdaderamente inelástica. La gente come todos los días — sin importar recesiones, elecciones o crisis.',
        points: [
          'Demanda inelástica: alimentación es gasto no discrecional',
          'Cap rates 8-10% vs 4-6% en activos tradicionales',
          'Protección inflacionaria vía rentas indexadas',
          'Barrera de entrada por expertise operativo y vinculación comercial estratégica'
        ]
      },
      items: [
        { title: 'Mercado Fragmentado', description: 'Sin jugadores institucionales. Oportunidad de consolidación first-mover.', icon: 'grid' },
        { title: 'Flujos Predecibles', description: '90% ocupación histórica. 300+ comerciantes generando NOI estable.', icon: 'chart' },
        { title: 'Moat Operativo', description: 'Requiere expertise, relaciones con comerciantes y know-how regulatorio.', icon: 'shield' }
      ]
    },
    model: {
      title: 'Modelo de Gestión Integrada',
      subtitle: 'Control total del ciclo de valor',
      description: 'No somos intermediarios. Originamos, financiarizamos, operamos y optimizamos.',
      steps: [
        { number: '01', title: 'Originación', description: 'Deal flow propietario basado en inteligencia comercial de red mayorista.' },
        { number: '02', title: 'Estructuración', description: 'Vehículos fiscalmente eficientes (SAPI/Fideicomiso).' },
        { number: '03', title: 'Comercialización', description: 'Pre-arrendamiento mediante red de asociación comercial (Merca México).' },
        { number: '04', title: 'Asset Management', description: 'Gestión operativa experta y estabilización de flujos (NOI).' }
      ]
    },
    leadership: {
      title: 'Liderazgo Institucional',
      name: '',
      role: '',
      bio: 'Nuestro equipo directivo integra expertos en finanzas corporativas, ingeniería de infraestructura y operación comercial mayorista. Con más de 45 años de experiencia conjunta y formación en instituciones globales, gestionamos el capital bajo estándares de máxima transparencia y rigor institucional.',
      proofLabel: 'PROOF OF CONCEPT',
      proofOfConcept: 'Acceso operador único: Mercahorro es nuestro proof of concept institucional — 300+ locales, 15 años de operación continua, y el know-how que ningún fondo externo puede replicar.'
    },
    cta: {
      title: 'Capital en Despliegue',
      description: 'Buscamos LPs estratégicos: family offices, fondos de fondos e inversionistas institucionales interesados en infraestructura esencial de LATAM.',
      button: 'SOLICITAR DECK'
    },
    contact: {
      title: 'Investor Relations',
      subtitle: 'Iniciemos la conversación',
      form: {
        name: 'Nombre',
        email: 'Email',
        company: 'Firma / Family Office',
        message: 'Mensaje',
        submit: 'Enviar',
        success: '¡Enviado!',
        error: 'Error. Intenta de nuevo.',
        formTitle: 'CUÉNTENOS SU PROYECTO',
        successTitle: 'Mensaje enviado con éxito',
        successMessage: 'Un socio de Merca Capital revisará su mensaje personalmente y le responderá en menos de 48 horas hábiles.',
        sendAnother: 'ENVIAR OTRO MENSAJE'
      },
      info: {
        phone: '+52 812 004 8610',
        email: 'hola@mercacapital.com',
        locations: 'Madrid · Monterrey · CDMX'
      }
    },
    footer: {
      tagline: 'Private Equity Infrastructure',
      rights: '© 2026 Merca Capital SAPI de CV. Todos los derechos reservados.',
      privacy: 'Aviso Legal'
    }
  },
  en: {
    nav: {
      portfolio: 'PORTFOLIO',
      thesis: 'THESIS',
      model: 'MODEL',
      contact: 'CONTACT'
    },
    hero: {
      tagline: 'PRIVATE EQUITY · INFRASTRUCTURE · LATAM',
      headline1: 'The Blackstone of',
      headline2: 'Agri-Food',
      headline3: 'Infrastructure',
      subtitle: 'The real asset isn\'t the square meters. It\'s control of the strategic point where Mexico eats.',
      description: 'We consolidate Latin America\'s most fragmented food distribution infrastructure. We financialize assets others don\'t see. We operate where others can\'t reach.',
      cta: 'VIEW PORTFOLIO',
      ctaSecondary: 'INVESTMENT THESIS',
      pillars: {
        title: 'STRATEGIC PILLARS',
        items: [
          { name: 'Strategic Nodes: North · Bajío · Center', description: 'Critical infrastructure in Mexico\'s highest commercial flow corridors' },
          { name: 'Critical Infrastructure', description: 'Markets · Wholesale · Distribution' },
          { name: 'Anti-Cyclical Flows', description: 'Inelastic Demand · 8-10% Cap Rates' },
          { name: 'Operational Control', description: 'Origination · Operations · Exit' }
        ]
      }
    },
    stats: {
      title: 'Institutional Track Record',
      description: 'Over a decade consolidating essential infrastructure in Central-Northern Mexico.',
      items: [
        { value: '$100M', label: 'USD Fund Target', highlight: true },
        { value: '41,000', label: 'sqm under management', highlight: true },
        { value: '15', label: 'years operating', highlight: false },
        { value: '8-10%', label: 'avg Cap Rate', highlight: false },
        { value: '90%', label: 'historical occupancy', highlight: false }
      ]
    },
    insight: {
      title: 'THE INSIGHT NO ONE SEES',
      content: 'Mexico has 329 wholesale food markets moving',
      highlight: '~$80B USD annually',
      subtext: 'in food. 78% operate on obsolete infrastructure (pre-2000). No one has consolidated them. No one has digitized them. No one has financialized them.',
      stats: [
        { value: '329', label: 'Wholesale Markets' },
        { value: '$80B', label: 'Annual USD Flow' },
        { value: '78%', label: 'Obsolete Infrastructure' }
      ]
    },
    portfolio: {
      title: 'Assets Under Management',
      subtitle: 'Food infrastructure portfolio in operation and development',
      projects: [
        { name: 'Mercahorro Torreón', sqm: '16,000 m²', status: 'Operating', city: 'Torreón, Coahuila', description: 'Flagship asset. Regional wholesale center with stabilized cash flows and 95% occupancy.', year: '2021', image: '/projects/mercahorro-torreon.jpg' },
        { name: 'Plaza Abastos Torreón', sqm: '9,000 m²', status: 'Operating', city: 'Torreón, Coahuila', description: 'Core asset with modern infrastructure. Stabilized NOI since 2018.', year: '2013', image: '/projects/plaza-abastos-torreon.jpg' },
        { name: 'Mercahorro Gómez Palacio', sqm: '8,000 m²', status: 'Value-Add', city: 'Gómez Palacio, Durango', description: 'Final development phase. 70% pre-leased. Stabilization Q4 2025.', year: '2025', image: '/projects/mercahorro-gomez.jpg' },
        { name: 'Mercahorro Silao', sqm: '8,000 m²', status: 'Development', city: 'Silao, Guanajuato', description: 'Strategic pipeline in El Bajío corridor. Signed LOIs with off-takers.', year: '2026', image: '/projects/mercahorro-silao.jpg' }
      ]
    },
    thesis: {
      title: 'Investment Thesis',
      subtitle: 'Why food infrastructure?',
      antiCyclical: {
        title: 'Strategic Digital Infrastructure — Anti-Cyclical Asset Class',
        description: 'Food infrastructure is the only real estate asset class with truly inelastic demand. People eat every day — regardless of recessions, elections or crises.',
        points: [
          'Inelastic demand: food is non-discretionary spending',
          '8-10% cap rates vs 4-6% in traditional assets',
          'Inflation protection via indexed rents',
          'Entry barrier through operational expertise and strategic commercial linkage'
        ]
      },
      items: [
        { title: 'Fragmented Market', description: 'No institutional players. First-mover consolidation opportunity.', icon: 'grid' },
        { title: 'Predictable Flows', description: '90% historical occupancy. 300+ merchants generating stable NOI.', icon: 'chart' },
        { title: 'Operational Moat', description: 'Requires expertise, merchant relationships and regulatory know-how.', icon: 'shield' }
      ]
    },
    model: {
      title: 'Integrated Management Model',
      subtitle: 'Full control of the value cycle',
      description: 'We\'re not intermediaries. We originate, financialize, operate and optimize.',
      steps: [
        { number: '01', title: 'Origination', description: 'Proprietary deal flow based on wholesale network commercial intelligence.' },
        { number: '02', title: 'Structuring', description: 'Tax-efficient vehicles (SAPI/Trust).' },
        { number: '03', title: 'Commercialization', description: 'Pre-lease through commercial association network (Merca México).' },
        { number: '04', title: 'Asset Management', description: 'Expert operational management and cash flow stabilization (NOI).' }
      ]
    },
    leadership: {
      title: 'Institutional Leadership',
      name: '',
      role: '',
      bio: 'Our leadership team integrates experts in corporate finance, infrastructure engineering, and wholesale commercial operations. With over 45 years of combined experience and training at global institutions, we manage capital under the highest standards of transparency and institutional rigor.',
      proofLabel: 'PROOF OF CONCEPT',
      proofOfConcept: 'Unique operator access: Mercahorro is our institutional proof of concept — 300+ units, 15 years of continuous operation, and the know-how no external fund can replicate.'
    },
    cta: {
      title: 'Capital Deploying',
      description: 'Seeking strategic LPs: family offices, fund of funds and institutional investors interested in essential LATAM infrastructure.',
      button: 'REQUEST DECK'
    },
    contact: {
      title: 'Investor Relations',
      subtitle: 'Let\'s start the conversation',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Firm / Family Office',
        message: 'Message',
        submit: 'Send',
        success: 'Sent!',
        error: 'Error. Please try again.',
        formTitle: 'TELL US ABOUT YOUR PROJECT',
        successTitle: 'Message sent successfully',
        successMessage: 'A Merca Capital partner will personally review your message and respond within 48 business hours.',
        sendAnother: 'SEND ANOTHER MESSAGE'
      },
      info: {
        phone: '+52 812 004 8610',
        email: 'ir@mercacapital.com',
        locations: 'Madrid · Torreón · CDMX'
      }
    },
    footer: {
      tagline: 'Private Equity Infrastructure',
      rights: '© 2026 Merca Capital SAPI de CV. All rights reserved.',
      privacy: 'Legal Notice'
    }
  }
};

// ============================================
// 3. ÍCONOS SVG
// ============================================

const Icons: Record<string, () => React.ReactNode> = {
  globe: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  grid: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  chart: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>,
  shield: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  check: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>,
  phone: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  mail: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  mapPin: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
  linkedin: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  target: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  trending: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
};

// ============================================
// 4. COMPONENTES
// ============================================

// ── MOMENTUM BANNER ──────────────────────────────────────────
const MomentumBanner: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div style={{
    background: 'linear-gradient(90deg, #8B6220, #C08A3E, #8B6220)',
    color: '#000B29',
    fontFamily: 'system-ui, sans-serif',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    position: 'relative',
    flexWrap: 'wrap',
    zIndex: 1001,
  }}>
    <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
      <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#000B29', display: 'inline-block', animation: 'pulse 1.8s ease-in-out infinite' }} />
      Primer close en proceso
    </span>
    <span style={{ opacity: 0.4 }}>·</span>
    <span>Capital en evaluación activa</span>
    <span style={{ opacity: 0.4 }}>·</span>
    <span>Acceso limitado a LPs calificados</span>
    <a href="#deck" style={{ background: '#000B29', color: '#C08A3E', padding: '3px 12px', fontSize: '10px', fontWeight: 800, textDecoration: 'none', marginLeft: '8px' }}>
      SOLICITAR DECK →
    </a>
    <button onClick={onClose} style={{ position: 'absolute', right: '16px', background: 'none', border: 'none', cursor: 'pointer', color: '#000B29', opacity: 0.45, fontSize: '16px', lineHeight: 1 }}>✕</button>
  </div>
);

// ── HEADER ───────────────────────────────────────────────────
const Header: React.FC<{ lang: 'es' | 'en'; setLang: (l: 'es' | 'en') => void; t: ContentStructure; bannerVisible: boolean }> = ({ lang, setLang, t, bannerVisible }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navBtn: React.CSSProperties = { background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', cursor: 'pointer', transition: 'color 0.3s', textTransform: 'uppercase' };

  return (
    <header style={{ position: 'fixed', top: bannerVisible ? '41px' : '0', left: 0, right: 0, zIndex: 1000, background: scrolled || menuOpen ? 'rgba(0,11,41,0.98)' : 'transparent', backdropFilter: scrolled ? 'blur(20px)' : 'none', borderBottom: scrolled ? '1px solid rgba(192,138,62,0.2)' : 'none', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: scrolled ? '70px' : '100px', transition: 'height 0.4s ease' }}>
        <div style={{ position: 'relative', height: scrolled ? '45px' : '60px', width: scrolled ? '180px' : '220px', transition: 'all 0.4s ease', zIndex: 1001 }}>
          <Image src="/Transparent_Logo_Blanco.png" alt="Merca Capital" fill style={{ objectFit: 'contain', objectPosition: 'left' }} priority />
        </div>

        {/* Desktop nav */}
        <nav className="mc-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {(['portfolio', 'thesis', 'model', 'contact'] as const).map((s) => (
            <button key={s} onClick={() => scrollTo(s)} style={navBtn}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C08A3E'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
              {t.nav[s]}
            </button>
          ))}
          <button onClick={() => scrollTo('equipo')} style={navBtn}
            onMouseEnter={(e) => e.currentTarget.style.color = '#C08A3E'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
            {lang === 'es' ? 'EQUIPO' : 'TEAM'}
          </button>
          <button onClick={() => scrollTo('deck')}
            style={{ background: '#C08A3E', border: 'none', color: '#000B29', padding: '8px 16px', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', cursor: 'pointer', textTransform: 'uppercase', transition: 'opacity 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
            DECK →
          </button>
          <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            style={{ background: 'transparent', border: '1px solid rgba(192,138,62,0.3)', color: 'rgba(192,138,62,0.6)', padding: '6px 14px', fontSize: '0.65rem', fontWeight: 700, cursor: 'pointer', borderRadius: '2px', transition: 'all 0.3s', letterSpacing: '0.08em' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#C08A3E'; e.currentTarget.style.color = '#000B29'; e.currentTarget.style.borderColor = '#C08A3E'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(192,138,62,0.6)'; e.currentTarget.style.borderColor = 'rgba(192,138,62,0.3)'; }}>
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </nav>

        {/* Hamburger button (mobile only) */}
        <button className="mc-hamburger" onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', flexDirection: 'column', gap: '5px', zIndex: 1001 }}>
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#FFF', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#FFF', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#FFF', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,11,41,0.99)', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.8rem', padding: '2rem' }}>
          {(['portfolio', 'thesis', 'model', 'contact'] as const).map((s) => (
            <button key={s} onClick={() => scrollTo(s)}
              style={{ ...navBtn, fontSize: '1.1rem', letterSpacing: '0.2em' }}>
              {t.nav[s]}
            </button>
          ))}
          <button onClick={() => scrollTo('equipo')} style={{ ...navBtn, fontSize: '1.1rem', letterSpacing: '0.2em' }}>
            {lang === 'es' ? 'EQUIPO' : 'TEAM'}
          </button>
          <button onClick={() => scrollTo('deck')}
            style={{ background: '#C08A3E', border: 'none', color: '#000B29', padding: '14px 40px', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.12em', cursor: 'pointer', textTransform: 'uppercase', marginTop: '0.5rem' }}>
            SOLICITAR DECK →
          </button>
          <button onClick={() => { setLang(lang === 'es' ? 'en' : 'es'); setMenuOpen(false); }}
            style={{ background: 'transparent', border: '1px solid rgba(192,138,62,0.4)', color: '#C08A3E', padding: '8px 20px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', borderRadius: '2px' }}>
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      )}
    </header>
  );
};

// ── HERO ─────────────────────────────────────────────────────
const Hero: React.FC<{ t: ContentStructure }> = ({ t }) => (
  <section style={{ minHeight: '100vh', background: '#000B29', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(192,138,62,0.08) 0%, transparent 50%)', zIndex: 1 }} />
    <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(to left, rgba(192,138,62,0.03) 0%, transparent 100%)', zIndex: 1 }} />
    <div className="mc-hero-grid" style={{ width: '100%', maxWidth: '1600px', margin: '0 auto', padding: '8rem 4rem 4rem', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 2 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div style={{ width: '50px', height: '1px', background: '#C08A3E' }} />
          <span style={{ color: '#C08A3E', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.35em' }}>{t.hero.tagline}</span>
        </div>
        <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(3rem, 5.5vw, 5rem)', fontWeight: 400, lineHeight: 1.05, color: '#FFF', margin: '0 0 2rem 0', letterSpacing: '-0.03em' }}>
          {t.hero.headline1}<br/>
          <span style={{ color: '#C08A3E', fontStyle: 'italic', fontWeight: 400 }}>{t.hero.headline2}</span><br/>
          <span style={{ fontWeight: 400 }}>{t.hero.headline3}</span>
        </h1>
        <p style={{ color: '#FFF', fontSize: '1.35rem', lineHeight: 1.5, maxWidth: '560px', marginBottom: '2rem', fontWeight: 300, fontStyle: 'italic', borderLeft: '3px solid #C08A3E', paddingLeft: '1.5rem', fontFamily: 'Georgia, serif' }}>
          {t.hero.subtitle}
        </p>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '540px', marginBottom: '3rem', fontWeight: 300 }}>
          {t.hero.description}
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="#portfolio" style={{ background: '#C08A3E', color: '#000B29', padding: '1.2rem 2.8rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textDecoration: 'none', transition: 'all 0.3s', border: '2px solid #C08A3E' }}>
            {t.hero.cta}
          </a>
          <a href="#thesis" style={{ color: '#C08A3E', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textDecoration: 'none', borderBottom: '1px solid rgba(192,138,62,0.5)', paddingBottom: '5px' }}>
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
      <div className="mc-hero-pillars" style={{ position: 'relative', padding: '2.5rem' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '50px', height: '50px', borderTop: '2px solid #C08A3E', borderLeft: '2px solid #C08A3E' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '50px', height: '50px', borderTop: '2px solid #C08A3E', borderRight: '2px solid #C08A3E' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '50px', height: '50px', borderBottom: '2px solid #C08A3E', borderLeft: '2px solid #C08A3E' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '50px', height: '50px', borderBottom: '2px solid #C08A3E', borderRight: '2px solid #C08A3E' }} />
        <div style={{ background: 'rgba(0,11,41,0.8)', border: '1px solid rgba(192,138,62,0.2)', padding: '2.5rem', backdropFilter: 'blur(10px)' }}>
          <div style={{ color: '#C08A3E', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.25em', marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {t.hero.pillars.title}<span style={{ opacity: 0.6 }}>▲</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {t.hero.pillars.items.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.2rem' }}>
                <div style={{ color: '#C08A3E', marginTop: '3px', opacity: 0.8 }}>
                  {i === 0 && Icons.globe()} {i === 1 && Icons.grid()} {i === 2 && Icons.trending()} {i === 3 && Icons.target()}
                </div>
                <div>
                  <h4 style={{ color: '#FFF', fontSize: '1rem', fontWeight: 600, margin: '0 0 0.3rem 0' }}>{item.name}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', margin: 0, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ── STATS ────────────────────────────────────────────────────
const Stats: React.FC<{ t: ContentStructure }> = ({ t }) => (
  <section style={{ padding: '7rem 4rem', background: '#F8F7F4' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 400, color: '#000B29', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>{t.stats.title}</h2>
        <p style={{ color: '#666', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>{t.stats.description}</p>
      </div>
      <div className="mc-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem' }}>
        {t.stats.items.map((stat, i) => (
          <div key={i} style={{ background: stat.highlight ? '#000B29' : '#FFF', padding: '2.5rem 1.5rem', textAlign: 'center', border: stat.highlight ? 'none' : '1px solid rgba(0,0,0,0.06)', boxShadow: stat.highlight ? '0 15px 40px rgba(0,11,41,0.15)' : 'none' }}>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: '2.8rem', fontWeight: 400, color: '#C08A3E', lineHeight: 1, marginBottom: '0.8rem', letterSpacing: '-0.02em' }}>{stat.value}</div>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: stat.highlight ? 'rgba(255,255,255,0.7)' : '#666' }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── INSIGHT ──────────────────────────────────────────────────
const InsightSection: React.FC<{ t: ContentStructure }> = ({ t }) => (
  <section style={{ padding: '5rem 4rem', background: '#000000', borderTop: '3px solid #C08A3E', borderBottom: '3px solid #C08A3E', position: 'relative' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400, color: '#C08A3E', margin: '0 0 2.5rem 0', letterSpacing: '0.15em' }}>{t.insight.title}</h2>
      <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.4rem', lineHeight: 1.7, maxWidth: '900px', margin: '0 auto 1rem', fontWeight: 300 }}>
        {t.insight.content} <span style={{ color: '#C08A3E', fontWeight: 600 }}>{t.insight.highlight}</span> {t.insight.subtext}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', borderTop: '1px solid rgba(192,138,62,0.3)', paddingTop: '3rem', marginTop: '2rem' }}>
        {t.insight.stats.map((stat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: '3rem', fontWeight: 400, color: '#C08A3E', lineHeight: 1, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>{stat.value}</div>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── PORTFOLIO ────────────────────────────────────────────────
const Portfolio: React.FC<{ t: ContentStructure }> = ({ t }) => (
  <section id="portfolio" style={{ padding: '7rem 4rem', background: '#FFFFFF', scrollMarginTop: '100px' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 400, color: '#000B29', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>{t.portfolio.title}</h2>
        <p style={{ color: '#666', fontSize: '1.05rem' }}>{t.portfolio.subtitle}</p>
      </div>
      <div className="mc-portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem' }}>
        {t.portfolio.projects.map((proj, i) => (
          <div key={i} style={{ background: '#F8F7F4', border: '1px solid rgba(0,0,0,0.05)', overflow: 'hidden', transition: 'transform 0.4s ease, box-shadow 0.4s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
            <div style={{ position: 'relative', height: '200px', width: '100%' }}>
              <Image src={proj.image} alt={proj.name} fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: proj.status === 'Operando' || proj.status === 'Operating' ? '#C08A3E' : '#000B29', color: '#FFF', padding: '0.4rem 0.8rem', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                {proj.status.toUpperCase()}
              </div>
            </div>
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontWeight: 400, color: '#C08A3E', letterSpacing: '-0.02em' }}>{proj.sqm}</div>
                <span style={{ color: '#999', fontSize: '0.8rem', fontFamily: 'monospace' }}>{proj.year}</span>
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#000B29', margin: '0 0 0.3rem 0' }}>{proj.name}</h3>
              <p style={{ color: '#C08A3E', fontSize: '0.7rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{proj.city}</p>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── PROGRAMA 100 NODOS ────────────────────────────────────────
const ProgramaNodos: React.FC<{ lang: 'es' | 'en' }> = ({ lang }) => {
  const c = newContent[lang].programa;
  return (
    <section style={{ padding: '7rem 4rem', background: '#F8F7F4' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1rem' }}>
            <div style={{ width: '24px', height: '1px', background: '#C08A3E' }} />
            <span style={{ color: '#C08A3E', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif' }}>{c.label}</span>
            <div style={{ width: '24px', height: '1px', background: '#C08A3E' }} />
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 400, color: '#000B29', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>{c.title}</h2>
          <p style={{ color: '#666', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>{c.subtitle}</p>
        </div>

        {/* Pilares de escalabilidad */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
          {c.pilares.map((p, i) => (
            <div key={i} style={{ background: '#000B29', padding: '2.5rem 2rem', borderBottom: '3px solid #C08A3E' }}>
              <div style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{p.icon}</div>
              <h4 style={{ color: '#C08A3E', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif', marginBottom: '0.75rem' }}>{p.title}</h4>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', fontFamily: 'system-ui, sans-serif', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline fases */}
        <div className="mc-fases-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
          {c.fases.map((f, i) => (
            <div key={i} style={{ background: i === 0 ? '#000B29' : '#FFF', padding: '2.5rem 2rem', border: i === 0 ? 'none' : '1px solid rgba(0,0,0,0.06)', borderBottom: `3px solid ${i === 0 ? '#C08A3E' : 'rgba(192,138,62,0.3)'}`, position: 'relative' }}>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: i === 0 ? 'rgba(255,255,255,0.5)' : '#999', marginBottom: '8px' }}>{f.periodo}</div>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontWeight: 400, color: '#C08A3E', lineHeight: 1, marginBottom: '6px' }}>{f.nodos}</div>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.95rem', fontWeight: 600, color: i === 0 ? '#FFF' : '#000B29', marginBottom: '6px' }}>{f.label}</div>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.8rem', color: i === 0 ? 'rgba(255,255,255,0.6)' : '#777' }}>{f.desc}</div>
              {i === 0 && <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#C08A3E', color: '#000B29', fontSize: '0.6rem', fontWeight: 700, padding: '3px 8px', letterSpacing: '0.1em' }}>ACTUAL</div>}
            </div>
          ))}
        </div>

        {/* Criterios */}
        <div style={{ background: '#FFF', border: '1px solid rgba(0,0,0,0.06)', overflow: 'hidden' }}>
          <div style={{ background: '#000B29', padding: '1.2rem 2rem' }}>
            <span style={{ color: '#C08A3E', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif', fontWeight: 700 }}>{c.criteriosTitle}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 1.5fr 1fr', background: 'rgba(0,0,0,0.02)', padding: '10px 2rem', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
            {c.criteriosHeaders.map((h, i) => (
              <div key={i} style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', fontWeight: 700 }}>{h}</div>
            ))}
          </div>
          {c.criterios.map((cr, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 1.5fr 1fr', padding: '1.2rem 2rem', borderBottom: i < c.criterios.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', alignItems: 'center' }}>
              <div style={{ background: '#C08A3E', color: '#000B29', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontFamily: 'Georgia, serif', fontSize: '1rem' }}>{cr.tier}</div>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.9rem', color: '#000B29' }}>{cr.hab}</div>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.9rem', color: '#555' }}>{cr.infra}</div>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.9rem', color: '#555' }}>{cr.corredor}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── THESIS ───────────────────────────────────────────────────
const Thesis: React.FC<{ t: ContentStructure; lang: 'es' | 'en' }> = ({ t, lang }) => (
  <section id="thesis" style={{ padding: '7rem 4rem', background: '#000B29', scrollMarginTop: '100px' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 400, color: '#FFF', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>{t.thesis.title}</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem' }}>{t.thesis.subtitle}</p>
      </div>
      <div style={{ background: 'rgba(192,138,62,0.08)', borderLeft: '4px solid #C08A3E', padding: '3rem', marginBottom: '4rem' }}>
        <h3 style={{ color: '#C08A3E', fontSize: '1.4rem', fontWeight: 600, marginBottom: '1.5rem', fontFamily: 'Georgia, serif' }}>{t.thesis.antiCyclical.title}</h3>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>{t.thesis.antiCyclical.description}</p>
        <p style={{ color: '#C08A3E', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem', fontStyle: 'italic', borderLeft: '3px solid rgba(192,138,62,0.4)', paddingLeft: '1.25rem' }}>
          {lang === 'es'
            ? 'Nuestros nodos no solo mueven alimentos; procesan datos y servicios financieros en el Edge, capturando el valor digital de la cadena de suministro.'
            : 'Our nodes don\'t just move food — they process data and financial services at the Edge, capturing the digital value of the supply chain.'}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {t.thesis.antiCyclical.points.map((point, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <span style={{ color: '#C08A3E', marginTop: '2px' }}>{Icons.check()}</span>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: 1.5 }}>{point}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mc-tesis-items" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
        {t.thesis.items.map((item, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', padding: '2.5rem 2rem', textAlign: 'center' }}>
            <div style={{ color: '#C08A3E', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{Icons[item.icon]?.()}</div>
            <h4 style={{ color: '#FFF', fontSize: '1.15rem', fontWeight: 600, marginBottom: '1rem' }}>{item.title}</h4>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── MODEL ────────────────────────────────────────────────────
const Model: React.FC<{ t: ContentStructure }> = ({ t }) => (
  <section id="model" style={{ padding: '7rem 4rem', background: '#F8F7F4', scrollMarginTop: '100px' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 400, color: '#000B29', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>{t.model.title}</h2>
        <p style={{ color: '#666', fontSize: '1.05rem' }}>{t.model.subtitle}</p>
      </div>
      <div className="mc-fases-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
        {t.model.steps.map((step, i) => (
          <div key={i} style={{ background: '#FFF', padding: '2.5rem 2rem', borderBottom: '3px solid #C08A3E', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', fontWeight: 400, color: 'rgba(192,138,62,0.3)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>{step.number}</div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#000B29', marginBottom: '0.75rem' }}>{step.title}</h4>
            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{step.description}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#000B29', padding: '2.5rem', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Georgia, serif', color: '#C08A3E', fontSize: '1.2rem', fontStyle: 'italic', margin: 0 }}>"{t.model.description}"</p>
      </div>
    </div>
  </section>
);

// ── UNFAIR ADVANTAGE ─────────────────────────────────────────
const MOAT_DATA = [
  { icon: '🏛', sub: 'VP — MERCAMÉXICO', title: 'Posición Gremial Única', desc: 'Acceso institucional a las 329 Centrales de Abasto del país a través de la máxima asociación del sector. Deal flow que ningún fondo externo puede originar ni comprar.', metric: '329 mercados · 1 acceso exclusivo' },
  { icon: '🤝', sub: '15 años de relaciones comerciales', title: 'Red de 300+ Operadores', desc: 'Una red de comerciantes mayoristas construida operación por operación durante 15 años. No se compra. No se replica. Se gana con tiempo y confianza.', metric: '300+ relaciones comerciales activas' },
  { icon: '📊', sub: 'Data que nadie más tiene', title: 'Inteligencia Propietaria', desc: 'Datos de ocupación, NOI y comportamiento comercial de 15 años de operación directa. El input más valioso para underwriting de nuevos activos.', metric: '15 años de data operativa propia' },
  { icon: '🌐', sub: 'Data & Connectivity Advantage', title: 'Capa Tecnológica Propietaria', desc: 'La red Mercahorro sirve como base para una capa tecnológica que ningún otro fondo de capital privado puede replicar: Edge Data Centers, procesamiento financiero en el nodo y monetización de datos de la cadena de suministro alimentaria.', metric: '100 nodos · 1 red de datos propietaria' },
];

const UnfairAdvantage: React.FC<{ lang: 'es' | 'en' }> = ({ lang }) => {
  const c = newContent[lang].moat;
  return (
  <section style={{ padding: '7rem 4rem', background: '#000B29' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4rem', gap: '2rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
            <div style={{ width: '24px', height: '1px', background: '#C08A3E' }} />
            <span style={{ color: '#C08A3E', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif' }}>{c.label}</span>
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 400, color: '#FFF', margin: 0, letterSpacing: '-0.02em', maxWidth: '480px', lineHeight: 1.2 }}>
            {c.title}
          </h2>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', fontFamily: 'system-ui, sans-serif', lineHeight: 1.8, maxWidth: '400px', margin: 0 }}>
          {c.subtitle}
        </p>
      </div>
      <div className="mc-moat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
        {c.items.map((m, i) => (
          <div key={i} style={{ background: '#000B29', padding: '3rem 2.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)', borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{m.icon}</div>
            <div style={{ color: '#C08A3E', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif', fontWeight: 700, marginBottom: '8px' }}>{m.sub}</div>
            <h3 style={{ color: '#FFF', fontSize: '1.3rem', fontWeight: 500, fontFamily: 'Georgia, serif', margin: '0 0 1rem 0' }}>{m.title}</h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', fontFamily: 'system-ui, sans-serif', lineHeight: 1.75, margin: '0 0 1.5rem 0' }}>{m.desc}</p>
            <div style={{ borderTop: '1px solid rgba(192,138,62,0.2)', paddingTop: '1rem' }}>
              <span style={{ color: '#C08A3E', fontSize: '0.8rem', fontFamily: 'system-ui, sans-serif', fontWeight: 600 }}>{m.metric}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '1px', background: 'rgba(192,138,62,0.06)', border: '1px solid rgba(192,138,62,0.2)', padding: '2rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ fontFamily: 'Georgia, serif', color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontStyle: 'italic', margin: 0 }}>{c.quote}</p>
        <span style={{ color: '#C08A3E', fontSize: '0.75rem', fontFamily: 'system-ui, sans-serif', letterSpacing: '0.06em' }}>{c.quoteBy}</span>
      </div>
    </div>
  </section>
  );
};

// ── TEAM SECTION ─────────────────────────────────────────────
const TEAM_DATA = [
  { initials: 'AG', name: 'Alejandro Gayosso Mar', title: 'Managing Partner — Strategy & National Infrastructure', bio: 'VP de MERCAMÉXICO. Estratega líder en la modernización de la red nacional de abasto. Arquitecto del blueprint evolutivo para infraestructura mayorista, integrando Edge Computing y logística de última milla. Transforma activos tradicionales en nodos digitales de alta escalabilidad.', credentials: ['Ing. Sistemas — Tec de Monterrey', 'MBA — IE Business School, Madrid'], roles: ['VP — MERCAMÉXICO (Asociación Mexicana de Mercados)', 'Fundador — Grupo Mercahorro', 'Co-fundador — Altavela Group'], color: '#C08A3E' },
  { initials: 'JS', name: 'José Sánchez', title: 'Partner — Investment Structure', bio: 'Experto en gestión de activos para Family Offices y estructuración financiera internacional. Supervisa la integridad técnica, fiscal e institucional del fondo, aportando la sofisticación necesaria para el manejo de capital de alto patrimonio.', credentials: ['Banca Corporativa Internacional', 'Estructuración de Capital Privado'], roles: ['Co-fundador — Altavela Group', 'Relaciones institucionales Europa–LATAM'], color: '#7C8E76' },
  { initials: 'JO', name: 'Javier Olvera', title: 'Partner — Digital Transformation & Strategy', bio: 'Líder en transformación digital y ecosistemas tecnológicos. Encabeza la evolución de los activos físicos hacia una red inteligente, integrando Edge Data Centers y soluciones de agregación financiera en cada nodo de la red.', credentials: ['Derecho Corporativo — Fideicomisos y SAPI', 'Arquitectura de Ecosistemas Digitales — Be One Systems'], roles: ['Digital Transformation & Strategy', 'Director — Be One Systems'], color: '#7A8B9A' },
];

const TeamSection: React.FC<{ lang: 'es' | 'en' }> = ({ lang }) => {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <section id="equipo" style={{ padding: '7rem 4rem', background: '#FFFFFF', scrollMarginTop: '100px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1rem' }}>
            <div style={{ width: '24px', height: '1px', background: '#C08A3E' }} />
            <span style={{ color: '#C08A3E', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif' }}>{newContent[lang].team.label}</span>
            <div style={{ width: '24px', height: '1px', background: '#C08A3E' }} />
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 400, color: '#000B29', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>{newContent[lang].team.title}</h2>
          <p style={{ color: '#666', fontSize: '1.05rem', maxWidth: '550px', margin: '0 auto' }}>
            {newContent[lang].team.subtitle}
          </p>
        </div>
        <div className="mc-team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {newContent[lang].team.members.map((member, i) => (
            <div key={i} onClick={() => setExpanded(expanded === i ? null : i)}
              style={{ background: expanded === i ? '#F8F7F4' : '#FAFAFA', border: `1px solid ${expanded === i ? '#C08A3E' : 'rgba(0,0,0,0.06)'}`, borderLeft: `4px solid ${expanded === i ? '#C08A3E' : 'transparent'}`, padding: '2rem', cursor: 'pointer', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => { if (expanded !== i) { e.currentTarget.style.borderLeftColor = 'rgba(192,138,62,0.4)'; e.currentTarget.style.background = '#F8F7F4'; } }}
              onMouseLeave={(e) => { if (expanded !== i) { e.currentTarget.style.borderLeftColor = 'transparent'; e.currentTarget.style.background = '#FAFAFA'; } }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: expanded === i ? '1.5rem' : '0' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: `${member.color}18`, border: `2px solid ${member.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: member.color, fontSize: '14px', fontWeight: 700, fontFamily: 'system-ui, sans-serif', flexShrink: 0 }}>
                  {member.initials}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: '1rem', fontWeight: 600, color: '#000B29', marginBottom: '2px' }}>{member.name}</div>
                  <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.7rem', color: '#C9A84C', letterSpacing: '0.07em', textTransform: 'uppercase', fontWeight: 600, lineHeight: 1.4 }}>{member.title}</div>
                </div>
                <span style={{ color: '#C08A3E', fontSize: '1.4rem', fontWeight: 300 }}>{expanded === i ? '−' : '+'}</span>
              </div>
              {expanded === i && (
                <div>
                  <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '1.25rem', fontFamily: 'system-ui, sans-serif' }}>{member.bio}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                      <div style={{ color: '#C08A3E', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif', fontWeight: 700, marginBottom: '8px' }}>{newContent[lang].team.formation}</div>
                      {member.credentials.map((cr, ci) => <div key={ci} style={{ color: '#000B29', fontSize: '0.85rem', fontFamily: 'system-ui, sans-serif', padding: '4px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>· {cr}</div>)}
                    </div>
                    <div>
                      <div style={{ color: '#C08A3E', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif', fontWeight: 700, marginBottom: '8px' }}>{newContent[lang].team.roles}</div>
                      {member.roles.map((r, ri) => <div key={ri} style={{ color: '#000B29', fontSize: '0.85rem', fontFamily: 'system-ui, sans-serif', padding: '4px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>· {r}</div>)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{ marginTop: '2.5rem', background: '#000B29', padding: '2rem 2.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', borderLeft: '4px solid #C08A3E' }}>
          <div style={{ fontSize: '2rem' }}>🏛</div>
          <div>
            <div style={{ color: '#C08A3E', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif', fontWeight: 700, marginBottom: '6px' }}>{newContent[lang].team.badge}</div>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', fontFamily: 'system-ui, sans-serif', margin: 0, lineHeight: 1.6 }}>
              {newContent[lang].team.badgeText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ── GATED DECK ────────────────────────────────────────────────
const GatedDeckSection: React.FC<{ lang: 'es' | 'en' }> = ({ lang }) => {
  const [step, setStep] = useState<'choice' | 'form' | 'success'>('choice');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending'>('idle');
  const [submittedEmail, setSubmittedEmail] = useState('');

  const dc = newContent[lang].deck;
  const inputStyle: React.CSSProperties = { width: '100%', padding: '1rem', border: 'none', borderBottom: '2px solid rgba(255,255,255,0.15)', background: 'transparent', fontSize: '1rem', outline: 'none', fontFamily: 'system-ui, sans-serif', color: '#FFF', boxSizing: 'border-box' };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append('_subject', 'DECK REQUEST — Merca Capital LP');
    const emailVal = (form.querySelector('[name="email"]') as HTMLInputElement)?.value;
    setSubmittedEmail(emailVal || '');
    try {
      const response = await fetch('https://formspree.io/f/xbdqykov', { method: 'POST', body: formData, headers: { Accept: 'application/json' } });
      if (response.ok) setStep('success');
      else setFormStatus('idle');
    } catch { setFormStatus('idle'); }
  };

  return (
    <section id="deck" style={{ padding: '7rem 4rem', background: '#000B29', scrollMarginTop: '100px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1rem' }}>
            <div style={{ width: '24px', height: '1px', background: '#C08A3E' }} />
            <span style={{ color: '#C08A3E', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif' }}>{dc.label}</span>
            <div style={{ width: '24px', height: '1px', background: '#C08A3E' }} />
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 400, color: '#FFF', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>{dc.title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto' }}>{dc.subtitle}</p>
        </div>

        {step === 'choice' && (
          <div className="mc-deck-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {/* TEASER */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '3rem 2.5rem' }}>
              <span style={{ background: 'rgba(192,138,62,0.15)', color: '#C08A3E', fontSize: '0.65rem', letterSpacing: '0.1em', padding: '4px 10px', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif', fontWeight: 700 }}>{dc.teaserBadge}</span>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.6rem', fontWeight: 400, color: '#FFF', margin: '1.5rem 0 0.75rem' }}>{dc.teaserTitle}</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontFamily: 'system-ui, sans-serif', lineHeight: 1.7, margin: '0 0 1.5rem' }}>{dc.teaserDesc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem' }}>
                {dc.teaserItems.map((item, i) => (
                  <li key={i} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', fontFamily: 'system-ui, sans-serif', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#C08A3E' }}>✓</span>{item}
                  </li>
                ))}
              </ul>
              <a href="/deck/merca-capital-teaser-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center', background: 'transparent', border: '1px solid rgba(192,138,62,0.5)', color: '#C08A3E', padding: '1rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textDecoration: 'none', fontFamily: 'system-ui, sans-serif', textTransform: 'uppercase' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(192,138,62,0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}>
                {dc.teaserBtn}
              </a>
              
            </div>
            {/* DECK COMPLETO */}
            <div style={{ background: 'rgba(192,138,62,0.06)', border: '1px solid rgba(192,138,62,0.3)', padding: '3rem 2.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, background: '#C08A3E', color: '#000B29', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', padding: '6px 14px', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif' }}>{dc.featuredBadge}</div>
              <span style={{ background: 'rgba(192,138,62,0.15)', color: '#C08A3E', fontSize: '0.65rem', letterSpacing: '0.1em', padding: '4px 10px', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif', fontWeight: 700, marginTop: '1rem', display: 'inline-block' }}>{dc.accessBadge}</span>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.6rem', fontWeight: 400, color: '#FFF', margin: '1.5rem 0 0.75rem' }}>{dc.deckTitle}</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontFamily: 'system-ui, sans-serif', lineHeight: 1.7, margin: '0 0 1.5rem' }}>{dc.deckDesc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem' }}>
                {dc.deckItems.map((item, i) => (
                  <li key={i} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', fontFamily: 'system-ui, sans-serif', padding: '8px 0', borderBottom: '1px solid rgba(192,138,62,0.1)', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#C08A3E' }}>✓</span>{item}
                  </li>
                ))}
              </ul>
              <button onClick={() => setStep('form')}
                style={{ width: '100%', background: '#C08A3E', border: 'none', color: '#000B29', padding: '1rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'system-ui, sans-serif' }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}>
                {dc.deckBtn}
              </button>
            </div>
          </div>
        )}

        {step === 'form' && (
          <div style={{ background: 'rgba(192,138,62,0.06)', border: '1px solid rgba(192,138,62,0.3)', padding: '4rem' }}>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontWeight: 400, color: '#FFF', margin: '0 0 0.5rem' }}>{dc.formTitle}</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', fontFamily: 'system-ui, sans-serif', margin: '0 0 2.5rem' }}>{dc.formSubtitle}</p>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="_type" value="deck-request" />
              <div className="mc-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'system-ui, sans-serif' }}>{dc.fields.name}</label>
                  <input name="name" type="text" required style={inputStyle}
                    onFocus={(e) => { e.target.style.borderBottomColor = '#C08A3E'; }}
                    onBlur={(e) => { e.target.style.borderBottomColor = 'rgba(255,255,255,0.15)'; }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'system-ui, sans-serif' }}>{dc.fields.email}</label>
                  <input name="email" type="email" required style={inputStyle}
                    onFocus={(e) => { e.target.style.borderBottomColor = '#C08A3E'; }}
                    onBlur={(e) => { e.target.style.borderBottomColor = 'rgba(255,255,255,0.15)'; }} />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'system-ui, sans-serif' }}>{dc.fields.company}</label>
                  <input name="company" type="text" required style={inputStyle}
                    onFocus={(e) => { e.target.style.borderBottomColor = '#C08A3E'; }}
                    onBlur={(e) => { e.target.style.borderBottomColor = 'rgba(255,255,255,0.15)'; }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'system-ui, sans-serif' }}>{dc.fields.type}</label>
                  <select name="investor_type" style={{ ...inputStyle, cursor: 'pointer' }}>
                    <option value="" style={{ background: '#000B29' }}>—</option>
                    {dc.typeOptions.map(o => <option key={o} value={o} style={{ background: '#000B29' }}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'system-ui, sans-serif' }}>{dc.fields.aum}</label>
                  <select name="aum" style={{ ...inputStyle, cursor: 'pointer' }}>
                    <option value="" style={{ background: '#000B29' }}>—</option>
                    {dc.aumOptions.map(o => <option key={o} value={o} style={{ background: '#000B29' }}>{o}</option>)}
                  </select>
                </div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', fontFamily: 'system-ui, sans-serif', margin: '0 0 2rem', lineHeight: 1.6 }}>
                {dc.privacy}
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="button" onClick={() => setStep('choice')} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)', padding: '1rem 1.5rem', fontSize: '0.75rem', fontFamily: 'system-ui, sans-serif', cursor: 'pointer' }}>{dc.back}</button>
                <button type="submit" disabled={formStatus === 'sending'} style={{ flex: 1, background: '#C08A3E', border: 'none', color: '#000B29', padding: '1rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'system-ui, sans-serif' }}>
                  {formStatus === 'sending' ? dc.sending : dc.submit}
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 'success' && (
          <div style={{ textAlign: 'center', padding: '5rem 3rem', border: '1px solid rgba(192,138,62,0.3)', background: 'rgba(192,138,62,0.04)' }}>
            <div style={{ color: '#C08A3E', fontSize: '3rem', marginBottom: '1.5rem' }}>✓</div>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontWeight: 400, color: '#C08A3E', margin: '0 0 1rem' }}>{dc.successTitle}</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', fontFamily: 'system-ui, sans-serif', margin: '0 0 0.5rem' }}>
              {dc.successLine1} <strong style={{ color: '#C08A3E' }}>{submittedEmail}</strong>
            </p>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', fontFamily: 'system-ui, sans-serif', margin: '0 0 2.5rem' }}>
              {dc.successLine2}
            </p>
            <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ37U2uWe0A2rvvFjgSSst1J-o-KwpbQEKWL2wMi6bhf1bd9KnYPpDR31myr13uLaKkJlfYD6Qct" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', background: '#C08A3E', color: '#000B29', padding: '1.1rem 2.5rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textDecoration: 'none', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif' }}>
              Agendar Llamada con Socios de Inversión →
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

// ── CONTACT ──────────────────────────────────────────────────
const Contact: React.FC<{ t: ContentStructure; lang: 'es' | 'en' }> = ({ t, lang }) => {
  const calBtn = lang === 'es' ? 'Agendar Llamada con Socios de Inversión →' : 'Schedule Call with Investment Partners →';
  const confirmBtn = lang === 'es' ? 'Confirmado: Agendar con Socios de Inversión →' : 'Confirmed: Schedule with Investment Partners →';
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    try {
      const response = await fetch('https://formspree.io/f/xbdqykov', { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } });
      if (response.ok) { setStatus('success'); form.reset(); }
      else { setStatus('error'); }
    } catch { setStatus('error'); }
  };

  const CheckCircle = () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#C08A3E" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10"/><polyline points="9 12 11.5 14.5 16 9"/>
    </svg>
  );

  return (
    <section id="contact" style={{ padding: '7rem 4rem', background: '#F8F7F4', scrollMarginTop: '100px' }}>
      <div className="mc-contact-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem' }}>
        <div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 400, color: '#000B29', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>{t.contact.title}</h2>
          <p style={{ color: '#666', fontSize: '1.05rem', marginBottom: '3rem' }}>{t.contact.subtitle}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ width: '45px', height: '45px', background: '#000B29', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C08A3E' }}>{Icons.phone()}</div>
              <span style={{ color: '#000B29', fontWeight: 500, fontSize: '1rem' }}>{t.contact.info.phone}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ width: '45px', height: '45px', background: '#000B29', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C08A3E' }}>{Icons.mail()}</div>
              <span style={{ color: '#000B29', fontWeight: 500, fontSize: '1rem' }}>{t.contact.info.email}</span>
            </div>
            {/* Triangulación HQ */}
            <div style={{ marginTop: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1.5rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ color: '#C08A3E', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif', marginBottom: '4px' }}>Investment & Strategy HQ</div>
                <div style={{ color: '#000B29', fontWeight: 500, fontSize: '1rem', fontFamily: 'system-ui, sans-serif', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span>{Icons.mapPin()}</span> Madrid · Monterrey
                </div>
              </div>
              <div>
                <div style={{ color: '#C08A3E', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif', marginBottom: '4px' }}>Operational Center</div>
                <div style={{ color: '#000B29', fontWeight: 500, fontSize: '1rem', fontFamily: 'system-ui, sans-serif', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span>{Icons.mapPin()}</span> Torreón · Gómez Palacio · Silao
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: 'relative', padding: '0.5rem' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '40px', height: '40px', borderTop: '2px solid #C08A3E', borderRight: '2px solid #C08A3E' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '40px', borderBottom: '2px solid #C08A3E', borderLeft: '2px solid #C08A3E' }} />
          <div style={{ background: '#FFF', padding: '3rem', boxShadow: '0 15px 50px rgba(0,0,0,0.05)', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}><CheckCircle /></div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.6rem', fontWeight: 400, color: '#000B29', margin: '0 0 0.75rem 0' }}>{t.contact.form.successTitle}</h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.7, margin: '0 auto 2rem', maxWidth: '300px' }}>{t.contact.form.successMessage}</p>
                {/* Prominent gold CTA */}
                <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ37U2uWe0A2rvvFjgSSst1J-o-KwpbQEKWL2wMi6bhf1bd9KnYPpDR31myr13uLaKkJlfYD6Qct"
                  target="_blank" rel="noopener noreferrer"
                  style={{ display: 'block', background: '#C08A3E', color: '#000B29', padding: '1.2rem 2rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif', marginBottom: '1.25rem', boxShadow: '0 4px 20px rgba(192,138,62,0.3)' }}>
                  {confirmBtn}
                </a>
                <button onClick={() => setStatus('idle')} style={{ background: 'transparent', border: 'none', color: '#999', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                  {t.contact.form.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ color: '#C08A3E', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', marginBottom: '0.5rem' }}>{t.contact.form.formTitle}</div>
                {[
                  { n: 'name', l: t.contact.form.name, ty: 'text' },
                  { n: 'email', l: t.contact.form.email, ty: 'email' },
                  { n: 'company', l: t.contact.form.company, ty: 'text' }
                ].map((f) => (
                  <div key={f.n}>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, color: '#000B29', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{f.l}</label>
                    <input type={f.ty} name={f.n} required={f.n !== 'company'} style={{ width: '100%', padding: '1rem', border: 'none', borderBottom: '2px solid #E8E8E8', background: 'transparent', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }}
                      onFocus={(e) => e.target.style.borderBottomColor = '#C08A3E'}
                      onBlur={(e) => e.target.style.borderBottomColor = '#E8E8E8'} />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, color: '#000B29', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.contact.form.message}</label>
                  <textarea name="message" rows={3} required style={{ width: '100%', padding: '1rem', border: 'none', borderBottom: '2px solid #E8E8E8', background: 'transparent', fontSize: '1rem', outline: 'none', resize: 'none', transition: 'border-color 0.3s' }}
                    onFocus={(e) => e.target.style.borderBottomColor = '#C08A3E'}
                    onBlur={(e) => e.target.style.borderBottomColor = '#E8E8E8'} />
                </div>
                <button type="submit" disabled={status === 'sending'} style={{ background: '#000B29', color: '#FFF', padding: '1.2rem', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', marginTop: '0.5rem', transition: 'background 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#C08A3E'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#000B29'}>
                  {status === 'sending' ? '...' : t.contact.form.submit}
                </button>
                {status === 'error' && <p style={{ color: '#ff4444', fontSize: '0.9rem', textAlign: 'center', marginTop: '0.5rem' }}>{t.contact.form.error}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ── FOOTER ───────────────────────────────────────────────────
const Footer: React.FC<{ t: ContentStructure; lang: 'es' | 'en' }> = ({ t, lang }) => {
  const calBtn = lang === 'es' ? 'Agendar Llamada con Socios de Inversión →' : 'Schedule Call with Investment Partners →';
  return (
  <footer style={{ padding: '4rem 4rem 2.5rem', background: '#000B29', borderTop: '1px solid rgba(192,138,62,0.2)' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
      <div style={{ position: 'relative', height: '55px', width: '240px' }}>
        <Image src="/Transparent_Logo_Blanco.png" alt="Merca Capital" fill style={{ objectFit: 'contain' }} />
      </div>
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{t.footer.tagline}</p>

      {/* Triangulación institucional */}
      <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
        <div>
          <div style={{ color: '#C08A3E', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif', marginBottom: '4px' }}>Investment & Strategy HQ</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontFamily: 'system-ui, sans-serif' }}>Madrid · Monterrey</div>
        </div>
        <div style={{ width: '1px', background: 'rgba(192,138,62,0.2)' }} />
        <div>
          <div style={{ color: '#C08A3E', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif', marginBottom: '4px' }}>Operational Center</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontFamily: 'system-ui, sans-serif' }}>Torreón · Gómez Palacio · Silao</div>
        </div>
        <div style={{ width: '1px', background: 'rgba(192,138,62,0.2)' }} />
        <div>
          <div style={{ color: '#C08A3E', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif', marginBottom: '4px' }}>Investor Relations</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontFamily: 'system-ui, sans-serif' }}>hola@mercacapital.com</div>
        </div>
      </div>

      {/* CTA prominente */}
      <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ37U2uWe0A2rvvFjgSSst1J-o-KwpbQEKWL2wMi6bhf1bd9KnYPpDR31myr13uLaKkJlfYD6Qct"
        target="_blank" rel="noopener noreferrer"
        style={{ display: 'block', background: '#C08A3E', color: '#000B29', padding: '1.1rem 2.5rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textDecoration: 'none', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif', textAlign: 'center' }}>
        {calBtn}
      </a>

      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        <a href="#" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textDecoration: 'none', letterSpacing: '0.05em' }}>{t.footer.privacy}</a>
        <a href="https://www.linkedin.com/in/alejandro-gayosso-a93099287/" target="_blank" rel="noopener noreferrer" style={{ color: '#C08A3E' }}>{Icons.linkedin()}</a>
      </div>
      <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem', letterSpacing: '0.05em', margin: 0 }}>{t.footer.rights}</p>
      </div>
    </div>
  </footer>
  );
};

// ============================================
// DICCIONARIO SECCIONES NUEVAS (bilingüe)
// ============================================
const newContent = {
  es: {
    programa: {
      label: 'Programa de Expansión',
      title: '100 Nodos en 10 Años',
      subtitle: 'No construimos naves — operamos una red de infraestructura optimizada por datos. Cada nuevo nodo hereda el playbook operativo del anterior, reduciendo el tiempo de estabilización y mejorando el retorno sobre capital desplegado.',
      pilares: [
        { icon: '📋', title: 'Standardized Operational Playbooks', desc: 'Cada nodo se opera con manuales estandarizados de gestión comercial, cobranza y mantenimiento. El fundador no necesita estar en cada sitio.' },
        { icon: '💻', title: 'Proprietary Logistics Software', desc: 'Sistema propietario de gestión de ocupación, flujos NOI y comportamiento de locatarios. Inteligencia operativa que mejora con cada nodo incorporado.' },
        { icon: '🏛', title: 'Scalable Governance Model', desc: 'Estructura SAPI/Fideicomiso replicable en cualquier estado de México. Cada nuevo activo sigue el mismo blueprint jurídico-operativo.' },
      ],
      fases: [
        { periodo: '2024–2026', label: 'Fase I', nodos: '4 nodos', desc: 'Proof of concept — modelo validado' },
        { periodo: '2026–2028', label: 'Fase II', nodos: '15 nodos', desc: 'Rollout playbook — Corredor Norte + Bajío' },
        { periodo: '2028–2031', label: 'Fase III', nodos: '35 nodos', desc: 'Expansión nacional — software escalado' },
        { periodo: '2031–2035', label: 'Fase IV', nodos: '100 nodos', desc: 'Red operada por datos — liderazgo de mercado' },
      ],
      criteriosTitle: 'Criterios de Selección de Nodos',
      criteriosHeaders: ['Tier', 'Población', 'Infraestructura', 'Contexto'],
      criterios: [
        { tier: 'A', hab: '+500k hab.', infra: 'Central de Abasto establecida, pre-2000', corredor: 'Corredor nacional' },
        { tier: 'B', hab: '200–500k hab.', infra: 'Mercado regional consolidado', corredor: 'Corredor logístico' },
        { tier: 'C', hab: '<200k hab.', infra: 'Mercado emergente o en construcción', corredor: 'Frontera / agroindustrial' },
      ],
    },
    moat: {
      label: 'Ventaja Competitiva',
      title: 'Por qué nadie más puede hacer esto',
      subtitle: 'El moat de Merca Capital no es capital — es acceso, confianza y know-how acumulado en 15 años de operación directa en mercados mayoristas.',
      items: [
        { icon: '🏛', sub: 'VP — MERCAMÉXICO', title: 'Posición Gremial Única', desc: 'Acceso institucional a las 329 Centrales de Abasto del país a través de la máxima asociación del sector. Deal flow que ningún fondo externo puede originar ni comprar.', metric: '329 mercados · 1 acceso exclusivo' },
        { icon: '🤝', sub: '15 años de relaciones comerciales', title: 'Red de 300+ Operadores', desc: 'Una red de comerciantes mayoristas construida operación por operación durante 15 años. No se compra. No se replica. Se gana con tiempo y confianza.', metric: '300+ relaciones comerciales activas' },
        { icon: '📊', sub: 'Data que nadie más tiene', title: 'Inteligencia Propietaria', desc: 'Datos de ocupación, NOI y comportamiento comercial de 15 años de operación directa. El input más valioso para underwriting de nuevos activos.', metric: '15 años de data operativa propia' },
        { icon: '🌐', sub: 'Data & Connectivity Advantage', title: 'Capa Tecnológica Propietaria', desc: 'La red Mercahorro sirve como base para una capa tecnológica que ningún otro fondo de capital privado puede replicar: Edge Data Centers, procesamiento financiero en el nodo y monetización de datos de la cadena de suministro alimentaria.', metric: '100 nodos · 1 red de datos propietaria' },
      ],
      quote: '"No somos un fondo que encontró un activo. Somos el activo que se convirtió en fondo."',
      quoteBy: '— Alejandro Gayosso Mar, Fundador',
    },
    team: {
      label: 'Equipo Directivo',
      title: 'El equipo detrás del capital',
      subtitle: '45+ años de experiencia conjunta en infraestructura, capital privado y operación de mercados mayoristas en México.',
      badge: 'Afiliación Institucional',
      badgeText: 'Miembros activos de MERCAMÉXICO — Asociación Mexicana de Mercados y Centrales de Abasto, el organismo que agrupa las 329 Centrales de Abasto del país.',
      members: [
        { initials: 'AG', name: 'Alejandro Gayosso Mar', title: 'Managing Partner — Strategy & National Infrastructure', bio: 'VP de MERCAMÉXICO. Estratega líder en la modernización de la red nacional de abasto. Arquitecto del blueprint evolutivo para infraestructura mayorista, integrando Edge Computing y logística de última milla. Transforma activos tradicionales en nodos digitales de alta escalabilidad.', credentials: ['Ing. Sistemas — Tec de Monterrey', 'MBA — IE Business School, Madrid'], roles: ['VP — MERCAMÉXICO', 'Fundador — Grupo Mercahorro', 'Co-fundador — Altavela Group'], color: '#C08A3E' },
        { initials: 'JS', name: 'José Sánchez', title: 'Partner — Investment Structure', bio: 'Experto en gestión de activos para Family Offices y estructuración financiera internacional. Supervisa la integridad técnica, fiscal e institucional del fondo, aportando la sofisticación necesaria para el manejo de capital de alto patrimonio.', credentials: ['Banca Corporativa Internacional', 'Estructuración Financiera Internacional'], roles: ['Co-fundador — Altavela Group', 'Relaciones institucionales Europa–LATAM'], color: '#7C8E76' },
        { initials: 'JO', name: 'Javier Olvera', title: 'Partner — Digital Transformation & Strategy', bio: 'Líder en transformación digital y ecosistemas tecnológicos. Encabeza la evolución de los activos físicos hacia una red inteligente, integrando Edge Data Centers y soluciones de agregación financiera en cada nodo de la red.', credentials: ['Derecho Corporativo — Fideicomisos y SAPI', 'Arquitectura de Ecosistemas Digitales'], roles: ['Digital Transformation & Strategy', 'Director — Be One Systems'], color: '#7A8B9A' },
      ],
      expand: 'Ver perfil',
      collapse: 'Cerrar',
      formation: 'Formación',
      roles: 'Roles',
    },
    deck: {
      label: 'Material de Inversión',
      title: 'Acceda al material de inversión',
      subtitle: 'Dos niveles de acceso, calibrados según el perfil del inversor.',
      teaserBadge: 'Libre · Sin formulario',
      teaserTitle: 'Investment Teaser',
      teaserDesc: '8 slides. Visión general de la tesis, track record y equipo. Acceso inmediato.',
      teaserItems: ['Tesis de inversión', 'Track record de activos', 'Métricas clave del fondo', 'Perfil del equipo directivo'],
      teaserBtn: 'Descargar Teaser →',
      featuredBadge: 'INSTITUCIONAL',
      accessBadge: 'Acceso calificado',
      deckTitle: 'Deck Completo + Modelo',
      deckDesc: 'Deck ejecutivo completo + estructura financiera + proyecciones por activo.',
      deckItems: ['Modelo financiero detallado', 'Proyecciones NOI por activo', 'Estructura jurídica SAPI/Fideicomiso', 'Pipeline completo de nodos', 'Términos de inversión (40/30/30)', 'Due diligence package'],
      deckBtn: 'Solicitar Acceso →',
      formTitle: 'Perfil del Inversor',
      formSubtitle: 'Recibirá el material por email en menos de 24 horas hábiles.',
      fields: { name: 'Nombre completo', email: 'Email corporativo', company: 'Firma / Family Office', type: 'Tipo de inversor', aum: 'AUM aproximado (USD)' },
      typeOptions: ['Family Office', 'Fondo de Fondos', 'HNWI / Alto Patrimonio', 'Institucional / Banco', 'Corporativo'],
      aumOptions: ['< $10M', '$10M – $50M', '$50M – $200M', '$200M – $1B', '> $1B'],
      privacy: 'Su información es confidencial y se usa exclusivamente para clasificar su perfil de inversión.',
      back: '← Volver',
      submit: 'Solicitar Deck Completo →',
      sending: 'Enviando...',
      successTitle: 'Solicitud recibida',
      successLine1: 'Recibirá el deck ejecutivo en',
      successLine2: 'en menos de 24 horas hábiles. Un socio de Merca Capital revisará su perfil personalmente.',
      calendarBtn: 'Agendar Llamada con Socios de Inversión →',
    },
  },
  en: {
    programa: {
      label: 'Expansion Program',
      title: '100 Nodes in 10 Years',
      subtitle: 'We don\'t build warehouses — we operate a data-optimized infrastructure network. Each new node inherits the operational playbook from the previous one, reducing stabilization time and improving return on deployed capital.',
      pilares: [
        { icon: '📋', title: 'Standardized Operational Playbooks', desc: 'Each node is operated using standardized commercial management, collections, and maintenance manuals. The founder doesn\'t need to be at every site.' },
        { icon: '💻', title: 'Proprietary Logistics Software', desc: 'Proprietary system for occupancy management, NOI flows, and tenant behavior. Operational intelligence that improves with every node added to the network.' },
        { icon: '🏛', title: 'Scalable Governance Model', desc: 'SAPI/Trust structure replicable across any Mexican state. Every new asset follows the same legal-operational blueprint.' },
      ],
      fases: [
        { periodo: '2024–2026', label: 'Phase I', nodos: '4 nodes', desc: 'Proof of concept — model validated' },
        { periodo: '2026–2028', label: 'Phase II', nodos: '15 nodes', desc: 'Playbook rollout — North + Bajío corridor' },
        { periodo: '2028–2031', label: 'Phase III', nodos: '35 nodes', desc: 'National expansion — software at scale' },
        { periodo: '2031–2035', label: 'Phase IV', nodos: '100 nodes', desc: 'Data-operated network — market leadership' },
      ],
      criteriosTitle: 'Node Selection Criteria',
      criteriosHeaders: ['Tier', 'Population', 'Infrastructure', 'Context'],
      criterios: [
        { tier: 'A', hab: '+500k pop.', infra: 'Established wholesale market, pre-2000', corredor: 'National corridor' },
        { tier: 'B', hab: '200–500k pop.', infra: 'Consolidated regional market', corredor: 'Logistics corridor' },
        { tier: 'C', hab: '<200k pop.', infra: 'Emerging or under-construction market', corredor: 'Border / agro-industrial' },
      ],
    },
    moat: {
      label: 'Competitive Advantage',
      title: 'Why no one else can do this',
      subtitle: 'Merca Capital\'s moat is not capital — it\'s access, trust, and know-how accumulated over 15 years of direct operations in wholesale markets.',
      items: [
        { icon: '🏛', sub: 'VP — MERCAMÉXICO', title: 'Unique Guild Position', desc: 'Institutional access to Mexico\'s 329 Wholesale Food Markets through the sector\'s top association. Deal flow no external fund can originate or buy.', metric: '329 markets · 1 exclusive access' },
        { icon: '🤝', sub: '15 years of commercial relationships', title: 'Network of 300+ Operators', desc: 'A network of wholesale merchants built operation by operation over 15 years. Cannot be bought. Cannot be replicated. Earned with time and trust.', metric: '300+ active commercial relationships' },
        { icon: '📊', sub: 'Proprietary data', title: 'Operational Intelligence', desc: 'Occupancy, NOI, and commercial behavior data from 15 years of direct operations. The most valuable input for underwriting new assets.', metric: '15 years of proprietary operational data' },
        { icon: '🌐', sub: 'Data & Connectivity Advantage', title: 'Proprietary Technology Layer', desc: 'The Mercahorro network serves as the foundation for a technology layer no other private equity fund can replicate: Edge Data Centers, node-level financial processing, and food supply chain data monetization.', metric: '100 nodes · 1 proprietary data network' },
      ],
      quote: '"We are not a fund that found an asset. We are the asset that became a fund."',
      quoteBy: '— Alejandro Gayosso Mar, Founder',
    },
    team: {
      label: 'Leadership Team',
      title: 'The team behind the capital',
      subtitle: '45+ years of combined experience in infrastructure, private capital, and wholesale market operations in Mexico.',
      badge: 'Institutional Affiliation',
      badgeText: 'Active members of MERCAMÉXICO — Mexican Association of Markets and Wholesale Food Centers, the organization representing all 329 Wholesale Markets in the country.',
      members: [
        { initials: 'AG', name: 'Alejandro Gayosso Mar', title: 'Managing Partner — Strategy & National Infrastructure', bio: 'VP of MERCAMÉXICO. Lead strategist in modernizing Mexico's national wholesale network. Architect of the evolutionary blueprint for wholesale infrastructure, integrating Edge Computing and last-mile logistics. Transforms traditional assets into high-scalability digital nodes.', credentials: ['Systems Eng. — Tec de Monterrey', 'MBA — IE Business School, Madrid'], roles: ['VP — MERCAMÉXICO', 'Founder — Grupo Mercahorro', 'Co-founder — Altavela Group'], color: '#C08A3E' },
        { initials: 'JS', name: 'José Sánchez', title: 'Partner — Investment Structure', bio: 'Expert in asset management for Family Offices and international financial structuring. Oversees the technical, fiscal and institutional integrity of the fund, bringing the sophistication required for high-net-worth capital management.', credentials: ['International Corporate Banking', 'International Financial Structuring'], roles: ['Co-founder — Altavela Group', 'Institutional relations Europe–LATAM'], color: '#7C8E76' },
        { initials: 'JO', name: 'Javier Olvera', title: 'Partner — Digital Transformation & Strategy', bio: 'Leader in digital transformation and technology ecosystems. Spearheads the evolution of physical assets into an intelligent network, integrating Edge Data Centers and financial aggregation solutions at each network node.', credentials: ['Corporate Law — Trusts & SAPI', 'Digital Ecosystem Architecture — Be One Systems'], roles: ['Digital Transformation & Strategy', 'Director — Be One Systems'], color: '#7A8B9A' },
      ],
      expand: 'View profile',
      collapse: 'Close',
      formation: 'Education',
      roles: 'Roles',
    },
    deck: {
      label: 'Investment Materials',
      title: 'Access investment materials',
      subtitle: 'Two access levels, calibrated to the investor\'s profile.',
      teaserBadge: 'Free · No form required',
      teaserTitle: 'Investment Teaser',
      teaserDesc: '8 slides. Overview of thesis, track record, and team. Immediate access.',
      teaserItems: ['Investment thesis', 'Asset track record', 'Key fund metrics', 'Leadership team profile'],
      teaserBtn: 'Download Teaser →',
      featuredBadge: 'INSTITUTIONAL',
      accessBadge: 'Qualified access',
      deckTitle: 'Full Deck + Model',
      deckDesc: 'Full executive deck + financial structure + projections per asset.',
      deckItems: ['Detailed financial model', 'NOI projections per asset', 'Legal structure SAPI/Trust', 'Full node pipeline', 'Investment terms (40/30/30)', 'Due diligence package'],
      deckBtn: 'Request Access →',
      formTitle: 'Investor Profile',
      formSubtitle: 'You will receive the material by email within 24 business hours.',
      fields: { name: 'Full name', email: 'Corporate email', company: 'Firm / Family Office', type: 'Investor type', aum: 'Approximate AUM (USD)' },
      typeOptions: ['Family Office', 'Fund of Funds', 'HNWI / High Net Worth', 'Institutional / Bank', 'Corporate'],
      aumOptions: ['< $10M', '$10M – $50M', '$50M – $200M', '$200M – $1B', '> $1B'],
      privacy: 'Your information is confidential and used solely to classify your investment profile.',
      back: '← Back',
      submit: 'Request Full Deck →',
      sending: 'Sending...',
      successTitle: 'Request received',
      successLine1: 'You will receive the executive deck at',
      successLine2: 'within 24 business hours. A Merca Capital partner will personally review your profile.',
      calendarBtn: 'Schedule Call with Investment Partners →',
    },
  },
};

// ============================================
// 5. RENDER PRINCIPAL
// ============================================

export default function MercaCapitalPage() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [bannerVisible, setBannerVisible] = useState(true);
  const t = content[lang];

  return (
    <main style={{ overflowX: 'hidden', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#000B29' }}>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.8)} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }

        /* ── MOBILE RESPONSIVE ─────────────────────── */
        @media (max-width: 768px) {

          /* Nav */
          .mc-nav-links { display: none !important; }
          .mc-nav-links.open { display: flex !important; flex-direction: column; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,11,41,0.98); z-index: 999; padding: 6rem 2rem 2rem; gap: 1.5rem; align-items: center; justify-content: center; animation: fadeIn 0.2s ease; }
          .mc-hamburger { display: flex !important; }

          /* Hero */
          .mc-hero-grid { grid-template-columns: 1fr !important; padding: 7rem 1.5rem 3rem !important; }
          .mc-hero-pillars { display: none !important; }
          .mc-hero-btns { flex-direction: column !important; gap: 0.75rem !important; }
          .mc-hero-btns a { text-align: center !important; }

          /* Stats */
          .mc-stats-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .mc-stats-grid > div:nth-child(4),
          .mc-stats-grid > div:nth-child(5) { grid-column: span 1; }

          /* Sections padding */
          .mc-section { padding: 4rem 1.5rem !important; }

          /* Portfolio 2-col → 1-col */
          .mc-portfolio-grid { grid-template-columns: 1fr !important; }

          /* Team 2-col → 1-col */
          .mc-team-grid { grid-template-columns: 1fr !important; }

          /* Moat 2-col → 1-col */
          .mc-moat-grid { grid-template-columns: 1fr !important; background: transparent !important; gap: 12px !important; }
          .mc-moat-grid > div { border-right: none !important; }

          /* Tesis 3-col → 1-col */
          .mc-tesis-items { grid-template-columns: 1fr !important; }
          .mc-tesis-anticyclical { grid-template-columns: 1fr !important; }

          /* Model 4-col → 2-col */
          .mc-model-steps { grid-template-columns: repeat(2, 1fr) !important; }

          /* Programa fases 4-col → 2-col */
          .mc-fases-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .mc-criterios-row { grid-template-columns: 50px 1fr !important; }
          .mc-criterios-hide { display: none !important; }

          /* Deck 2-col → 1-col */
          .mc-deck-grid { grid-template-columns: 1fr !important; }

          /* Form 2-col → 1-col */
          .mc-form-grid { grid-template-columns: 1fr !important; }
          .mc-form-full { grid-column: span 1 !important; }

          /* Contact 2-col → 1-col */
          .mc-contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }

          /* Foote */
          footer { padding: 3rem 1.5rem 2rem !important; }
        }

        @media (max-width: 480px) {
          .mc-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .mc-model-steps { grid-template-columns: 1fr !important; }
          .mc-fases-grid { grid-template-columns: 1fr !important; }
          /* CTA prominent on mobile */
          footer a[href*="calendar.google.com"] { padding: 1.4rem 2rem !important; font-size: 0.9rem !important; width: 100%; box-sizing: border-box; }
        }
      `}</style>
      {bannerVisible && <MomentumBanner onClose={() => setBannerVisible(false)} />}
      <Header lang={lang} setLang={setLang} t={t} bannerVisible={bannerVisible} />
      <Hero t={t} />
      <Stats t={t} />
      <InsightSection t={t} />
      <Portfolio t={t} />
      <ProgramaNodos lang={lang} />
      <Thesis t={t} lang={lang} />
      <Model t={t} />
      <UnfairAdvantage lang={lang} />
      <TeamSection lang={lang} />
      <GatedDeckSection lang={lang} />
      <Contact t={t} lang={lang} />
      <Footer t={t} lang={lang} />
    </main>
  );
}
