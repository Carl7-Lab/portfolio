import type { Metadata } from 'next';
import { Mulish, Raleway, Jost } from 'next/font/google';
import './globals.css';
import { JSX } from 'react';

import { HeaderBrand } from '@/components/common/header-brand';

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
  title: 'Portfolio',
  description: 'Personal portfolio showcasing my work and skills',
  keywords: ['portfolio', 'developer', 'web development', 'software engineer'],
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${mulish.variable} ${raleway.variable} ${jost.variable}`}
      >
        <HeaderBrand sticky variant="transparent" />
        {children}
      </body>
    </html>
  );
}
