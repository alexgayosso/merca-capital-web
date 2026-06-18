'use client';

import React, { useState } from 'react';
import { useLang } from '../../../lib/LangContext';
import { Header, Footer, MomentumBanner } from '../../../lib/Header';

export default function FiduxHaloPage() {
  const { lang } = useLang();
  const [bannerVisible, setBannerVisible] = useState(true);
  const es = lang === 'es';

  return (
    <main style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#000B29' }}>
      {bannerVisible && <MomentumBanner onClose={() => setBannerVisible(false)} />}
      <Header bannerVisible={bannerVisible} />

      <section className="mc-section" style={{ padding: '10rem 4rem 6rem', background: '#0C1E3C' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(192,138,62,0.6)' }} />
            <span style={{ color: 'rgba(192,138,62,0.8)', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700 }}>
              {es ? 'Productos' : 'Products'}
            </span>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', display: 'inline-block', marginBottom: '1.5rem' }}>
            {es ? 'Producto 2 · En estructuración' : 'Product 2 · In structuring'}
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 400, color: '#FFF', margin: '0 0 1.5rem 0', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            {es ? <>Fidux Halo<br /><span style={{ color: '#C08A3E', fontStyle: 'italic', fontSize: '0.65em' }}>Apreciación de tierra alrededor de la red Mercahorro</span></> : <>Fidux Halo<br /><span style={{ color: '#C08A3E', fontStyle: 'italic', fontSize: '0.65em' }}>Land appreciation around the Mercahorro network</span></>}
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            {es
              ? 'Cuando un Mercahorro entra en operación, atrae tráfico comercial constante, nuevos servicios y demanda de suelo en su zona inmediata. Fidux Halo adquiere tierra estratégicamente ubicada alrededor de los futuros nodos de la red, antes de que esa actividad eleve su valor.'
              : 'When a Mercahorro begins operating, it attracts constant commercial traffic, new services, and land demand in its immediate area. Fidux Halo acquires strategically located land around future network nodes, before that activity drives up its value.'}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.85, marginBottom: '2.5rem' }}>
            {es
              ? 'Es un vehículo complementario al Fidux Mercahorro, no un sustituto: mientras uno financia la operación comercial, el otro captura la plusvalía de suelo que esa operación genera en su entorno.'
              : 'It is a complementary vehicle to Fidux Mercahorro, not a substitute: while one finances the commercial operation, the other captures the land value uplift that operation generates in its surroundings.'}
          </p>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderLeft: '4px solid rgba(192,138,62,0.5)', padding: '1.75rem 2rem', marginBottom: '2rem' }}>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              {es ? 'Lógica de inversión' : 'Investment logic'}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
              {es
                ? 'Adquisición temprana de suelo en el radio de influencia de nodos Mercahorro en desarrollo o pipeline, antes de la entrada en operación. La tesis es la misma que ha funcionado alrededor de infraestructura comercial en cualquier mercado: el suelo cercano a un polo de actividad constante se revaloriza conforme el polo madura.'
                : 'Early land acquisition within the influence radius of Mercahorro nodes in development or pipeline, ahead of operational launch. The thesis mirrors what has worked around commercial infrastructure in any market: land near a hub of constant activity appreciates as that hub matures.'}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem 2rem', background: 'rgba(192,138,62,0.05)', border: '1px solid rgba(192,138,62,0.2)' }}>
            <span style={{ color: '#C08A3E', fontSize: '1.2rem' }}>○</span>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', margin: 0, lineHeight: 1.6 }}>
              {es
                ? 'Fidux Halo se encuentra en fase de estructuración legal y financiera. El acceso está reservado a inversionistas que ya participan en Fidux Mercahorro. Si te interesa ser de los primeros en conocer los términos, contáctanos.'
                : 'Fidux Halo is currently in legal and financial structuring. Access is reserved for investors already participating in Fidux Mercahorro. If you would like to be among the first to learn the terms, get in touch.'}
            </p>
          </div>

          <a href="/contacto" style={{ display: 'inline-block', marginTop: '2rem', background: 'transparent', border: '1px solid #C08A3E', color: '#C08A3E', padding: '1rem 2.25rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>
            {es ? 'Quiero más información →' : 'I want more information →'}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
