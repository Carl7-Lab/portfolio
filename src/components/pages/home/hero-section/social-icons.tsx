import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { JSX } from 'react';

import { LinkBrand } from '@/components/common/link-brand';
import { Dictionary } from '@/lib/dictionaries';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  download: Download,
};

export function SocialIcons({ dict }: { dict: Dictionary }): JSX.Element {
  return (
    <div className="flex gap-8 justify-center mb-8 text-primary relative z-10">
      {dict.home.hero.socials.map(social => {
        const Icon = iconMap[social.icon as keyof typeof iconMap];
        return (
          <LinkBrand
            key={social.label}
            href={social.href}
            external={social.href.startsWith('http')}
            variant="ghost"
            aria-label={social.label}
          >
            {Icon && <Icon className="w-6 h-6" />}
          </LinkBrand>
        );
      })}
    </div>
  );
}
