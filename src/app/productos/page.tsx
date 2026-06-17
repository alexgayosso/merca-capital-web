'use client';

import React, { useState } from 'react';
import { useLang } from '../../lib/LangContext';
import { Header, Footer, MomentumBanner } from '../../lib/Header';

export default function ProductosPage() {
  const { lang } = useLang();
  const [bannerVisible, setBannerVisible] = useState(true);
  const es = lang === 'es';
  const [formSent, setFormSent] = useState(false);
  const [sending, setSending] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch('https://formspree.io/f/xbdqykov', { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      setFormSent(true);
    } catch { /* silent */ }
    setSending(false);
  };

  return (
    <main style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#000B29' }}>
      {bannerVisible && <MomentumBanner onClose={() => setBannerVisible(false)} />}
      <Header bannerVisible={bannerVisible} />

      {/* Page header */}
      <section style={{ padding: '10rem 4rem 3rem', background: '#000B29' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <div style={{ width: '24px', height: '1px', background: '#C08A3E' }} />
            <span style={{ color: '#C08A3E', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700 }}>
              {es ? 'Productos' : 'Products'}
            </span>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 400, color: '#FFF', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>
            {es ? 'Dos vehículos. Una infraestructura.' : 'Two vehicles. One infrastructure.'}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', maxWidth: '600px', margin: 0 }}>
            {es
              ? 'Fidux Mercahorro financia la operación comercial. Fidux Halo captura la apreciación de tierra que esa operación genera alrededor.'
              : 'Fidux Mercahorro finances the commercial operation. Fidux Halo captures the land appreciation that operation generates around it.'}
          </p>
          {/* quick nav between products */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            <a href="#fidux-mercahorro" style={{ background: 'rgba(192,138,62,0.1)', border: '1px solid rgba(192,138,62,0.4)', color: '#C08A3E', padding: '0.6rem 1.25rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Fidux Mercahorro
            </a>
            <a href="#fidux-halo" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', padding: '0.6rem 1.25rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Fidux Halo
            </a>
          </div>
        </div>
      </section>

      {/* ════════════ FIDUX MERCAHORRO ════════════ */}
      <section id="fidux-mercahorro" className="mc-section" style={{ padding: '5rem 4rem', background: '#000B29', scrollMarginTop: '100px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="mc-fondoi-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

            {/* LEFT — Narrative + Form */}
            <div>
              <div style={{ background: 'rgba(192,138,62,0.12)', color: '#C08A3E', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', display: 'inline-block', marginBottom: '1.5rem' }}>
                {es ? 'Producto 1 · Disponible' : 'Product 1 · Available'}
              </div>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 400, color: '#FFF', margin: '0 0 1.75rem 0', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                {es ? <>Fidux Mercahorro<br /><span style={{ color: '#C08A3E', fontStyle: 'italic' }}>Fideicomiso regulado de inversión inmobiliaria</span></> : <>Fidux Mercahorro<br /><span style={{ color: '#C08A3E', fontStyle: 'italic' }}>Regulated real estate investment trust</span></>}
              </h2>

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

              {/* Contact form — NDA first */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(192,138,62,0.2)', padding: '2rem' }}>
                <div style={{ color: '#C08A3E', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {es ? 'Solicitar información' : 'Request information'}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', margin: '0 0 1.5rem', lineHeight: 1.6 }}>
                  {es
                    ? 'Compártenos tus datos y nos pondremos en contacto para coordinar una reunión. La información detallada del vehículo se entrega previa firma de NDA.'
                    : 'Share your details and we will reach out to schedule a meeting. Detailed fund information is shared upon NDA signature.'}
                </p>
                {formSent ? (
                  <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                    <div style={{ color: '#C08A3E', fontSize: '1.5rem', marginBottom: '0.75rem' }}>✓</div>
                    <p style={{ color: '#FFF', fontSize: '0.95rem', margin: '0 0 0.5rem' }}>{es ? 'Mensaje recibido' : 'Message received'}</p>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', margin: 0 }}>{es ? 'Nos pondremos en contacto a la brevedad.' : 'We will be in touch shortly.'}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_type" value="fidux-mercahorro-inquiry" />
                    {[
                      { name: 'name', label: es ? 'Nombre completo' : 'Full name', type: 'text' },
                      { name: 'email', label: es ? 'Email' : 'Email', type: 'email' },
                      { name: 'company', label: es ? 'Empresa / Family Office' : 'Company / Family Office', type: 'text' },
                    ].map((f) => (
                      <div key={f.name} style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{f.label}</label>
                        <input name={f.name} type={f.type} required style={{ width: '100%', padding: '0.75rem 0', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.15)', background: 'transparent', fontSize: '0.95rem', color: '#FFF', outline: 'none', boxSizing: 'border-box' }}
                          onFocus={(e) => { e.target.style.borderBottomColor = '#C08A3E'; }}
                          onBlur={(e) => { e.target.style.borderBottomColor = 'rgba(255,255,255,0.15)'; }} />
                      </div>
                    ))}
                    <button type="submit" disabled={sending} style={{ width: '100%', background: '#C08A3E', border: 'none', color: '#000B29', padding: '1rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', marginTop: '0.5rem' }}>
                      {sending ? (es ? 'Enviando...' : 'Sending...') : (es ? 'Solicitar reunión →' : 'Request meeting →')}
                    </button>
                  </form>
                )}
              </div>
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
      <section className="mc-section" style={{ padding: '5rem 4rem', background: '#000B29', borderTop: '1px solid rgba(192,138,62,0.1)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{ width: '24px', height: '1px', background: '#C08A3E' }} />
              <span style={{ color: '#C08A3E', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
                {es ? 'Escenarios de inversión — Ticket $10M MXN' : 'Investment scenarios — $10M MXN ticket'}
              </span>
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

      {/* ── MAPA 4 ZONAS ─────────────────────────── */}
      <section className="mc-section" style={{ padding: '6rem 4rem', background: '#F8F7F4' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{ width: '24px', height: '1px', background: '#C08A3E' }} />
              <span style={{ color: '#C08A3E', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
                {es ? '4 hubs geográficos de inversión' : '4 geographic investment hubs'}
              </span>
              <div style={{ width: '24px', height: '1px', background: '#C08A3E' }} />
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: 400, color: '#000B29', margin: '0 0 0.75rem 0', letterSpacing: '-0.02em' }}>
              {es ? 'Cobertura nacional · El inversionista elige su zona' : 'National coverage · Investor chooses their zone'}
            </h2>
            <p style={{ color: '#666', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto' }}>
              {es ? 'Cada hub opera como un fideicomiso independiente. Diversificación geográfica sin complejidad adicional.' : 'Each hub operates as an independent trust. Geographic diversification without added complexity.'}
            </p>
          </div>
          <div className="mc-zonas-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {zonas.map((z) => (
              <div key={z.id} style={{ background: '#FFF', border: `1px solid ${z.color}50`, borderLeft: `4px solid ${z.color}`, padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div>
                    <div style={{ color: z.color, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>{z.id}</div>
                    <div style={{ color: '#000B29', fontSize: '1.05rem', fontFamily: 'Georgia, serif' }}>{z.nombre}</div>
                  </div>
                  <span style={{ background: z.status === (es ? 'En operación' : 'Operating') ? 'rgba(29,154,117,0.12)' : 'rgba(0,0,0,0.05)', color: z.status === (es ? 'En operación' : 'Operating') ? '#1D9A75' : '#888', fontSize: '0.6rem', fontWeight: 700, padding: '3px 8px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{z.status}</span>
                </div>
                <div style={{ color: '#999', fontSize: '0.72rem', lineHeight: 1.5, marginBottom: '0.75rem' }}>{z.estados}</div>
                <div style={{ borderTop: `1px solid ${z.color}30`, paddingTop: '0.75rem' }}>
                  <div style={{ color: z.color, fontSize: '0.78rem', fontWeight: 600 }}>{z.activos}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ FIDUX HALO ════════════ */}
      <section id="fidux-halo" className="mc-section" style={{ padding: '6rem 4rem', background: '#0C1E3C', scrollMarginTop: '100px', borderTop: '1px solid rgba(192,138,62,0.15)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', display: 'inline-block', marginBottom: '1.5rem' }}>
            {es ? 'Producto 2 · En estructuración' : 'Product 2 · In structuring'}
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 400, color: '#FFF', margin: '0 0 1.5rem 0', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            {es ? <>Fidux Halo<br /><span style={{ color: '#C08A3E', fontStyle: 'italic', fontSize: '0.65em' }}>Apreciación de tierra alrededor de la red Mercahorro</span></> : <>Fidux Halo<br /><span style={{ color: '#C08A3E', fontStyle: 'italic', fontSize: '0.65em' }}>Land appreciation around the Mercahorro network</span></>}
          </h2>

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
