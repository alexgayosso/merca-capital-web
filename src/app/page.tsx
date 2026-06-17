'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLang } from '../lib/LangContext';
import { Header, Footer, MomentumBanner } from '../lib/Header';
import { content } from '../lib/content';

export default function HomePage() {
  const { lang } = useLang();
  const [bannerVisible, setBannerVisible] = useState(true);
  const t = content[lang];
  const es = lang === 'es';

  const teasers = [
    {
      href: '/tesis-de-inversion',
      label: es ? 'Tesis de Inversión' : 'Investment Thesis',
      title: es ? '329 mercados. $80B USD. 78% obsoleto.' : '329 markets. $80B USD. 78% obsolete.',
      desc: es ? 'Por qué la infraestructura de abasto es el asset class anticíclico que nadie ha capturado.' : 'Why wholesale infrastructure is the anti-cyclical asset class no one has captured.',
    },
    {
      href: '/productos',
      label: es ? 'Productos' : 'Products',
      title: 'Fidux Mercahorro · Fidux Halo',
      desc: es ? 'Dos vehículos de inversión regulados, estructurados como fideicomiso ante fiduciaria CNBV.' : 'Two regulated investment vehicles, structured as a CNBV-regulated trust.',
    },
    {
      href: '/equipo',
      label: es ? 'Equipo' : 'Team',
      title: es ? '45+ años de experiencia conjunta' : '45+ years of combined experience',
      desc: es ? 'Liderazgo institucional con afiliación directa a MERCAMÉXICO.' : 'Institutional leadership with direct MERCAMÉXICO affiliation.',
    },
  ];

  return (
    <main style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#000B29' }}>
      {bannerVisible && <MomentumBanner onClose={() => setBannerVisible(false)} />}
      <Header bannerVisible={bannerVisible} />

      {/* ── HERO ─────────────────────────────────── */}
      <section style={{ minHeight: '92vh', background: '#000B29', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(192,138,62,0.08) 0%, transparent 50%)', zIndex: 1 }} />
        <div className="mc-hero-grid" style={{ width: '100%', maxWidth: '1600px', margin: '0 auto', padding: '8rem 4rem 4rem', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '780px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ width: '50px', height: '1px', background: '#C08A3E' }} />
              <span style={{ color: '#C08A3E', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.35em' }}>{t.hero.tagline}</span>
            </div>
            <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(3rem, 5.5vw, 5rem)', fontWeight: 400, lineHeight: 1.05, color: '#FFF', margin: '0 0 2rem 0', letterSpacing: '-0.03em' }}>
              {t.hero.headline1}<br/>
              <span style={{ color: '#C08A3E', fontStyle: 'italic', fontWeight: 400 }}>{t.hero.headline2}</span><br/>
              <span style={{ fontWeight: 400 }}>{t.hero.headline3}</span>
            </h1>
            <p style={{ color: '#FFF', fontSize: '1.35rem', lineHeight: 1.5, maxWidth: '560px', marginBottom: '1rem', fontWeight: 300, fontStyle: 'italic', borderLeft: '3px solid #C08A3E', paddingLeft: '1.5rem', fontFamily: 'Georgia, serif' }}>
              {t.hero.subtitle}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '540px', marginBottom: '3rem', fontWeight: 300 }}>
              {t.hero.description}
            </p>
            <div className="mc-hero-btns" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <Link href="/productos" style={{ background: '#C08A3E', color: '#000B29', padding: '1.2rem 2.8rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textDecoration: 'none', transition: 'all 0.3s', border: '2px solid #C08A3E' }}>
                {t.hero.cta}
              </Link>
              <Link href="/contacto" style={{ color: '#C08A3E', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textDecoration: 'none', borderBottom: '1px solid rgba(192,138,62,0.5)', paddingBottom: '5px' }}>
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRIEF INTRO — "lo que son y dos cosas más" ──────── */}
      <section className="mc-section" style={{ padding: '5rem 4rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#333', fontSize: '1.3rem', lineHeight: 1.8, fontWeight: 300, fontFamily: 'Georgia, serif' }}>
            {es
              ? 'Merca Capital es la plataforma de inversión institucional de Grupo Mercahorro: consolidamos, financiarizamos y operamos infraestructura comercial de abasto en México, el activo real más fragmentado y desatendido de América Latina.'
              : 'Merca Capital is the institutional investment platform of Grupo Mercahorro: we consolidate, financialize, and operate wholesale food infrastructure in Mexico — the most fragmented and underserved real asset in Latin America.'}
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

      {/* ── TEASERS — link out to dedicated pages ────────── */}
      <section className="mc-section" style={{ padding: '6rem 4rem', background: '#000B29' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="mc-team-grid">
            {teasers.map((tz) => (
              <Link key={tz.href} href={tz.href} style={{ textDecoration: 'none', display: 'block', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(192,138,62,0.2)', padding: '2.5rem', transition: 'all 0.3s' }}>
                <div style={{ color: '#C08A3E', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>{tz.label}</div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.3rem', fontWeight: 400, color: '#FFF', margin: '0 0 1rem 0', lineHeight: 1.3 }}>{tz.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.7, margin: '0 0 1.5rem' }}>{tz.desc}</p>
                <span style={{ color: '#C08A3E', fontSize: '0.75rem', fontWeight: 600 }}>{es ? 'Ver más →' : 'Learn more →'}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
