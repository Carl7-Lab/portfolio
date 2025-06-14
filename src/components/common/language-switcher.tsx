'use client';

import { Globe } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { JSX } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LanguageList } from '@/lib/types/core/language';

const languages = [
  { code: LanguageList.ES, name: 'Español', flag: '🇪🇸' },
  { code: LanguageList.EN, name: 'English', flag: '🇺🇸' },
];

export function LanguageSwitcher(): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = pathname.split('/')[1] || LanguageList.ES;

  const switchLanguage = (newLang: string): void => {
    const segments = pathname.split('/');
    segments[1] = newLang;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-teal-500/20 transition-all duration-300"
        >
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-effect">
        {languages.map(language => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => switchLanguage(language.code)}
            className={`cursor-pointer ${currentLang === language.code ? 'bg-blue-100 dark:bg-blue-900/20' : ''}`}
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
