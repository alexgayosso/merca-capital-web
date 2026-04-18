'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// ============================================
// MERCA CAPITAL - INSTITUTIONAL ASSET MANAGEMENT
// "The Blackstone of Agri-Food Infrastructure in LATAM"
// ============================================

// ============================================
// 1. TIPOS DE DATOS
// ============================================

type NavContent = { about: string; portfolio: string; thesis: string; model: string; contact: string; };
type HeroContent = { 
  tagline: string; 
  headline1: string; 
  headline2: string; 
  subtitle: string;
  description: string; 
  cta: string; 
  ctaSecondary: string; 
  pillars: { title: string; items: { name: string; description: string }[]; }; 
};
type StatItem = { value: string; label: string; highlight?: boolean; };
type StatsContent = { title: string; description: string; items: StatItem[]; };
type InsightContent = { title: string; content: string; stats: { value: string; label: string }[]; };
type ProjectItem = { name: string; sqm: string; status: string; city: string; description: string; year: string; };
type PortfolioContent = { title: string; subtitle: string; projects: ProjectItem[]; };
type ThesisItem = { title: string; description: string; icon: string; };
type AntiCyclicalContent = { title: string; description: string; points: string[]; };
type ThesisContent = { title: string; subtitle: string; antiCyclical: AntiCyclicalContent; items: ThesisItem[]; };
type ModelStep = { number: string; title: string; description: string; };
type ModelContent = { title: string; subtitle: string; description: string; steps: ModelStep[]; };
type LeadershipContent = { title: string; name: string; role: string; bio: string; proofOfConcept: string; };
type CtaContent = { title: string; description: string; button: string; };
type FormContent = { name: string; email: string; company: string; message: string; submit: string; success: string; error: string; };
type ContactInfoContent = { phone: string; email: string; locations: string; };
type ContactContent = { title: string; subtitle: string; form: FormContent; info: ContactInfoContent; };
type FooterContent = { tagline: string; rights: string; privacy: string; };

type ContentStructure = {
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
};

// ============================================
// 2. DICCIONARIO BILINGÜE COMPLETO
// ============================================

