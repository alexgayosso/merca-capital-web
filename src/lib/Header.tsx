'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from './LangContext';

const NAV_ITEMS = [
  { href: '/tesis-de-inversion', es: 'Tesis de Inversión', en: 'Investment Thesis' },
  { href: '/productos', es: 'Productos', en: 'Products' },
  { href: '/equipo', es: 'Equipo', en: 'Team' },
  { href: '/contacto', es: 'Contacto', en: 'Contact' },
];

export const MomentumBanner: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div style={{
    background: 'linear-gradient(90deg, #8B6220, #C08A3E, #8B6220)',
    color: '#000B29',
    fontFamily: 'system-ui, sans-serif',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    position: 'relative',
    flexWrap: 'wrap',
    zIndex: 1001,
  }}>
    <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
      <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#000B29', display: 'inline-block', animation: 'pulse 1.8s ease-in-out infinite' }} />
      Primer close en proceso
    </span>
    <span style={{ opacity: 0.4 }}>·</span>
    <span>Capital en evaluación activa</span>
    <span style={{ opacity: 0.4 }}>·</span>
    <span>Acceso limitado a LPs calificados</span>
    <button onClick={onClose} style={{ position: 'absolute', right: '16px', background: 'none', border: 'none', cursor: 'pointer', color: '#000B29', opacity: 0.45, fontSize: '16px', lineHeight: 1 }}>✕</button>
  </div>
);

export const Header: React.FC<{ bannerVisible: boolean }> = ({ bannerVisible }) => {
  const { lang, setLang } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBtn = (active: boolean): React.CSSProperties => ({
    color: active ? '#C08A3E' : 'rgba(255,255,255,0.7)',
    fontSize: '0.7rem',
    fontWeight: 600,
    letterSpacing: '0.15em',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: 'color 0.3s',
  });

  return (
    <header style={{ position: 'fixed', top: bannerVisible ? '41px' : '0', left: 0, right: 0, zIndex: 1000, background: scrolled || menuOpen ? 'rgba(0,11,41,0.98)' : 'transparent', backdropFilter: scrolled ? 'blur(20px)' : 'none', borderBottom: scrolled ? '1px solid rgba(192,138,62,0.2)' : 'none', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: scrolled ? '70px' : '100px', transition: 'height 0.4s ease' }}>
        <Link href="/" style={{ position: 'relative', height: scrolled ? '45px' : '60px', width: scrolled ? '180px' : '220px', transition: 'all 0.4s ease', zIndex: 1001, display: 'block' }}>
          <Image src="/Transparent_Logo_Blanco.png" alt="Merca Capital" fill style={{ objectFit: 'contain', objectPosition: 'left' }} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="mc-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} style={navBtn(pathname === item.href)}
              onMouseEnter={(e) => { if (pathname !== item.href) e.currentTarget.style.color = '#C08A3E'; }}
              onMouseLeave={(e) => { if (pathname !== item.href) e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}>
              {lang === 'es' ? item.es : item.en}
            </Link>
          ))}
          <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            style={{ background: 'transparent', border: '1px solid rgba(192,138,62,0.3)', color: 'rgba(192,138,62,0.6)', padding: '6px 14px', fontSize: '0.65rem', fontWeight: 700, cursor: 'pointer', borderRadius: '2px', transition: 'all 0.3s', letterSpacing: '0.08em' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#C08A3E'; e.currentTarget.style.color = '#000B29'; e.currentTarget.style.borderColor = '#C08A3E'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(192,138,62,0.6)'; e.currentTarget.style.borderColor = 'rgba(192,138,62,0.3)'; }}>
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </nav>

        {/* Hamburger button (mobile only) */}
        <button className="mc-hamburger" onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', flexDirection: 'column', gap: '5px', zIndex: 1001 }}>
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#FFF', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#FFF', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#FFF', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,11,41,0.99)', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.8rem', padding: '2rem' }}>
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
              style={{ ...navBtn(pathname === item.href), fontSize: '1.1rem', letterSpacing: '0.2em' }}>
              {lang === 'es' ? item.es : item.en}
            </Link>
          ))}
          <button onClick={() => { setLang(lang === 'es' ? 'en' : 'es'); setMenuOpen(false); }}
            style={{ background: 'transparent', border: '1px solid rgba(192,138,62,0.4)', color: '#C08A3E', padding: '8px 20px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', borderRadius: '2px' }}>
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC = () => {
  const { lang } = useLang();
  const t = lang === 'es'
    ? { tagline: 'Private Equity Infrastructure', rights: '© 2026 Merca Capital SAPI de CV. Todos los derechos reservados.', privacy: 'Aviso Legal' }
    : { tagline: 'Private Equity Infrastructure', rights: '© 2026 Merca Capital SAPI de CV. All rights reserved.', privacy: 'Legal Notice' };

  return (
    <footer style={{ padding: '4rem 4rem 2.5rem', background: '#000B29', borderTop: '1px solid rgba(192,138,62,0.2)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
        <div style={{ position: 'relative', height: '55px', width: '240px' }}>
          <Image src="/Transparent_Logo_Blanco.png" alt="Merca Capital" fill style={{ objectFit: 'contain' }} />
        </div>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{t.tagline}</p>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { href: '/tesis-de-inversion', es: 'Tesis de Inversión', en: 'Investment Thesis' },
            { href: '/productos', es: 'Productos', en: 'Products' },
            { href: '/equipo', es: 'Equipo', en: 'Team' },
            { href: '/contacto', es: 'Contacto', en: 'Contact' },
          ].map((item) => (
            <Link key={item.href} href={item.href} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.75rem', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {lang === 'es' ? item.es : item.en}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
          <div>
            <div style={{ color: '#C08A3E', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif', marginBottom: '4px' }}>Investment & Strategy HQ</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontFamily: 'system-ui, sans-serif' }}>Madrid · Monterrey</div>
          </div>
          <div style={{ width: '1px', background: 'rgba(192,138,62,0.2)' }} />
          <div>
            <div style={{ color: '#C08A3E', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif', marginBottom: '4px' }}>Operational Center</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontFamily: 'system-ui, sans-serif' }}>Torreón · Gómez Palacio · Silao</div>
          </div>
          <div style={{ width: '1px', background: 'rgba(192,138,62,0.2)' }} />
          <div>
            <div style={{ color: '#C08A3E', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif', marginBottom: '4px' }}>Investor Relations</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontFamily: 'system-ui, sans-serif' }}>hola@mercacapital.com</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <Link href="/aviso-legal" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textDecoration: 'none', letterSpacing: '0.05em' }}>{t.privacy}</Link>
        </div>
        <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem', letterSpacing: '0.05em', margin: 0 }}>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
};
