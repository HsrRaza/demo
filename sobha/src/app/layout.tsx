import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Sobha Tours & Travels | Premium Chikmagalur Travel Agency',
  description:
    'Explore misty peaks, lush coffee plantations, and hidden waterfalls with custom itineraries from Chikmagalur\'s trusted local travel experts. Verified estate stays, private transport, and 24/7 ground support.',
  keywords:
    'Chikmagalur tours, coffee estate stays, Malnad travel, weekend getaways, group travel, corporate retreats',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sobhatours.com',
    siteName: 'Sobha Tours & Travels',
    title: 'Sobha Tours & Travels | Premium Chikmagalur Travel Agency',
    description:
      'Bespoke Coffee Land Journeys Crafted by Local Experts. Explore verified coffee estates, scenic peaks, and hidden waterfalls.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobha Tours & Travels',
    description: 'Premium travel experiences in Chikmagalur, Karnataka',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable}`}
      style={{ colorScheme: 'light' }}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1B3B2B" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
