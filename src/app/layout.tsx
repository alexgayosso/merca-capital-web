import type { Metadata } from 'next';
import { LangProvider } from '../lib/LangContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Merca Capital | Agri-Food Infrastructure & Private Equity',
  description: 'Merca Capital consolida y financia infraestructura comercial de abasto en México. 20 años de operación, 52,000 m² desarrollados, 300+ comerciantes activos.',
  openGraph: {
    title: 'Merca Capital | Agri-Food Infrastructure & Private Equity',
    description: 'Consolidamos la infraestructura de distribución alimentaria más fragmentada de Latam.',
    url: 'https://mercacapital.com',
    siteName: 'Merca Capital',
    images: [{ url: 'https://mercacapital.com/og-image.jpg', width: 1200, height: 630 }],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Merca Capital | Agri-Food Infrastructure & Private Equity',
    description: 'Consolidamos la infraestructura de distribución alimentaria más fragmentada de Latam.',
    images: ['https://mercacapital.com/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Merca Capital',
          alternateName: 'Grupo Merca Capital SAPI de CV',
          url: 'https://mercacapital.com',
          description: 'Private equity infrastructure fund focused on agri-food wholesale infrastructure in Mexico.',
          foundingDate: '2006',
        }) }} />
      </head>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
