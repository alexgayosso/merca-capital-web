'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// ============================================
// MERCA CAPITAL - ARQUITECTO V2 (ESTILO ALTAVELA)
// ============================================

// ============================================
// TIPOS
// ============================================

type NavContent = {
  about: string;
  portfolio: string;
  thesis: string;
  model: string;
  contact: string;
};

type HeroContent = {
  tagline: string;
  headline1: string;
  headline2: string;
  headline3: string;
  headline4: string;
  description: string;
  cta: string;
  ctaSecondary: string;
  pillars: {
    title: string;
    items: { name: string; description: string }[];
  };
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

type ContentStructure = {
  nav: NavContent;
  hero: HeroContent;
  stats: StatsContent;
  portfolio: PortfolioContent;
  thesis: {
    title: string;
    subtitle: string;
    items: ThesisItem[];
  };
  anticyclical: AntiCyclicalContent;
  footer: {
    rights: string;
    privacy: string;
  };
};

// ============================================
// DATOS (Mantenemos tu contenido original)
// ============================================

const content: Record<'es' | 'en', ContentStructure> = {
  es: {
    nav: {
      about: 'Nosotros',
      portfolio: 'Portafolio',
      thesis: 'Tesis',
      model: 'Modelo',
      contact: 'Contacto',
    },
    hero: {
      tagline: 'ESTRATEGIA INMOBILIARIA DE ALTO IMPACTO',
      headline1: 'Donde el',
      headline2: 'Capital',
      headline3: 'Construye',
      headline4: 'México',
      description: 'Más de 15 años transformando el comercio esencial a través de infraestructura logística de última milla y mercados de abasto inteligentes.',
      cta: 'Explorar Inversiones',
      ctaSecondary: 'Nuestra Tesis',
      pillars: {
        title: 'Pilares de Valor',
        items: [
          { name: 'Resiliencia', description: 'Activos esenciales en crisis.' },
          { name: 'Plusvalía', description: 'Ubicaciones estratégicas.' },
          { name: 'Flujo', description: 'Rentas de alta ocupación.' },
        ]
      }
    },
    stats: {
      title: 'Trayectoria Probada',
      description: 'Nuestros números respaldan la solidez de cada inversión.',
      items: [
        { value: '15+', label: 'Años de Experiencia' },
        { value: '52k+', label: 'm² Construidos', highlight: true },
        { value: '90%', label: 'Ocupación Promedio' },
        { value: '3', label: 'Estados del País' },
      ]
    },
    portfolio: {
      title: 'Portafolio Estratégico',
      subtitle: 'Activos de alto rendimiento en ubicaciones clave.',
      projects: [
        {
          name: 'Mercahorro Torreón',
          sqm: '22,500 m²',
          status: 'Operativo',
          city: 'Torreón, Coah.',
          description: 'Centro de abasto inteligente con tecnología de última generación.',
          year: '2021'
        },
        {
          name: 'Mercahorro Monterrey',
          sqm: '18,200 m²',
          status: 'Desarrollo',
          city: 'Monterrey, NL.',
          description: 'Hub logístico comercial en la zona de mayor crecimiento.',
          year: '2024'
        },
      ]
    },
    thesis: {
      title: 'Tesis de Inversión',
      subtitle: 'Por qué invertir en infraestructura esencial.',
      items: [
        { title: 'Demanda Inelástica', description: 'El consumo de alimentos no se detiene.', icon: 'shield' },
        { title: 'Activos Reales', description: 'Propiedad física con valor intrínseco.', icon: 'building' },
        { title: 'Escalabilidad', description: 'Modelo replicable en mercados clave.', icon: 'trend' },
      ]
    },
    anticyclical: {
      title: 'Enfoque Anticíclico',
      description: 'Nuestra estrategia protege el capital ante la volatilidad económica.',
      points: [
        'Protección contra inflación mediante rentas variables.',
        'Baja correlación con mercados financieros tradicionales.',
        'Activos de primera necesidad.'
      ]
    },
    footer: {
      rights: '© 2024 Merca Capital. Todos los derechos reservados.',
      privacy: 'Aviso de Privacidad'
    }
  },
  en: {
    nav: {
      about: 'About',
      portfolio: 'Portfolio',
      thesis: 'Thesis',
      model: 'Model',
      contact: 'Contact',
    },
    hero: {
      tagline: 'HIGH-IMPACT REAL ESTATE STRATEGY',
      headline1: 'Where',
      headline2: 'Capital',
      headline3: 'Builds',
      headline4: 'Mexico',
      description: 'Over 15 years transforming essential trade through last-mile logistics and smart wholesale markets.',
      cta: 'Explore Investments',
      ctaSecondary: 'Our Thesis',
      pillars: {
        title: 'Value Pillars',
        items: [
          { name: 'Resilience', description: 'Essential assets in crisis.' },
          { name: 'Appreciation', description: 'Strategic locations.' },
          { name: 'Cash Flow', description: 'High occupancy rents.' },
        ]
      }
    },
    stats: {
      title: 'Proven Track Record',
      description: 'Our numbers back the solidity of every investment.',
      items: [
        { value: '15+', label: 'Years Experience' },
        { value: '52k+', label: 'sqm Built', highlight: true },
        { value: '90%', label: 'Avg Occupancy' },
        { value: '3', label: 'States' },
      ]
    },
    portfolio: {
      title: 'Strategic Portfolio',
      subtitle: 'High-performance assets in key locations.',
      projects: [
        {
          name: 'Mercahorro Torreon',
          sqm: '22,500 sqm',
          status: 'Operating',
          city: 'Torreon, Coah.',
          description: 'Smart wholesale center with latest generation technology.',
          year: '2021'
        },
        {
          name: 'Mercahorro Monterrey',
          sqm: '18,200 sqm',
          status: 'Development',
          city: 'Monterrey, NL.',
          description: 'Commercial logistics hub in high-growth area.',
          year: '2024'
        },
      ]
    },
    thesis: {
      title: 'Investment Thesis',
      subtitle: 'Why invest in essential infrastructure.',
      items: [
        { title: 'Inelastic Demand', description: 'Food consumption never stops.', icon: 'shield' },
        { title: 'Real Assets', description: 'Physical property with intrinsic value.', icon: 'building' },
        { title: 'Scalability', description: 'Replicable model in key markets.', icon: 'trend' },
      ]
    },
    anticyclical: {
      title: 'Anticyclical Approach',
      description: 'Our strategy protects capital against economic volatility.',
      points: [
        'Inflation protection via variable rents.',
        'Low correlation with traditional financial markets.',
        'Necessity-driven assets.'
      ]
    },
    footer: {
      rights: '© 2024 Merca Capital. All rights reserved.',
      privacy: 'Privacy Policy'
    }
  }
};

// ============================================
// ICONOS SVG
// ============================================

const Icons = {
  linkedin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
};

// ============================================
// COMPONENTES DE DISEÑO
// ============================================

const Header: React.FC<{ lang: 'es' | 'en'; setLang: (l: 'es' | 'en') => void; t: ContentStructure }> = ({ lang, setLang, t }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201, 162, 39, 0.2)' : 'none',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: scrolled ? '0.8rem 2rem' : '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.4s ease',
      }}>
        {/* LOGO PANORÁMICO TIPO ALTAVELA */}
        <div style={{ 
          position: 'relative', 
          height: scrolled ? '35px' : '48px', 
          width: scrolled ? '160px' : '220px',
          transition: 'all 0.4s ease',
        }}>
          <Image
            src="/Transparent_Logo_Blanco.png"
            alt="Merca Capital"
            fill
            style={{ objectFit: 'contain', objectPosition: 'left' }}
            priority
          />
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {Object.entries(t.nav).map(([key, value]) => (
            <a 
              key={key} 
              href={`#${key}`} 
              style={{
                color: 'white',
                fontSize: '0.7rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                textDecoration: 'none',
                opacity: 0.7,
                transition: 'opacity 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
            >
              {value}
            </a>
          ))}
          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            style={{
              background: 'transparent',
              border: '1px solid rgba(201, 162, 39, 0.4)',
              color: '#C9A227',
              padding: '5px 10px',
              fontSize: '0.65rem',
              fontWeight: 700,
              cursor: 'pointer',
              borderRadius: '2px',
              marginLeft: '1rem'
            }}
          >
            {lang.toUpperCase()}
          </button>
        </nav>
      </div>
    </header>
  );
};

