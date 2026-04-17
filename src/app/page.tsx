'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const content = {
  es: {
    nav: ['Nosotros', 'Portafolio', 'Tesis', 'Contacto'],
    hero: { title: 'Infraestructura Esencial para el Abasto de México', sub: 'Desarrollamos activos inmobiliarios anticíclicos con flujos estables y plusvalía institucional. 15 años de liderazgo en mercados de abasto.', cta: 'Explorar Portafolio' },
    stats: [{ v: '52,000+', l: 'M² DESARROLLADOS' }, { v: '15+', l: 'AÑOS DE OPERACIÓN' }, { v: '90%', l: 'OCUPACIÓN PROM.' }],
    thesis: { title: 'Tesis de Inversión', sub: '¿Por qué Mercados de Abasto?', desc: 'A diferencia del retail tradicional, el abasto es una necesidad primaria. Operamos activos que mantienen su valor y demanda independientemente del ciclo económico.' }
  },
  en: {
    nav: ['About', 'Portfolio', 'Thesis', 'Contact'],
    hero: { title: 'Essential Infrastructure for Mexico\'s Food Supply', sub: 'We develop anti-cyclical real estate assets with stable cash flows and institutional growth. 15 years of leadership.', cta: 'Explore Portfolio' },
    stats: [{ v: '52,000+', l: 'SQM DEVELOPED' }, { v: '15+', l: 'YEARS OPERATING' }, { v: '90%', l: 'AVG. OCCUPANCY' }],
    thesis: { title: 'Investment Thesis', sub: 'Why Wholesale Markets?', desc: 'Unlike traditional retail, food supply is a primary need. We operate assets that maintain value and demand regardless of the economic cycle.' }
  }
};

export default function MercaCapitalPage() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const t = content[lang];

  return (
    <div style={{ backgroundColor: '#000B29', color: 'white', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* NAVBAR PROFESIONAL */}
      <nav style={{ height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 5%', borderBottom: '1px solid rgba(255,255,255,0.1)', position: 'sticky', top: 0, backgroundColor: 'rgba(0,11,41,0.8)', backdropFilter: 'blur(10px)', zIndex: 100 }}>
        <div style={{ position: 'relative', width: '200px', height: '50px' }}>
          <Image src="/Original_Logo.png" alt="Merca Capital" fill style={{ objectFit: 'contain' }} priority />
        </div>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          {t.nav.map(item => <span key={item} style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '1px', cursor: 'pointer', opacity: 0.8 }}>{item.toUpperCase()}</span>)}
          <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} style={{ background: 'transparent', border: '1px solid #C08A3E', color: '#C08A3E', padding: '5px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold' }}>{lang.toUpperCase()}</button>
        </div>
      </nav>

      {/* HERO SECTION - NIVEL ALTAVELA */}
      <section style={{ position: 'relative', padding: '120px 5% 80px', textAlign: 'center', background: 'radial-gradient(circle at center, #00164d 0%, #000B29 100%)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '5px 15px', border: '1px solid #C08A3E', borderRadius: '20px', marginBottom: '30px' }}>
            <span style={{ color: '#C08A3E', fontSize: '10px', fontWeight: 'bold', letterSpacing: '3px' }}>VISIÓN INMOBILIARIA</span>
          </div>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: '800', lineHeight: 1, marginBottom: '40px', letterSpacing: '-2px' }}>{t.hero.title}</h1>
          <p style={{ fontSize: '20px', color: '#94a3b8', maxWidth: '700px', margin: '0 auto 50px', lineHeight: '1.6' }}>{t.hero.sub}</p>
          <button style={{ backgroundColor: '#C08A3E', color: 'white', padding: '20px 45px', border: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.2s' }}>{t.hero.cta}</button>
        </div>
      </section>

      {/* STATS CON DISEÑO DE CRISTAL */}
      <section style={{ padding: '40px 5%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {t.stats.map((s, i) => (
            <div key={i} style={{ padding: '50px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', fontWeight: '800', color: '#C08A3E', marginBottom: '10px' }}>{s.v}</div>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#64748b', fontWeight: 'bold' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESIS DE INVERSIÓN */}
      <section style={{ padding: '100px 5%', backgroundColor: '#00081f' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '12px', color: '#C08A3E', fontWeight: 'bold', letterSpacing: '4px', marginBottom: '20px' }}>{t.thesis.sub.toUpperCase()}</h2>
          <h3 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '30px' }}>{t.thesis.title}</h3>
          <p style={{ fontSize: '22px', color: '#94a3b8', lineHeight: '1.8' }}>{t.thesis.desc}</p>
        </div>
      </section>

      {/* FOOTER INSTITUCIONAL */}
      <footer style={{ padding: '80px 5%', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <div style={{ position: 'relative', width: '180px', height: '60px', margin: '0 auto 30px' }}>
          <Image src="/Transparent_Logo_Blanco.png" alt="Merca Capital Vision" fill style={{ objectFit: 'contain', opacity: 0.6 }} />
        </div>
        <p style={{ fontSize: '11px', color: '#475569', letterSpacing: '2px' }}>{t.footer}</p>
      </footer>
    </div>
  );
}