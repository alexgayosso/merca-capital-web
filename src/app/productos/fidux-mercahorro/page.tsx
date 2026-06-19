'use client';

import React, { useState } from 'react';
import { useLang } from '../../../lib/LangContext';
import { Header, Footer, MomentumBanner } from '../../../lib/Header';

export default function FiduxMercahorroPage() {
  const { lang } = useLang();
  const [bannerVisible, setBannerVisible] = useState(true);
  const es = lang === 'es';

  const ficha = [
    { label: es ? 'Ticket mínimo' : 'Min. ticket', value: '$10M MXN', sub: es ? 'Por hub geográfico (4 hubs en total)' : 'Per geographic hub (4 hubs total)' },
    { label: 'Clase A', value: '17.50%', sub: es ? 'Cupón fijo años 3–10 · 5% años 1–2' : 'Fixed coupon yrs 3–10 · 5% yrs 1–2' },
    { label: 'Clase B', value: '11.25% + 50%', sub: es ? 'Cupón + participación en utilidades' : 'Coupon + profit participation' },
    { label: es ? 'Rentabilidad máxima' : 'Max return', value: '33.7%', sub: es ? 'Anual — escenario E2 (100% Clase B)' : 'Annual — scenario E2 (100% Class B)' },
    { label: es ? 'Liquidez' : 'Liquidity', value: es ? 'Año 3+' : 'Year 3+', sub: es ? 'Ventanas trimestrales o libre entre particulares' : 'Quarterly windows or free transfer between investors' },
    { label: es ? 'Estructura legal' : 'Legal structure', value: es ? 'Fideicomiso regulado' : 'Regulated Trust', sub: 'Bancrea · Fiduciaria CNBV' },
    { label: es ? 'Garantía' : 'Collateral', value: es ? 'Activos reales' : 'Real assets', sub: es ? 'Terreno y locales escriturados en fideicomiso' : 'Land and units titled within the trust' },
    { label: es ? 'Auditoría' : 'Audit', value: 'Big 4', sub: es ? 'Anual · Firma de reconocido prestigio' : 'Annual · Internationally recognized firm' },
  ];

  const escenarios = [
    { id: 'E1', composicion: '100% A', rentAnual: '13.30%', retornoTotal: '150%', totalRecibido: '$15.0M MXN', perfil: es ? 'Defensivo' : 'Defensive', highlight: false },
    { id: 'E2', composicion: '100% B', rentAnual: '33.77%', retornoTotal: '405%', totalRecibido: '$40.53M MXN', perfil: es ? 'Crecimiento' : 'Growth', highlight: true },
    { id: 'E3', composicion: '50% A / 50% B', rentAnual: '23.13%', retornoTotal: '277%', totalRecibido: '$27.76M MXN', perfil: es ? 'Equilibrado' : 'Balanced', highlight: false },
    { id: 'E4', composicion: '60% A / 40% B', rentAnual: '21.01%', retornoTotal: '252%', totalRecibido: '$25.21M MXN', perfil: es ? 'Moderado' : 'Moderate', highlight: false },
    { id: 'E5', composicion: '70% A / 30% B', rentAnual: '18.88%', retornoTotal: '226%', totalRecibido: '$22.65M MXN', perfil: es ? 'Conservador' : 'Conservative', highlight: false },
  ];
  const headers = es
    ? ['Escenario', 'Composición', 'Rentab. anual', 'Retorno total', 'Total recibido', 'Perfil']
    : ['Scenario', 'Composition', 'Annual return', 'Total return', 'Total received', 'Profile'];

  const zonas = [
    { id: 'Z1', nombre: es ? 'Zona Norte' : 'North Zone', estados: 'Chihuahua, Coahuila, Nuevo León, Tamaulipas, San Luis Potosí', color: '#C08A3E', activos: 'Torreón 1 · Torreón 2 · Monterrey', status: es ? 'En operación' : 'Operating' },
    { id: 'Z2', nombre: es ? 'Zona Bajío-Occidente' : 'Bajío-West Zone', estados: 'Guanajuato, Jalisco, Michoacán, Colima, Nayarit, Aguascalientes, Zacatecas', color: '#7C8E76', activos: es ? 'Gómez Palacio · Silao' : 'Gómez Palacio · Silao', status: es ? 'En desarrollo' : 'In development' },
    { id: 'Z3', nombre: es ? 'Zona Centro' : 'Central Zone', estados: 'Querétaro, Hidalgo, Estado de México, CDMX, Morelos, Puebla, Guerrero, Tlaxcala', color: '#7A8B9A', activos: es ? 'Pipeline 2027–2028' : 'Pipeline 2027–2028', status: 'Pipeline' },
    { id: 'Z4', nombre: es ? 'Zona Sur-Sureste' : 'South-Southeast Zone', estados: 'Veracruz, Oaxaca, Chiapas, Tabasco, Campeche, Yucatán, Quintana Roo', color: '#9A8B6A', activos: es ? 'Pipeline 2028–2030' : 'Pipeline 2028–2030', status: 'Pipeline' },
  ];

  const alts = [
    { nombre: 'CETES 28 días', retorno: '~10–11%', w: 28, highlight: false, tipo: es ? 'Renta fija · Sin garantía en activos' : 'Fixed income · No asset collateral' },
    { nombre: 'S&P 500', retorno: '~12–16%*', w: 38, highlight: false, tipo: es ? 'Renta variable · Alta volatilidad' : 'Equities · High volatility' },
    { nombre: es ? 'Bienes raíces tradicional' : 'Traditional real estate', retorno: '5–8%', w: 18, highlight: false, tipo: es ? 'Ilíquido · Cap rate estándar' : 'Illiquid · Standard cap rate' },
    { nombre: 'Fidux Mercahorro — Clase A', retorno: '17.50%', w: 55, highlight: true, tipo: es ? 'Cupón fijo · Garantía en activos reales · CNBV' : 'Fixed coupon · Real asset collateral · CNBV' },
    { nombre: 'Fidux Mercahorro — Clase B', retorno: '33.77%', w: 100, highlight: true, tipo: es ? 'Cupón + participación · Máximo rendimiento' : 'Coupon + participation · Maximum return' },
  ];

  return (
    <main style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#000B29' }}>
      {bannerVisible && <MomentumBanner onClose={() => setBannerVisible(false)} />}
      <Header bannerVisible={bannerVisible} />

      {/* ── HEADER + FORM ─────────────────────────── */}
      <section className="mc-section" style={{ padding: '10rem 4rem 5rem', background: '#000B29' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="mc-fondoi-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            <div>
              <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 400, color: '#FFF', margin: '0 0 1.75rem 0', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                {es ? <>Fidux Mercahorro<br /><span style={{ color: '#C08A3E', fontStyle: 'italic' }}>Fideicomiso regulado de inversión inmobiliaria</span></> : <>Fidux Mercahorro<br /><span style={{ color: '#C08A3E', fontStyle: 'italic' }}>Regulated real estate investment trust</span></>}
              </h1>

              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                {es
                  ? 'El vehículo Fidux Mercahorro es un fideicomiso regulado de inversión inmobiliaria que invierte en infraestructura comercial de abasto en México. Desarrolla centros comerciales de alimentos especializados en la última milla, en zonas desatendidas de las principales ciudades, funcionando como satélites de las centrales de abasto mayoristas.'
                  : 'Fidux Mercahorro is a regulated real estate investment trust that invests in wholesale food infrastructure in Mexico. It develops last-mile food commercial centers in underserved areas of major cities, functioning as satellites of wholesale markets.'}
              </p>

              {/* 5 mecanismos de protección */}
              <div style={{ background: 'rgba(192,138,62,0.06)', border: '1px solid rgba(192,138,62,0.2)', borderLeft: '4px solid #C08A3E', padding: '1.5rem 2rem', marginBottom: '2.5rem' }}>
                <div style={{ color: '#C08A3E', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  {es ? '5 mecanismos de protección al inversor' : '5 investor protection mechanisms'}
                </div>
                {(es ? [
                  'Fideicomiso regulado · capital nunca pasa por cuentas de Merca Capital',
                  'Garantía en activos reales · terreno y locales escriturados en fideicomiso',
                  'Firmado ante notario público',
                  'Auditoría externa anual por firma Big 4',
                  'Mecanismos de liquidez anticipada desde el año 3',
                ] : [
                  'Regulated trust · capital never passes through Merca Capital accounts',
                  'Real asset collateral · land and units titled within the trust',
                  'Notarized agreement',
                  'Annual external audit by Big 4 firm',
                  'Early liquidity mechanisms from year 3',
                ]).map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#C08A3E', fontSize: '0.85rem', flexShrink: 0, marginTop: '1px' }}>✓</span>
                    <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA — mismo patrón que Fidux Halo */}
              <a href="/contacto" style={{ display: 'inline-block', background: 'transparent', border: '1px solid #C08A3E', color: '#C08A3E', padding: '1rem 2.25rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>
                {es ? 'Quiero más información →' : 'I want more information →'}
              </a>
            </div>

            {/* RIGHT — Ficha técnica */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(192,138,62,0.2)' }}>
              <div style={{ background: '#C08A3E', padding: '1.2rem 2rem' }}>
                <div style={{ color: '#000B29', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  {es ? 'Ficha técnica — Fidux Mercahorro' : 'Fund sheet — Fidux Mercahorro'}
                </div>
                <div style={{ color: 'rgba(0,11,41,0.6)', fontSize: '0.65rem', marginTop: '2px' }}>
                  {es ? 'Condiciones válidas hasta fin 3Q 2026' : 'Terms valid until end Q3 2026'}
                </div>
              </div>
              {ficha.map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.1rem 2rem', borderBottom: i < ficha.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', gap: '1rem' }}>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.68rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '3px' }}>{item.label}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>{item.sub}</div>
                  </div>
                  <div style={{ color: '#C08A3E', fontSize: '1rem', fontFamily: 'Georgia, serif', fontWeight: 400, textAlign: 'right', flexShrink: 0 }}>{item.value}</div>
                </div>
              ))}
              <div style={{ padding: '1.25rem 2rem', borderTop: '1px solid rgba(192,138,62,0.15)', background: 'rgba(192,138,62,0.04)' }}>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', margin: 0, lineHeight: 1.6 }}>
                  {es ? 'Confidencial · Solo inversionistas cualificados · Información detallada previa firma de NDA' : 'Confidential · Qualified investors only · Detailed information upon NDA signature'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ESCENARIOS E1–E5 ─────────────────────── */}
      <section id="escenarios" className="mc-section" style={{ padding: '5rem 4rem', background: '#000B29', borderTop: '1px solid rgba(192,138,62,0.1)', scrollMarginTop: '100px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{ width: '24px', height: '1px', background: '#C08A3E' }} />
              <span style={{ color: '#C08A3E', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
                {es ? 'Escenarios de inversión — Ticket $10M MXN' : 'Investment scenarios — $10M MXN ticket'}
              </span>
              <div style={{ width: '24px', height: '1px', background: '#C08A3E' }} />
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 400, color: '#FFF', margin: 0, letterSpacing: '-0.02em' }}>
              {es ? 'Todos los escenarios devuelven el capital en el año 10' : 'All scenarios return capital by year 10'}
            </h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'rgba(192,138,62,0.08)', borderBottom: '1px solid rgba(192,138,62,0.3)' }}>
                  {headers.map((h, i) => (
                    <th key={i} style={{ padding: '1rem 1.5rem', textAlign: i === 0 ? 'center' : 'left', color: 'rgba(255,255,255,0.45)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {escenarios.map((e) => (
                  <tr key={e.id} style={{ background: e.highlight ? 'rgba(192,138,62,0.08)' : 'transparent', borderBottom: '1px solid rgba(255,255,255,0.04)', borderLeft: e.highlight ? '3px solid #C08A3E' : '3px solid transparent' }}>
                    <td style={{ padding: '1.1rem 1.5rem', textAlign: 'center' }}>
                      <span style={{ background: e.highlight ? '#C08A3E' : 'rgba(255,255,255,0.08)', color: e.highlight ? '#000B29' : 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontWeight: 800, padding: '3px 10px' }}>{e.id}</span>
                    </td>
                    <td style={{ padding: '1.1rem 1.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{e.composicion}</td>
                    <td style={{ padding: '1.1rem 1.5rem' }}><span style={{ color: '#C08A3E', fontSize: '1.05rem', fontFamily: 'Georgia, serif' }}>{e.rentAnual}</span></td>
                    <td style={{ padding: '1.1rem 1.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{e.retornoTotal}</td>
                    <td style={{ padding: '1.1rem 1.5rem' }}><span style={{ color: e.highlight ? '#C08A3E' : '#FFF', fontSize: '0.95rem', fontWeight: e.highlight ? 700 : 400 }}>{e.totalRecibido}</span></td>
                    <td style={{ padding: '1.1rem 1.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>{e.perfil}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.72rem', marginTop: '1.25rem', lineHeight: 1.6 }}>
            {es ? 'Proyecciones basadas en el modelo financiero auditado. Rentabilidades pasadas no garantizan resultados futuros. Condiciones válidas hasta fin 3Q 2026.' : 'Projections based on audited financial model. Past performance does not guarantee future results. Terms valid until end Q3 2026.'}
          </p>
        </div>
      </section>

      {/* ── COMPARATIVA VS ALTERNATIVAS (movida desde Tesis) ────── */}
      <section className="mc-section" style={{ padding: '6rem 4rem', background: '#F8F7F4' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{ width: '24px', height: '1px', background: '#C08A3E' }} />
              <span style={{ color: '#C08A3E', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
                {es ? '¿Por qué Fidux vs otras alternativas?' : 'Why Fidux vs other alternatives?'}
              </span>
              <div style={{ width: '24px', height: '1px', background: '#C08A3E' }} />
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 400, color: '#000B29', margin: '0 0 0.75rem 0', letterSpacing: '-0.02em' }}>
              {es ? 'La misma seguridad. Un retorno diferente.' : 'Same security. A different return.'}
            </h2>
            <p style={{ color: '#666', fontSize: '1rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              {es ? 'Fidux Clase A ofrece 17.50% fijo con garantía en activos reales — más del doble que CETES, con respaldo físico que la renta fija no tiene.' : 'Fidux Class A offers 17.50% fixed with real asset collateral — more than double CETES, with physical backing that fixed income lacks.'}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {alts.map((a, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '240px 1fr 90px', gap: '1.5rem', alignItems: 'center', padding: '1.25rem 1.5rem', background: a.highlight ? '#000B29' : '#FFF', border: a.highlight ? '1px solid rgba(192,138,62,0.3)' : '1px solid rgba(0,0,0,0.05)', borderLeft: a.highlight ? '4px solid #C08A3E' : '4px solid transparent' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: a.highlight ? 700 : 500, color: a.highlight ? '#FFF' : '#333', marginBottom: '3px' }}>{a.nombre}</div>
                  <div style={{ fontSize: '0.68rem', color: a.highlight ? 'rgba(255,255,255,0.4)' : '#999' }}>{a.tipo}</div>
                </div>
                <div style={{ height: '24px', background: 'rgba(0,0,0,0.05)', borderRadius: '2px', overflow: 'hidden', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${a.w}%`, background: a.highlight ? '#C08A3E' : '#CCC', borderRadius: '2px' }} />
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.15rem', color: a.highlight ? '#C08A3E' : '#888' }}>{a.retorno}</div>
                  <div style={{ fontSize: '0.6rem', color: a.highlight ? 'rgba(255,255,255,0.3)' : '#BBB', marginTop: '2px' }}>{es ? 'anual' : 'annual'}</div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ color: '#AAA', fontSize: '0.7rem', marginTop: '1.25rem' }}>
            {es
              ? 'Comparativa referencial. CETES y S&P 500 no garantizan activos físicos. Clase B corresponde al escenario E2. *S&P 500: ~10–12% promedio histórico en USD a 40 años; rango mostrado ajustado por depreciación histórica del peso MXN/USD.'
              : 'Reference comparison only. CETES and S&P 500 include no physical asset guarantee. Class B corresponds to scenario E2. *S&P 500: ~10–12% 40-year historical average in USD; range shown adjusted for historical MXN/USD peso depreciation.'}
          </p>
        </div>
      </section>

      {/* ── MAPA 4 ZONAS ─────────────────────────── */}
      <section className="mc-section" style={{ padding: '6rem 4rem', background: '#000B29' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{ width: '24px', height: '1px', background: '#C08A3E' }} />
              <span style={{ color: '#C08A3E', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
                {es ? '4 hubs geográficos de inversión' : '4 geographic investment hubs'}
              </span>
              <div style={{ width: '24px', height: '1px', background: '#C08A3E' }} />
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: 400, color: '#FFF', margin: '0 0 0.75rem 0', letterSpacing: '-0.02em' }}>
              {es ? 'Cobertura nacional · El inversionista elige su zona' : 'National coverage · Investor chooses their zone'}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto 0.5rem' }}>
              {es ? 'Cada hub opera como un fideicomiso independiente.' : 'Each hub operates as an independent trust.'}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto' }}>
              {es ? 'Diversificación geográfica sin complejidad adicional.' : 'Geographic diversification without added complexity.'}
            </p>
          </div>
          <div className="mc-zonas-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {zonas.map((z) => (
              <div key={z.id} style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${z.color}40`, borderLeft: `4px solid ${z.color}`, padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div>
                    <div style={{ color: z.color, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>{z.id}</div>
                    <div style={{ color: '#FFF', fontSize: '1.05rem', fontFamily: 'Georgia, serif' }}>{z.nombre}</div>
                  </div>
                  <span style={{ background: z.status === (es ? 'En operación' : 'Operating') ? 'rgba(29,154,117,0.15)' : 'rgba(255,255,255,0.06)', color: z.status === (es ? 'En operación' : 'Operating') ? '#1D9A75' : 'rgba(255,255,255,0.35)', fontSize: '0.6rem', fontWeight: 700, padding: '3px 8px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{z.status}</span>
                </div>
                <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.72rem', lineHeight: 1.5, marginBottom: '0.75rem' }}>{z.estados}</div>
                <div style={{ borderTop: `1px solid ${z.color}25`, paddingTop: '0.75rem' }}>
                  <div style={{ color: z.color, fontSize: '0.78rem', fontWeight: 600 }}>{z.activos}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
