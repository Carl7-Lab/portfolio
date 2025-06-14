import { type ReactNode } from 'react';
import { type JSX } from 'react';

import { cn } from '@/lib/utils';

type TitleVariant =
  | 'page'
  | 'section'
  | 'card'
  | 'primary'
  | 'secondary'
  | 'accent';

interface TitleBrandProps {
  children: ReactNode;
  className?: string;
  variant?: TitleVariant;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}

export function TitleBrand({
  children,
  className,
  variant = 'primary',
  as: Component = 'h2',
}: TitleBrandProps): JSX.Element {
  const variantStyles: Record<TitleVariant, string> = {
    page: 'text-5xl font-bold text-primary tracking-tight',
    section: 'text-4xl font-semibold text-primary tracking-tight',
    card: 'text-2xl font-semibold text-primary',
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
  };

  const componentStyles: Record<string, string> = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-medium',
  };

  return (
    <Component
      className={cn(
        'font-nunito',
        variantStyles[variant],
        componentStyles[Component],
        className
      )}
    >
      {children}
    </Component>
  );
}
