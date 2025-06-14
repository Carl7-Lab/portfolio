'use client';

import {
  Download,
  Github,
  Linkedin,
  LucideChevronDown,
  Mail,
} from 'lucide-react';
import { JSX } from 'react';

import { ButtonBrand } from '@/components/common/button-brand';
import { LinkBrand } from '@/components/common/link-brand';
import { TextBrand } from '@/components/common/typographic/text-brand';
import { TitleBrand } from '@/components/common/typographic/title-brand';
import { heroContent } from '@/lib/contents/hero';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  download: Download,
};

export function HeroSection(): JSX.Element {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-center overflow-hidden">
      <span className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-60 blur-3xl" />
      <span className="absolute top-40 right-20 w-16 h-16 bg-slate-400 rounded-full opacity-40 blur-2xl" />
      <span className="absolute bottom-40 left-20 w-12 h-12 bg-teal-200 rounded-full opacity-40 blur-2xl" />
      <span className="absolute bottom-20 right-10 w-24 h-24 bg-rose-200 rounded-full opacity-40 blur-3xl" />

      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full opacity-20 animate-bounce-slow" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full opacity-20 float" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full opacity-20 animate-bounce-slow" />

      <div className="relative z-10 inline-block px-6 py-2 mb-4 rounded-full bg-muted/60 text-muted-foreground text-sm font-medium shadow">
        <span className="inline-flex items-center gap-2">
          <span className="text-primary">&lt;/&gt;</span> {heroContent.role}
        </span>
      </div>

      <TitleBrand variant="hero" as="h1" className="mb-4 relative z-10">
        <span className={heroContent.name.firstClass}>
          {heroContent.name.first}
        </span>
        <span className={heroContent.name.lastClass}>
          {' '}
          {heroContent.name.last}
        </span>
      </TitleBrand>

      <TextBrand variant="hero-lead" className="mb-4 relative z-10">
        {heroContent.tagline}
      </TextBrand>

      <TextBrand
        variant="lead"
        className="max-w-xl mx-auto mb-8 relative z-10 text-muted-foreground"
      >
        {heroContent.description}
      </TextBrand>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 relative z-10">
        {heroContent.buttons.map(btn => {
          if (btn.download) {
            const Icon = iconMap[btn.icon as keyof typeof iconMap];
            return (
              <a href={btn.href} download key={btn.label}>
                <ButtonBrand variant="secondary" size="lg" className="gap-2">
                  {Icon && <Icon className="w-5 h-5" />} {btn.label}
                </ButtonBrand>
              </a>
            );
          }
          return (
            <ButtonBrand
              key={btn.label}
              variant="primary"
              size="lg"
              className="gap-2"
              onClick={() => {
                const el = document.querySelector(btn.href);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>&lt;/&gt;</span> {btn.label}
            </ButtonBrand>
          );
        })}
      </div>

      <div className="flex gap-8 justify-center mb-8 text-primary relative z-10">
        {heroContent.socials.map(social => {
          const Icon = iconMap[social.icon as keyof typeof iconMap];
          return (
            <LinkBrand
              key={social.label}
              href={social.href}
              isExternal={social.href.startsWith('http')}
              variant="ghost"
              size="lg"
              aria-label={social.label}
            >
              {Icon && <Icon className="w-6 h-6" />}
            </LinkBrand>
          );
        })}
      </div>

      <div className="animate-bounce mt-4 relative z-10">
        <LucideChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}
