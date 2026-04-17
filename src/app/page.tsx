'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// ============================================
// TIPOS ESTRICTOS
// ============================================

type NavContent = {
  about: string;
  portfolio: string;
  thesis: string;
  model: string;
  contact: string;
};

type HeroContent = {
  overline: string;
  headline: string;
  subhead: string;
  cta: string;
  ctaSecondary: string;
};

type StatItem = {
  value: string;
  label: string;
  highlight?: boolean;
};

type StatsContent = {
  title: string;
  description: string;
  items: StatItem[];
};

type ProjectItem = {
  name: string;
  sqm: string;
  status: string;
  city: string;
  description: string;
  year: string;
};

type PortfolioContent = {
  title: string;
  subtitle: string;
  projects: ProjectItem[];
};

type ThesisItem = {
  title: string;
  description: string;
  icon: string;
};

type AntiCyclicalContent = {
  title: string;
  description: string;
  points: string[];
};

type ThesisContent = {
  title: string;
  subtitle: string;
  antiCyclical: AntiCyclicalContent;
  items: ThesisItem[];
};

type ModelStep = {
  number: string;
  title: string;
  description: string;
};

type ModelContent = {
  title: string;
  subtitle: string;
  description: string;
  steps: ModelStep[];
};

type LeadershipContent = {
  title: string;
  name: string;
  role: string;
  bio: string;
};

type CtaContent = {
  title: string;
  description: string;
  button: string;
};

type FormContent = {
  name: string;
  email: string;
  company: string;
  message: string;
  submit: string;
  success: string;
  error: string;
};

type ContactInfoContent = {
  phone: string;
  email: string;
  locations: string;
};

type ContactContent = {
  title: string;
  subtitle: string;
  form: FormContent;
  info: ContactInfoContent;
};

type FooterContent = {
  tagline: string;
  rights: string;
  privacy: string;
};

type ContentStructure = {
  nav: NavContent;
  hero: HeroContent;
  stats: StatsContent;
  portfolio: PortfolioContent;
  thesis: ThesisContent;
  model: ModelContent;
  leadership: LeadershipContent;
  cta: CtaContent;
  contact: ContactContent;
  footer: FooterContent;
};

type ContentLanguages = {
  es: ContentStructure;
  en: ContentStructure;
};

// ============================================
// CONTENIDO BILINGÜE
// ============================================

