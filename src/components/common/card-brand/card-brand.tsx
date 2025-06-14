import { type ReactNode } from 'react';
import { type JSX } from 'react';

import { cn } from '@/lib/utils';

type CardVariant = 'default' | 'bordered' | 'elevated' | 'ghost';

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
    default: 'bg-background rounded-lg shadow-sm',
    bordered: 'bg-background rounded-lg border border-border',
    elevated: 'bg-background rounded-lg shadow-lg',
    ghost: 'bg-transparent rounded-lg',
  };

  return (
    <div className={cn('p-6', variantStyles[variant], className)}>
      {children}
    </div>
  );
}
