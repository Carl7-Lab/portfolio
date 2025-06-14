import { Github, Linkedin, Mail } from 'lucide-react';
import { JSX } from 'react';

import { LinkBrand } from '@/components/common/link-brand';
import { footerContent } from '@/lib/contents/footer';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function Footer(): JSX.Element {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">{footerContent.copyright}</p>
          </div>
          <div className="flex items-center space-x-4">
            {footerContent.socials.map(social => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <LinkBrand
                  key={social.label}
                  href={social.href}
                  isExternal={social.href.startsWith('http')}
                  aria-label={social.label}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-accent transition-colors"
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </LinkBrand>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