const content: ContentLanguages = {
  es: {
    nav: {
      about: 'Nosotros',
      portfolio: 'Portafolio',
      thesis: 'Tesis',
      model: 'Modelo',
      contact: 'Contacto'
    },
    hero: {
      overline: 'VISIÓN INMOBILIARIA',
      headline: 'Desarrollamos la infraestructura que alimenta a México',
      subhead: 'Mercados de abasto que operan con o sin crisis. 15 años construyendo activos esenciales con rendimientos comprobados.',
      cta: 'Explorar Portafolio',
      ctaSecondary: 'Contactar'
    },
    stats: {
      title: 'Track Record Institucional',
      description: 'Más de una década construyendo la infraestructura de abasto más sólida del norte de México.',
      items: [
        { value: '52,000+', label: 'm² desarrollados', highlight: true },
        { value: '15+', label: 'años de operación', highlight: true },
        { value: '5', label: 'mercados construidos' },
        { value: '90%', label: 'ocupación promedio' },
        { value: '300+', label: 'comerciantes activos' }
      ]
    },
    portfolio: {
      title: 'Portafolio de Activos',
      subtitle: 'Infraestructura comercial de abasto en operación',
      projects: [
        { 
          name: 'Mercahorro Torreón', 
          sqm: '9,000 m²', 
          status: 'En operación', 
          city: 'Torreón, Coahuila',
          description: 'Centro de abasto regional con alta rotación de productos frescos y abarrotes.',
          year: '2012'
        },
        { 
          name: 'Mercahorro Gómez Palacio', 
          sqm: '9,000 m²', 
          status: 'En operación', 
          city: 'Gómez Palacio, Durango',
          description: 'Hub de distribución alimentaria para la Comarca Lagunera.',
          year: '2015'
        },
        { 
          name: 'Plaza Abastos Torreón', 
          sqm: '12,000 m²', 
          status: 'En operación', 
          city: 'Torreón, Coahuila',
          description: 'Complejo comercial mayorista con infraestructura de última generación.',
          year: '2018'
        },
        { 
          name: 'Plaza Abastos Monterrey', 
          sqm: '15,000 m²', 
          status: 'En operación', 
          city: 'Monterrey, Nuevo León',
          description: 'El desarrollo más grande de nuestro portafolio, sirviendo al área metropolitana.',
          year: '2021'
        },
        { 
          name: 'Mercahorro Gómez II', 
          sqm: '7,000 m²', 
          status: 'En construcción', 
          city: 'Gómez Palacio, Durango',
          description: 'Expansión estratégica para cubrir la demanda creciente de la región.',
          year: '2025'
        }
      ]
    },
    thesis: {
      title: 'Tesis de Inversión',
      subtitle: '¿Por qué mercados de abasto?',
      antiCyclical: {
        title: 'Modelo Anticíclico',
        description: 'Los mercados de abasto son infraestructura esencial. La gente come todos los días, independientemente de las condiciones económicas. Mientras otros sectores inmobiliarios sufren en recesiones, el abasto mantiene su demanda — e incluso la incrementa cuando los consumidores buscan precios más accesibles.',
        points: [
          'Demanda inelástica: alimentación es gasto no discrecional',
          'Rendimiento estable en cualquier ciclo económico',
          'Protección natural contra la inflación vía rentas indexadas',
          'Ocupación consistente por modelo de negocio probado'
        ]
      },
      items: [
        {
          title: 'Mercado Fragmentado',
          description: 'La infraestructura de abasto en México está subdesarrollada. Consolidamos un sector con enorme potencial de profesionalización.',
          icon: 'grid'
        },
        {
          title: 'Flujos Predecibles',
          description: '90% de ocupación histórica. Base diversificada de comerciantes generando ingresos estables mes a mes.',
          icon: 'chart'
        },
        {
          title: 'Barrera de Entrada',
          description: 'Desarrollar mercados de abasto requiere expertise especializado, relaciones con comerciantes y conocimiento regulatorio local.',
          icon: 'shield'
        }
      ]
    },
    model: {
      title: 'Modelo Integrado',
      subtitle: 'Control total del ciclo de inversión',
      description: 'No solo construimos y vendemos. Permanecemos invertidos junto a nuestros socios a largo plazo.',
      steps: [
        { 
          number: '01',
          title: 'Originación', 
          description: 'Identificamos ubicaciones estratégicas en mercados desatendidos con demanda comprobada.' 
        },
        { 
          number: '02',
          title: 'Desarrollo', 
          description: 'Diseño y construcción con equipo propio. Control de calidad y costos de principio a fin.' 
        },
        { 
          number: '03',
          title: 'Comercialización', 
          description: 'Pre-arrendamos a comerciantes establecidos. Los proyectos inician operación con ocupación asegurada.' 
        },
        { 
          number: '04',
          title: 'Administración', 
          description: 'Operación profesional a largo plazo. Cobranza, mantenimiento y mejora continua del activo.' 
        }
      ]
    },
    leadership: {
      title: 'Liderazgo',
      name: 'Alejandro Gayosso Heimpel',
      role: 'Fundador y CEO',
      bio: '15 años de experiencia en desarrollo de infraestructura comercial en México. Ingeniería por el Tecnológico de Monterrey, MBA por IE Business School en Madrid. Operaciones en México con base en Madrid, España.'
    },
    cta: {
      title: 'Capital Privado en Despliegue',
      description: 'Estamos asociándonos con inversionistas privados para escalar nuestro modelo probado. Family offices, fondos y socios estratégicos interesados en infraestructura comercial esencial.',
      button: 'Iniciar Conversación'
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Hablemos de oportunidades de inversión',
      form: {
        name: 'Nombre completo',
        email: 'Email corporativo',
        company: 'Empresa / Family Office',
        message: 'Mensaje',
        submit: 'Enviar Mensaje',
        success: '¡Mensaje enviado! Te contactaremos pronto.',
        error: 'Error al enviar. Intenta de nuevo.'
      },
      info: {
        phone: '+52 871 204 0725',
        email: 'hola@mercacapital.com',
        locations: 'Madrid, España | Monterrey, México'
      }
    },
    footer: {
      tagline: 'Visión Inmobiliaria',
      rights: '© 2025 Merca Capital. Todos los derechos reservados.',
      privacy: 'Aviso de Privacidad'
    }
  },
  en: {
    nav: {
      about: 'About',
      portfolio: 'Portfolio',
      thesis: 'Thesis',
      model: 'Model',
      contact: 'Contact'
    },
    hero: {
      overline: 'REAL ESTATE VISION',
      headline: 'We Build the Infrastructure That Feeds Mexico',
      subhead: 'Wholesale food markets that operate through any crisis. 15 years building essential assets with proven returns.',
      cta: 'Explore Portfolio',
      ctaSecondary: 'Contact Us'
    },
    stats: {
      title: 'Institutional Track Record',
      description: 'Over a decade building the most solid wholesale infrastructure in Northern Mexico.',
      items: [
        { value: '52,000+', label: 'sqm developed', highlight: true },
        { value: '15+', label: 'years operating', highlight: true },
        { value: '5', label: 'markets built' },
        { value: '90%', label: 'avg. occupancy' },
        { value: '300+', label: 'active merchants' }
      ]
    },
    portfolio: {
      title: 'Asset Portfolio',
      subtitle: 'Operating wholesale food infrastructure',
      projects: [
        { 
          name: 'Mercahorro Torreón', 
          sqm: '9,000 m²', 
          status: 'Operating', 
          city: 'Torreón, Coahuila',
          description: 'Regional wholesale center with high turnover of fresh products and groceries.',
          year: '2012'
        },
        { 
          name: 'Mercahorro Gómez Palacio', 
          sqm: '9,000 m²', 
          status: 'Operating', 
          city: 'Gómez Palacio, Durango',
          description: 'Food distribution hub for the Laguna Region.',
          year: '2015'
        },
        { 
          name: 'Plaza Abastos Torreón', 
          sqm: '12,000 m²', 
          status: 'Operating', 
          city: 'Torreón, Coahuila',
          description: 'Wholesale commercial complex with state-of-the-art infrastructure.',
          year: '2018'
        },
        { 
          name: 'Plaza Abastos Monterrey', 
          sqm: '15,000 m²', 
          status: 'Operating', 
          city: 'Monterrey, Nuevo León',
          description: 'Our largest development, serving the metropolitan area.',
          year: '2021'
        },
        { 
          name: 'Mercahorro Gómez II', 
          sqm: '7,000 m²', 
          status: 'Under Development', 
          city: 'Gómez Palacio, Durango',
          description: 'Strategic expansion to meet growing regional demand.',
          year: '2025'
        }
      ]
    },
    thesis: {
      title: 'Investment Thesis',
      subtitle: 'Why wholesale food markets?',
      antiCyclical: {
        title: 'Anti-Cyclical Model',
        description: 'Wholesale food markets are essential infrastructure. People eat every day, regardless of economic conditions. While other real estate sectors suffer during recessions, food distribution maintains its demand — and even increases when consumers seek more accessible prices.',
        points: [
          'Inelastic demand: food is non-discretionary spending',
          'Stable performance through any economic cycle',
          'Natural inflation protection via indexed rents',
          'Consistent occupancy from proven business model'
        ]
      },
      items: [
        {
          title: 'Fragmented Market',
          description: 'Mexico\'s wholesale infrastructure is underdeveloped. We consolidate a sector with massive professionalization potential.',
          icon: 'grid'
        },
        {
          title: 'Predictable Cash Flows',
          description: '90% historical occupancy. Diversified merchant base generating stable monthly income.',
          icon: 'chart'
        },
        {
          title: 'Barrier to Entry',
          description: 'Developing food markets requires specialized expertise, merchant relationships, and local regulatory knowledge.',
          icon: 'shield'
        }
      ]
    },
    model: {
      title: 'Integrated Model',
      subtitle: 'Full control of the investment cycle',
      description: 'We don\'t just build and sell. We stay invested alongside our partners for the long term.',
      steps: [
        { 
          number: '01',
          title: 'Origination', 
          description: 'We identify strategic locations in underserved markets with proven demand.' 
        },
        { 
          number: '02',
          title: 'Development', 
          description: 'In-house design and construction. Quality and cost control from start to finish.' 
        },
        { 
          number: '03',
          title: 'Commercialization', 
          description: 'Pre-lease to established merchants. Projects start operations with secured occupancy.' 
        },
        { 
          number: '04',
          title: 'Asset Management', 
          description: 'Professional long-term operation. Collections, maintenance, and continuous improvement.' 
        }
      ]
    },
    leadership: {
      title: 'Leadership',
      name: 'Alejandro Gayosso Heimpel',
      role: 'Founder & CEO',
      bio: '15 years of experience in commercial infrastructure development in Mexico. Engineering from Tecnológico de Monterrey, MBA from IE Business School in Madrid. Operations in Mexico, based in Madrid, Spain.'
    },
    cta: {
      title: 'Private Capital Deploying',
      description: 'We are partnering with private investors to scale our proven model. Family offices, funds, and strategic partners interested in essential commercial infrastructure.',
      button: 'Start a Conversation'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Let\'s discuss investment opportunities',
      form: {
        name: 'Full name',
        email: 'Corporate email',
        company: 'Company / Family Office',
        message: 'Message',
        submit: 'Send Message',
        success: 'Message sent! We\'ll be in touch soon.',
        error: 'Error sending. Please try again.'
      },
      info: {
        phone: '+52 871 204 0725',
        email: 'hola@mercacapital.com',
        locations: 'Madrid, Spain | Monterrey, Mexico'
      }
    },
    footer: {
      tagline: 'Real Estate Vision',
      rights: '© 2025 Merca Capital. All rights reserved.',
      privacy: 'Privacy Policy'
    }
  }
};

