'use client';

import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { JSX } from 'react';

import { ButtonBrand } from '@/components/common/button-brand';
import { Dictionary } from '@/lib/dictionaries';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  download: Download,
};

export function HeroButtons({ dict }: { dict: Dictionary }): JSX.Element {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 relative z-10">
      {dict.home.hero.buttons.map(btn => {
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
  );
}
