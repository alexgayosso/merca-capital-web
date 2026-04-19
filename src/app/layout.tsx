import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  // SEO Básico
  title: 'Merca Capital | Agri-Food Infrastructure & Private Equity',
  description: 'Fondo de inversión institucional especializado en la consolidación y gestión de infraestructura agroalimentaria crítica en México. 15 años de track record operativo.',
  keywords: 'Private Equity México, Infraestructura Agroalimentaria, Inversión Inmobiliaria, Asset Management, Centrales de Abasto, Real Estate México, Family Office',
  authors: [{ name: 'Merca Capital' }],
  
  // OpenGraph (LinkedIn, WhatsApp, Facebook)
  openGraph: {
    title: 'Merca Capital | The Blackstone of Agri-Food in LATAM',
    description: 'Consolidamos el control de los puntos estratégicos donde México come. Activos reales con flujos institucionales y ocupación histórica del 90%.',
    url: 'https://www.mercacapital.com',
    siteName: 'Merca Capital',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Imagen optimizada para redes sociales
        width: 1200,
        height: 630,
        alt: 'Merca Capital - Institutional Investment Platform',
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: 'summary_large_image',
    title: 'Merca Capital | Agri-Food Infrastructure',
    description: 'Infraestructura crítica y flujos estables en el mercado mayorista mexicano.',
    images: ['/og-image.jpg'],
  },

  // Indexación
  robots: {
    index: true,
    follow: true,
  },

  // Favicon
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}