// ============================================
// COLORES - PALETA NAVY + COBRE
// ============================================

const colors = {
  navy: {
    deep: '#000B29',
    dark: '#001242',
    medium: '#002266',
    light: '#0A3A8C',
  },
  copper: {
    dark: '#8B6914',
    main: '#C08A3E',
    light: '#D4A855',
    pale: '#E8C878',
  },
  neutral: {
    white: '#FFFFFF',
    cream: '#F5F3EF',
    gray: '#94A3B8',
    grayDark: '#64748B',
  }
};

// ============================================
// ICONOS - Usando React.ReactNode
// ============================================

const Icons: Record<string, () => React.ReactNode> = {
  shield: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  grid: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  ),
  chart: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>
    </svg>
  ),
  check: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  phone: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  mail: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  mapPin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  linkedin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  arrowRight: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  arrowDown: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
    </svg>
  ),
  menu: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  ),
  close: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
};

// ============================================
// COMPONENTES
// ============================================

// Header con Logo
const Header: React.FC<{ lang: 'es' | 'en'; setLang: (l: 'es' | 'en') => void; t: ContentStructure }> = ({ lang, setLang, t }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 2rem',
        background: scrolled ? 'rgba(0, 11, 41, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(192, 138, 62, 0.2)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        {/* Logo */}
        <div style={{ position: 'relative', height: '50px', width: '200px' }}>
          <Image
            src="/Transparent_Logo_Blanco.png"
            alt="Merca Capital"
            fill
            style={{ objectFit: 'contain', objectPosition: 'left' }}
            priority
          />
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-nav">
          {(['about', 'portfolio', 'thesis', 'model', 'contact'] as const).map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section === 'about' ? 'stats' : section)}
              style={{
                background: 'none',
                border: 'none',
                color: colors.neutral.cream,
                fontSize: '0.8rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
                opacity: 0.8,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = colors.copper.main;
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.neutral.cream;
                e.currentTarget.style.opacity = '0.8';
              }}
            >
              {t.nav[section]}
            </button>
          ))}
          
          {/* Language Toggle */}
          <div style={{ 
            display: 'flex', 
            gap: '4px', 
            marginLeft: '1rem', 
            padding: '4px',
            background: 'rgba(192, 138, 62, 0.1)',
            borderRadius: '6px',
            border: '1px solid rgba(192, 138, 62, 0.2)',
          }}>
            {(['es', 'en'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  padding: '8px 16px',
                  background: lang === l ? colors.copper.main : 'transparent',
                  color: lang === l ? colors.navy.deep : colors.neutral.cream,
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: colors.neutral.cream,
            cursor: 'pointer',
            padding: '8px',
          }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? Icons.close() : Icons.menu()}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: colors.navy.deep,
          borderTop: `1px solid rgba(192, 138, 62, 0.2)`,
          padding: '2rem',
        }}>
          {(['about', 'portfolio', 'thesis', 'model', 'contact'] as const).map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section === 'about' ? 'stats' : section)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                color: colors.neutral.cream,
                fontSize: '1rem',
                fontWeight: 500,
                padding: '1rem 0',
                cursor: 'pointer',
                borderBottom: '1px solid rgba(192, 138, 62, 0.1)',
              }}
            >
              {t.nav[section]}
            </button>
          ))}
          <div style={{ display: 'flex', gap: '8px', marginTop: '1.5rem' }}>
            {(['es', 'en'] as const).map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setMobileMenuOpen(false); }}
                style={{
                  padding: '10px 20px',
                  background: lang === l ? colors.copper.main : 'rgba(192, 138, 62, 0.1)',
                  color: lang === l ? colors.navy.deep : colors.neutral.cream,
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
};

// Hero Section - Alto Impacto
const Hero: React.FC<{ t: ContentStructure }> = ({ t }) => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `linear-gradient(135deg, ${colors.navy.deep} 0%, ${colors.navy.dark} 50%, ${colors.navy.deep} 100%)`,
      overflow: 'hidden',
    }}>
      {/* Luxury Pattern Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.03,
        backgroundImage: `radial-gradient(circle at 25% 25%, ${colors.copper.main} 1px, transparent 1px), radial-gradient(circle at 75% 75%, ${colors.copper.main} 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Gradient Orbs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '500px',
        height: '500px',
        background: `radial-gradient(circle, rgba(192, 138, 62, 0.08) 0%, transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(60px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '400px',
        height: '400px',
        background: `radial-gradient(circle, rgba(192, 138, 62, 0.06) 0%, transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(60px)',
      }} />

      {/* Top Accent Line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: `linear-gradient(90deg, transparent, ${colors.copper.main}, transparent)`,
      }} />

      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1100px',
        padding: '2rem',
        textAlign: 'center',
      }}>
        {/* Overline */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          <div style={{ height: '1px', width: '60px', background: colors.copper.main }} />
          <span style={{
            color: colors.copper.main,
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
          }}>
            {t.hero.overline}
          </span>
          <div style={{ height: '1px', width: '60px', background: colors.copper.main }} />
        </div>

        {/* Headline - Tipografía Grande */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 700,
          color: colors.neutral.white,
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em',
        }}>
          {t.hero.headline}
        </h1>

        {/* Subhead */}
        <p style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
          color: colors.neutral.gray,
          maxWidth: '700px',
          margin: '0 auto 3rem',
          lineHeight: 1.7,
        }}>
          {t.hero.subhead}
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <a
            href="#portfolio"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2.5rem',
              background: `linear-gradient(135deg, ${colors.copper.main} 0%, ${colors.copper.dark} 100%)`,
              color: colors.neutral.white,
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '4px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: `0 4px 20px rgba(192, 138, 62, 0.3)`,
            }}
          >
            {t.hero.cta}
            {Icons.arrowDown()}
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2.5rem',
              background: 'transparent',
              color: colors.neutral.cream,
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '4px',
              border: `2px solid rgba(192, 138, 62, 0.4)`,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            {t.hero.ctaSecondary}
            {Icons.arrowRight()}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '3rem',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
        <div style={{
          width: '28px',
          height: '44px',
          border: `2px solid rgba(192, 138, 62, 0.4)`,
          borderRadius: '14px',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '8px',
        }}>
          <div style={{
            width: '4px',
            height: '8px',
            background: colors.copper.main,
            borderRadius: '2px',
            animation: 'scroll 2s infinite',
          }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.5; transform: translateY(8px); }
        }
      `}</style>
    </section>
  );
};

// Stats Section - Efecto Cristal
const Stats: React.FC<{ t: ContentStructure }> = ({ t }) => {
  return (
    <section id="stats" style={{
      padding: '8rem 2rem',
      background: colors.neutral.cream,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 700,
            color: colors.navy.deep,
            marginBottom: '1rem',
          }}>
            {t.stats.title}
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: colors.neutral.grayDark,
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            {t.stats.description}
          </p>
        </div>

        {/* Stats Grid - Glass Effect */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
        }}>
          {t.stats.items.map((stat, index) => (
            <div
              key={index}
              style={{
                padding: '2.5rem 2rem',
                background: stat.highlight 
                  ? `linear-gradient(135deg, ${colors.navy.deep} 0%, ${colors.navy.dark} 100%)`
                  : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                textAlign: 'center',
                border: stat.highlight 
                  ? `1px solid ${colors.copper.main}`
                  : '1px solid rgba(0, 11, 41, 0.1)',
                boxShadow: stat.highlight
                  ? `0 8px 32px rgba(192, 138, 62, 0.2)`
                  : '0 4px 20px rgba(0, 11, 41, 0.05)',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 700,
                color: stat.highlight ? colors.copper.main : colors.copper.dark,
                lineHeight: 1,
                marginBottom: '0.75rem',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.85rem',
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: stat.highlight ? colors.neutral.gray : colors.neutral.grayDark,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Portfolio Section
const Portfolio: React.FC<{ t: ContentStructure }> = ({ t }) => {
  return (
    <section id="portfolio" style={{
      padding: '8rem 2rem',
      background: colors.neutral.white,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 700,
            color: colors.navy.deep,
            marginBottom: '1rem',
          }}>
            {t.portfolio.title}
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: colors.neutral.grayDark,
          }}>
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem',
        }}>
          {t.portfolio.projects.map((project, index) => (
            <div
              key={index}
              style={{
                background: colors.neutral.cream,
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 11, 41, 0.08)',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Image Placeholder - Industrial Design */}
              <div style={{
                position: 'relative',
                height: '200px',
                background: `linear-gradient(135deg, ${colors.navy.deep} 0%, ${colors.navy.medium} 100%)`,
                overflow: 'hidden',
              }}>
                {/* Grid Pattern */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.1,
                  backgroundImage: `
                    linear-gradient(${colors.copper.main} 1px, transparent 1px),
                    linear-gradient(90deg, ${colors.copper.main} 1px, transparent 1px)
                  `,
                  backgroundSize: '25px 25px',
                }} />
                
                {/* Building Silhouette */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '120px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '0 20px',
                }}>
                  <div style={{ width: '50px', height: '80px', background: 'rgba(192, 138, 62, 0.2)', borderRadius: '4px 4px 0 0' }} />
                  <div style={{ width: '70px', height: '100px', background: 'rgba(192, 138, 62, 0.25)', borderRadius: '4px 4px 0 0' }} />
                  <div style={{ width: '60px', height: '70px', background: 'rgba(192, 138, 62, 0.2)', borderRadius: '4px 4px 0 0' }} />
                  <div style={{ width: '45px', height: '90px', background: 'rgba(192, 138, 62, 0.25)', borderRadius: '4px 4px 0 0' }} />
                </div>

                {/* Status Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  padding: '0.5rem 1rem',
                  background: project.status.includes('construcción') || project.status.includes('Development')
                    ? colors.copper.main
                    : 'rgba(255, 255, 255, 0.15)',
                  color: colors.neutral.white,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  borderRadius: '4px',
                  backdropFilter: 'blur(10px)',
                }}>
                  {project.status}
                </div>

                {/* Year */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  padding: '0.35rem 0.75rem',
                  background: 'rgba(0, 11, 41, 0.8)',
                  color: colors.copper.light,
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  fontFamily: 'monospace',
                  borderRadius: '4px',
                }}>
                  {project.year}
                </div>

                {/* SQM Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1rem',
                  padding: '0.5rem 1rem',
                  background: colors.copper.main,
                  color: colors.neutral.white,
                  fontSize: '1rem',
                  fontWeight: 700,
                  borderRadius: '4px',
                }}>
                  {project.sqm}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: colors.navy.deep,
                  marginBottom: '0.5rem',
                }}>
                  {project.name}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: colors.copper.dark,
                  fontWeight: 500,
                  marginBottom: '0.75rem',
                }}>
                  {project.city}
                </p>
                <p style={{
                  fontSize: '0.9rem',
                  color: colors.neutral.grayDark,
                  lineHeight: 1.6,
                }}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Thesis Section
const Thesis: React.FC<{ t: ContentStructure }> = ({ t }) => {
  const getIcon = (iconName: string): React.ReactNode => {
    const iconFn = Icons[iconName];
    return iconFn ? iconFn() : null;
  };

  return (
    <section id="thesis" style={{
      padding: '8rem 2rem',
      background: colors.navy.deep,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 700,
            color: colors.neutral.white,
            marginBottom: '1rem',
          }}>
            {t.thesis.title}
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: colors.neutral.gray,
          }}>
            {t.thesis.subtitle}
          </p>
        </div>

        {/* Anti-Cyclical Box */}
        <div style={{
          background: 'rgba(192, 138, 62, 0.05)',
          border: `1px solid rgba(192, 138, 62, 0.2)`,
          borderLeft: `4px solid ${colors.copper.main}`,
          borderRadius: '0 12px 12px 0',
          padding: '2.5rem 3rem',
          marginBottom: '3rem',
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: colors.copper.main,
            marginBottom: '1rem',
          }}>
            {t.thesis.antiCyclical.title}
          </h3>
          <p style={{
            fontSize: '1rem',
            color: colors.neutral.gray,
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}>
            {t.thesis.antiCyclical.description}
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {t.thesis.antiCyclical.points.map((point, index) => (
              <li key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                color: colors.neutral.cream,
                marginBottom: '0.75rem',
                fontSize: '0.95rem',
              }}>
                <span style={{ color: colors.copper.main, marginTop: '2px', flexShrink: 0 }}>
                  {Icons.check()}
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Thesis Items */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {t.thesis.items.map((item, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(192, 138, 62, 0.15)',
                borderRadius: '12px',
                padding: '2rem',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                background: 'rgba(192, 138, 62, 0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.copper.main,
                marginBottom: '1.5rem',
              }}>
                {getIcon(item.icon)}
              </div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                color: colors.neutral.white,
                marginBottom: '0.75rem',
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: colors.neutral.gray,
                lineHeight: 1.7,
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Model Section
const Model: React.FC<{ t: ContentStructure }> = ({ t }) => {
  return (
    <section id="model" style={{
      padding: '8rem 2rem',
      background: colors.neutral.cream,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 700,
            color: colors.navy.deep,
            marginBottom: '1rem',
          }}>
            {t.model.title}
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: colors.neutral.grayDark,
          }}>
            {t.model.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
        }}>
          {t.model.steps.map((step, index) => (
            <div key={index} style={{
              background: colors.neutral.white,
              borderRadius: '12px',
              padding: '2rem',
              border: '1px solid rgba(0, 11, 41, 0.08)',
              position: 'relative',
            }}>
              <div style={{
                fontSize: '4rem',
                fontWeight: 700,
                color: 'rgba(192, 138, 62, 0.15)',
                lineHeight: 1,
                marginBottom: '1rem',
              }}>
                {step.number}
              </div>
              <h3 style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: colors.navy.deep,
                marginBottom: '0.75rem',
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: colors.neutral.grayDark,
                lineHeight: 1.6,
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div style={{
          textAlign: 'center',
          padding: '2rem 3rem',
          background: colors.navy.deep,
          borderRadius: '12px',
        }}>
          <p style={{
            fontSize: '1.25rem',
            color: colors.copper.light,
            fontStyle: 'italic',
            margin: 0,
          }}>
            "{t.model.description}"
          </p>
        </div>
      </div>
    </section>
  );
};

// Leadership Section
const Leadership: React.FC<{ t: ContentStructure }> = ({ t }) => {
  return (
    <section style={{
      padding: '8rem 2rem',
      background: colors.neutral.white,
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          fontWeight: 700,
          color: colors.navy.deep,
          marginBottom: '3rem',
        }}>
          {t.leadership.title}
        </h2>

        <div style={{
          background: colors.neutral.cream,
          borderRadius: '16px',
          padding: '3rem',
          border: '1px solid rgba(0, 11, 41, 0.08)',
        }}>
          {/* Initials */}
          <div style={{
            width: '80px',
            height: '80px',
            margin: '0 auto 1.5rem',
            background: colors.navy.deep,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `3px solid ${colors.copper.main}`,
          }}>
            <span style={{
              fontSize: '1.75rem',
              fontWeight: 700,
              color: colors.copper.main,
            }}>
              AG
            </span>
          </div>

          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: colors.navy.deep,
            marginBottom: '0.5rem',
          }}>
            {t.leadership.name}
          </h3>
          <p style={{
            fontSize: '1rem',
            color: colors.copper.dark,
            fontWeight: 600,
            marginBottom: '1.5rem',
          }}>
            {t.leadership.role}
          </p>
          <p style={{
            fontSize: '1rem',
            color: colors.neutral.grayDark,
            lineHeight: 1.7,
            maxWidth: '500px',
            margin: '0 auto',
          }}>
            {t.leadership.bio}
          </p>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/alejandro-gayosso-a93099287/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '1.5rem',
              color: colors.navy.deep,
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'color 0.2s ease',
            }}
          >
            {Icons.linkedin()}
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTA: React.FC<{ t: ContentStructure }> = ({ t }) => {
  return (
    <section style={{
      padding: '8rem 2rem',
      background: `linear-gradient(135deg, ${colors.navy.dark} 0%, ${colors.navy.deep} 100%)`,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Accent Line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: `linear-gradient(90deg, transparent, ${colors.copper.main}, transparent)`,
      }} />

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          fontWeight: 700,
          color: colors.neutral.white,
          marginBottom: '1.5rem',
        }}>
          {t.cta.title}
        </h2>
        <p style={{
          fontSize: '1.125rem',
          color: colors.neutral.gray,
          marginBottom: '2.5rem',
          lineHeight: 1.7,
        }}>
          {t.cta.description}
        </p>
        <a
          href="#contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1.25rem 3rem',
            background: `linear-gradient(135deg, ${colors.copper.main} 0%, ${colors.copper.dark} 100%)`,
            color: colors.neutral.white,
            fontSize: '1rem',
            fontWeight: 600,
            borderRadius: '4px',
            textDecoration: 'none',
            boxShadow: `0 4px 20px rgba(192, 138, 62, 0.3)`,
            transition: 'all 0.3s ease',
          }}
        >
          {t.cta.button}
          {Icons.arrowRight()}
        </a>
      </div>
    </section>
  );
};

// Contact Section
const Contact: React.FC<{ t: ContentStructure }> = ({ t }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" style={{
      padding: '8rem 2rem',
      background: colors.neutral.cream,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '4rem',
      }}>
        {/* Left: Info */}
        <div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 700,
            color: colors.navy.deep,
            marginBottom: '1rem',
          }}>
            {t.contact.title}
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: colors.neutral.grayDark,
            marginBottom: '3rem',
          }}>
            {t.contact.subtitle}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <a
              href={`tel:${t.contact.info.phone}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                color: colors.navy.deep,
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                background: colors.navy.deep,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.copper.main,
              }}>
                {Icons.phone()}
              </div>
              {t.contact.info.phone}
            </a>

            <a
              href={`mailto:${t.contact.info.email}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                color: colors.navy.deep,
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                background: colors.navy.deep,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.copper.main,
              }}>
                {Icons.mail()}
              </div>
              {t.contact.info.email}
            </a>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              color: colors.navy.deep,
              fontWeight: 500,
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: colors.navy.deep,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.copper.main,
              }}>
                {Icons.mapPin()}
              </div>
              {t.contact.info.locations}
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div style={{
          background: colors.neutral.white,
          borderRadius: '16px',
          padding: '2.5rem',
          border: '1px solid rgba(0, 11, 41, 0.08)',
          boxShadow: '0 4px 20px rgba(0, 11, 41, 0.05)',
        }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: colors.navy.deep,
                marginBottom: '0.5rem',
              }}>
                {t.contact.form.name} *
              </label>
              <input
                type="text"
                name="name"
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: '1px solid rgba(0, 11, 41, 0.15)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  background: colors.neutral.cream,
                  transition: 'border-color 0.2s ease',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: colors.navy.deep,
                marginBottom: '0.5rem',
              }}>
                {t.contact.form.email} *
              </label>
              <input
                type="email"
                name="email"
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: '1px solid rgba(0, 11, 41, 0.15)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  background: colors.neutral.cream,
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: colors.navy.deep,
                marginBottom: '0.5rem',
              }}>
                {t.contact.form.company}
              </label>
              <input
                type="text"
                name="company"
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: '1px solid rgba(0, 11, 41, 0.15)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  background: colors.neutral.cream,
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: colors.navy.deep,
                marginBottom: '0.5rem',
              }}>
                {t.contact.form.message} *
              </label>
              <textarea
                name="message"
                rows={4}
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: '1px solid rgba(0, 11, 41, 0.15)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  background: colors.neutral.cream,
                  resize: 'none',
                  outline: 'none',
                }}
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              style={{
                width: '100%',
                padding: '1.25rem',
                background: `linear-gradient(135deg, ${colors.copper.main} 0%, ${colors.copper.dark} 100%)`,
                color: colors.neutral.white,
                fontSize: '1rem',
                fontWeight: 600,
                border: 'none',
                borderRadius: '8px',
                cursor: formStatus === 'submitting' ? 'not-allowed' : 'pointer',
                opacity: formStatus === 'submitting' ? 0.7 : 1,
                transition: 'all 0.2s ease',
              }}
            >
              {formStatus === 'submitting' ? '...' : t.contact.form.submit}
            </button>

            {formStatus === 'success' && (
              <p style={{ color: '#10B981', textAlign: 'center', fontWeight: 500 }}>
                {t.contact.form.success}
              </p>
            )}
            {formStatus === 'error' && (
              <p style={{ color: '#EF4444', textAlign: 'center', fontWeight: 500 }}>
                {t.contact.form.error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer: React.FC<{ t: ContentStructure }> = ({ t }) => {
  return (
    <footer style={{
      padding: '4rem 2rem 2rem',
      background: colors.navy.deep,
      borderTop: `1px solid rgba(192, 138, 62, 0.2)`,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
      }}>
        {/* Logo */}
        <div style={{ position: 'relative', height: '60px', width: '220px' }}>
          <Image
            src="/Transparent_Logo_Blanco.png"
            alt="Merca Capital"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>

        <p style={{
          color: colors.neutral.gray,
          fontSize: '0.9rem',
        }}>
          {t.footer.tagline}
        </p>

        {/* Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }}>
          <a
            href="#"
            style={{
              color: colors.neutral.gray,
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'color 0.2s ease',
            }}
          >
            {t.footer.privacy}
          </a>
          <a
            href="https://www.linkedin.com/in/alejandro-gayosso-a93099287/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: colors.copper.main }}
          >
            {Icons.linkedin()}
          </a>
        </div>

        <div style={{
          width: '100%',
          borderTop: '1px solid rgba(192, 138, 62, 0.1)',
          paddingTop: '2rem',
          textAlign: 'center',
        }}>
          <p style={{
            color: colors.neutral.grayDark,
            fontSize: '0.85rem',
          }}>
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

// ============================================
// MAIN PAGE COMPONENT
// ============================================

export default function MercaCapitalPage() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const t: ContentStructure = content[lang];

  return (
    <main style={{ overflowX: 'hidden' }}>
      <Header lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <Stats t={t} />
      <Portfolio t={t} />
      <Thesis t={t} />
      <Model t={t} />
      <Leadership t={t} />
      <CTA t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </main>
  );
}
