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

type TextBrandProps = {
  children: ReactNode;
  className?: string;
  variant?: TextVariant;
};

export function TextBrand({
  children,
  className,
  variant = 'body',
}: TextBrandProps): JSX.Element {
  const variantStyles: Record<TextVariant, string> = {
    body: 'text-base font-normal text-foreground font-ibm-plex',
    lead: 'text-lg font-normal text-foreground font-ibm-plex',
    small: 'text-sm font-normal text-foreground font-ibm-plex',
    caption: 'text-xs font-normal text-foreground font-ibm-plex',
    primary: 'text-primary font-ibm-plex',
    secondary: 'text-secondary font-ibm-plex',
    accent: 'text-accent font-ibm-plex',
    'hero-lead': 'text-xl sm:text-2xl font-normal text-foreground/80 font-lato',
  };

  return <p className={cn(variantStyles[variant], className)}>{children}</p>;
}
