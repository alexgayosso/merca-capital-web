'use client'; // Refresh

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// ============================================
// MERCA CAPITAL - CÓDIGO DEFINITIVO
// Identidad: Navy Profundo + Cobre/Dorado
// ============================================

type Language = 'es' | 'en';

const content = {
  es: {
    nav: { about: 'Nosotros', portfolio: 'Portafolio', thesis: 'Tesis', model: 'Modelo', contact: 'Contacto' },
    hero: { overline: 'VISIÓN INMOBILIARIA', headline: 'Desarrollamos la infraestructura que alimenta a México', subhead: 'Mercados de abasto que operan con o sin crisis. 15 años construyendo activos esenciales con rendimientos probados.', cta: 'Ver Portafolio', ctaSecondary: 'Contactar' },
    stats: { title: 'Track Record Comprobado', items: [{ value: '52,000+', label: 'm² desarrollados' }, { value: '15+', label: 'años de operación' }, { value: '90%', label: 'ocupación promedio' }] },
    portfolio: { title: 'Nuestros Desarrollos', projects: [{ name: 'Mercahorro Torreón', city: 'Torreón', sqm: '9,000 m²' }, { name: 'Plaza Abastos Monterrey', city: 'Monterrey', sqm: '15,000 m²' }] },
    contact: { title: 'Contacto', locations: 'Madrid | Monterrey', email: 'hola@mercacapital.com' },
    footer: { rights: '© 2025 Merca Capital. Todos los derechos reservados.' }
  },
  en: {
    nav: { about: 'About', portfolio: 'Portfolio', thesis: 'Thesis', model: 'Model', contact: 'Contact' },
    hero: { overline: 'REAL ESTATE VISION', headline: 'We Build the Infrastructure That Feeds Mexico', subhead: 'Wholesale food markets that operate through any crisis. 15 years building essential assets.', cta: 'View Portfolio', ctaSecondary: 'Contact Us' },
    stats: { title: 'Proven Track Record', items: [{ value: '52,000+', label: 'sqm developed' }, { value: '15+', label: 'years operating' }, { value: '90%', label: 'avg. occupancy' }] },
    portfolio: { title: 'Our Developments', projects: [{ name: 'Mercahorro Torreon', city: 'Torreon', sqm: '9,000 sqm' }, { name: 'Plaza Abastos Monterrey', city: 'Monterrey', sqm: '15,000 sqm' }] },
    contact: { title: 'Contact', locations: 'Madrid | Monterrey', email: 'hola@mercacapital.com' },
    footer: { rights: '© 2025 Merca Capital. All rights reserved.' }
  }
};

const Icons = {
  menu: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  close: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
};

const Header = ({ lang, setLang, t }: { lang: Language; setLang: (l: Language) => void; t: any }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-[#000B29]/95 backdrop-blur-md shadow-xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="relative h-12 w-48">
          {/* Logo Principal usando el nombre de archivo sin espacios */}
          <Image src="/Original_Logo.png" alt="Merca Capital" fill className="object-contain object-left" priority />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {Object.keys(t.nav).map((key) => (
            <button key={key} className="text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-amber-500 transition-colors">{t.nav[key]}</button>
          ))}
          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="px-3 py-1 border border-amber-600 text-amber-500 text-[10px] font-black rounded hover:bg-amber-600 hover:text-white transition-all"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default function MercaCapitalPage() {
  const [lang, setLang] = useState<Language>('es');
  const t = content[lang];

  return (
    <main className="bg-[#000B29] text-white min-h-screen font-sans selection:bg-amber-500/30">
      <Header lang={lang} setLang={setLang} t={t} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C08A3E_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="relative z-10 max-w-4xl">
          <span className="text-amber-500 text-[10px] font-black tracking-[0.3em] uppercase mb-4 block">{t.hero.overline}</span>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[1.1]">{t.hero.headline}</h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">{t.hero.subhead}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-[#C08A3E] text-white font-black uppercase tracking-widest text-xs hover:bg-amber-500 transition-all shadow-2xl shadow-amber-900/40">{t.hero.cta}</button>
            <button className="px-10 py-5 border-2 border-slate-700 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all">{t.hero.ctaSecondary}</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {t.stats.items.map((item: any, i: number) => (
            <div key={i}>
              <div className="text-5xl font-bold text-amber-500 mb-2">{item.value}</div>
              <div className="text-[10px] font-black tracking-widest text-slate-500 uppercase">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Logo Final */}
      <footer className="py-20 flex flex-col items-center border-t border-white/5">
        <div className="relative h-10 w-40 mb-8 opacity-50 grayscale hover:grayscale-0 transition-all">
          <Image src="/Transparent_Logo_Blanco.png" alt="Merca Capital Footer" fill className="object-contain" />
        </div>
        <p className="text-[10px] tracking-widest text-slate-600 uppercase">{t.footer.rights}</p>
      </footer>
    </main>
  );
}