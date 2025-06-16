import type { Metadata } from 'next';
import { IBM_Plex_Sans, Space_Grotesk, Lato } from 'next/font/google';
import './globals.css';
import { JSX } from 'react';

import { ThemeProvider } from '@/components/theme/theme-provider';

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex',
});

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: 'Carlos Cuesta - FullStack Developer Portfolio',
  description:
    'Portfolio profesional de Carlos Cuesta, FullStack Developer con más de 3 años de experiencia en JavaScript, React, Node.js y TypeScript.',
  keywords: [
    'carlos cuesta',
    'fullstack developer',
    'react',
    'nodejs',
    'typescript',
    'javascript',
    'portfolio',
  ],
  authors: [{ name: 'Carlos Cuesta' }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexSans.variable} ${spaceGrotesk.variable} ${lato.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
