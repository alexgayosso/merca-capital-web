'use client';

import React, { useState } from 'react';
import { useLang } from '../../lib/LangContext';
import { Header, Footer, MomentumBanner } from '../../lib/Header';
import { TEAM_DATA, TEAM_LABELS } from '../../lib/content';

export default function EquipoPage() {
  const { lang } = useLang();
  const [bannerVisible, setBannerVisible] = useState(true);
  const [expanded, setExpanded] = useState<number | null>(0);
  const es = lang === 'es';
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
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 400, color: '#FFF', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>
            {labels.title}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', maxWidth: '600px', margin: 0 }}>{labels.subtitle}</p>
        </div>
      </section>

      <section className="mc-section" style={{ padding: '5rem 4rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="mc-team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {members.map((member, i) => (
              <div key={i} onClick={() => setExpanded(expanded === i ? null : i)}
                style={{ background: expanded === i ? '#F8F7F4' : '#FAFAFA', border: `1px solid ${expanded === i ? '#C08A3E' : 'rgba(0,0,0,0.06)'}`, borderLeft: `4px solid ${expanded === i ? '#C08A3E' : 'transparent'}`, padding: '2rem', cursor: 'pointer', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => { if (expanded !== i) { e.currentTarget.style.borderLeftColor = 'rgba(192,138,62,0.4)'; e.currentTarget.style.background = '#F8F7F4'; } }}
                onMouseLeave={(e) => { if (expanded !== i) { e.currentTarget.style.borderLeftColor = 'transparent'; e.currentTarget.style.background = '#FAFAFA'; } }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: expanded === i ? '1.5rem' : '0' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: `${member.color}18`, border: `2px solid ${member.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: member.color, fontSize: '14px', fontWeight: 700, flexShrink: 0 }}>
                    {member.initials}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: '#000B29', marginBottom: '2px' }}>{member.name}</div>
                    <div style={{ fontSize: '0.7rem', color: '#C9A84C', letterSpacing: '0.07em', textTransform: 'uppercase', fontWeight: 600, lineHeight: 1.4 }}>{member.title}</div>
                  </div>
                  <span style={{ color: '#C08A3E', fontSize: '1.4rem', fontWeight: 300 }}>{expanded === i ? '−' : '+'}</span>
                </div>
                {expanded === i && (
                  <div>
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
                )}
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

      {/* ── PROCESO ONBOARDING ──────────────────── */}
      <section className="mc-section" style={{ padding: '5rem 4rem', background: '#F8F7F4' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', fontWeight: 400, color: '#000B29', margin: '0 0 0.5rem 0', letterSpacing: '-0.02em' }}>
              {es ? '¿Qué pasa después de contactarnos?' : 'What happens after you contact us?'}
            </h2>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: 0 }}>{es ? 'Proceso claro, sin sorpresas' : 'Clear process, no surprises'}</p>
          </div>
          <div className="mc-model-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '1.4rem', left: 'calc(16.66% + 0.5rem)', right: 'calc(16.66% + 0.5rem)', height: '2px', background: '#C08A3E', opacity: 0.3, zIndex: 0 }} />
            {(es ? [
              { n: '01', titulo: 'Contacto inicial', desc: 'Rellena el formulario. En menos de 24 horas un socio se pone en contacto para una llamada de 30 minutos.' },
              { n: '02', titulo: 'NDA y documentación', desc: 'Firmamos un acuerdo de confidencialidad. Recibes el memorando completo, modelo financiero y documentación legal.' },
              { n: '03', titulo: 'Convenio ante notario', desc: 'Firmamos el Convenio de Adhesión ante notario público. Tu capital entra al fideicomiso bajo custodia de Bancrea.' },
            ] : [
              { n: '01', titulo: 'Initial contact', desc: 'Fill out the form. Within 24 hours a partner will reach out for a 30-minute introductory call.' },
              { n: '02', titulo: 'NDA and documentation', desc: 'We sign a confidentiality agreement. You receive the full memorandum, financial model and legal documentation.' },
              { n: '03', titulo: 'Notarized agreement', desc: 'We sign the Adhesion Agreement before a notary. Your capital enters the regulated trust under Bancrea custody.' },
            ]).map((p, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '44px', height: '44px', background: '#000B29', border: '2px solid #C08A3E', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', color: '#C08A3E', fontSize: '0.7rem', fontWeight: 800 }}>{p.n}</div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', fontWeight: 400, color: '#000B29', margin: '0 0 0.6rem 0' }}>{p.titulo}</h3>
                <p style={{ color: '#666', fontSize: '0.82rem', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