const content: Record<'es' | 'en', ContentStructure> = {
  es: {
    nav: { about: 'NOSOTROS', portfolio: 'PORTAFOLIO', thesis: 'TESIS', model: 'MODELO', contact: 'CONTACTO' },
    hero: {
      tagline: 'ASSET MANAGEMENT · INFRAESTRUCTURA · LATAM',
      headline1: 'The Blackstone of',
      headline2: 'Agri-Food Infrastructure',
      subtitle: 'El activo real no son los metros cuadrados. Es el control del punto estratégico donde México come.',
      description: 'Consolidamos la infraestructura de distribución alimentaria más fragmentada de América Latina. 15 años de track record. $100M USD en despliegue.',
      cta: 'EXPLORAR PORTAFOLIO', 
      ctaSecondary: 'NUESTRA TESIS',
      pillars: {
        title: 'PILARES ESTRATÉGICOS',
        items: [
          { name: 'Torreón · Monterrey', description: 'Corredor Norte de México' },
          { name: 'Infraestructura Esencial', description: 'Mercados · Abasto · Distribución' },
          { name: 'Modelo Anticíclico', description: 'Demanda Inelástica · Rentas Estables' },
          { name: 'Gestión Integral', description: 'Desarrollo · Operación · Administración' }
        ]
      }
    },
    stats: {
      title: 'Track Record',
      description: 'Más de una década construyendo infraestructura esencial en el norte de México.',
      items: [
        { value: '52,000', label: 'm² desarrollados', highlight: true },
        { value: '15', label: 'años de operación', highlight: true },
        { value: '5', label: 'mercados construidos', highlight: false },
        { value: '90', label: '% ocupación promedio', highlight: false },
        { value: '300', label: 'comerciantes activos', highlight: false }
      ]
    },
    insight: {
      title: 'EL INSIGHT QUE NADIE VE',
      content: 'México tiene 329 Centrales de Abasto que mueven ~$80B USD anuales en alimentos. El 78% opera en infraestructura obsoleta (pre-2000). Nadie los ha consolidado. Nadie los ha digitalizado. Nadie los ha financiarizado.',
      stats: [
        { value: '329', label: 'Centrales de Abasto' },
        { value: '$80B', label: 'USD anuales' },
        { value: '78%', label: 'Infraestructura obsoleta' }
      ]
    },
    portfolio: {
      title: 'Portafolio de Activos', subtitle: 'Infraestructura comercial de abasto en operación',
      projects: [
        { name: 'Mercahorro Torreón', sqm: '9,000 m²', status: 'Operando', city: 'Torreón, Coahuila', description: 'Centro de abasto regional con alta rotación de productos frescos.', year: '2012' },
        { name: 'Mercahorro Gómez Palacio', sqm: '9,000 m²', status: 'Operando', city: 'Gómez Palacio, Durango', description: 'Hub de distribución alimentaria para la Comarca Lagunera.', year: '2015' },
        { name: 'Plaza Abastos Torreón', sqm: '12,000 m²', status: 'Operando', city: 'Torreón, Coahuila', description: 'Complejo mayorista con infraestructura de última generación.', year: '2018' },
        { name: 'Plaza Abastos Monterrey', sqm: '15,000 m²', status: 'Operando', city: 'Monterrey, Nuevo León', description: 'El desarrollo más grande, sirviendo al área metropolitana.', year: '2021' },
        { name: 'Mercahorro Gómez II', sqm: '7,000 m²', status: 'En Desarrollo', city: 'Gómez Palacio, Durango', description: 'Expansión estratégica para la demanda creciente.', year: '2025' }
      ]
    },
    thesis: {
      title: 'Tesis de Inversión', subtitle: '¿Por qué mercados de abasto?',
      antiCyclical: {
        title: 'Modelo Anticíclico',
        description: 'Los mercados de abasto son infraestructura esencial. La gente come todos los días, sin importar la economía. Mientras otros sectores sufren en recesiones, el abasto mantiene —e incrementa— su demanda.',
        points: ['Demanda inelástica: alimentación es gasto no discrecional', 'Rendimiento estable en cualquier ciclo económico', 'Protección contra inflación vía rentas indexadas', 'Ocupación consistente por modelo probado']
      },
      items: [
        { title: 'Mercado Fragmentado', description: 'Infraestructura subdesarrollada en México. Consolidamos un sector con enorme potencial.', icon: 'grid' },
        { title: 'Flujos Predecibles', description: '90% ocupación histórica. 300+ comerciantes generando ingresos estables.', icon: 'chart' },
        { title: 'Barrera de Entrada', description: 'Requiere expertise, relaciones con comerciantes y conocimiento regulatorio.', icon: 'shield' }
      ]
    },
    model: {
      title: 'Modelo Integrado', subtitle: 'Control total del ciclo',
      description: 'No solo construimos y vendemos. Permanecemos invertidos junto a nuestros socios.',
      steps: [
        { number: '01', title: 'Originación', description: 'Ubicaciones estratégicas en mercados desatendidos.' },
        { number: '02', title: 'Desarrollo', description: 'Diseño y construcción con equipo propio.' },
        { number: '03', title: 'Comercialización', description: 'Pre-arrendamos a comerciantes establecidos.' },
        { number: '04', title: 'Administración', description: 'Operación profesional a largo plazo.' }
      ]
    },
    leadership: {
      title: 'Liderazgo', 
      name: 'Alejandro Gayosso Heimpel', 
      role: 'Fundador y CEO', 
      bio: '15 años en infraestructura comercial. Tec de Monterrey + MBA IE Business School Madrid. Operaciones en México, basado en Madrid.',
      proofOfConcept: 'Acceso operador único: Mercahorro es nuestro proof of concept con 300+ locales y 15 años de track record operativo comprobado.'
    },
    cta: {
      title: 'Capital Privado en Despliegue', description: 'Buscamos socios estratégicos: family offices, fondos e inversionistas interesados en infraestructura esencial.', button: 'INICIAR CONVERSACIÓN'
    },
    contact: {
      title: 'Contacto', subtitle: 'Hablemos de oportunidades',
      form: { name: 'Nombre', email: 'Email', company: 'Empresa', message: 'Mensaje', submit: 'Enviar', success: '¡Enviado! Te contactaremos pronto.', error: 'Error. Intenta de nuevo.' },
      info: { phone: '+52 871 204 0725', email: 'hola@mercacapital.com', locations: 'Madrid · Monterrey' }
    },
    footer: { tagline: 'Visión Inmobiliaria', rights: '© 2025 Merca Capital. Todos los derechos reservados.', privacy: 'Aviso de Privacidad' }
  },
  en: {
    nav: { about: 'ABOUT', portfolio: 'PORTFOLIO', thesis: 'THESIS', model: 'MODEL', contact: 'CONTACT' },
    hero: {
      tagline: 'ASSET MANAGEMENT · INFRASTRUCTURE · LATAM',
      headline1: 'The Blackstone of',
      headline2: 'Agri-Food Infrastructure',
      subtitle: 'The real asset isn\'t the square meters. It\'s control of the strategic point where Mexico eats.',
      description: 'We consolidate Latin America\'s most fragmented food distribution infrastructure. 15-year track record. $100M USD deploying.',
      cta: 'EXPLORE PORTFOLIO', 
      ctaSecondary: 'OUR THESIS',
      pillars: {
        title: 'STRATEGIC PILLARS',
        items: [
          { name: 'Torreón · Monterrey', description: 'Northern Mexico Corridor' },
          { name: 'Essential Infrastructure', description: 'Markets · Wholesale · Distribution' },
          { name: 'Anti-Cyclical Model', description: 'Inelastic Demand · Stable Rents' },
          { name: 'Integrated Management', description: 'Development · Operations · Admin' }
        ]
      }
    },
    stats: {
      title: 'Track Record',
      description: 'Over a decade building essential infrastructure in Northern Mexico.',
      items: [
        { value: '52,000', label: 'sqm developed', highlight: true },
        { value: '15', label: 'years operating', highlight: true },
        { value: '5', label: 'markets built', highlight: false },
        { value: '90', label: '% avg occupancy', highlight: false },
        { value: '300', label: 'active merchants', highlight: false }
      ]
    },
    insight: {
      title: 'THE INSIGHT NO ONE SEES',
      content: 'Mexico has 329 wholesale food markets moving ~$80B USD annually in food. 78% operate in obsolete infrastructure (pre-2000). No one has consolidated them. No one has digitized them. No one has financialized them.',
      stats: [
        { value: '329', label: 'Wholesale Markets' },
        { value: '$80B', label: 'USD annually' },
        { value: '78%', label: 'Obsolete infrastructure' }
      ]
    },
    portfolio: {
      title: 'Asset Portfolio', subtitle: 'Operating wholesale food infrastructure',
      projects: [
        { name: 'Mercahorro Torreón', sqm: '9,000 m²', status: 'Operating', city: 'Torreón, Coahuila', description: 'Regional wholesale center with high turnover.', year: '2012' },
        { name: 'Mercahorro Gómez Palacio', sqm: '9,000 m²', status: 'Operating', city: 'Gómez Palacio, Durango', description: 'Food distribution hub for Laguna Region.', year: '2015' },
        { name: 'Plaza Abastos Torreón', sqm: '12,000 m²', status: 'Operating', city: 'Torreón, Coahuila', description: 'Wholesale complex with modern infrastructure.', year: '2018' },
        { name: 'Plaza Abastos Monterrey', sqm: '15,000 m²', status: 'Operating', city: 'Monterrey, Nuevo León', description: 'Our largest development.', year: '2021' },
        { name: 'Mercahorro Gómez II', sqm: '7,000 m²', status: 'In Development', city: 'Gómez Palacio, Durango', description: 'Strategic expansion.', year: '2025' }
      ]
    },
    thesis: {
      title: 'Investment Thesis', subtitle: 'Why wholesale food markets?',
      antiCyclical: {
        title: 'Anti-Cyclical Model',
        description: 'Wholesale markets are essential infrastructure. People eat every day, regardless of economy. While other sectors suffer, food distribution maintains—and increases—demand.',
        points: ['Inelastic demand: food is non-discretionary', 'Stable performance through any cycle', 'Inflation protection via indexed rents', 'Consistent occupancy from proven model']
      },
      items: [
        { title: 'Fragmented Market', description: 'Underdeveloped infrastructure. We consolidate a sector with massive potential.', icon: 'grid' },
        { title: 'Predictable Flows', description: '90% historical occupancy. 300+ merchants generating stable income.', icon: 'chart' },
        { title: 'Barrier to Entry', description: 'Requires expertise, merchant relationships and regulatory knowledge.', icon: 'shield' }
      ]
    },
    model: {
      title: 'Integrated Model', subtitle: 'Full cycle control',
      description: 'We don\'t just build and sell. We stay invested alongside our partners.',
      steps: [
        { number: '01', title: 'Origination', description: 'Strategic locations in underserved markets.' },
        { number: '02', title: 'Development', description: 'In-house design and construction.' },
        { number: '03', title: 'Commercialization', description: 'Pre-lease to established merchants.' },
        { number: '04', title: 'Management', description: 'Professional long-term operation.' }
      ]
    },
    leadership: {
      title: 'Leadership', 
      name: 'Alejandro Gayosso Heimpel', 
      role: 'Founder & CEO', 
      bio: '15 years in commercial infrastructure. Tec de Monterrey + MBA IE Business School Madrid. Operations in Mexico, based in Madrid.',
      proofOfConcept: 'Unique operator access: Mercahorro is our proof of concept with 300+ units and 15 years of proven operational track record.'
    },
    cta: {
      title: 'Private Capital Deploying', description: 'Seeking strategic partners: family offices, funds and investors in essential infrastructure.', button: 'START CONVERSATION'
    },
    contact: {
      title: 'Contact', subtitle: 'Let\'s discuss opportunities',
      form: { name: 'Name', email: 'Email', company: 'Company', message: 'Message', submit: 'Send', success: 'Sent! We\'ll be in touch.', error: 'Error. Try again.' },
      info: { phone: '+52 871 204 0725', email: 'hola@mercacapital.com', locations: 'Madrid · Monterrey' }
    },
    footer: { tagline: 'Real Estate Vision', rights: '© 2025 Merca Capital. All rights reserved.', privacy: 'Privacy Policy' }
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
  star: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  check: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>,
  phone: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  mail: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  mapPin: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
  linkedin: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  target: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
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
      borderBottom: scrolled ? '1px solid rgba(201,162,39,0.1)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: scrolled ? '70px' : '100px', transition: 'height 0.4s ease' }}>
        
        {/* Logo */}
        <div style={{ position: 'relative', height: scrolled ? '45px' : '60px', width: scrolled ? '180px' : '240px', transition: 'all 0.4s ease' }}>
          <Image src="/Transparent_Logo_Blanco.png" alt="Merca Capital" fill style={{ objectFit: 'contain', objectPosition: 'left' }} priority />
        </div>

        {/* Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {(['portfolio', 'thesis', 'model', 'contact'] as const).map((section) => (
            <button key={section} onClick={() => scrollTo(section)}
              style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', cursor: 'pointer', transition: 'color 0.3s', textTransform: 'uppercase' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C9A227'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
              {t.nav[section]}
            </button>
          ))}
          <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            style={{ background: 'transparent', border: '1px solid rgba(201, 162, 39, 0.4)', color: '#C9A227', padding: '5px 12px', fontSize: '0.65rem', fontWeight: 700, cursor: 'pointer', borderRadius: '2px', marginLeft: '1rem', transition: 'all 0.3s' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#C9A227'; e.currentTarget.style.color = '#000B29'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C9A227'; }}>
            {lang.toUpperCase()}
          </button>
        </nav>
      </div>
    </header>
  );
};

// HERO - NUEVO DISEÑO INSTITUCIONAL
const Hero: React.FC<{ t: ContentStructure }> = ({ t }) => (
  <section style={{
    minHeight: '100vh', background: '#000B29', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden'
  }}>
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 30% 50%, rgba(201, 162, 39, 0.08) 0%, transparent 60%)', zIndex: 1 }} />
    <div style={{ width: '100%', maxWidth: '1600px', margin: '0 auto', padding: '8rem 4rem 4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 2 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ width: '45px', height: '1px', background: '#C9A227' }} />
          <span style={{ color: '#C9A227', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.3em' }}>{t.hero.tagline}</span>
        </div>
        
        {/* NUEVO HEADLINE INSTITUCIONAL */}
        <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.1, color: '#FFF', margin: '0 0 1.5rem 0', letterSpacing: '-0.02em' }}>
          {t.hero.headline1} <br/>
          <span style={{ fontStyle: 'italic', color: '#C9A227', fontWeight: 400 }}>{t.hero.headline2}</span>
        </h1>
        
        {/* NUEVO SUBTITLE */}
        <p style={{ 
          color: '#FFF', 
          fontSize: '1.25rem', 
          lineHeight: 1.6, 
          maxWidth: '520px', 
          marginBottom: '2rem', 
          fontWeight: 400,
          fontStyle: 'italic',
          borderLeft: '3px solid #C08A3E',
          paddingLeft: '1.5rem'
        }}>
          {t.hero.subtitle}
        </p>
        
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '520px', marginBottom: '3rem', fontWeight: 300 }}>
          {t.hero.description}
        </p>
        
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="#portfolio" style={{ background: '#C9A227', color: '#000B29', padding: '1.2rem 2.8rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textDecoration: 'none', transition: 'transform 0.3s' }}>
            {t.hero.cta}
          </a>
          <a href="#thesis" style={{ color: '#FFF', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '5px' }}>
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div style={{ position: 'relative', padding: '3rem' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '40px', borderTop: '1px solid rgba(201,162,39,0.4)', borderLeft: '1px solid rgba(201,162,39,0.4)' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40px', height: '40px', borderTop: '1px solid rgba(201,162,39,0.4)', borderRight: '1px solid rgba(201,162,39,0.4)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '40px', borderBottom: '1px solid rgba(201,162,39,0.4)', borderLeft: '1px solid rgba(201,162,39,0.4)' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '40px', height: '40px', borderBottom: '1px solid rgba(201,162,39,0.4)', borderRight: '1px solid rgba(201,162,39,0.4)' }} />

        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '2.5rem', backdropFilter: 'blur(10px)' }}>
          <div style={{ color: '#C9A227', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between' }}>
            {t.hero.pillars.title} <span style={{ opacity: 0.5 }}>▲</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {t.hero.pillars.items.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.2rem' }}>
                <div style={{ color: '#C9A227', marginTop: '3px' }}>
                  {i === 0 && Icons.globe()} {i === 1 && Icons.grid()} {i === 2 && Icons.chart()} {i === 3 && Icons.star()}
                </div>
                <div>
                  <h4 style={{ color: '#FFF', fontSize: '1.05rem', fontWeight: 500, margin: '0 0 0.3rem 0', fontFamily: 'var(--font-cormorant), Georgia, serif' }}>{item.name}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.description}</p>
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
  <section style={{ padding: '8rem 4rem', background: '#F9F8F6' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 400, color: '#000B29', margin: '0 0 1rem 0' }}>{t.stats.title}</h2>
        <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>{t.stats.description}</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        {t.stats.items.map((stat, i) => (
          <div key={i} style={{ background: stat.highlight ? '#000B29' : '#FFF', padding: '3rem 2rem', textAlign: 'center', border: stat.highlight ? 'none' : '1px solid rgba(0,0,0,0.05)', boxShadow: stat.highlight ? '0 20px 40px rgba(0,11,41,0.1)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '3.5rem', fontWeight: 300, color: '#C9A227', lineHeight: 1, marginBottom: '1rem' }}>{stat.value}</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: stat.highlight ? 'rgba(255,255,255,0.7)' : '#666' }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// NUEVA SECCIÓN: INSIGHT DE MERCADO
const MarketInsight: React.FC<{ t: ContentStructure }> = ({ t }) => (
  <section style={{ 
    padding: '5rem 4rem', 
    background: '#000B29',
    borderTop: '3px solid #C08A3E',
    borderBottom: '3px solid #C08A3E'
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ 
          fontFamily: 'var(--font-cormorant), Georgia, serif', 
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', 
          fontWeight: 400, 
          color: '#C08A3E', 
          margin: '0 0 2rem 0',
          letterSpacing: '0.1em'
        }}>
          {t.insight.title}
        </h2>
        <p style={{ 
          color: 'rgba(255,255,255,0.85)', 
          fontSize: '1.2rem', 
          lineHeight: 1.8, 
          maxWidth: '900px', 
          margin: '0 auto 3rem',
          fontWeight: 300
        }}>
          {t.insight.content}
        </p>
      </div>
      
      {/* Stats Row */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '2rem',
        borderTop: '1px solid rgba(192, 138, 62, 0.3)',
        paddingTop: '3rem'
      }}>
        {t.insight.stats.map((stat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ 
              fontFamily: 'var(--font-cormorant), Georgia, serif', 
              fontSize: '3rem', 
              fontWeight: 300, 
              color: '#C08A3E', 
              lineHeight: 1, 
              marginBottom: '0.5rem' 
            }}>
              {stat.value}
            </div>
            <div style={{ 
              fontSize: '0.75rem', 
              fontWeight: 600, 
              letterSpacing: '0.1em', 
              textTransform: 'uppercase', 
              color: 'rgba(255,255,255,0.6)' 
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Portfolio: React.FC<{ t: ContentStructure }> = ({ t }) => (
  <section id="portfolio" style={{ padding: '8rem 4rem', background: '#FFFFFF' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 400, color: '#000B29', margin: '0 0 1rem 0' }}>{t.portfolio.title}</h2>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>{t.portfolio.subtitle}</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '3rem' }}>
        {t.portfolio.projects.map((proj, i) => (
          <div key={i} style={{ background: '#F9F8F6', border: '1px solid rgba(0,0,0,0.05)', transition: 'transform 0.4s ease', cursor: 'pointer' }} 
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} 
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ background: '#000B29', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#C9A227', fontSize: '0.7rem', letterSpacing: '0.15em', fontWeight: 700 }}>{proj.status.toUpperCase()}</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', fontFamily: 'monospace' }}>{proj.year}</span>
            </div>
            <div style={{ padding: '2.5rem 2rem' }}>
              <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '2.5rem', fontWeight: 300, color: '#C9A227', marginBottom: '0.5rem' }}>{proj.sqm}</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#000B29', margin: '0 0 0.5rem 0' }}>{proj.name}</h3>
              <p style={{ color: '#C9A227', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{proj.city}</p>
              <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Thesis: React.FC<{ t: ContentStructure }> = ({ t }) => (
  <section id="thesis" style={{ padding: '8rem 4rem', background: '#000B29' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 400, color: '#FFF', margin: '0 0 1rem 0' }}>{t.thesis.title}</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>{t.thesis.subtitle}</p>
      </div>

      {/* Anti-Cyclical Box */}
      <div style={{ background: 'rgba(201,162,39,0.08)', borderLeft: '4px solid #C9A227', padding: '3rem', marginBottom: '4rem' }}>
        <h3 style={{ color: '#C9A227', fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', fontFamily: 'var(--font-cormorant), Georgia, serif' }}>{t.thesis.antiCyclical.title}</h3>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>{t.thesis.antiCyclical.description}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {t.thesis.antiCyclical.points.map((point, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ color: '#C9A227' }}>{Icons.check()}</span>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Thesis Items */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
        {t.thesis.items.map((item, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', padding: '3rem 2rem', textAlign: 'center' }}>
            <div style={{ color: '#C9A227', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{Icons[item.icon]?.()}</div>
            <h4 style={{ color: '#FFF', fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', fontFamily: 'var(--font-cormorant), Georgia, serif' }}>{item.title}</h4>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Model: React.FC<{ t: ContentStructure }> = ({ t }) => (
  <section id="model" style={{ padding: '8rem 4rem', background: '#F9F8F6' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 400, color: '#000B29', margin: '0 0 1rem 0' }}>{t.model.title}</h2>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>{t.model.subtitle}</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
        {t.model.steps.map((step, i) => (
          <div key={i} style={{ background: '#FFF', padding: '2.5rem 2rem', borderBottom: '3px solid #C9A227', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '3rem', fontWeight: 300, color: 'rgba(201,162,39,0.3)', marginBottom: '1rem' }}>{step.number}</div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#000B29', marginBottom: '0.75rem' }}>{step.title}</h4>
            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{step.description}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#000B29', padding: '3rem', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: '#C9A227', fontSize: '1.3rem', fontStyle: 'italic', margin: 0 }}>"{t.model.description}"</p>
      </div>
    </div>
  </section>
);

// LEADERSHIP CON PROOF OF CONCEPT
const LeadershipAndCTA: React.FC<{ t: ContentStructure }> = ({ t }) => (
  <section style={{ padding: '8rem 4rem', background: '#FFFFFF' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem' }}>
      
      {/* Leadership */}
      <div>
        <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '2.5rem', fontWeight: 400, color: '#000B29', margin: '0 0 2.5rem 0' }}>{t.leadership.title}</h2>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '2.5rem' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#F9F8F6', border: '2px solid #C9A227', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#C9A227', fontSize: '1.5rem', fontFamily: 'var(--font-cormorant), Georgia, serif' }}>AG</span>
          </div>
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#000B29', margin: '0 0 0.3rem 0' }}>{t.leadership.name}</h3>
            <p style={{ color: '#C9A227', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, margin: '0 0 1rem 0' }}>{t.leadership.role}</p>
            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.6, margin: 0, maxWidth: '400px' }}>{t.leadership.bio}</p>
          </div>
        </div>
        
        {/* PROOF OF CONCEPT BOX */}
        <div style={{ 
          background: '#000B29', 
          padding: '2rem', 
          borderLeft: '4px solid #C08A3E'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <span style={{ color: '#C08A3E' }}>{Icons.target()}</span>
            <span style={{ color: '#C08A3E', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em' }}>PROOF OF CONCEPT</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
            {t.leadership.proofOfConcept}
          </p>
        </div>
      </div>

      {/* CTA Box */}
      <div style={{ background: '#000B29', padding: '4rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: '#FFF', fontSize: '2rem', fontWeight: 300, margin: '0 0 1.5rem 0' }}>{t.cta.title}</h3>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.6, margin: '0 auto 2.5rem', maxWidth: '400px' }}>{t.cta.description}</p>
        <a href="#contact" style={{ display: 'inline-block', background: '#C9A227', color: '#000B29', padding: '1.2rem 2.5rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textDecoration: 'none' }}>
          {t.cta.button}
        </a>
      </div>
    </div>
  </section>
);

const Contact: React.FC<{ t: ContentStructure }> = ({ t }) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setStatus('sending');
    setTimeout(() => { setStatus('success'); (e.target as HTMLFormElement).reset(); }, 1500);
  };

  return (
    <section id="contact" style={{ padding: '8rem 4rem', background: '#F9F8F6' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6rem' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 400, color: '#000B29', margin: '0 0 1rem 0' }}>{t.contact.title}</h2>
          <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '4rem' }}>{t.contact.subtitle}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[{ icon: Icons.phone(), text: t.contact.info.phone }, { icon: Icons.mail(), text: t.contact.info.email }, { icon: Icons.mapPin(), text: t.contact.info.locations }].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ width: '50px', height: '50px', background: '#FFF', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9A227' }}>{item.icon}</div>
                <span style={{ color: '#000B29', fontWeight: 500, fontSize: '1.05rem' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#FFF', padding: '4rem', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[{ n: 'name', l: t.contact.form.name, t: 'text' }, { n: 'email', l: t.contact.form.email, t: 'email' }, { n: 'company', l: t.contact.form.company, t: 'text' }].map((f) => (
              <div key={f.n}>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#000B29', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{f.l}</label>
                <input type={f.t} name={f.n} required={f.n !== 'company'} style={{ width: '100%', padding: '1rem', border: 'none', borderBottom: '1px solid #E5E5E5', background: 'transparent', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderBottomColor = '#C9A227'} onBlur={(e) => e.target.style.borderBottomColor = '#E5E5E5'} />
              </div>
            ))}
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#000B29', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.contact.form.message}</label>
              <textarea name="message" rows={3} required style={{ width: '100%', padding: '1rem', border: 'none', borderBottom: '1px solid #E5E5E5', background: 'transparent', fontSize: '1rem', outline: 'none', resize: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderBottomColor = '#C9A227'} onBlur={(e) => e.target.style.borderBottomColor = '#E5E5E5'} />
            </div>
            <button type="submit" disabled={status === 'sending'} style={{ background: '#000B29', color: '#FFF', padding: '1.2rem', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', marginTop: '1rem', transition: 'background 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#C9A227'} onMouseLeave={(e) => e.currentTarget.style.background = '#000B29'}>
              {status === 'sending' ? '...' : t.contact.form.submit}
            </button>
            {status === 'success' && <p style={{ color: '#C9A227', fontSize: '0.9rem', textAlign: 'center', marginTop: '1rem' }}>{t.contact.form.success}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC<{ t: ContentStructure }> = ({ t }) => (
  <footer style={{ padding: '5rem 4rem 3rem', background: '#000B29', borderTop: '1px solid rgba(201,162,39,0.15)' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
      <div style={{ position: 'relative', height: '60px', width: '260px' }}>
        <Image src="/Transparent_Logo_Blanco.png" alt="Merca Capital" fill style={{ objectFit: 'contain' }} />
      </div>
      <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
        <a href="#" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textDecoration: 'none', letterSpacing: '0.05em' }}>{t.footer.privacy}</a>
        <a href="https://www.linkedin.com/in/alejandro-gayosso-a93099287/" target="_blank" rel="noopener noreferrer" style={{ color: '#C9A227' }}>{Icons.linkedin()}</a>
      </div>
      <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '3rem', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', letterSpacing: '0.05em', margin: 0 }}>{t.footer.rights}</p>
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
    <main style={{ overflowX: 'hidden', fontFamily: 'var(--font-inter), system-ui, sans-serif', color: '#000B29' }}>
      <Header lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <Stats t={t} />
      <MarketInsight t={t} />
      <Portfolio t={t} />
      <Thesis t={t} />
      <Model t={t} />
      <LeadershipAndCTA t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </main>
  );
}
