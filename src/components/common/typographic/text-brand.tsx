import { type ReactNode } from 'react';
import { type JSX } from 'react';

import { cn } from '@/lib/utils';

type TextVariant =
  | 'body'
  | 'lead'
  | 'small'
  | 'caption'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'hero-lead';

interface TextBrandProps {
  children: ReactNode;
  className?: string;
  variant?: TextVariant;
}

export function TextBrand({
  children,
  className,
  variant = 'body',
}: TextBrandProps): JSX.Element {
  const variantStyles: Record<TextVariant, string> = {
    body: 'text-base text-primary leading-relaxed font-mulish',
    lead: 'text-lg text-primary leading-relaxed font-mulish',
    small: 'text-sm text-secondary font-jost',
    caption: 'text-xs text-secondary font-jost',
    primary: 'text-primary font-mulish',
    secondary: 'text-secondary font-jost',
    accent: 'text-accent font-jost',
    'hero-lead': 'text-2xl sm:text-3xl font-bold text-primary',
  };

  return <p className={cn(variantStyles[variant], className)}>{children}</p>;
}
