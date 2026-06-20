'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLang } from '../lib/LangContext';
import { Header, Footer, MomentumBanner } from '../lib/Header';
import { content } from '../lib/content';

export default function HomePage() {
  const { lang } = useLang();
  const [bannerVisible, setBannerVisible] = useState(true);
  const t = content[lang];
  const es = lang === 'es';

  return (
    <main style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#000B29' }}>
      {bannerVisible && <MomentumBanner onClose={() => setBannerVisible(false)} />}
      <Header bannerVisible={bannerVisible} />

      {/* ── HERO ─────────────────────────────────── */}
      <section style={{ minHeight: '88vh', background: '#000B29', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(192,138,62,0.08) 0%, transparent 50%)', zIndex: 1 }} />
        <div className="mc-hero-grid" style={{ width: '100%', maxWidth: '1600px', margin: '0 auto', padding: '8rem 4rem 5rem', position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ width: '50px', height: '1px', background: '#C08A3E' }} />
              <span style={{ color: '#C08A3E', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.35em' }}>{t.hero.tagline}</span>
              <div style={{ width: '50px', height: '1px', background: '#C08A3E' }} />
            </div>
            <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(2.6rem, 5vw, 4.5rem)', fontWeight: 400, lineHeight: 1.05, color: '#FFF', margin: '0 0 2rem 0', letterSpacing: '-0.03em' }}>
              {t.hero.headline1}<br/>
              <span style={{ color: '#C08A3E', fontStyle: 'italic', fontWeight: 400 }}>{t.hero.headline2}</span><br/>
              <span style={{ fontWeight: 400 }}>{t.hero.headline3}</span>
            </h1>
            {/* Bloque unificado: una sola barra dorada vertical que corre junto a las DOS frases.
                Antes: la barra solo envolvía la primera <p>, y un <div> horizontal suelto
                quedaba flotando debajo — eso era la "ralla" que José veía aparecer. */}
            <div style={{ borderLeft: '3px solid #C08A3E', paddingLeft: '1.5rem', maxWidth: '560px', marginBottom: '1.25rem' }}>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', lineHeight: 1.5, margin: '0 0 0.85rem 0', fontWeight: 300, fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>
                {t.hero.subtitle}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                {t.hero.description}
              </p>
            </div>
          </div>

          {/* Foto institucional — infraestructura de abasto en operación y expansión */}
          <div className="mc-hero-photo" style={{
            position: 'relative',
            height: '420px',
            overflow: 'hidden',
          }}>
            <Image
              src="/hero-obra.jpg"
              alt={es ? 'Infraestructura de abasto en operación' : 'Wholesale infrastructure in operation'}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            {/* Wash diagonal: oscurece el lado que toca el texto, se aclara hacia la derecha */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(115deg, rgba(0,11,41,0.95) 0%, rgba(0,11,41,0.7) 22%, rgba(0,11,41,0.35) 48%, rgba(0,11,41,0.12) 100%)',
            }} />
            {/* Wash vertical: ancla la base, evita que se vea "flotando" */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,11,41,0.55) 0%, transparent 35%, transparent 75%, rgba(0,11,41,0.25) 100%)',
            }} />
            {/* Acentos dorados en las esquinas — coherencia con el resto del sitio */}
            <div style={{ position: 'absolute', top: 0, right: 0, width: '48px', height: '48px', borderTop: '2px solid rgba(192,138,62,0.55)', borderRight: '2px solid rgba(192,138,62,0.55)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '48px', height: '48px', borderBottom: '2px solid rgba(192,138,62,0.55)', borderLeft: '2px solid rgba(192,138,62,0.55)' }} />
          </div>
        </div>
      </section>

      {/* ── BRIEF INTRO ──────────────────────────── */}
      <section className="mc-section" style={{ padding: '5rem 4rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#333', fontSize: '1.3rem', lineHeight: 1.8, fontWeight: 300, fontFamily: 'Georgia, serif' }}>
            {es
              ? 'Merca Capital es la plataforma de inversión institucional de Grupo Mercahorro: consolidamos, financiamos y operamos infraestructura comercial de abasto en México, el activo real más fragmentado y desatendido de Latam.'
              : 'Merca Capital is the institutional investment platform of Grupo Mercahorro: we consolidate, finance, and operate wholesale food infrastructure in Mexico — the most fragmented and underserved real asset in LatAm.'}
          </p>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────── */}
      <section className="mc-section" style={{ padding: '5rem 4rem', background: '#F8F7F4' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: 400, color: '#000B29', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>{t.stats.title}</h2>
            <p style={{ color: '#666', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>{t.stats.description}</p>
          </div>
          <div className="mc-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem' }}>
            {t.stats.items.map((stat, i) => (
              <div key={i} style={{ background: stat.highlight ? '#000B29' : '#FFF', padding: '2.5rem 1.5rem', textAlign: 'center', border: stat.highlight ? 'none' : '1px solid rgba(0,0,0,0.06)', boxShadow: stat.highlight ? '0 15px 40px rgba(0,11,41,0.15)' : 'none' }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', fontWeight: 400, color: '#C08A3E', lineHeight: 1, marginBottom: '0.8rem', letterSpacing: '-0.02em' }}>{stat.value}</div>
                <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: stat.highlight ? 'rgba(255,255,255,0.7)' : '#666' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
