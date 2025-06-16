import Link from 'next/link';
import { type ReactNode } from 'react';
import { type JSX } from 'react';

import { cn } from '@/lib/utils';

type LinkVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'outline'
  | 'ghost'
  | 'link';

type LinkBrandProps = {
  children: ReactNode;
  className?: string;
  variant?: LinkVariant;
  href: string;
  external?: boolean;
};

export function LinkBrand({
  children,
  className,
  variant = 'primary',
  href,
  external = false,
}: LinkBrandProps): JSX.Element {
  const variantStyles: Record<LinkVariant, string> = {
    primary: 'text-primary hover:text-primary/90 font-ibm-plex',
    secondary: 'text-secondary hover:text-secondary/90 font-ibm-plex',
    accent: 'text-accent hover:text-accent/90 font-ibm-plex',
    outline:
      'border border-primary text-primary hover:bg-primary/10 font-ibm-plex',
    ghost: 'text-primary hover:bg-primary/10 font-ibm-plex',
    link: 'text-primary underline-offset-4 hover:underline font-ibm-plex',
  };

  const commonStyles =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors';

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(commonStyles, variantStyles[variant], className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn(commonStyles, variantStyles[variant], className)}
    >
      {children}
    </Link>
  );
}
