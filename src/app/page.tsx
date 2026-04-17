'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Contenido bilingüe simplificado para asegurar carga
const content = {
  es: {
    hero: { overline: 'VISIÓN INMOBILIARIA', headline: 'Desarrollamos la infraestructura que alimenta a México', subhead: 'Mercados de abasto que operan con o sin crisis. 15 años construyendo activos esenciales con rendimientos probados.', cta: 'VER PORTAFOLIO', ctaSecondary: 'CONTACTAR' },
    stats: [{ v: '52,000+', l: 'M² DESARROLLADOS' }, { v: '15+', l: 'AÑOS DE OPERACIÓN' }, { v: '90%', l: 'OCUPACIÓN PROMEDIO' }],
    footer: '© 2025 MERCA CAPITAL. TODOS LOS DERECHOS RESERVADOS.'
  },
  en: {
    hero: { overline: 'REAL ESTATE VISION', headline: 'We Build the Infrastructure That Feeds Mexico', subhead: 'Wholesale food markets that operate through any crisis. 15 years building essential assets.', cta: 'VIEW PORTFOLIO', ctaSecondary: 'CONTACT US' },
    stats: [{ v: '52,000+', l: 'SQM DEVELOPED' }, { v: '15+', l: 'YEARS OPERATING' }, { v: '90%', l: 'AVG. OCCUPANCY' }],
    footer: '© 2025 MERCA CAPITAL. ALL RIGHTS RESERVED.'
  }
};

export default function MercaCapitalPage() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const t = content[lang];

  return (
    <main style={{ backgroundColor: '#000B29', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', textAlign: 'center', padding: '40px 20px' }}>
      
      {/* Botón de Idioma flotante para que no falle el Header */}
      <button 
        onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
        style={{ position: 'fixed', top: '20px', right: '20px', padding: '10px', backgroundColor: '#C08A3E', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', zIndex: 100 }}
      >
        {lang === 'es' ? 'ENGLISH' : 'ESPAÑOL'}
      </button>

      {/* Header / Logo Principal */}
      <div style={{ marginBottom: '60px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: '300px', height: '80px' }}>
          <Image src="/Original_Logo.png" alt="Merca Capital" fill style={{ objectFit: 'contain' }} priority />
        </div>
      </div>

      {/* Hero Section */}
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ color: '#C08A3E', letterSpacing: '0.3em', fontSize: '12px', fontWeight: 'bold', marginBottom: '20px' }}>{t.hero.overline}</p>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 'bold', marginBottom: '30px', lineHeight: '1.1' }}>{t.hero.headline}</h1>
        <p style={{ color: '#94a3b8', fontSize: '18px', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>{t.hero.subhead}</p>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{ backgroundColor: '#C08A3E', color: 'white', padding: '15px 30px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>{t.hero.cta}</button>
          <button style={{ backgroundColor: 'transparent', color: 'white', padding: '15px 30px', border: '2px solid #475569', fontWeight: 'bold', cursor: 'pointer' }}>{t.hero.ctaSecondary}</button>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', margin: '80px auto', maxWidth: '1000px', backgroundColor: 'rgba(0,0,0,0.2)', padding: '40px', borderRadius: '10px' }}>
        {t.stats.map((s, i) => (
          <div key={i}>
            <div style={{ fontSize: '40px', fontWeight: 'bold', color: '#C08A3E', marginBottom: '10px' }}>{s.v}</div>
            <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#64748b' }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Footer / Logo Blanco */}
      <div style={{ marginTop: '100px', borderTop: '1px solid #1e293b', paddingTop: '40px' }}>
        <div style={{ position: 'relative', width: '150px', height: '50px', margin: '0 auto 20px', opacity: 0.7 }}>
          <Image src="/Transparent_Logo_Blanco.png" alt="Merca Capital Vision" fill style={{ objectFit: 'contain' }} />
        </div>
        <p style={{ fontSize: '10px', color: '#475569', letterSpacing: '0.1em' }}>{t.footer}</p>
      </div>
    </main>
  );
}