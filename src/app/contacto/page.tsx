'use client';

import React, { useState } from 'react';
import { useLang } from '../../lib/LangContext';
import { Header, Footer, MomentumBanner } from '../../lib/Header';
import { content } from '../../lib/content';
import { Icons, CheckCircle } from '../../lib/Icons';

export default function ContactoPage() {
  const { lang } = useLang();
  const [bannerVisible, setBannerVisible] = useState(true);
  const t = content[lang];
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    try {
      const response = await fetch('https://formspree.io/f/xbdqykov', { method: 'POST', body: formData, headers: { Accept: 'application/json' } });
      if (response.ok) { setStatus('success'); form.reset(); }
      else { setStatus('error'); }
    } catch { setStatus('error'); }
  };

  return (
    <main style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#000B29' }}>
      {bannerVisible && <MomentumBanner onClose={() => setBannerVisible(false)} />}
      <Header bannerVisible={bannerVisible} />

      <section className="mc-section" style={{ padding: '10rem 4rem 6rem', background: '#F8F7F4' }}>
        <div className="mc-contact-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem' }}>
          <div>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 400, color: '#000B29', margin: '0 0 2rem 0', letterSpacing: '-0.02em' }}>{t.contact.title}</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ width: '45px', height: '45px', background: '#000B29', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C08A3E' }}>{Icons.mail()}</div>
                <span style={{ color: '#000B29', fontWeight: 500, fontSize: '1rem' }}>{t.contact.info.email}</span>
              </div>
              <div style={{ marginTop: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1.5rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#C08A3E', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>Investment & Strategy HQ</div>
                  <div style={{ color: '#000B29', fontWeight: 500, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span>{Icons.mapPin()}</span> Madrid · Monterrey
                  </div>
                </div>
                <div>
                  <div style={{ color: '#C08A3E', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>Operational Center</div>
                  <div style={{ color: '#000B29', fontWeight: 500, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span>{Icons.mapPin()}</span> Torreón · Gómez Palacio · Silao
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', padding: '0.5rem' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '40px', height: '40px', borderTop: '2px solid #C08A3E', borderRight: '2px solid #C08A3E' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '40px', borderBottom: '2px solid #C08A3E', borderLeft: '2px solid #C08A3E' }} />
            <div style={{ background: '#FFF', padding: '3rem', boxShadow: '0 15px 50px rgba(0,0,0,0.05)', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}><CheckCircle /></div>
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.6rem', fontWeight: 400, color: '#000B29', margin: '0 0 0.75rem 0' }}>{t.contact.form.successTitle}</h3>
                  <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.7, margin: '0 auto 2rem', maxWidth: '320px' }}>{t.contact.form.successMessage}</p>
                  <button onClick={() => setStatus('idle')} style={{ background: 'transparent', border: 'none', color: '#999', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                    {t.contact.form.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ color: '#C08A3E', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', marginBottom: '0.5rem' }}>{t.contact.form.formTitle}</div>
                  {[
                    { n: 'name', l: t.contact.form.name, ty: 'text' },
                    { n: 'email', l: t.contact.form.email, ty: 'email' },
                    { n: 'company', l: t.contact.form.company, ty: 'text' }
                  ].map((f) => (
                    <div key={f.n}>
                      <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, color: '#000B29', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{f.l}</label>
                      <input type={f.ty} name={f.n} required={f.n !== 'company'} style={{ width: '100%', padding: '1rem', border: 'none', borderBottom: '2px solid #E8E8E8', background: 'transparent', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }}
                        onFocus={(e) => e.target.style.borderBottomColor = '#C08A3E'}
                        onBlur={(e) => e.target.style.borderBottomColor = '#E8E8E8'} />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, color: '#000B29', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {lang === 'es' ? 'Perfil de LinkedIn / Cargo' : 'LinkedIn Profile / Title'}
                    </label>
                    <input type="text" name="linkedin_cargo" required placeholder={lang === 'es' ? 'linkedin.com/in/nombre  ·  Director de Inversiones' : 'linkedin.com/in/name  ·  Head of Investments'}
                      style={{ width: '100%', padding: '1rem', border: 'none', borderBottom: '2px solid #E8E8E8', background: 'transparent', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }}
                      onFocus={(e) => e.target.style.borderBottomColor = '#C08A3E'}
                      onBlur={(e) => e.target.style.borderBottomColor = '#E8E8E8'} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, color: '#000B29', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.contact.form.message}</label>
                    <textarea name="message" rows={3} required style={{ width: '100%', padding: '1rem', border: 'none', borderBottom: '2px solid #E8E8E8', background: 'transparent', fontSize: '1rem', outline: 'none', resize: 'none', transition: 'border-color 0.3s' }}
                      onFocus={(e) => e.target.style.borderBottomColor = '#C08A3E'}
                      onBlur={(e) => e.target.style.borderBottomColor = '#E8E8E8'} />
                  </div>
                  <button type="submit" disabled={status === 'sending'} style={{ background: '#000B29', color: '#FFF', padding: '1.2rem', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', marginTop: '0.5rem', transition: 'background 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#C08A3E'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#000B29'}>
                    {status === 'sending' ? '...' : t.contact.form.submit}
                  </button>
                  {status === 'error' && <p style={{ color: '#ff4444', fontSize: '0.9rem', textAlign: 'center', marginTop: '0.5rem' }}>{t.contact.form.error}</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
