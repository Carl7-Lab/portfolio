import { type ReactNode } from 'react';
import { type JSX } from 'react';

import { cn } from '@/lib/utils';

interface CardBrandFooterProps {
  children: ReactNode;
  className?: string;
  withBorder?: boolean;
  align?: 'left' | 'center' | 'right' | 'between';
}

export function CardBrandFooter({
  children,
  className,
  withBorder = true,
  align = 'left',
}: CardBrandFooterProps): JSX.Element {
  const alignStyles = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
    between: 'justify-between',
  };

  return (
    <div
      className={cn(
        'mt-4 flex items-center',
        alignStyles[align],
        withBorder && 'pt-4 border-t border-border',
        className
      )}
    >
      {children}
    </div>
  );
}
