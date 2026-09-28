import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Harrods | A Curated World Awaits',
  description:
    "Explore the world's most exceptional luxury department store: fashion, fine jewellery & watches, beauty, food & wine, and bespoke experiences.",
  openGraph: {
    title: 'Harrods | A Curated World Awaits',
    description:
      "Explore the world's most exceptional luxury department store: fashion, fine jewellery & watches, beauty, food & wine, and bespoke experiences.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harrods | A Curated World Awaits',
    description:
      "Explore the world's most exceptional luxury department store: fashion, fine jewellery & watches, beauty, food & wine, and bespoke experiences.",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
