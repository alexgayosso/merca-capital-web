'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// ============================================
// MERCA CAPITAL - INSTITUTIONAL INVESTMENT FUND
// "The Blackstone of Agri-Food Infrastructure in LATAM"
// ============================================

// ============================================
// 1. TIPOS DE DATOS - TIPADO ESTRICTO
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
// 2. DICCIONARIO BILINGÜE - NARRATIVA INSTITUCIONAL
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
          { name: 'La Laguna · El Bajío', description: 'Corredor Agroindustrial de México' },
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
        {
          name: 'Mercahorro Torreón',
          sqm: '16,000 m²',
          status: 'Operando',
          city: 'Torreón, Coahuila',
          description: 'Flagship asset. Centro de abasto regional con flujos estabilizados y ocupación del 95%.',
          year: '2010',
          image: '/projects/mercahorro-torreon.jpg'
        },
        {
          name: 'Plaza Abastos Torreón',
          sqm: '9,000 m²',
          status: 'Operando',
          city: 'Torreón, Coahuila',
          description: 'Activo core con infraestructura moderna. NOI estabilizado desde 2018.',
          year: '2015',
          image: '/projects/plaza-abastos-torreon.jpg'
        },
        {
          name: 'Mercahorro Gómez Palacio',
          sqm: '8,000 m²',
          status: 'Value-Add',
          city: 'Gómez Palacio, Durango',
          description: 'Desarrollo en fase final. Pre-arrendado 70%. Estabilización Q4 2025.',
          year: '2025',
          image: '/projects/mercahorro-gomez.jpg'
        },
        {
          name: 'Mercahorro Silao',
          sqm: '8,000 m²',
          status: 'Development',
          city: 'Silao, Guanajuato',
          description: 'Pipeline estratégico en corredor del Bajío. LOIs firmadas con off-takers.',
          year: '2026',
          image: '/projects/mercahorro-silao.jpg'
        }
      ]
    },
    thesis: {
      title: 'Tesis de Inversión',
      subtitle: '¿Por qué infraestructura de abasto?',
      antiCyclical: {
        title: 'Asset Class Anticíclico',
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
        success: '¡Enviado! Te contactaremos en 24 horas.',
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
      rights: '© 2025 Merca Capital SAPI de CV. Todos los derechos reservados.',
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
          { name: 'La Laguna · El Bajío', description: 'Mexico\'s Agri-Industrial Corridor' },
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
        {
          name: 'Mercahorro Torreón',
          sqm: '16,000 m²',
          status: 'Operating',
          city: 'Torreón, Coahuila',
          description: 'Flagship asset. Regional wholesale center with stabilized cash flows and 95% occupancy.',
          year: '2010',
          image: '/projects/mercahorro-torreon.jpg'
        },
        {
          name: 'Plaza Abastos Torreón',
          sqm: '9,000 m²',
          status: 'Operating',
          city: 'Torreón, Coahuila',
          description: 'Core asset with modern infrastructure. Stabilized NOI since 2018.',
          year: '2015',
          image: '/projects/plaza-abastos-torreon.jpg'
        },
        {
          name: 'Mercahorro Gómez Palacio',
          sqm: '8,000 m²',
          status: 'Value-Add',
          city: 'Gómez Palacio, Durango',
          description: 'Final development phase. 70% pre-leased. Stabilization Q4 2025.',
          year: '2025',
          image: '/projects/mercahorro-gomez.jpg'
        },
        {
          name: 'Mercahorro Silao',
          sqm: '8,000 m²',
          status: 'Development',
          city: 'Silao, Guanajuato',
          description: 'Strategic pipeline in El Bajío corridor. Signed LOIs with off-takers.',
          year: '2026',
          image: '/projects/mercahorro-silao.jpg'
        }
      ]
    },
    thesis: {
      title: 'Investment Thesis',
      subtitle: 'Why food infrastructure?',
      antiCyclical: {
        title: 'Anti-Cyclical Asset Class',
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
        success: 'Sent! We\'ll contact you within 24 hours.',
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
      rights: '© 2025 Merca Capital SAPI de CV. All rights reserved.',
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

const Header: React.FC<{ lang: 'es' | 'en'; setLang: (l: 'es' | 'en') => void; t: ContentStructure }> = ({ lang, setLang, t }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(0,11,41,0.98)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(192,138,62,0.2)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: scrolled ? '70px' : '100px', transition: 'height 0.4s ease' }}>
        <div style={{ position: 'relative', height: scrolled ? '45px' : '60px', width: scrolled ? '180px' : '240px', transition: 'all 0.4s ease' }}>
          <Image src="/Transparent_Logo_Blanco.png" alt="Merca Capital" fill style={{ objectFit: 'contain', objectPosition: 'left' }} priority />
        </div>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {(['portfolio', 'thesis', 'model', 'contact'] as const).map((section) => (
            <button key={section} onClick={() => scrollTo(section)}
              style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', cursor: 'pointer', transition: 'color 0.3s', textTransform: 'uppercase' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C08A3E'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
              {t.nav[section]}
            </button>
          ))}
          <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            style={{ background: 'transparent', border: '1px solid rgba(192,138,62,0.5)', color: '#C08A3E', padding: '6px 14px', fontSize: '0.65rem', fontWeight: 700, cursor: 'pointer', borderRadius: '2px', marginLeft: '1rem', transition: 'all 0.3s' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#C08A3E'; e.currentTarget.style.color = '#000B29'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C08A3E'; }}>
            {lang.toUpperCase()}
          </button>
        </nav>
      </div>
    </header>
  );
};

const Hero: React.FC<{ t: ContentStructure }> = ({ t }) => (
  <section style={{ minHeight: '100vh', background: '#000B29', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(192,138,62,0.08) 0%, transparent 50%)', zIndex: 1 }} />
    <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(to left, rgba(192,138,62,0.03) 0%, transparent 100%)', zIndex: 1 }} />
    
    <div style={{ width: '100%', maxWidth: '1600px', margin: '0 auto', padding: '8rem 4rem 4rem', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 2 }}>
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

      <div style={{ position: 'relative', padding: '2.5rem' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '50px', height: '50px', borderTop: '2px solid #C08A3E', borderLeft: '2px solid #C08A3E' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '50px', height: '50px', borderTop: '2px solid #C08A3E', borderRight: '2px solid #C08A3E' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '50px', height: '50px', borderBottom: '2px solid #C08A3E', borderLeft: '2px solid #C08A3E' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '50px', height: '50px', borderBottom: '2px solid #C08A3E', borderRight: '2px solid #C08A3E' }} />

        <div style={{ background: 'rgba(0,11,41,0.8)', border: '1px solid rgba(192,138,62,0.2)', padding: '2.5rem', backdropFilter: 'blur(10px)' }}>
          <div style={{ color: '#C08A3E', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.25em', marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {t.hero.pillars.title}
            <span style={{ opacity: 0.6 }}>▲</span>
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

const Stats: React.FC<{ t: ContentStructure }> = ({ t }) => (
  <section style={{ padding: '7rem 4rem', background: '#F8F7F4' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 400, color: '#000B29', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>{t.stats.title}</h2>
        <p style={{ color: '#666', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>{t.stats.description}</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem' }}>
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

const InsightSection: React.FC<{ t: ContentStructure }> = ({ t }) => (
  <section style={{ padding: '5rem 4rem', background: '#000000', borderTop: '3px solid #C08A3E', borderBottom: '3px solid #C08A3E', position: 'relative' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400, color: '#C08A3E', margin: '0 0 2.5rem 0', letterSpacing: '0.15em' }}>
        {t.insight.title}
      </h2>
      
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

const Portfolio: React.FC<{ t: ContentStructure }> = ({ t }) => (
  <section id="portfolio" style={{ padding: '7rem 4rem', background: '#FFFFFF' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 400, color: '#000B29', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>{t.portfolio.title}</h2>
        <p style={{ color: '#666', fontSize: '1.05rem' }}>{t.portfolio.subtitle}</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem' }}>
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

const Thesis: React.FC<{ t: ContentStructure }> = ({ t }) => (
  <section id="thesis" style={{ padding: '7rem 4rem', background: '#000B29' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 400, color: '#FFF', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>{t.thesis.title}</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem' }}>{t.thesis.subtitle}</p>
      </div>

      <div style={{ background: 'rgba(192,138,62,0.08)', borderLeft: '4px solid #C08A3E', padding: '3rem', marginBottom: '4rem' }}>
        <h3 style={{ color: '#C08A3E', fontSize: '1.4rem', fontWeight: 600, marginBottom: '1.5rem', fontFamily: 'Georgia, serif' }}>{t.thesis.antiCyclical.title}</h3>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>{t.thesis.antiCyclical.description}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {t.thesis.antiCyclical.points.map((point, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <span style={{ color: '#C08A3E', marginTop: '2px' }}>{Icons.check()}</span>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: 1.5 }}>{point}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
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

const Model: React.FC<{ t: ContentStructure }> = ({ t }) => (
  <section id="model" style={{ padding: '7rem 4rem', background: '#F8F7F4' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 400, color: '#000B29', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>{t.model.title}</h2>
        <p style={{ color: '#666', fontSize: '1.05rem' }}>{t.model.subtitle}</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
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

const LeadershipAndCTA: React.FC<{ t: ContentStructure }> = ({ t }) => (
  <section style={{ padding: '7rem 4rem', background: '#FFFFFF' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
      <div>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2.2rem', fontWeight: 400, color: '#000B29', margin: '0 0 2.5rem 0', letterSpacing: '-0.02em' }}>{t.leadership.title}</h2>
        
        {/* Párrafo institucional elegante */}
        <p style={{ 
          color: '#444', 
          fontSize: '1.1rem', 
          lineHeight: 1.8, 
          marginBottom: '2.5rem',
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          borderLeft: '3px solid #C08A3E',
          paddingLeft: '1.5rem'
        }}>
          {t.leadership.bio}
        </p>
        
        <div style={{ background: '#000B29', padding: '2rem', borderLeft: '4px solid #C08A3E' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <span style={{ color: '#C08A3E' }}>{Icons.target()}</span>
            <span style={{ color: '#C08A3E', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em' }}>{t.leadership.proofLabel}</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>{t.leadership.proofOfConcept}</p>
        </div>
      </div>

      <div style={{ background: '#000B29', padding: '4rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h3 style={{ fontFamily: 'Georgia, serif', color: '#FFF', fontSize: '2rem', fontWeight: 400, margin: '0 0 1.5rem 0', letterSpacing: '-0.02em' }}>{t.cta.title}</h3>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.7, margin: '0 auto 2.5rem', maxWidth: '380px' }}>{t.cta.description}</p>
        <a href="#contact" style={{ display: 'inline-block', background: '#C08A3E', color: '#000B29', padding: '1.2rem 2.5rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textDecoration: 'none' }}>
          {t.cta.button}
        </a>
      </div>
    </div>
  </section>
);

const Contact: React.FC<{ t: ContentStructure }> = ({ t }) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    try {
      const response = await fetch('https://formspree.io/f/xbdqykov', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) { setStatus('success'); form.reset(); }
      else { setStatus('error'); }
    } catch { setStatus('error'); }
  };

  const resetForm = () => setStatus('idle');

  // Checkmark icon for success state
  const CheckCircle = () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#C08A3E" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="9 12 11.5 14.5 16 9"/>
    </svg>
  );

  return (
    <section id="contact" style={{ padding: '7rem 4rem', background: '#F8F7F4' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem' }}>
        <div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 400, color: '#000B29', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>{t.contact.title}</h2>
          <p style={{ color: '#666', fontSize: '1.05rem', marginBottom: '3rem' }}>{t.contact.subtitle}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { icon: Icons.phone(), text: t.contact.info.phone },
              { icon: Icons.mail(), text: t.contact.info.email },
              { icon: Icons.mapPin(), text: t.contact.info.locations }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ width: '45px', height: '45px', background: '#000B29', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C08A3E' }}>{item.icon}</div>
                <span style={{ color: '#000B29', fontWeight: 500, fontSize: '1rem' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Container with corner accents like Altavela */}
        <div style={{ position: 'relative', padding: '0.5rem' }}>
          {/* Corner accents */}
          <div style={{ position: 'absolute', top: 0, right: 0, width: '40px', height: '40px', borderTop: '2px solid #C08A3E', borderRight: '2px solid #C08A3E' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '40px', borderBottom: '2px solid #C08A3E', borderLeft: '2px solid #C08A3E' }} />
          
          <div style={{ background: '#FFF', padding: '3rem', boxShadow: '0 15px 50px rgba(0,0,0,0.05)', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            
            {/* SUCCESS STATE - Full screen confirmation like Altavela */}
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                  <CheckCircle />
                </div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', fontWeight: 400, color: '#000B29', margin: '0 0 1.5rem 0' }}>
                  {t.contact.form.successTitle}
                </h3>
                <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.7, margin: '0 auto 2.5rem', maxWidth: '320px' }}>
                  {t.contact.form.successMessage}
                </p>
                <button 
                  onClick={resetForm}
                  style={{ 
                    background: 'transparent', 
                    border: 'none', 
                    color: '#C08A3E', 
                    fontSize: '0.75rem', 
                    fontWeight: 600, 
                    letterSpacing: '0.15em', 
                    textTransform: 'uppercase', 
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px'
                  }}
                >
                  {t.contact.form.sendAnother}
                </button>
              </div>
            ) : (
              /* FORM STATE */
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ color: '#C08A3E', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
                  {t.contact.form.formTitle}
                </div>
                {[
                  { n: 'name', l: t.contact.form.name, ty: 'text' },
                  { n: 'email', l: t.contact.form.email, ty: 'email' },
                  { n: 'company', l: t.contact.form.company, ty: 'text' }
                ].map((f) => (
                  <div key={f.n}>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, color: '#000B29', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{f.l}</label>
                    <input type={f.ty} name={f.n} required={f.n !== 'company'} style={{ width: '100%', padding: '1rem', border: 'none', borderBottom: '2px solid #E8E8E8', background: 'transparent', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderBottomColor = '#C08A3E'} onBlur={(e) => e.target.style.borderBottomColor = '#E8E8E8'} />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, color: '#000B29', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.contact.form.message}</label>
                  <textarea name="message" rows={3} required style={{ width: '100%', padding: '1rem', border: 'none', borderBottom: '2px solid #E8E8E8', background: 'transparent', fontSize: '1rem', outline: 'none', resize: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderBottomColor = '#C08A3E'} onBlur={(e) => e.target.style.borderBottomColor = '#E8E8E8'} />
                </div>
                <button type="submit" disabled={status === 'sending'} style={{ background: '#000B29', color: '#FFF', padding: '1.2rem', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', marginTop: '0.5rem', transition: 'background 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#C08A3E'} onMouseLeave={(e) => e.currentTarget.style.background = '#000B29'}>
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

const Footer: React.FC<{ t: ContentStructure }> = ({ t }) => (
  <footer style={{ padding: '4rem 4rem 2.5rem', background: '#000B29', borderTop: '1px solid rgba(192,138,62,0.2)' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
      <div style={{ position: 'relative', height: '55px', width: '240px' }}>
        <Image src="/Transparent_Logo_Blanco.png" alt="Merca Capital" fill style={{ objectFit: 'contain' }} />
      </div>
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{t.footer.tagline}</p>
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

// ============================================
// 5. RENDER PRINCIPAL
// ============================================

export default function MercaCapitalPage() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const t = content[lang];

  return (
    <main style={{ overflowX: 'hidden', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#000B29' }}>
      <Header lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <Stats t={t} />
      <InsightSection t={t} />
      <Portfolio t={t} />
      <Thesis t={t} />
      <Model t={t} />
      <LeadershipAndCTA t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </main>
  );
}
