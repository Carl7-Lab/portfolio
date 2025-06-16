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
    default: cn(
      'bg-card text-card-foreground border-border',
      'border-gray-200 dark:border-gray-700'
    ),
    bordered: cn(
      'bg-background rounded-lg border border-border',
      'border-gray-200 dark:border-gray-700'
    ),
    elevated: cn(
      'bg-card text-card-foreground border-border shadow-lg border-2',
      'border-gray-200 dark:border-gray-700'
    ),
    ghost: 'bg-transparent rounded-lg',
    accent: cn(
      'bg-accent/10 text-accent border-accent/20',
      'border-gray-200 dark:border-gray-700'
    ),
    primary: cn(
      'bg-primary/10 text-primary border-primary/20',
      'border-gray-200 dark:border-gray-700'
    ),
    secondary: cn(
      'bg-secondary/10 text-secondary border-secondary/20',
      'border-gray-200 dark:border-gray-700'
    ),
  };

  return (
    <div className={cn('p-6 rounded-lg', variantStyles[variant], className)}>
      {children}
    </div>
  );
}
