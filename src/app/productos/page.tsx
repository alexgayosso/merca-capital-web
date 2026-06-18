'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLang } from '../../lib/LangContext';
import { Header, Footer, MomentumBanner } from '../../lib/Header';

export default function ProductosPage() {
  const { lang } = useLang();
  const [bannerVisible, setBannerVisible] = useState(true);
  const es = lang === 'es';

  return (
    <main style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#000B29' }}>
      {bannerVisible && <MomentumBanner onClose={() => setBannerVisible(false)} />}
      <Header bannerVisible={bannerVisible} />

      <section style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', background: '#000B29' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '10rem 4rem 6rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <div style={{ width: '24px', height: '1px', background: '#C08A3E' }} />
            <span style={{ color: '#C08A3E', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700 }}>
              {es ? 'Productos' : 'Products'}
            </span>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', fontWeight: 400, color: '#FFF', margin: '0 0 1.25rem 0', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            {es ? 'Dos vehículos. Una infraestructura.' : 'Two vehicles. One infrastructure.'}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 0 3rem', lineHeight: 1.7 }}>
            {es
              ? 'Fidux Mercahorro financia la operación comercial. Fidux Halo captura la apreciación de tierra que esa operación genera alrededor.'
              : 'Fidux Mercahorro finances the commercial operation. Fidux Halo captures the land appreciation that operation generates around it.'}
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/productos/fidux-mercahorro" style={{
              background: '#C08A3E', color: '#000B29', padding: '1.4rem 2.5rem', fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', minWidth: '240px', textAlign: 'center',
            }}>
              Fidux Mercahorro →
            </Link>
            <Link href="/productos/fidux-halo" style={{
              background: 'transparent', border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.85)',
              padding: '1.4rem 2.5rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              textDecoration: 'none', minWidth: '240px', textAlign: 'center',
            }}>
              Fidux Halo →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
