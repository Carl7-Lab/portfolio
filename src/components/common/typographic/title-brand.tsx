import { type ReactNode } from 'react';
import { type JSX } from 'react';

import { cn } from '@/lib/utils';

type TitleVariant =
  | 'page'
  | 'section'
  | 'card'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'hero';

type TitleBrandProps = {
  children: ReactNode;
  className?: string;
  variant?: TitleVariant;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
};

export function TitleBrand({
  children,
  className,
  variant = 'primary',
  as: Component = 'h2',
}: TitleBrandProps): JSX.Element {
  const variantStyles: Record<TitleVariant, string> = {
    page: 'text-5xl font-bold text-primary tracking-tight font-space-grotesk',
    section:
      'text-4xl font-semibold text-primary tracking-tight font-space-grotesk',
    card: 'text-2xl font-semibold text-primary font-space-grotesk',
    primary: 'text-primary font-space-grotesk',
    secondary: 'text-secondary font-space-grotesk',
    accent: 'text-accent font-space-grotesk',
    hero: 'text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary tracking-tight font-space-grotesk',
  };

  const componentStyles: Record<string, string> = {
    h1: 'text-4xl font-bold font-space-grotesk',
    h2: 'text-3xl font-semibold font-space-grotesk',
    h3: 'text-2xl font-semibold font-space-grotesk',
    h4: 'text-xl font-medium font-space-grotesk',
  };

  return (
    <Component
      className={cn(
        variantStyles[variant],
        componentStyles[Component],
        className
      )}
    >
      {children}
    </Component>
  );
}
