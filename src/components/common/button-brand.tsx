import { type ReactNode } from 'react';
import { type JSX } from 'react';

import { cn } from '@/lib/utils';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'outline'
  | 'ghost'
  | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonBrandProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonBrand({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  disabled,
  ...props
}: ButtonBrandProps): JSX.Element {
  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm font-ibm-plex',
    secondary:
      'bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm font-ibm-plex',
    accent:
      'bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm font-ibm-plex',
    outline:
      'border border-primary text-primary hover:bg-primary/10 shadow-sm font-ibm-plex',
    ghost: 'text-primary hover:bg-primary/10 font-ibm-plex',
    link: 'text-primary underline-offset-4 hover:underline font-ibm-plex',
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        'disabled:pointer-events-none disabled:opacity-50',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      {children}
    </button>
  );
}
