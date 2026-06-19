'use client';

import React, { useState } from 'react';
import { useLang } from '../../lib/LangContext';
import { Header, Footer, MomentumBanner } from '../../lib/Header';
import { TEAM_DATA, TEAM_LABELS } from '../../lib/content';

export default function EquipoPage() {
  const { lang } = useLang();
  const [bannerVisible, setBannerVisible] = useState(true);
  const labels = TEAM_LABELS[lang];
  const members = TEAM_DATA[lang];

  return (
    <main style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#000B29' }}>
      {bannerVisible && <MomentumBanner onClose={() => setBannerVisible(false)} />}
      <Header bannerVisible={bannerVisible} />

      {/* Page header */}
      <section style={{ padding: '10rem 4rem 4rem', background: '#000B29' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <div style={{ width: '24px', height: '1px', background: '#C08A3E' }} />
            <span style={{ color: '#C08A3E', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700 }}>{labels.label}</span>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 400, color: '#FFF', margin: '0 0 1.5rem 0', letterSpacing: '-0.02em' }}>
            {labels.title}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', maxWidth: '600px', margin: 0 }}>{labels.subtitle}</p>
        </div>
      </section>

      <section className="mc-section" style={{ padding: '5rem 4rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="mc-team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {members.map((member, i) => (
              <div key={i}
                style={{ background: '#FAFAFA', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '4px solid #C08A3E', padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: `${member.color}18`, border: `2px solid ${member.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: member.color, fontSize: '14px', fontWeight: 700, flexShrink: 0 }}>
                    {member.initials}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: '#000B29', marginBottom: '2px' }}>{member.name}</div>
                    <div style={{ fontSize: '0.7rem', color: '#C9A84C', letterSpacing: '0.07em', textTransform: 'uppercase', fontWeight: 600, lineHeight: 1.4 }}>{member.title}</div>
                  </div>
                </div>
                <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>{member.bio}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <div style={{ color: '#C08A3E', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px' }}>{labels.formation}</div>
                    {member.credentials.map((cr, ci) => <div key={ci} style={{ color: '#000B29', fontSize: '0.85rem', padding: '4px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>· {cr}</div>)}
                  </div>
                  <div>
                    <div style={{ color: '#C08A3E', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px' }}>{labels.roles}</div>
                    {member.roles.map((r, ri) => <div key={ri} style={{ color: '#000B29', fontSize: '0.85rem', padding: '4px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>· {r}</div>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem', background: '#000B29', padding: '2rem 2.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', borderLeft: '4px solid #C08A3E' }}>
            <div style={{ fontSize: '2rem' }}>🏛</div>
            <div>
              <div style={{ color: '#C08A3E', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '6px' }}>{labels.badge}</div>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>{labels.badgeText}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
