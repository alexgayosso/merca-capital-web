'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// ============================================
// MERCA CAPITAL - NEXT.JS PAGE
// Identidad: Gris Carbón + Terracota/Ladrillo
// ============================================

// Contenido bilingüe
const content = {
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
      subhead: 'Mercados de abasto que operan con o sin crisis. 15 años construyendo activos esenciales con rendimientos probados.',
      cta: 'Ver Portafolio',
      ctaSecondary: 'Contactar'
    },
    stats: {
      title: 'Track Record Comprobado',
      description: 'Más de una década desarrollando la columna vertebral del abasto en el norte de México.',
      items: [
        { value: '52,000+', label: 'm² desarrollados', highlight: true },
        { value: '15+', label: 'años de operación', highlight: true },
        { value: '5', label: 'mercados construidos' },
        { value: '90%', label: 'ocupación promedio' },
        { value: '300+', label: 'comerciantes activos' }
      ]
    },
    portfolio: {
      title: 'Nuestros Desarrollos',
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
      subtitle: 'Hablemos de oportunidades',
      form: {
        name: 'Nombre',
        email: 'Email',
        company: 'Empresa (opcional)',
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
      cta: 'View Portfolio',
      ctaSecondary: 'Contact Us'
    },
    stats: {
      title: 'Proven Track Record',
      description: 'Over a decade developing the backbone of food distribution in Northern Mexico.',
      items: [
        { value: '52,000+', label: 'sqm developed', highlight: true },
        { value: '15+', label: 'years operating', highlight: true },
        { value: '5', label: 'markets built' },
        { value: '90%', label: 'avg. occupancy' },
        { value: '300+', label: 'active merchants' }
      ]
    },
    portfolio: {
      title: 'Our Developments',
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
      subtitle: 'Let\'s discuss opportunities',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company (optional)',
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
// ICONOS SVG
// ============================================

const Icons = {
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
  building: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
    </svg>
  )
};

// ============================================
// COMPONENTES
// ============================================

// Header
const Header: React.FC<{ lang: string; setLang: (l: string) => void; t: typeof content.es }> = ({ lang, setLang, t }) => {
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="relative h-10 sm:h-12 w-40 sm:w-48">
            <Image
              src="/images//Original_Logo.png"
              alt="Merca Capital"
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {['about', 'portfolio', 'thesis', 'model', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section === 'about' ? 'stats' : section)}
                className="text-sm font-medium tracking-wide uppercase transition-colors text-slate-300 hover:text-amber-500"
              >
                {t.nav[section as keyof typeof t.nav]}
              </button>
            ))}
            
            {/* Language Toggle */}
            <div className="flex gap-1 ml-4 p-1 rounded bg-slate-800/50">
              {['es', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase rounded transition-all ${
                    lang === l 
                      ? 'bg-amber-600 text-white' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300"
          >
            {mobileMenuOpen ? <Icons.close /> : <Icons.menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 py-6 space-y-4">
            {['about', 'portfolio', 'thesis', 'model', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section === 'about' ? 'stats' : section)}
                className="block w-full text-left text-slate-300 font-medium py-2"
              >
                {t.nav[section as keyof typeof t.nav]}
              </button>
            ))}
            <div className="flex gap-2 pt-4 border-t border-slate-800">
              {['es', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setMobileMenuOpen(false); }}
                  className={`px-4 py-2 text-sm font-semibold rounded ${
                    lang === l ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Hero Section
const Hero: React.FC<{ t: typeof content.es }> = ({ t }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Pattern - Industrial Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(180, 83, 9, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180, 83, 9, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/50 to-slate-900/90" />

      {/* Terracotta Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Overline */}
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-amber-600" />
          <span className="text-amber-500 text-sm font-semibold tracking-[0.25em] uppercase">
            {t.hero.overline}
          </span>
          <div className="h-px w-12 bg-amber-600" />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-100 leading-[1.1] mb-6">
          {t.hero.headline}
        </h1>

        {/* Subhead */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.subhead}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 text-white font-semibold rounded hover:bg-amber-500 transition-all hover:-translate-y-0.5 shadow-lg shadow-amber-900/30"
          >
            {t.hero.cta}
            <Icons.arrowDown />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-600 text-slate-300 font-semibold rounded hover:bg-slate-800 hover:border-slate-500 transition-all"
          >
            {t.hero.ctaSecondary}
            <Icons.arrowRight />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-amber-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

// Stats Section
const Stats: React.FC<{ t: typeof content.es }> = ({ t }) => {
  return (
    <section id="stats" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {t.stats.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.stats.description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {t.stats.items.map((stat, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 rounded text-center transition-all hover:-translate-y-1 ${
                stat.highlight 
                  ? 'bg-slate-900 text-white shadow-xl' 
                  : 'bg-white border border-slate-200 shadow-sm'
              }`}
            >
              <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 ${
                stat.highlight ? 'text-amber-500' : 'text-amber-600'
              }`}>
                {stat.value}
              </div>
              <div className={`text-sm uppercase tracking-wider ${
                stat.highlight ? 'text-slate-400' : 'text-slate-500'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Portfolio Section with Industrial Placeholders
const Portfolio: React.FC<{ t: typeof content.es }> = ({ t }) => {
  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-lg text-slate-600">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.portfolio.projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-50 rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              {/* Industrial Placeholder Image */}
              <div className="relative h-52 overflow-hidden">
                {/* Industrial Pattern Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `
                      linear-gradient(rgba(180, 83, 9, 0.5) 2px, transparent 2px),
                      linear-gradient(90deg, rgba(180, 83, 9, 0.5) 2px, transparent 2px)
                    `,
                    backgroundSize: '30px 30px',
                  }} />
                  {/* Industrial Building Silhouette */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-center gap-2 px-4">
                    <div className="w-16 h-24 bg-slate-600/50 rounded-t" />
                    <div className="w-20 h-32 bg-slate-600/50 rounded-t relative">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 border-2 border-amber-600/50 rounded" />
                    </div>
                    <div className="w-24 h-20 bg-slate-600/50 rounded-t" />
                    <div className="w-14 h-28 bg-slate-600/50 rounded-t" />
                  </div>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-amber-600/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{project.sqm}</span>
                </div>

                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded ${
                  project.status.includes('construcción') || project.status.includes('Development')
                    ? 'bg-amber-500 text-white'
                    : 'bg-slate-700 text-slate-200'
                }`}>
                  {project.status}
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 left-4 px-2 py-1 bg-slate-900/80 text-amber-500 text-xs font-mono rounded">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-amber-600 font-medium mb-3">
                  {project.city}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
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
const Thesis: React.FC<{ t: typeof content.es }> = ({ t }) => {
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: () => JSX.Element } = { 
      shield: Icons.shield, 
      grid: Icons.grid, 
      chart: Icons.chart 
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <section id="thesis" className="py-20 sm:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.thesis.title}
          </h2>
          <p className="text-lg text-slate-400">
            {t.thesis.subtitle}
          </p>
        </div>

        {/* Anti-Cyclical Box */}
        <div className="bg-slate-800/50 border-l-4 border-amber-600 rounded-r p-8 sm:p-10 mb-12">
          <h3 className="text-2xl font-bold text-amber-500 mb-4">
            {t.thesis.antiCyclical.title}
          </h3>
          <p className="text-slate-300 leading-relaxed mb-6">
            {t.thesis.antiCyclical.description}
          </p>
          <ul className="space-y-3">
            {t.thesis.antiCyclical.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-slate-300">
                <span className="text-amber-500 mt-0.5 flex-shrink-0">
                  <Icons.check />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Thesis Items */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.thesis.items.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/30 border border-slate-700/50 rounded p-8 hover:bg-slate-800/50 hover:border-amber-600/30 transition-all"
            >
              <div className="w-14 h-14 rounded bg-amber-600/20 flex items-center justify-center text-amber-500 mb-6">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
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
const Model: React.FC<{ t: typeof content.es }> = ({ t }) => {
  return (
    <section id="model" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {t.model.title}
          </h2>
          <p className="text-lg text-slate-600">
            {t.model.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.model.steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (desktop only) */}
              {index < t.model.steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-200 z-0" style={{ width: 'calc(100% - 2rem)' }} />
              )}
              
              <div className="relative z-10 bg-white rounded p-6 h-full shadow-sm border border-slate-100">
                <div className="text-5xl font-bold text-amber-500/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center">
          <div className="inline-block bg-slate-900 rounded px-8 py-4">
            <p className="text-lg text-amber-400 italic">
              "{t.model.description}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Leadership Section
const Leadership: React.FC<{ t: typeof content.es }> = ({ t }) => {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
          {t.leadership.title}
        </h2>

        <div className="bg-slate-50 rounded p-8 sm:p-12 border border-slate-100">
          {/* Initials */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-900 flex items-center justify-center">
            <span className="text-2xl font-bold text-amber-500">AG</span>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-1">
            {t.leadership.name}
          </h3>
          <p className="text-amber-600 font-medium mb-6">
            {t.leadership.role}
          </p>
          <p className="text-slate-600 leading-relaxed max-w-xl mx-auto">
            {t.leadership.bio}
          </p>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/alejandro-gayosso-a93099287/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-slate-700 hover:text-amber-600 font-medium transition-colors"
          >
            <Icons.linkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTA: React.FC<{ t: typeof content.es }> = ({ t }) => {
  return (
    <section className="py-20 sm:py-28 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Terracotta Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          {t.cta.title}
        </h2>
        <p className="text-lg text-slate-400 mb-10 leading-relaxed">
          {t.cta.description}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-3 px-10 py-4 bg-amber-600 text-white font-semibold rounded hover:bg-amber-500 transition-all hover:-translate-y-0.5 shadow-lg shadow-amber-900/30"
        >
          {t.cta.button}
          <Icons.arrowRight />
        </a>
      </div>
    </section>
  );
};

// Contact Section with Formspree
const Contact: React.FC<{ t: typeof content.es }> = ({ t }) => {
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
        headers: {
          'Accept': 'application/json'
        }
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
    <section id="contact" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {t.contact.title}
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              {t.contact.subtitle}
            </p>

            <div className="space-y-6">
              <a
                href={`tel:${t.contact.info.phone}`}
                className="flex items-center gap-4 text-slate-700 hover:text-amber-600 transition-colors"
              >
                <div className="w-12 h-12 rounded bg-slate-900 flex items-center justify-center text-amber-500">
                  <Icons.phone />
                </div>
                <span className="font-medium">{t.contact.info.phone}</span>
              </a>

              <a
                href={`mailto:${t.contact.info.email}`}
                className="flex items-center gap-4 text-slate-700 hover:text-amber-600 transition-colors"
              >
                <div className="w-12 h-12 rounded bg-slate-900 flex items-center justify-center text-amber-500">
                  <Icons.mail />
                </div>
                <span className="font-medium">{t.contact.info.email}</span>
              </a>

              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-12 h-12 rounded bg-slate-900 flex items-center justify-center text-amber-500">
                  <Icons.mapPin />
                </div>
                <span className="font-medium">{t.contact.info.locations}</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded p-8 shadow-sm border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.contact.form.name} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-slate-50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.contact.form.email} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-slate-50"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.contact.form.company}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-slate-50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.contact.form.message} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none bg-slate-50"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-4 bg-amber-600 text-white font-semibold rounded hover:bg-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? '...' : t.contact.form.submit}
              </button>

              {formStatus === 'success' && (
                <p className="text-green-600 text-center font-medium">
                  {t.contact.form.success}
                </p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-600 text-center font-medium">
                  {t.contact.form.error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer: React.FC<{ t: typeof content.es }> = ({ t }) => {
  return (
    <footer className="py-12 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Logo - Dark Version for Light Background */}
          <div className="flex flex-col items-center lg:items-start gap-2">
            <div className="relative h-12 w-48">
              <Image
                src="/images/Transparent_Logo_Negro.png"
                alt="Merca Capital"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-slate-500">{t.footer.tagline}</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-700 text-sm transition-colors">
              {t.footer.privacy}
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-gayosso-a93099287/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-amber-600 transition-colors"
            >
              <Icons.linkedin />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-500 text-sm">
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
  const t = content[lang];

  return (
    <main className="overflow-x-hidden">
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
