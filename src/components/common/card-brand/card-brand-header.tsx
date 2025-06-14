import { type ReactNode } from 'react';
import { type JSX } from 'react';

import { cn } from '@/lib/utils';

interface CardBrandHeaderProps {
  children: ReactNode;
  className?: string;
  withBorder?: boolean;
}

export function CardBrandHeader({
  children,
  className,
  withBorder = true,
}: CardBrandHeaderProps): JSX.Element {
  return (
    <div
      className={cn(
        'mb-4',
        withBorder && 'pb-4 border-b border-border',
        className
      )}
    >
      {children}
    </div>
  );
}
