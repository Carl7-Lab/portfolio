import { LucideChevronDown } from 'lucide-react';
import { JSX } from 'react';

import { TextBrand } from '@/components/common/typographic/text-brand';
import { TitleBrand } from '@/components/common/typographic/title-brand';
import { Dictionary } from '@/lib/dictionaries';

import { HeroButtons } from './hero-section/hero-buttons';
import { SocialIcons } from './hero-section/social-icons';

export function HeroSection({ dict }: { dict: Dictionary }): JSX.Element {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-70px)] text-center overflow-hidden">
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
          <span className="text-primary">&lt;/&gt;</span> {dict.home.hero.role}
        </span>
      </div>

      <TitleBrand
        variant="hero"
        as="h1"
        className="mb-4 relative z-10 flex gap-2"
      >
        <span className={dict.home.hero.name.firstClass}>
          {dict.home.hero.name.first}
        </span>
        <span className={dict.home.hero.name.lastClass}>
          {dict.home.hero.name.last}
        </span>
      </TitleBrand>

      <TextBrand variant="hero-lead" className="mb-4 relative z-10">
        {dict.home.hero.tagline}
      </TextBrand>

      <TextBrand
        variant="lead"
        className="max-w-xl mx-auto mb-8 relative z-10 text-muted-foreground"
      >
        {dict.home.hero.description}
      </TextBrand>

      <HeroButtons dict={dict} />

      <SocialIcons dict={dict} />

      <div className="animate-bounce mt-4 relative z-10">
        <LucideChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}
