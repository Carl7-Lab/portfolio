import Link from 'next/link';
import { JSX } from 'react';

import { ThemeToggle } from '@/components/theme/theme-toggle';
import { headerBrand } from '@/lib/contents/header';
import { cn } from '@/lib/utils';

export function HeaderBrand({
  className,
  variant = 'default',
  sticky = false,
}: {
  className?: string;
  variant?: 'default' | 'transparent' | 'bordered';
  sticky?: boolean;
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
        <Link href="/" className="text-2xl font-bold text-primary">
          <span className={headerBrand.name.firstClass}>
            {headerBrand.name.first}
          </span>
          <span className={headerBrand.name.lastClass}>
            {' '}
            {headerBrand.name.last}
          </span>
        </Link>
        <nav className="hidden md:flex gap-8 text-base font-medium">
          {headerBrand.navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
