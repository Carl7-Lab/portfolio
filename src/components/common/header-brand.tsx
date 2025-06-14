import { type ReactNode } from 'react';
import { type JSX } from 'react';

import { cn } from '@/lib/utils';

type HeaderVariant = 'default' | 'transparent' | 'bordered';

interface HeaderBrandProps {
  children: ReactNode;
  className?: string;
  variant?: HeaderVariant;
  sticky?: boolean;
}

export function HeaderBrand({
  children,
  className,
  variant = 'default',
  sticky = false,
}: HeaderBrandProps): JSX.Element {
  const variantStyles: Record<HeaderVariant, string> = {
    default: 'bg-background shadow-sm',
    transparent: 'bg-transparent',
    bordered: 'bg-background border-b border-border',
  };

  return (
    <header
      className={cn(
        'w-full py-4 px-6',
        variantStyles[variant],
        sticky && 'sticky top-0 z-50',
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {children}
      </div>
    </header>
  );
}
