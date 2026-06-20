'use client';

import React, { useState } from 'react';
import { useLang } from '../../lib/LangContext';
import { Header, Footer, MomentumBanner } from '../../lib/Header';

export default function AvisoLegalPage() {
  const { lang } = useLang();
  const [bannerVisible, setBannerVisible] = useState(true);
  const es = lang === 'es';

  return (
    <main style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#000B29' }}>
      {bannerVisible && <MomentumBanner onClose={() => setBannerVisible(false)} />}
      <Header bannerVisible={bannerVisible} solidBg={true} />

      <section className="mc-section" style={{ padding: '10rem 4rem 6rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: 400, color: '#000B29', margin: '0 0 2rem 0', letterSpacing: '-0.02em' }}>
            {es ? 'Aviso Legal' : 'Legal Notice'}
          </h1>

          <div style={{ color: '#444', fontSize: '0.95rem', lineHeight: 1.85, textAlign: 'justify' }}>
            <p>
              {es
                ? 'Este sitio web es operado por Grupo Merca Capital SAPI de CV. El contenido publicado tiene fines exclusivamente informativos y no constituye una oferta pública de valores, una recomendación de inversión, ni una solicitud de compra o venta de instrumentos financieros en ninguna jurisdicción.'
                : 'This website is operated by Grupo Merca Capital SAPI de CV. The content published is for informational purposes only and does not constitute a public offering of securities, an investment recommendation, or a solicitation to buy or sell financial instruments in any jurisdiction.'}
            </p>
            <p>
              {es
                ? 'La información detallada sobre los vehículos de inversión mencionados en este sitio (Fidux Mercahorro, Fidux Halo) se comparte exclusivamente con inversionistas calificados, previa firma de un acuerdo de confidencialidad (NDA) y verificación de su perfil de inversionista.'
                : 'Detailed information about the investment vehicles mentioned on this site (Fidux Mercahorro, Fidux Halo) is shared exclusively with qualified investors, subject to a signed non-disclosure agreement (NDA) and verification of investor profile.'}
            </p>
            <p>
              {es
                ? 'Las rentabilidades, escenarios y proyecciones presentados son estimaciones basadas en modelos financieros internos y no garantizan resultados futuros. Toda inversión en activos inmobiliarios conlleva riesgos, incluyendo la posible pérdida parcial o total del capital invertido.'
                : 'The returns, scenarios, and projections presented are estimates based on internal financial models and do not guarantee future results. Any investment in real estate assets carries risk, including the possible partial or total loss of invested capital.'}
            </p>
            <p>
              {es
                ? 'Para consultas relacionadas con este aviso legal, contáctenos en hola@mercacapital.com.'
                : 'For inquiries related to this legal notice, contact us at hola@mercacapital.com.'}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
