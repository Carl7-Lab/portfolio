import NextLink from 'next/link';
import { type AnchorHTMLAttributes, type ReactNode } from 'react';
import { type JSX } from 'react';

import { cn } from '@/lib/utils';

type LinkVariant = 'primary' | 'secondary' | 'accent' | 'ghost';
type LinkSize = 'sm' | 'md' | 'lg';

interface LinkBrandProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
  variant?: LinkVariant;
  size?: LinkSize;
  href: string;
  isExternal?: boolean;
}

export function LinkBrand({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  ...props
}: LinkBrandProps): JSX.Element {
  const variantStyles: Record<LinkVariant, string> = {
    primary: 'text-primary hover:text-primary/80',
    secondary: 'text-secondary hover:text-secondary/80',
    accent: 'text-accent hover:text-accent/80',
    ghost: 'text-foreground hover:text-primary',
  };

  const sizeStyles: Record<LinkSize, string> = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const baseStyles = cn(
    'inline-flex items-center font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyles}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={baseStyles} {...props}>
      {children}
    </NextLink>
  );
}
