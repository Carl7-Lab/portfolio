import { type ReactNode } from 'react';
import { type JSX } from 'react';

import { cn } from '@/lib/utils';

type CardVariant =
  | 'default'
  | 'bordered'
  | 'elevated'
  | 'ghost'
  | 'accent'
  | 'primary'
  | 'secondary';

interface CardBrandProps {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
}

export function CardBrand({
  children,
  className,
  variant = 'default',
}: CardBrandProps): JSX.Element {
  const variantStyles: Record<CardVariant, string> = {
    default: 'bg-card text-card-foreground border-border',
    bordered: 'bg-background rounded-lg border border-border',
    elevated: 'bg-card text-card-foreground border-border shadow-lg',
    ghost: 'bg-transparent rounded-lg',
    accent: 'bg-accent/10 text-accent border-accent/20',
    primary: 'bg-primary/10 text-primary border-primary/20',
    secondary: 'bg-secondary/10 text-secondary border-secondary/20',
  };

  return (
    <div className={cn('p-6', variantStyles[variant], className)}>
      {children}
    </div>
  );
}
