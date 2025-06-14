import { type ReactNode } from 'react';
import { type JSX } from 'react';

import { cn } from '@/lib/utils';

interface CardBrandContentProps {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'default' | 'large';
}

export function CardBrandContent({
  children,
  className,
  padding = 'default',
}: CardBrandContentProps): JSX.Element {
  const paddingStyles = {
    none: '',
    default: 'py-4',
    large: 'py-6',
  };

  return (
    <div className={cn(paddingStyles[padding], className)}>{children}</div>
  );
}
