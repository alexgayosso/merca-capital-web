'use client';

import React, { useState } from 'react';
import { useLang } from '../../lib/LangContext';
import { Header, Footer, MomentumBanner } from '../../lib/Header';
import { content, MOAT_CONTENT } from '../../lib/content';
import { Icons } from '../../lib/Icons';

export default function TesisPage() {
  const { lang } = useLang();
  const [bannerVisible, setBannerVisible] = useState(true);
  const t = content[lang];
  const es = lang === 'es';
  const moat = MOAT_CONTENT[lang];


  return (
    <main style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#000B29' }}>
      {bannerVisible && <MomentumBanner onClose={() => setBannerVisible(false)} />}
      <Header bannerVisible={bannerVisible} />

      {/* Page header */}
      <section style={{ padding: '10rem 4rem 4rem', background: '#000B29' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <div style={{ width: '24px', height: '1px', background: '#C08A3E' }} />
            <span style={{ color: '#C08A3E', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700 }}>
              {es ? 'Tesis de Inversión' : 'Investment Thesis'}
            </span>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 400, color: '#FFF', margin: 0, letterSpacing: '-0.02em', maxWidth: '700px', lineHeight: 1.15 }}>
            {es ? 'El insight que nadie ve' : 'The insight no one sees'}
          </h1>
        </div>
      </section>

      {/* ── INSIGHT ─────────────────────────────── */}
      <section style={{ padding: '4rem 4rem 5rem', background: '#000000', borderTop: '3px solid #C08A3E', borderBottom: '3px solid #C08A3E' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
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

      {/* ── UNFAIR ADVANTAGE ────────────────────── */}
      <section className="mc-section" style={{ padding: '7rem 4rem', background: '#000B29' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem', maxWidth: '1050px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{ width: '24px', height: '1px', background: '#C08A3E' }} />
              <span style={{ color: '#C08A3E', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{moat.label}</span>
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 400, color: '#FFF', margin: '0 0 1.5rem 0', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              {moat.title}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.8, margin: 0, maxWidth: '650px' }}>
              {moat.subtitle}
            </p>
          </div>
          <div className="mc-moat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
            {moat.items.map((m, i) => (
              <div key={i} style={{ background: '#000B29', padding: '3rem 2.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)', borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ color: '#C08A3E', marginBottom: '1.25rem' }}>{Icons[m.icon]?.()}</div>
                <div style={{ color: '#C08A3E', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px' }}>{m.sub}</div>
                <h3 style={{ color: '#FFF', fontSize: '1.3rem', fontWeight: 500, fontFamily: 'Georgia, serif', margin: '0 0 1rem 0' }}>{m.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.75, margin: '0 0 1.5rem 0' }}>{m.desc}</p>
                <div style={{ borderTop: '1px solid rgba(192,138,62,0.2)', paddingTop: '1rem' }}>
                  <span style={{ color: '#C08A3E', fontSize: '0.8rem', fontWeight: 600 }}>{m.metric}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1px', background: 'rgba(192,138,62,0.06)', border: '1px solid rgba(192,138,62,0.2)', padding: '2rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ fontFamily: 'Georgia, serif', color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontStyle: 'italic', margin: 0 }}>{moat.quote}</p>
            <span style={{ color: '#C08A3E', fontSize: '0.75rem', letterSpacing: '0.06em' }}>{moat.quoteBy}</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
