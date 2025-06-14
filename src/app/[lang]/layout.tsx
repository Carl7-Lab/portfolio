import type { Metadata } from 'next';
import type { JSX } from 'react';

import '../globals.css';

import { HeaderBrand } from '@/components/common/header-brand';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { getDictionary } from '@/lib/dictionaries';

type Props = {
  params: Promise<{ lang: 'es' | 'en' }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  const titles = {
    es: 'Carlos Cuesta - FullStack Developer Portfolio',
    en: 'Carlos Cuesta - FullStack Developer Portfolio',
  };

  const descriptions = {
    es: 'Portfolio profesional de Carlos Cuesta, FullStack Developer con más de 3 años de experiencia en JavaScript, React, Node.js y TypeScript.',
    en: 'Professional portfolio of Carlos Cuesta, FullStack Developer with 3+ years of experience in JavaScript, React, Node.js and TypeScript.',
  };

  return {
    title: titles[lang],
    description: descriptions[lang],
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
    openGraph: {
      title: titles[lang],
      description: descriptions[lang],
      type: 'website',
    },
  };
}

export async function generateStaticParams(): Promise<{ lang: 'es' | 'en' }[]> {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: 'es' | 'en' }>;
}): Promise<JSX.Element> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <HeaderBrand sticky variant="transparent" lang={lang} dict={dict} />
      {children}
    </ThemeProvider>
  );
}
