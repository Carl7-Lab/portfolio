import { CalendarDays, MapPin } from 'lucide-react';
import { FC } from 'react';

import { CardBrand } from '@/components/common/card-brand/card-brand';
import { TextBrand } from '@/components/common/typographic/text-brand';
import { TitleBrand } from '@/components/common/typographic/title-brand';
import { Badge } from '@/components/ui/badge';
import { Dictionary } from '@/lib/dictionaries';

export const ExperienceSection: FC<{ dict: Dictionary }> = ({ dict }) => (
  <section id="experience" className="pt-18">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <TitleBrand variant="section" as="h2" className="mb-2">
          {dict.home.experience.title}
        </TitleBrand>
        <TextBrand variant="lead" className="mb-2 text-muted-foreground">
          {dict.home.experience.subtitle}
        </TextBrand>
        <TextBrand
          variant="body"
          className="max-w-2xl mx-auto text-muted-foreground"
        >
          {dict.home.experience.description}
        </TextBrand>
      </div>
      <div className="max-w-4xl mx-auto">
        {dict.home.experience.experiences.map((exp, index) => (
          <div key={index} className="relative">
            {index !== dict.home.experience.experiences.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-full bg-border" />
            )}
            <CardBrand variant="elevated" className="mb-8 ml-12 relative">
              <div className="absolute -left-8 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background" />
              <div className="mb-2">
                <TitleBrand variant="card" as="h3" className="text-xl mb-1">
                  {exp.role}
                </TitleBrand>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                  <span className="font-medium">{exp.company}</span>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">
                        {exp.company.split('|')[1]?.trim() || ''}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <ul className="leading-relaxed list-disc list-inside space-y-1">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.stack.split(',').map((tech, i) => (
                  <Badge key={i} variant="outline">
                    {tech.trim()}
                  </Badge>
                ))}
              </div>
            </CardBrand>
          </div>
        ))}
      </div>
    </div>
  </section>
);
