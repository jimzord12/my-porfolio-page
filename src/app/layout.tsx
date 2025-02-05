import type { Metadata } from 'next';
import { Inter, Calistoga } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Dimitris Stamatakis - Full-Stack Web3 Developer',
  description:
    "I'm a Full-Stack Web3 Developer specializing in Next.js, React, Node.js, and Web3 DApps.",
  keywords:
    'Full-Stack Developer, Web3, Next.js, React, TailwindCSS, Blockchain, Smart Contracts',
  openGraph: {
    title: 'Dimitris Stamatakis - Full-Stack Web3 Developer',
    description: 'Showcasing my portfolio as a Full-Stack Web3 Developer.',
    url: 'https://yourportfolio.com',
    siteName: 'Dimitris Stamatakis Portfolio',
    images: [
      {
        url: 'https://yourportfolio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dimitris Stamatakis Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dimitris Stamatakis - Full-Stack Web3 Developer',
    description:
      'Building high-quality Web3 applications with Next.js, React, and Node.js.',
    images: ['https://yourportfolio.com/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          'bg-gray-900 font-sans text-white antialiased',
        )}
      >
        {children}
      </body>
    </html>
  );
}