// ============================================
// MAIN PAGE
// ============================================

export default function MercaCapitalPage() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const t = content[lang];

  return (
    <main style={{ backgroundColor: '#0A0A0A', color: 'white', overflowX: 'hidden' }}>
      <Header lang={lang} setLang={setLang} t={t} />

      {/* HERO SECTION */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 8%',
        position: 'relative',
        background: 'linear-gradient(to right, #0A0A0A 30%, transparent 100%)',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '60%',
          height: '100%',
          opacity: 0.4,
          zIndex: 0
        }}>
          {/* Aquí irá tu imagen real de desarrollo */}
          <div style={{
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 50% 50%, rgba(201, 162, 39, 0.1) 0%, transparent 70%)'
          }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
          <div style={{ 
            display: 'inline-block',
            paddingLeft: '60px',
            position: 'relative',
            marginBottom: '2.5rem'
          }}>
            <div style={{ 
              position: 'absolute', 
              left: 0, 
              top: '50%', 
              width: '45px', 
              height: '1px', 
              background: '#C9A227' 
            }} />
            <span style={{
              color: '#C9A227',
              fontSize: '0.8rem',
              letterSpacing: '0.4em',
              fontWeight: 500,
              textTransform: 'uppercase'
            }}>
              {t.hero.tagline}
            </span>
          </div>
          
          <h1 style={{
            fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
            lineHeight: 0.9,
            fontWeight: 300,
            marginBottom: '2.5rem',
            letterSpacing: '-0.03em'
          }}>
            {t.hero.headline1} <span style={{ fontWeight: 600 }}>{t.hero.headline2}</span><br />
            {t.hero.headline3} <span style={{ color: '#C9A227', fontStyle: 'italic' }}>{t.hero.headline4}</span>
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '550px',
            lineHeight: 1.7,
            marginBottom: '4rem',
            fontWeight: 300
          }}>
            {t.hero.description}
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <button style={{
              background: '#C9A227',
              color: 'black',
              padding: '1.2rem 2.8rem',
              border: 'none',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}>
              {t.hero.cta}
            </button>
            <a href="#thesis" style={{
              color: 'white',
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.3)',
              paddingBottom: '5px'
            }}>
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section style={{
        padding: '8rem 8%',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        background: '#0D0D0D'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '4rem'
        }}>
          {t.stats.items.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'left' }}>
              <div style={{ 
                fontSize: '3.5rem', 
                fontWeight: 600, 
                color: stat.highlight ? '#C9A227' : 'white',
                marginBottom: '0.5rem',
                fontFamily: 'serif'
              }}>
                {stat.value}
              </div>
              <div style={{ 
                fontSize: '0.7rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.2em', 
                color: 'rgba(255,255,255,0.4)',
                fontWeight: 600
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" style={{ padding: '10rem 8%' }}>
        <div style={{ marginBottom: '5rem', maxWidth: '800px' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 300, marginBottom: '1.5rem' }}>
            {t.portfolio.title}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem' }}>
            {t.portfolio.subtitle}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          {t.portfolio.projects.map((project, idx) => (
            <div key={idx} style={{
              background: '#141414',
              border: '1px solid rgba(255,255,255,0.05)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.4s ease',
              cursor: 'pointer'
            }}>
              {/* Espacio para imagen real del desarrollo */}
              <div style={{ height: '400px', background: '#1A1A1A', position: 'relative' }}>
                <div style={{
                   position: 'absolute',
                   top: '2rem',
                   right: '2rem',
                   padding: '0.5rem 1rem',
                   background: 'rgba(201, 162, 39, 0.9)',
                   color: 'black',
                   fontSize: '0.7rem',
                   fontWeight: 700,
                   textTransform: 'uppercase'
                }}>
                  {project.status}
                </div>
              </div>
              
              <div style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                   <h3 style={{ fontSize: '1.5rem', fontWeight: 500 }}>{project.name}</h3>
                   <span style={{ color: '#C9A227', fontWeight: 600 }}>{project.year}</span>
                </div>
                <div style={{ 
                   fontSize: '0.8rem', 
                   textTransform: 'uppercase', 
                   color: 'rgba(255,255,255,0.4)',
                   letterSpacing: '0.1em',
                   marginBottom: '1.5rem'
                }}>
                  {project.city} • {project.sqm}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER REFINADO */}
      <footer style={{ padding: '5rem 8%', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
          <div style={{ position: 'relative', height: '40px', width: '180px' }}>
            <Image
              src="/Transparent_Logo_Blanco.png"
              alt="Merca Capital"
              fill
              style={{ objectFit: 'contain', objectPosition: 'left' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="https://www.linkedin.com/in/alejandro-gayosso-a93099287/" style={{ color: '#C9A227' }}>
              {Icons.linkedin()}
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>
          <p>{t.footer.rights}</p>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{t.footer.privacy}</a>
        </div>
      </footer>
    </main>
  );
}