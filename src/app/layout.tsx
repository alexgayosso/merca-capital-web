import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Merca Capital | The Blackstone of Agri-Food Infrastructure in LATAM',
  description:
    'Merca Capital es un fondo de private equity especializado en infraestructura de distribución alimentaria en México. $100M USD fund target. 15+ años de track record operativo. Cap rates 8-10%. Consolidamos las Centrales de Abasto más fragmentadas de América Latina.',
  keywords: [
    'Merca Capital',
    'agri-food private equity Mexico',
    'infraestructura alimentaria LATAM',
    'Centrales de Abasto inversión',
    'fondo inmobiliario México family office',
    'mercahorro inversión',
    'private equity infraestructura México',
    'food infrastructure fund LATAM',
    'real estate Mexico institutional',
    'cap rate Mexico 8-10',
  ],
  authors: [{ name: 'Merca Capital SAPI de CV' }],
  creator: 'Merca Capital SAPI de CV',
  publisher: 'Merca Capital SAPI de CV',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    alternateLocale: 'en_US',
    url: 'https://mercacapital.com',
    siteName: 'Merca Capital',
    title: 'Merca Capital | The Blackstone of Agri-Food Infrastructure in LATAM',
    description:
      'Consolidamos la infraestructura de distribución alimentaria más fragmentada de América Latina. $100M USD fund. 15+ años operando. Cap rates 8-10%.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Merca Capital — Agri-Food Infrastructure Private Equity LATAM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Merca Capital | Agri-Food Infrastructure Private Equity',
    description:
      'Consolidamos la infraestructura alimentaria más fragmentada de América Latina. $100M USD fund. Cap rates 8-10%.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://mercacapital.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Merca Capital',
      url: 'https://mercacapital.com',
      logo: 'https://mercacapital.com/Transparent_Logo_Blanco.png',
      description:
        'Private equity fund specializing in agri-food infrastructure in Mexico and LATAM.',
      email: 'hola@mercacapital.com',
      telephone: '+52-812-004-8610',
      address: [
        { '@type': 'PostalAddress', addressLocality: 'Madrid', addressCountry: 'ES' },
        { '@type': 'PostalAddress', addressLocality: 'Monterrey', addressCountry: 'MX' },
        { '@type': 'PostalAddress', addressLocality: 'Ciudad de México', addressCountry: 'MX' },
      ],
      sameAs: [
        'https://www.linkedin.com/in/alejandro-gayosso-a93099287/',
      ],
    }),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000B29" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
