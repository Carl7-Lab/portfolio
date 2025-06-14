import type { Metadata } from 'next';
import { Mulish, Raleway, Jost } from 'next/font/google';
import './globals.css';
import { JSX } from 'react';

import { ThemeProvider } from '@/components/theme/theme-provider';

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
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
        className={`${mulish.variable} ${raleway.variable} ${jost.variable}`}
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
