import Link from 'next/link';
import { JSX } from 'react';

import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Dictionary } from '@/lib/dictionaries';
import { LanguageList } from '@/lib/types/core/language';
import { cn } from '@/lib/utils';

import { LanguageSwitcher } from './language-switcher';

export function HeaderBrand({
  className,
  variant = 'default',
  sticky = false,
  lang,
  dict,
}: {
  className?: string;
  variant?: 'default' | 'transparent' | 'bordered';
  sticky?: boolean;
  lang: LanguageList;
  dict: Dictionary;
}): JSX.Element {
  const variantStyles: Record<string, string> = {
    default: 'bg-background shadow-sm',
    transparent: 'glass-effect backdrop-blur-md border-b border-white/20',
    bordered: 'bg-background border-b border-border',
  };

  return (
    <header
      className={cn(
        'w-full py-4 px-6',
        variantStyles[variant],
        sticky && 'sticky top-0 z-50',
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href={`/${lang}`} className="text-2xl font-bold text-primary">
          <span className={dict.header.name.firstClass}>
            {dict.header.name.first}
          </span>
          <span className={dict.header.name.lastClass}>
            {' '}
            {dict.header.name.last}
          </span>
        </Link>
        <nav className="hidden md:flex gap-8 text-base font-medium">
          {dict.header.navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="ml-4 flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
