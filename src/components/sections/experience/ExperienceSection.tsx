import { FC } from 'react';

import { TitleBrand } from '@/components/common/typographic/title-brand';

import { experienceContent } from '@/lib/contents/experience';

export const ExperienceSection: FC = () => (
  <section id="experience" className="py-12">
    <TitleBrand variant="section" as="h2" className="mb-8">
      Experience
    </TitleBrand>
    <div className="space-y-8">
      {experienceContent.map(exp => (
        <div
          key={exp.company}
          className="bg-card rounded-lg p-6 shadow-sm border border-border"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <span className="font-semibold text-primary text-lg">
              {exp.company}
            </span>
            <span className="text-sm text-secondary">{exp.period}</span>
          </div>
          <div className="text-sm text-accent mb-2">{exp.role}</div>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            {exp.responsibilities.map((item, idx) => (
              <li key={idx} className="text-body text-sm">
                {item}
              </li>
            ))}
          </ul>
          <div className="text-xs text-muted-foreground">
            Tech Stack: {exp.stack}
          </div>
        </div>
      ))}
    </div>
  </section>
);
