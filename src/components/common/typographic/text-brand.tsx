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
  | 'accent';

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
    body: 'text-base text-primary leading-relaxed',
    lead: 'text-lg text-primary leading-relaxed',
    small: 'text-sm text-secondary',
    caption: 'text-xs text-secondary',
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
  };

  return (
    <p className={cn('font-roboto', variantStyles[variant], className)}>
      {children}
    </p>
  );
}
