import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Merca Capital | Infraestructura Comercial Esencial en México',
  description: '15 años desarrollando mercados de abasto en México. 52,000+ m² construidos, 90% ocupación promedio. Inversión en infraestructura comercial esencial con rendimientos comprobados.',
  keywords: 'inversión inmobiliaria, mercados de abasto, México, real estate, infraestructura comercial, Monterrey, Torreón, private equity, family office',
  authors: [{ name: 'Merca Capital' }],
  openGraph: {
    title: 'Merca Capital | Infraestructura Comercial Esencial en México',
    description: '15 años desarrollando mercados de abasto en México. 52,000+ m² construidos, 90% ocupación promedio.',
    url: 'https://mercacapital.com',
    siteName: 'Merca Capital',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/Original_Logo.png',
        width: 1200,
        height: 630,
        alt: 'Merca Capital - Visión Inmobiliaria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Merca Capital | Infraestructura Comercial Esencial en México',
    description: '15 años desarrollando mercados de abasto en México. Inversión en infraestructura comercial esencial.',
  },
  robots: {
    index: true,
    follow: true,
  },
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
